'use strict';

// Create an instance
var wavesurfer;

// Init & load
document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.querySelector('#playBtn'),
        toggleMuteButton = document.querySelector('#toggleMuteBtn'),
        setMuteOnButton = document.querySelector('#setMuteOnBtn'),
        setMuteOffButton = document.querySelector('#setMuteOffBtn');

    // Init wavesurfer
    wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'black'
    });

    wavesurfer.on('error', function(e) {
        console.warn(e);
    });

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

    wavesurfer.load('https://www.dropbox.com/s/ctgg4z0wgduocox/RS_LMP_ElecGtr01_2C_45Degrees.wav?dl=1');
});
