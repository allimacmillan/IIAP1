
console.log('hi');
var synth = new Tone.Synth().toMaster();

function cTone() {
    synth.triggerAttackRelease('C4', '8n');
}
