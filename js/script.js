let left=document.querySelector(".left");
let right=document.querySelector(".right");
let imagesrc=document.querySelector(".image");
let titleh1=document.querySelector(".title");
let textp=document.querySelector(".texet");
let display=document.querySelector(".menu-toggle");
let showlist=document.querySelector(".list ul");
console.log('sssssssss');

display.addEventListener("click", () => {
    showlist.classList.toggle("show");
    // Toggle the icon based on whether the list is shown or hidden
    if (showlist.classList.contains("show")) {
        display.src = "../images/icon-close.svg";
    } else {
        display.src = "../images/icon-hamburger.svg";
    }
});

// Add event listener to remove "show" class when icon is clicked again to close the list
display.addEventListener("click", () => {
    if (!showlist.classList.contains("show")) {
        showlist.classList.remove("show");
    }
});

const slider=[
    {
        image :"../images/desktop-image-hero-1.jpg",
        title:" Discover innovative ways to decorate",
        text :" We provide unmatched quality, comfort, and style for property owners across the country.  Our experts combine form and function in bringing your vision to life. Create a room in your    own style with our collection and make your property a reflection of you and what you love."
    }, 
    {
        image :"../images/desktop-image-hero-2.jpg",
        title:"  We are available all across the globe",
        text :"  With stores all over the world, it's easy for you to find furniture for your home or place of business.  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our   store locator. Any questions? Don't hesitate to contact us today."
    }, 
       {
        image :"../images/desktop-image-hero-3.jpg",
        title:"  Manufactured with the best materials",
        text :"  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology  to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]
let counter =0;

left.addEventListener("click", () => {
    changeSlide("left");
  });
  
  right.addEventListener("click", () => {
    changeSlide("right");
  });
  
  function changeSlide(direction) {
    // Reset text color
    left.style.color = "white";
    right.style.color = "white";
  
    // Update counter based on direction
    if (direction === "left") {
      counter = (counter - 1 + slider.length) % slider.length;
    } else {
      counter = (counter + 1) % slider.length;
    }
  
    // Update slider content
    imagesrc.src = slider[counter].image;
    titleh1.innerHTML = slider[counter].title;
    textp.innerHTML = slider[counter].text;
  }