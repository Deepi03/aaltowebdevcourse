let playMelodyButton = document.getElementById('play-melody');
let notesToEditInput = document.getElementById('notes-to-edit');
let editButton = document.getElementById('edit-button');

let editorArea = document.getElementById('editor-area');

playMelodyButton.addEventListener('click', startPlaying);
editButton.addEventListener('click', createNotesToEdit);

// Start here, fill in the function so that it empties out '#editor-area'
function clearEditorArea() {
    while(editorArea.firstChild)
    {
      editorArea.removeChild(editorArea.firstChild);
    }
}

function splitNotes(element) {
  
  let notesToEditInputValue =element.value;
  let shouldSplit = notesToEditInputValue.split(' ');
  return shouldSplit;  
}

function createNoteToEdit(note) {
  //container element
  let noteContainer = document.createElement('div');
  noteContainer.setAttribute('class','note-container');
  editorArea.appendChild(noteContainer);
  //ButtonUp

  let transposeUpButton = document.createElement('button');
  transposeUpButton.setAttribute('class','transpose-up');
  transposeUpButton.innerText = '^';
  noteContainer.appendChild(transposeUpButton);
  transposeUpButton.addEventListener('click',handleNoteContainerEvent);
  //BreakLine
  let breakLine = document.createElement('br');
  noteContainer.appendChild(breakLine);
  //InputTexBox
  let inputNote = document.createElement('input');
  inputNote.setAttribute('type','text');
  inputNote.setAttribute('class','note');
  inputNote.setAttribute('size',2);
  inputNote.setAttribute('value',note);
  noteContainer.appendChild(inputNote);
  //DropDown 
  let selectNoteLength =document.createElement('select');
  selectNoteLength.setAttribute('class','note-length');
  let noteLengthValue = ["8","4","2","1"];
  let noteLengthText = ["eighth note","quarter note","half note","whole note"];
   for(i = 0;i<noteLengthValue.length && i<noteLengthText.length;i++)
   {
   let optionElement = document.createElement('option');
   optionElement.setAttribute('value',noteLengthValue[i]);
   optionElement.innerHTML = noteLengthText[i];
   selectNoteLength.appendChild(optionElement); 
   }
  noteContainer.appendChild(selectNoteLength);
 
 //BreakLine
  let breakLine2 = document.createElement('br');
  noteContainer.appendChild(breakLine2);
  //TransposeUpButton
  let transposeDownButton = document.createElement('button');
  transposeDownButton.setAttribute('class','transpose-down');
  transposeDownButton.innerText = 'v';
  noteContainer.appendChild(transposeDownButton);
  transposeDownButton.addEventListener('click',handleNoteContainerEvent);
  return noteContainer;
  //console.log(noteContainer);

}

function createNotesToEdit() {
  clearEditorArea();
let splittedNotes = splitNotes(notesToEditInput);
  for( var i=0;i < splittedNotes.length;i++)
  {
    createNoteToEdit(splittedNotes[i]);
    
  }
}

function handleNoteContainerEvent(evt) {
let triggeredEvent =  evt.target;
let parentNode = triggeredEvent.parentNode;
let noteInput =parentNode.querySelector('input.note');
  let nameWithOct = getNoteParts(noteInput.value);
  let newNote;
if(triggeredEvent.classList.contains('transpose-up'))
{
  newNote=transposeNoteHalfStepUp(nameWithOct[0]);
}
else if(triggeredEvent.classList.contains('transpose-down'))
{
   newNote = transposeNoteHalfStepDown(nameWithOct[0]);
}
noteInput.value = newNote+nameWithOct[1];
//console.log(noteInputValue);
}

// This function has been completed, you do not need to edit it
function getMelodyString(containers) {
  let melodyString = ''

  for (var i = 0; i < containers.length; i++) {
    melodyString += containers[i].querySelector('.note').value;
    melodyString += '/';
    melodyString += containers[i].querySelector('.note-length').value;
    melodyString += ' ';
  }

  return melodyString;
}

// This function has been completed, you do not need to edit it
function startPlaying() {
  let noteContainers = document.querySelectorAll('#editor-area .note-container');
  let melody = getMelodyString(noteContainers);
  const player = new SimplePlayer();
  const sequenceParser = new SequenceParser(128, [2, 4]);
  player.play(sequenceParser.parse([
      melody
  ]));
}

clearEditorArea();


