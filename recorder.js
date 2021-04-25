/*

  You should write your functions and other code in this file.

  You are not allowed to modify the recorder.html

  You are given a partial playNote function, that works as an event handler,
  and by default plays sounds when the function is attached to the buttons.

  You will need to write the rest of the code (whatever functions and variables that you need)
  and attach the event handlers were necessary.
*/
let startRecordingButton = document.getElementById('start-recording');
function startRecording()
{
  console.log('started recording');
  let simpleKeyboard = document.getElementById('simple-keyboard');
  function clickhandler(evt)
  {
    let keyPressed = [];
    keyPressed.push(evt.target.dataset.note);
    console.log(keyPressed);
  }
  simpleKeyboard.addEventListener('click', clickhandler);
}
startRecordingButton.addEventListener('click',startRecording);


let stopRecordingButton = document.getElementById('stop-recording');
let notesRecorded = document.getElementById('notes-recorded');


let synth;

function playNote(evt) {
  // These lines are given
  let note = evt.target.dataset.note;
  synth = synth || new Tone.Synth().toMaster();
  synth.triggerAttackRelease(note, '8n');

  //You need to complete this function here, to record the played notes to an array
}