/*

  You should write your functions and other code in this file.

  You are not allowed to modify the recorder.html

  You are given a partial playNote function, that works as an event handler,
  and by default plays sounds when the function is attached to the buttons.

  You will need to write the rest of the code (whatever functions and variables that you need)
  and attach the event handlers were necessary.
*/
let startRecordingButton = document.getElementById('start-recording');
startRecordingButton.addEventListener('click',startRecording);
let notesRecorded = document.getElementById('notes-recorded');
let keyPressed = [];
var isStartRecordingClicked = false;
function startRecording()
{ 
  
  while(notesRecorded.firstChild)
  {
    notesRecorded.removeChild(notesRecorded.firstChild);
  }
  isStartRecordingClicked = true;
  (startRecordingButton).classList.add('recording');
}

let simpleKeyboard = document.getElementById('simple-keyboard');
simpleKeyboard.addEventListener('click', clickhandler);
function clickhandler(evt)
{   
  if(isStartRecordingClicked == true)
{
  let note = evt.target.dataset.note;
  if(note!= undefined)
  {
  keyPressed.push(note);
  }
}
}
//stop recording button

let stopRecordingButton = document.getElementById('stop-recording');
function stopRecording()
{
  
  (startRecordingButton).classList.remove('recording');
  for(i=0;i<keyPressed.length;i++)
  {
  let item = document.createElement('li');
  item.setAttribute('data-note',keyPressed[i]);
  item.innerText = keyPressed[i];
  notesRecorded.appendChild(item);
  }
  keyPressed =[];
  isStartRecordingClicked = false;
}
stopRecordingButton.addEventListener('click',stopRecording);


let synth;

function playNote(evt) {
  // These lines are given
  let note = evt.target.dataset.note;
    synth = synth || new Tone.Synth().toMaster();
    synth.triggerAttackRelease(note, '8n');
  let playedNotes = [];
  playedNotes.push(note);
  //You need to complete this function here, to record the played notes to an array
}