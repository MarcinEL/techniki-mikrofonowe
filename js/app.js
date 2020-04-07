// $('.wave').each(function() {
//     //Generate unic ud
//     var id = '_' + Math.random().toString(36).substr(2, 9);
//     var path = $(this).attr('data-path');
  
//     //Set id to container
//     $(this).find(".wave-container").attr("id", id);
  
//     //Initialize WaveSurfer
//     var wavesurfer = WaveSurfer.create({
//       container: '#' + id,
//       waveColor: '#D2EDD4',
//       progressColor: '#46B54D'
//     });
  
//     //Load audio file
//     wavesurfer.load(path);
  
//     //Add button event
//     $(this).find("playBtn").click(function() {
//       wavesurfer.playPause();
//     });
//   });

// 'use strict';

// // Create an instance
// var wavesurfer = {};

// // Init & load audio file
// document.addEventListener('DOMContentLoaded', function() {
//     var playButton = document.querySelector('#playBtn'),
//     StartButton = document.querySelector('#startBtn'),
//     toggleMuteButton = document.querySelector('#toggleMuteBtn');

//     wavesurfer = WaveSurfer.create({
//         container: '#waveform',
//         waveColor: '#D2EDD4',
//         progressColor: '#46B54D',
//         barHeight: 2.0 
//     });

//     wavesurfer.on('error', function(e) {
//         console.warn(e);
//     });

//     // Load audio from URL
//     wavesurfer.load('https://ia800301.us.archive.org/15/items/fire_and_ice_librivox/fire_and_ice_frost_apc_64kb.mp3');

//     wavesurfer.once('ready', function() {
//         playButton.onclick = function() {
//             wavesurfer.playPause();
//         };

//         toggleMuteButton.onclick = function() {
//             wavesurfer.toggleMute();
//         };
//         StartButton.onclick = function() {
//             wavesurfer.seekTo(0);
//         };
        
//     });
// });