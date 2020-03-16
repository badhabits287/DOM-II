



// addEventListeners 

//window
window.addEventListener('load', (event) => {


    console.log('Eventlistener Load' + 'The Bus Is Loaded with Fun!');
});

//on scroll background changue 

const [red, green, blue] = [69, 111, 225]
const section1 = document.querySelector('body')

window.addEventListener('scroll', () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 150
  y = y < 1 ? 1 : y     // ensure y is always >= 1 (due to Safari's elastic scroll)
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

window.onload = function() {
    document.qu("footer").focus();
  };

//nav

// // background if Function @media 

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.querySelector("body > header").style.backgroundColor = "dodgerBlue";
        document.querySelector("body > header > div > h1").style.marginLeft = 'unset'
    } else {

        document.querySelector("body > header").style.backgroundColor = "lightBlue";
        document.querySelector("body > header > div > h1").style.marginLeft = '140px'

    }


}
var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function  'run time'
x.addListener(myFunction)// Attach listener function  'state change'

const navClk = document.querySelectorAll('a')
event.stopPropagation();

navClk.forEach(link => {
    link.addEventListener('click', (event) => {
        event.target.style.color = 'red';
    });
    link.addEventListener('mouseover', (event) => {
        event.target.style.transform = "scale(2.2)";
        event.target.style.transition = "all 0.3s";// smoth transition effect 
        event.target.style.color = 'yellow'
    });
    link.addEventListener('mouseleave', (event) => {
        event.target.style.transform = "scale(1)"
        event.target.style.transition = "all 0.3s";// smoth transition effect 

    });

});
//body background 

function myFunction2(x) {
    if (x.matches) { // If media query matches
        document.querySelector("body ").style.backgroundColor = "lightBlue";

    } else {

        document.querySelector("body").style.backgroundColor = "dodgerBlue";

    }


}
var x = window.matchMedia("(max-width: 700px)")
myFunction2(x) // Call listener function  'run time'
x.addListener(myFunction2)// Attach listener function  'state changes'
event.stopPropagation();

//bus img

const busImg = document.querySelector("header img")
busImg.addEventListener('dblclick', (event) => {
    event.target.style.border = '3px solid orange'
    event.target.style.borderRadius = '20px'

});





//footer appendChild 

const newAT = document.createElement("H2");                 // Create <> node
var textnode = document.createTextNode("Lambda");          // Create a 'method' node
newAT.appendChild(textnode);                               // Append the text to <>
document.querySelector('footer p').appendChild(newAT);          //  Append child 
