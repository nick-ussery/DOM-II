// Your code goes here

//event 1, click to make image dissapear
const introImg = document.querySelector('.intro img')

introImg.addEventListener('dragend', ()=>{
    console.log('introImg is clicked');
    introImg.style.display = 'none';
})


//event 2 console logs mouse movement
// window.addEventListener("pointermove", event => {
//     event.stopPropagation();
//     console.log(`${event.clientX}, ${event.clientY}`);
//   });


  //event 3 when window changes size, the images dissapear
const allImages = document.querySelectorAll("img");
  window.addEventListener("resize", () => {
    allImages.forEach(img => {
      img.style.visibility = "hidden";
    });
}); 


//event 4 when any key is pressed the background cycles color
var currentColor;
function changeBackground() {
    if(currentColor == null){
        currentColor = 0;
    }else if(currentColor>4){
        currentColor =0;
    }else{
        currentColor ++;
    }
    let colorWheel = ["black", "green", "red", "orange", "blue"];
    return colorWheel[currentColor];
}
const bodyTag = document.querySelector("body");
bodyTag.addEventListener("keydown", ()=> bodyTag.style.backgroundColor = String(changeBackground()));


//event 5 when you scroll lots of things change color
const navigation= document.querySelector('nav');

window.addEventListener("scroll", () => {
  bodyTag.style.color = "blue";
  bodyTag.style.backgroundColor = "pink";
  navigation.style.backgroundColor = "yellow";
  navigation.style.fontSize = "18px";
});



//event 6 when you hover images, they get a border
allImages.forEach(image=>{
  // console.log('images are each given a hover event listener', image)
image.addEventListener('mouseover', ()=>{
  console.log('an image is being hovered over');
  image.style.borderStyle='solid';
  image.style.borderColor = "brown";
  image.style.borderWidth = "3px";
})
})

//event 7 when you stop hovering an image its border disappears

allImages.forEach(image=>{
  image.addEventListener('mouseleave', ()=>{
    image.style.borderWidth= "0px";
  })
})

//event 8 creates an alert when you click a nav item, and a stopDefault to prevent page refresh
const navItem = document.querySelectorAll('nav a');
console.log('all navItems', navItem);
navItem.forEach(link => {
  link.addEventListener("click", event => {
    alert("no worky!");
    event.preventDefault();
  });
});

//event 9 dbl clicking a desination makes ONLY the first destination grow in size
const destinationP = document.querySelectorAll(".destination");
console.log('all destination ptags', destinationP);

destinationP.forEach(pTag =>{
  addEventListener('dblclick',(event) =>{
    event.stopImmediatePropagation();
    pTag.style.transform = "scale(1.2)";
    pTag.style.transition = 'all 0.3s';
  })
})

//event 10 makes header bar change in background color
const header = document.querySelector('.logo-heading');
header.addEventListener("auxclick",(event)=>{
  header.style.transform = "scale(1.2)";
  header.style.transition="all 0.3s"
  header.style.backgroundColor = "red";
  header.style.color = 'green';
})
