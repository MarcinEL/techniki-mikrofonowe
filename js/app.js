'use strict';

// Create an instance
var wavesurfer = {};

// Init & load audio file
document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.querySelector('#playBtn'),
    toggleMuteButton = document.querySelector('#toggleMuteBtn'),
    setMuteOnButton = document.querySelector('#setMuteOnBtn'),
    setMuteOffButton = document.querySelector('#setMuteOffBtn');

    wavesurfer = WaveSurfer.create({
        container: document.querySelector('#waveform'),
        container: '#waveform',
        waveColor: 'blue'
    });

    wavesurfer.on('error', function(e) {
        console.warn(e);
    });

    // Load audio from URL
    wavesurfer.load('https://ia800301.us.archive.org/15/items/fire_and_ice_librivox/fire_and_ice_frost_apc_64kb.mp3');

    wavesurfer.once('ready', function() {
        playButton.onclick = function() {
            wavesurfer.playPause();
        };

        toggleMuteButton.onclick = function() {
            wavesurfer.toggleMute();
        };

        setMuteOnButton.onclick = function() {
            wavesurfer.setMute(true);
        };

        setMuteOffButton.onclick = function() {
            wavesurfer.setMute(false);
        };
    });
});