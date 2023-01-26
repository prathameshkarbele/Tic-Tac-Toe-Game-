
console.log("Welcome to Tic Tack Toe");

let music = new Audio("error-2-126514.mp3")
let Audioturn = new Audio("wrong-buzzer-6268.mp3")
let gameOver = new Audio("083822_8-bit-quotgame-overquot-82872.mp3")
let turnX = "X"
let IsgameOver = false;

// Function to chhnge the Turn 
const chnageTurn = () => {
  return turnX === "X" ? '0':'X'
}


// Function to check for a Win
const checkWin = () =>{
    let boxtext = document.getElementsByClassName('boxtext');
   
    let win = [
        [0, 1, 2, -12, 5, 0],
        [3, 4, 5, -12, 15, 0],
        [6, 7, 8, -12, 25, 0],
        [0, 3, 6, -19, 15, 90],
        [1, 4, 7, -12, 15, 90],
        [2, 5, 8, -2, 15, 90],
        [0, 4, 8, -12, 15, 45],
        [2, 4, 6, -12, 15, 135],

    ]
    win.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[0]].innerText) 
        && (boxtext[e[0]].innerText !== "") ) {
         document.querySelector('.info').innerText =boxtext[e[0]].innerText + "Won"
         gameOver.play();
         IsgameOver = true
         document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px"
         document.querySelector('.line').style.width = '27vw';
         document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
      }
    })


}
 // Gmae Logic 
 
 let boxes = document.getElementsByClassName('box');
 Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext'); 
    element.addEventListener('click', ()=>{
        if(boxtext.innerText == ''){
            boxtext.innerText = turnX;
          turnX = chnageTurn();
          Audioturn.play();
          checkWin();

          if(!IsgameOver){
            document.getElementsByClassName('info')[0].innerText = 'Turn for' + turnX;
          }
        }

    })
})

reset.addEventListener('click',() =>{
  let boxtext = document.querySelectorAll('.boxtext');
  Array.from(boxtext).forEach(element =>{
    element.innerText = "";
   
  })
  turnX = "X"
  IsgameOver = false;
  document.getElementsByClassName('info')[0].innerText = 'Turn for' + turnX;
  document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px"
  document.querySelector('.line').style.width = '0vw';

})