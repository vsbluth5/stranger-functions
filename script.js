/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
// console.log("Script Running");

// Select the input element using its id, and store that in a variable called textbox
const textbox = document.querySelector("#userInput");

// Log that element to the console just to confirm the query selector worked.
console.log(textbox);

// textbox and #userInput refer to the same thing. The code in this file
// refers to that html element as textbox from now on.

// Challenge: There is one other element in the html that this file will l
// need to refer to. What is it?

const pictureBox = document.querySelector("#pictureBox");
console.log(pictureBox);

// Now we want an event listener to listen to an event (e) to wait for
/* 
DOM_Node_to_listen_on.addEventListener("EVENT_TO_LISTEN_FOR", (e)=> {
    WHAT_TO_DO_WHEN_IT_HAPPENS.
})
*/

textbox.addEventListener("click", e => {
  console.log("You clicked!");
});

// Try "input" and "change" for the event type and decide which you prefer

// The value property
textbox.addEventListener("input", e => {
  console.log("Key pressed!");
  console.log(textbox.value);

  // How do we test to see if have a certain value?
  if (textbox.value === "Eleven") {
    console.log("YOU GOT ELEVEN!");

    // Add to the innerHTML property of the pictureBox
    // console.log(pictureBox.innerHTML)
    // pictureBox.innerHTML += `YOU GOT ELEVEN!`
    // pictureBox.innerHTML += `<h1>YOU GOT ELEVEN!</h1>`
    pictureBox.innerHTML += `<img src="https://cdn.glitch.com/01b27d37-a07e-4e2e-8caf-659256274937%2FScreen%20Shot%202019-08-08%20at%208.39.11%20AM.png?v=1565269664594"/>`;
  } else if (textbox.value === "Dustin") {
    console.log("YOU GOT DUSTIN!");
    pictureBox.innerHTML += `<img src="https://cdn.glitch.com/01b27d37-a07e-4e2e-8caf-659256274937%2FScreen%20Shot%202019-08-08%20at%208.39.21%20AM.png?v=1565269664037" />`;
  }
  // Build out another branch of this if statement
  // with a console.log statement for at least one other character.
  else {
    console.log("No match...");
  }
});
