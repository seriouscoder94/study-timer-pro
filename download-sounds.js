const https = require('https');
const fs = require('fs');
const path = require('path');

// Create sounds directory if it doesn't exist
const soundsDir = path.join(__dirname, 'sounds');
if (!fs.existsSync(soundsDir)) {
    fs.mkdirSync(soundsDir);
}

// Sound files to download (using royalty-free sounds)
const sounds = {
    'lofi-beat.mp3': 'https://pixabay.com/music/beats-lofi-study-112191/download/',
    'rain.mp3': 'https://pixabay.com/sound-effects/light-rain-ambient-114354/download/',
    'waves.mp3': 'https://pixabay.com/sound-effects/ocean-waves-112762/download/',
    'birds.mp3': 'https://pixabay.com/sound-effects/birds-19624/download/',
    'fire.mp3': 'https://pixabay.com/sound-effects/fire-sound-effect-1-6209/download/'
};

// Download each sound file
Object.entries(sounds).forEach(([filename, url]) => {
    const filePath = path.join(soundsDir, filename);
    
    // Skip if file already exists
    if (fs.existsSync(filePath)) {
        console.log(`${filename} already exists, skipping...`);
        return;
    }

    console.log(`Downloading ${filename}...`);
    
    https.get(url, (response) => {
        if (response.statusCode === 302) {
            // Follow redirect
            https.get(response.headers.location, (finalResponse) => {
                const fileStream = fs.createWriteStream(filePath);
                finalResponse.pipe(fileStream);
                
                fileStream.on('finish', () => {
                    fileStream.close();
                    console.log(`Downloaded ${filename}`);
                });
            });
        } else {
            const fileStream = fs.createWriteStream(filePath);
            response.pipe(fileStream);
            
            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`Downloaded ${filename}`);
            });
        }
    }).on('error', (err) => {
        console.error(`Error downloading ${filename}:`, err.message);
    });
});
