var synth = new Tone.Synth().toMaster();

function cTone() {
    synth.triggerAttackRelease('C4', '8n');
}

function dTone() {
    synth.triggerAttackRelease('D4', '8n');
}

function eTone() {
    synth.triggerAttackRelease('E4', '8n');
}

function fTone() {
    synth.triggerAttackRelease('F4', '8n');
}

function gTone() {
    synth.triggerAttackRelease('G4', '8n');
}

function aTone() {
    synth.triggerAttackRelease('A4', '8n');
}

function bTone() {
    synth.triggerAttackRelease('B4', '8n');
}

function CsTone() {
  synth.triggerAttackRelease('C#4', '8n');
}

function DsTone() {
  synth.triggerAttackRelease('D#4', '8n');
}

function FsTone() {
  synth.triggerAttackRelease('F#4', '8n');
}

function GsTone() {
  synth.triggerAttackRelease('G#4', '8n');
}

function AsTone() {
  synth.triggerAttackRelease('A#4', '8n');
}

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 65) {
        cTone();
    }
    else if(event.keyCode == 87) {
        CsTone();
    }
    else if(event.keyCode == 83) {
        dTone();
    }
    else if(event.keyCode == 69) {
        DsTone();
    }
    else if(event.keyCode == 68) {
        eTone();
    }
    else if(event.keyCode == 70) {
        fTone();
    }
    else if(event.keyCode == 84) {
        FsTone();
    }
    else if(event.keyCode == 71) {
        gTone();
    }
    else if(event.keyCode == 89) {
        GsTone();
    }
    else if(event.keyCode == 72) {
        aTone();
    }
    else if(event.keyCode == 85) {
        AsTone();
    }
    else if(event.keyCode == 74) {
        bTone();
    }
});
