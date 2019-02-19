
console.log('hi');
var synth = new Tone.Synth().toMaster();


$("#C").click(function() {
  console.log('before');
  synth.triggerAttackRelease('C4', '8n');
  console.log('after');
});
