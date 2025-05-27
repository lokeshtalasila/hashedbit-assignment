//quesiton 1
let isDay = 1

function swapTheme() {
//write your code
 	const app = document.getElementById("app");
    const button = document.getElementById("swap");

    if (isDay) {
      app.className = "night";
      button.className = "button_night";
    } else {
      app.className = "day";
      button.className = "button_day";
    }

    isDay = !isDay;
}

//quesiton 2
//Write your code here
function createDiv(width, height, text) {
const newDiv = document.createElement("div");

  // Set the text content
  newDiv.textContent = text;

  // Set the width and height with "px" unit
  newDiv.style.width = width + "px";
  newDiv.style.height = height + "px";

  // Optional styling to make it visible
  newDiv.style.border = "1px solid black";
  newDiv.style.margin = "10px";
  newDiv.style.padding = "10px";

  // Append the new div to the #container
  document.getElementById("container").appendChild(newDiv);
    
}

createDiv(200, 100, "Hello, this is my new div!");

// Do not change this code
Window.createDiv = createDiv;


// quesiton 3
// your js code goes here
function toggleVisibility() {
    const para = document.getElementById("useless-paragraph");

  if (para.style.display === "none") {
    para.style.display = "block";
  } else {
    para.style.display = "none";
  }
}


//quesiton 4
 const textContainer = document.getElementById('text-container');
  const colorInput = document.getElementById('colorbox');
  const colorChangeBtn = document.getElementById('colorchange');
  const fontSizeInput = document.getElementById('fontsize');
  const underlineBtn = document.getElementById('underline');
  const italicBtn = document.getElementById('italic');
  const boldBtn = document.getElementById('bold');
  const fontDropdown = document.getElementById('list');
  const getStyleBtn = document.getElementById('getstyle');
  const cssOutput = document.getElementById('css-props');

  // Change text color
  colorChangeBtn.addEventListener('click', () => {
    textContainer.style.color = colorInput.value;
  });

  // Change font size
  fontSizeInput.addEventListener('input', () => {
    textContainer.style.fontSize = `${fontSizeInput.value}px`;
  });

  // Toggle underline
  underlineBtn.addEventListener('click', () => {
    textContainer.style.textDecoration = textContainer.style.textDecoration === 'underline' ? 'none' : 'underline';
  });

  // Toggle italic
  italicBtn.addEventListener('click', () => {
    textContainer.style.fontStyle = textContainer.style.fontStyle === 'italic' ? 'normal' : 'italic';
  });

  // Toggle bold
  boldBtn.addEventListener('click', () => {
    textContainer.style.fontWeight = textContainer.style.fontWeight === 'bold' ? 'normal' : 'bold';
  });

  // Change font family
  fontDropdown.addEventListener('change', () => {
    textContainer.style.fontFamily = fontDropdown.value;
  });

  // Get all applied CSS styles
  getStyleBtn.addEventListener('click', () => {
    const computedStyles = window.getComputedStyle(textContainer);
    const styleText = `
      color: ${colorInput.value || computedStyles.color};
      font-size: ${computedStyles.fontSize};
      font-family: ${computedStyles.fontFamily};
      text-decoration: ${computedStyles.textDecoration.includes('underline') ? 'underline' : 'none'};
      font-style: ${computedStyles.fontStyle};
      font-weight: ${computedStyles.fontWeight};
    `.trim().replace(/\s+/g, ' ');
    
    cssOutput.textContent = styleText;
  });