const themes = {
    cities: {
        label: "Cities",
        backgrounds: [
            { name: "Tokyo Night", url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf" },
            { name: "New York Sunset", url: "https://images.unsplash.com/photo-1522083165195-3424ed129620" },
            { name: "Paris Evening", url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34" },
            { name: "London Bridge", url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad" },
            { name: "Dubai Skyline", url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c" },
            { name: "Singapore Marina", url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd" },
            { name: "Hong Kong Harbor", url: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0" },
            { name: "Sydney Opera", url: "https://images.unsplash.com/photo-1524293581917-878a6d017c71" },
            { name: "Shanghai Lights", url: "https://images.unsplash.com/photo-1545893835-abaa50cbe628" },
            { name: "Seoul Street", url: "https://images.unsplash.com/photo-1538669715315-155098f0fb1d" },
            { name: "Amsterdam Canal", url: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4" },
            { name: "Venice Gondola", url: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0" },
            { name: "Barcelona Streets", url: "https://images.unsplash.com/photo-1539037116277-733770a22cb8" },
            { name: "Rome Colosseum", url: "https://images.unsplash.com/photo-1552832230-c0197dd311b5" },
            { name: "Istanbul Bazaar", url: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b" }
        ]
    },
    nature: {
        label: "Nature",
        backgrounds: [
            { name: "Mountain Lake", url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
            { name: "Forest Path", url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e" },
            { name: "Ocean Waves", url: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0" },
            { name: "Desert Sunset", url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35" },
            { name: "Northern Lights", url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7" },
            { name: "Cherry Blossoms", url: "https://images.unsplash.com/photo-1522383225653-ed111181a951" },
            { name: "Tropical Beach", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
            { name: "Autumn Forest", url: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891" },
            { name: "Waterfall", url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d" },
            { name: "Lavender Field", url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef" },
            { name: "Snow Mountain", url: "https://images.unsplash.com/photo-1519681393784-d120267933ba" },
            { name: "Rain Forest", url: "https://images.unsplash.com/photo-1511497584788-876760111969" },
            { name: "Meadow Sunset", url: "https://images.unsplash.com/photo-1501180984405-2d777bfad1bd" },
            { name: "Coral Reef", url: "https://images.unsplash.com/photo-1546026423-cc4642628d2b" },
            { name: "Desert Stars", url: "https://images.unsplash.com/photo-1539593395743-7da5ee10ff07" }
        ]
    },
    lofi: {
        label: "Lo-Fi",
        backgrounds: [
            { name: "Cozy Room", url: "https://images.unsplash.com/photo-1554295405-abb8fd54f153" },
            { name: "Rainy Window", url: "https://images.unsplash.com/photo-1501999635878-71cb5379c2d8" },
            { name: "Night Study", url: "https://images.unsplash.com/photo-1598549562075-733770a22cb8" },
            { name: "Coffee Shop", url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb" },
            { name: "Vinyl Player", url: "https://images.unsplash.com/photo-1542208998-f6dbbb27a72f" },
            { name: "City Lights", url: "https://images.unsplash.com/photo-1519608487953-e999c86e7455" },
            { name: "Bedroom Desk", url: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d" },
            { name: "Neon Signs", url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b" },
            { name: "Bookshelf", url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66" },
            { name: "Night Train", url: "https://images.unsplash.com/photo-1525011268546-bf3f9b007f6a" },
            { name: "Retro Studio", url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04" },
            { name: "Urban Rooftop", url: "https://images.unsplash.com/photo-1519677100203-a0e668c92439" },
            { name: "Pixel Art", url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f" },
            { name: "Jazz Club", url: "https://images.unsplash.com/photo-1511192336575-5a79af67a629" },
            { name: "Vintage Radio", url: "https://images.unsplash.com/photo-1593078166039-c9878df5c520" }
        ]
    },
    minimal: {
        label: "Minimal",
        backgrounds: [
            { name: "Clean White", url: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845" },
            { name: "Soft Gray", url: "https://images.unsplash.com/photo-1557683316-973673baf926" },
            { name: "Simple Lines", url: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3" },
            { name: "Geometric", url: "https://images.unsplash.com/photo-1557683311-eac922347aa1" },
            { name: "Abstract", url: "https://images.unsplash.com/photo-1557683304-673a23048d34" }
        ]
    },
    aesthetic: {
        label: "Aesthetic",
        backgrounds: [
            { name: "Pastel Sky", url: "https://images.unsplash.com/photo-1557682250-33bd709cbe85" },
            { name: "Gradient", url: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5" },
            { name: "Neon Glow", url: "https://images.unsplash.com/photo-1557682260-96773eb01377" },
            { name: "Vapor Wave", url: "https://images.unsplash.com/photo-1557682268-e3955ed5d83f" },
            { name: "Retro Wave", url: "https://images.unsplash.com/photo-1557682233-43e671455dfa" }
        ]
    }
};

// Function to populate background select based on category
function updateBackgroundSelect() {
    const category = document.getElementById('theme-category').value;
    const backgroundSelect = document.getElementById('background-select');
    const themePreview = document.getElementById('theme-preview');
    
    // Clear existing options
    backgroundSelect.innerHTML = '';
    
    // Add new options
    themes[category].backgrounds.forEach(bg => {
        const option = document.createElement('option');
        option.value = bg.url;
        option.textContent = bg.name;
        backgroundSelect.appendChild(option);
    });
    
    // Update preview with first background
    if (themes[category].backgrounds.length > 0) {
        themePreview.style.backgroundImage = `url(${themes[category].backgrounds[0].url})`;
    }
}

// Function to get all backgrounds from all categories
function getAllBackgrounds() {
    const allBackgrounds = [];
    Object.values(themes).forEach(category => {
        allBackgrounds.push(...category.backgrounds);
    });
    return allBackgrounds;
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const themeCategory = document.getElementById('theme-category');
    const backgroundSelect = document.getElementById('background-select');
    const themePreview = document.getElementById('theme-preview');
    const selectThemeBtn = document.getElementById('select-theme');
    const randomThemeBtn = document.getElementById('random-theme');
    
    // Function to set random theme
    function setRandomTheme() {
        const allBackgrounds = getAllBackgrounds();
        const randomBg = allBackgrounds[Math.floor(Math.random() * allBackgrounds.length)];
        
        // Find which category this background belongs to
        const category = Object.entries(themes).find(([_, categoryData]) => 
            categoryData.backgrounds.some(bg => bg.url === randomBg.url)
        )[0];
        
        themeCategory.value = category;
        updateBackgroundSelect();
        backgroundSelect.value = randomBg.url;
        themePreview.style.backgroundImage = `url(${randomBg.url})`;
        document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${randomBg.url})`;
    }
    
    // Initial population of backgrounds and set random theme
    updateBackgroundSelect();
    setRandomTheme();
    
    // Update backgrounds when category changes
    themeCategory.addEventListener('change', updateBackgroundSelect);
    
    // Update preview when background changes
    backgroundSelect.addEventListener('change', (e) => {
        themePreview.style.backgroundImage = `url(${e.target.value})`;
    });
    
    // Apply selected theme
    selectThemeBtn.addEventListener('click', () => {
        const selectedUrl = backgroundSelect.value;
        document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${selectedUrl})`;
    });
    
    // Apply random theme
    randomThemeBtn.addEventListener('click', setRandomTheme);
});
