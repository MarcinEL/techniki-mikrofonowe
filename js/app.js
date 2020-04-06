'use strict';

// Create an instance
var wavesurfer;

// Init & load
document.addEventListener('DOMContentLoaded', function() {
    // var playButton = document.querySelector('#playBtn'),
    //     toggleMuteButton = document.querySelector('#toggleMuteBtn'),
    //     setMuteOnButton = document.querySelector('#setMuteOnBtn'),
    //     setMuteOffButton = document.querySelector('#setMuteOffBtn');

    // Init wavesurfer
    wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'black'
    });

    wavesurfer.on('error', function(e) {
        console.warn(e);
    });

    // wavesurfer.once('ready', function() {
    //     playButton.onclick = function() {
    //         wavesurfer.playPause();
    //     };

    //     toggleMuteButton.onclick = function() {
    //         wavesurfer.toggleMute();
    //     };

    //     setMuteOnButton.onclick = function() {
    //         wavesurfer.setMute(true);
    //     };

    //     setMuteOffButton.onclick = function() {
    //         wavesurfer.setMute(false);
    //     };
    // });

    wavesurfer.load('https://ia800301.us.archive.org/15/items/fire_and_ice_librivox/fire_and_ice_frost_apc_64kb.mp3');
});
