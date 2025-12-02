let slideIndex = 0;
showSlides(); // This starts the loop when the page loads

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // 1. Hide all the images first
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // 2. Move to the next slide
  slideIndex++;
  
  // 3. THIS IS THE LOOP: If we reach the end, go back to the start
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  // 4. Reset all dots to gray
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // 5. Show the current image and highlight the dot
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
  // 6. Repeat this function every 2 seconds (2000ms)
  setTimeout(showSlides, 2000); 
}