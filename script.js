// ARRAY INITIALIZATIOPINITIALIZATION AND DECLARATION
const hexArr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
//DECLARYING DYNAMIC CHANGING ELEMENTS
const generateBtn = document.getElementById('color-generator-btn');
const resetBtn = document.getElementById('color-reset-btn');
const colorName = document.querySelector('.color_name');
const heading_1 = document.getElementById('heading_1');
const heading_2 = document.getElementById('heading_2');


//ADDING EVENT LISTNER TO BUTTONS
generateBtn.addEventListener("click",initApp);
resetBtn.addEventListener('click',resetApp);

//FUNCTION WHICH WILL HOLD THE DYNAMIC WORK OF BUTTON
const  randomNum = () =>{
  return Math.floor(Math.random()*hexArr.length);
}

function initApp(){
  let hexColor = '#';
  for(let i = 0; i < 6; i++){
    hexColor += hexArr[randomNum()];
  };
  if(hexColor === "#000000"){
    heading_1.style.color = "#fff";
    heading_1.style.borderColor = "#fff";
    heading_2.style.border = "2px solid #fff"
    document.body.style.backgroundColor = hexColor;
    colorName.textContent = hexColor;
    colorName.style.color = "#fff";
  }else{
    document.body.style.backgroundColor = hexColor;
    colorName.textContent = hexColor;
    colorName.style.color = hexColor;
  }
  // generateBtn.style.color = colorArr[num]; //(TO change the btn text color);
};

function resetApp(){
  document.body.style.backgroundColor = "#E2E6E9";
  colorName.textContent = "#E2E6E9";
  colorName.style.color = "#E2E6E9";
  heading_1.style.color = "#000000";
  heading_1.style.borderColor = "#000000";
  heading_2.style.border = "none"
};