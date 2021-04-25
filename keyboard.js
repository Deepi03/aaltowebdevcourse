
/**
 * Write the code to add buttons inside #simple-keyboard after this comment:
 * G4, Bb4, C5, D5, F5, and G5.
 *-------------------------------------------------------------------------*/
let buttonValues =[ 'G4', 'Bb4', 'C5', 'D5', 'F5',  'G5'];
let simpleKeyboard1 = document.getElementById('simple-keyboard');


for(i = 0; i<buttonValues.length;i++)
{
let newButton = document.createElement('button');
newButton.setAttribute('id',buttonValues[i]);
newButton.innerText = buttonValues[i];
simpleKeyboard1.appendChild(newButton);
}




console.log(simpleKeyboard1);


/*-------------------------------------------------------------------------
 * The following code will automatically find any buttons you have inserted
 * and enable to play notes by clicking them. You don't need to change
 * anything here.
 */
let synth = undefined;

function playNote(event) {
  let id = event.target.getAttribute('id');
  if (id === null) {
    console.warn('The button did not have an id-attribute!');
  }
  synth = synth || new Tone.Synth().toMaster();
  synth.triggerAttackRelease(id, '4n');
}

function watchForClick(element) {
  if (element.nodeName === 'BUTTON') {
    element.addEventListener('click', playNote);
  } else {
    console.warn('Found an element inside #simple-keyboard that is not a button!');
  }
}

Array.from(document.getElementById('simple-keyboard').children).forEach(watchForClick);






let buttonsIds = ['C', 'C#', 'D', 'D#', 'E'];
for(let i = 0; i < buttonsIds.length; i++) {
    let noteButton = document.getElementById(buttonsIds[i]);
    let innerText = buttonsIds[i];
    noteButton.addEventListener('mouseenter', function(e) {
        noteButton.innerHTML = innerText;

    });
    noteButton.addEventListener('mouseleave', function(e) {
        noteButton.innerHTML = "";
    });
}
    























let musicButton = document.getElementById('music-Button');
function newMusic(){
  playMusic(["E4","D4","C4","D4","E4","E4"]); 
}
musicButton.addEventListener('click',newMusic);
