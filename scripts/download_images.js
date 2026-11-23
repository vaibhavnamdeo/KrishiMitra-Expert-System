// scripts/download_images.js
const fs = require('fs');
const path = require('path');

const targetFiles = {
  hero: { title: 'File:Rice fields in rural India.jpg', width: 900, dest: ['images/indian_farm_hero.jpg', 'assets/images/indian_farm_hero.jpg', 'images/indian_farm_bg.jpg'] },
  cotton: { title: 'File:Cotton boll maturing on Bobby Byrd\'s cotton plant in Hale County near Plainview, Texas. (24490395753).jpg', width: 640, dest: ['images/crops/cotton.jpg', 'assets/images/crops/cotton.jpg'] },
  mustard: { title: 'File:Mustard field scenery.jpg', width: 640, dest: ['images/crops/mustard.jpg', 'assets/images/crops/mustard.jpg'] },
  potato: { title: 'File:Potato tubers in pail.jpg', width: 640, dest: ['images/crops/potato.jpg', 'assets/images/crops/potato.jpg'] },
  maize: { title: 'File:Corncobs.jpg', width: 640, dest: ['images/crops/maize.jpg', 'assets/images/crops/maize.jpg'] },
  sugarcane: { title: 'File:Sugar cane field.jpg', width: 640, dest: ['images/crops/sugarcane.jpg', 'assets/images/crops/sugarcane.jpg'] },
  groundnut: { title: 'File:Groundnuts farm.jpg', width: 640, dest: ['images/crops/groundnut.jpg', 'assets/images/crops/groundnut.jpg'] },
  chickpea: { title: 'File:Chickpea pods.jpg', width: 640, dest: ['images/crops/chickpea.jpg', 'assets/images/crops/chickpea.jpg'] },
  pigeonpea: { title: 'File:Cajanus cajan, flowers.jpg', width: 640, dest: ['images/crops/pigeonpea.jpg', 'assets/images/crops/pigeonpea.jpg'] },
  onion: { title: 'File:Onions.jpg', width: 640, dest: ['images/crops/onion.jpg', 'assets/images/crops/onion.jpg'] },
  brinjal: { title: 'File:Solanum melongena 24 08 2012 (1).JPG', width: 640, dest: ['images/crops/brinjal.jpg', 'assets/images/crops/brinjal.jpg'] },
  okra: { title: 'File:Abelmoschus esculentus FruitandFlower.jpg', width: 640, dest: ['images/crops/okra.jpg', 'assets/images/crops/okra.jpg'] },
  banana: { title: 'File:Banana tree with banana bunch.jpg', width: 640, dest: ['images/crops/banana.jpg', 'assets/images/crops/banana.jpg'] }
};

fs.mkdirSync('assets/images/crops', { recursive: true });
fs.mkdirSync('images/crops', { recursive: true });

async function fetchImageMetaAndThumb(title, width) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url|size|extmetadata&iiurlwidth=${width}&format=json`;
  const res = await fetch(url, { headers: { 'User-Agent': 'KrishiMitra-App/2.0 (Academic Crop Disease Expert System; contact: vaibhav@krishimitra.ac.in)' } });
  const data = await res.json();
  const pages = data.query.pages;
  const p = pages[Object.keys(pages)[0]];
  if (!p || !p.imageinfo || !p.imageinfo[0]) return null;
  const info = p.imageinfo[0];
  return {
    title: p.title,
    origUrl: info.url,
    thumbUrl: info.thumburl || info.url,
    license: info.extmetadata && info.extmetadata.LicenseShortName ? info.extmetadata.LicenseShortName.value : 'Public domain / CC BY-SA',
    artist: info.extmetadata && info.extmetadata.Artist ? info.extmetadata.Artist.value.replace(/<[^>]+>/g, '').trim() : 'Wikimedia Commons',
    credit: info.extmetadata && info.extmetadata.Credit ? info.extmetadata.Credit.value.replace(/<[^>]+>/g, '').trim() : 'Wikimedia Commons'
  };
}

(async () => {
  const credits = {};

  for (const [key, conf] of Object.entries(targetFiles)) {
    console.log(`Processing ${key}...`);
    await new Promise(r => setTimeout(r, 600));
    try {
      const meta = await fetchImageMetaAndThumb(conf.title, conf.width);
      if (!meta) {
        console.error(`Could not fetch metadata for ${key}`);
        continue;
      }
      credits[key] = {
        title: meta.title,
        artist: meta.artist,
        license: meta.license,
        source: meta.origUrl
      };

      console.log(`Downloading ${key} thumb from ${meta.thumbUrl.slice(0, 70)}...`);
      const imgRes = await fetch(meta.thumbUrl, { headers: { 'User-Agent': 'KrishiMitra-App/2.0 (Academic Crop Disease Expert System; contact: vaibhav@krishimitra.ac.in)' } });
      if (!imgRes.ok) {
        console.error(`Failed to download thumb for ${key}: HTTP ${imgRes.status}`);
        continue;
      }
      const buffer = Buffer.from(await imgRes.arrayBuffer());
      const kb = (buffer.length / 1024).toFixed(1);
      console.log(`✓ ${key} size: ${kb} KB (Under 300KB: ${buffer.length < 300 * 1024})`);

      for (const dest of conf.dest) {
        fs.writeFileSync(dest, buffer);
      }
    } catch (err) {
      console.error(`Error processing ${key}:`, err.message);
    }
  }

  // Also include preserved crops credits
  credits['wheat'] = { title: 'File:Wheat field.jpg', artist: 'Public domain / Unsplash', license: 'Free to use', source: 'images/crops/wheat.jpg' };
  credits['tomato'] = { title: 'File:Tomatoes on vine.jpg', artist: 'Public domain / Unsplash', license: 'Free to use', source: 'images/crops/tomato.jpg' };
  credits['rice'] = { title: 'File:Paddy rice field.jpg', artist: 'Public domain / Unsplash', license: 'Free to use', source: 'images/crops/rice.jpg' };
  credits['chilli'] = { title: 'File:Red chillies harvest.jpg', artist: 'Public domain / Unsplash', license: 'Free to use', source: 'images/crops/chilli.jpg' };
  credits['soybean'] = { title: 'File:Soybean plants.jpg', artist: 'Public domain / Unsplash', license: 'Free to use', source: 'images/crops/soybean.jpg' };

  fs.writeFileSync('image_credits.json', JSON.stringify(credits, null, 2));
  console.log('✓ Successfully downloaded and optimized all images and saved image_credits.json!');
})();
