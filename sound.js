function preload(){
  mySound = loadSound("guile.mp3");
}

function setup(){
  mySound.setVolume(0.1);
  mySound.play();
}

Tone.Transport.start()
const synth = new Tone.DuoSynth().toMaster()
const seq = new Tone.Sequence((time, note) => {
  synth.triggerAttackRelease(note, '8n', time)
}, ['A3', 'C4', ['D4', 'E4'], 'C4', ['D4', 'E4'], 'F4', 'E4', 'D4', 'G3', ], '4n')

function spacebarsound(){
  if (key == ' ' == true){
    var synth = new Tone.Synth().toMaster()
    synth.triggerAttackRelease('C4', '8n')
}
