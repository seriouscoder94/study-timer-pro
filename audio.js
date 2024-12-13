// Simple audio player
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('lofi-player');
    const trackSelector = document.getElementById('track-selector');
    const selectButton = document.getElementById('select-track');

    console.log('Elements found:', {
        audio: !!audio,
        trackSelector: !!trackSelector,
        selectButton: !!selectButton
    });

    // Function to change track
    function changeTrack() {
        try {
            const selectedTrack = trackSelector.value;
            console.log('Changing track to:', selectedTrack);
            
            // Store current play state
            const wasPlaying = !audio.paused;
            
            // Update the source element
            const sourceElement = audio.querySelector('source');
            sourceElement.src = selectedTrack;
            
            // Load and play if needed
            audio.load();
            if (wasPlaying) {
                audio.play();
            }

            // Show feedback
            selectButton.textContent = 'Selected!';
            setTimeout(() => {
                selectButton.textContent = 'Select Track';
            }, 1000);

        } catch (error) {
            console.error('Error changing track:', error);
        }
    }

    // Add click event listener to select button
    selectButton.addEventListener('click', changeTrack);

    // Handle track ending
    audio.addEventListener('ended', () => {
        const nextIndex = (trackSelector.selectedIndex + 1) % trackSelector.options.length;
        trackSelector.selectedIndex = nextIndex;
        changeTrack();
    });

    // Add event listener for when a song ends
    document.getElementById('lofi-player').addEventListener('ended', function() {
        // Get the current track selector
        const trackSelector = document.getElementById('track-selector');
        const currentIndex = trackSelector.selectedIndex;
        const nextIndex = (currentIndex + 1) % trackSelector.options.length;
        
        // Select the next track
        trackSelector.selectedIndex = nextIndex;
        
        // Update the audio source and play
        const audioPlayer = document.getElementById('lofi-player');
        audioPlayer.src = trackSelector.value;
        audioPlayer.play();
    });
});
