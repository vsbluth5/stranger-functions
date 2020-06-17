/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("Script Running");

// Select the input element using its id, and store that in a variable called textbox
const textbox = document.querySelector("#userInput");
// console.log(textbox);

const pictureBox = document.querySelector("#pictureBox");
// console.log(pictureBox);

const messageLbl = document.querySelector("#message")
console.log(messageLbl)


// Write a function that clears the textbox after each guess
const clearInput = ()=> {
  
}

// Write a function that keeps track of the number that are
// correct and writes messages to the screen
const changeMessage =() => {
  
}

// Set a timeout
// let timeout = setTimeout(()=> {
//messageLbl.innerHTML = ``
// }, 10000)

// The value property
textbox.addEventListener("change", e => {
  console.log("Input changed!");

  // How do we test to see if have a certain value?
  if (textbox.value === "Eleven") {
    console.log("YOU GOT ELEVEN!");
      pictureBox.innerHTML += `<img src="https://cdn.glitch.com/01b27d37-a07e-4e2e-8caf-659256274937%2FScreen%20Shot%202019-08-08%20at%208.39.11%20AM.png?v=1565269664594"/>`;
  } else if (textbox.value === "Dustin") {
    console.log("YOU GOT DUSTIN!");
    pictureBox.innerHTML += `<img src="https://cdn.glitch.com/01b27d37-a07e-4e2e-8caf-659256274937%2FScreen%20Shot%202019-08-08%20at%208.39.21%20AM.png?v=1565269664037" />`;
  } else {
    messageLbl.innerHTML = `Not a match...`
  }
  clearInput()
});

