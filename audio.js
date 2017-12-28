var mic, recorder, soundFile;

function setup(){
    
    mic = new p5.AudioIn();
    mic.start();

    recorder = new p5.SoundRecorder();
    recorder.setInput(mic);

    soundFile = new p5.SoundFile();

}

function playSound(){
    soundFile.play();
}

function stopPlaying(){
    soundFile.stop();
}

function recordSound(){
    recorder.record(soundFile);
}

function stopRecording(){
    recorder.stop();
}