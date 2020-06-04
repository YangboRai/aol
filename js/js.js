

var serv = document.getElementById('services');


document.onscroll = function(){
	var prevScrollpos =  serv.offsetTop;
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    document.getElementById("fixed-nav-list").style.top = "0px";
  } else {
    document.getElementById("fixed-nav-list").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



let t = document.getElementById('analysis-text');

let analysisCont = document.getElementById('analysis-container');
let analysisTop = document.getElementById('analysis-top');
let anlysisRight = document.getElementById('analysis-right-line');
let analysistext = document.getElementById('analysis-text');




t.addEventListener("mouseover",function(event){
	analysisCont.style.visibility = 'visible';
	analysisTop.classList.add('top-animate');
	anlysisRight.classList.add('right-animate');
	analysistext.classList.add('add-analysis-text');
})


t.addEventListener("mouseout",function(event){

	analysisCont.style.visibility = 'visible';
	analysisTop.classList.remove('top-animate');
	analysisTop.classList.add('reset-top');
	anlysisRight.classList.remove('right-animate');
	analysistext.classList.remove('add-analysis-text');

})


function displayList(){
	let burger = document.getElementById('burger');
	let navList = document.getElementById('navList');
	let navLine = document.getElementById('navLine');
	let lineBefore = document.getElementById('lineBefore');
	let lineAfter = document.getElementById('lineAfter');

	navLine.classList.toggle('nav-line-click');
	lineBefore.classList.toggle('nav-line-before-click');
	lineAfter.classList.toggle('nav-line-after-click');
	burger.classList.toggle('burger-click');
	navList.classList.toggle('nav-list-click');
}

	

function loading(){
	let load = document.getElementById('load');
	var timer = setTimeout(loader,1000);


	function loader(){
			load.style.display = "none";
	}

}


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

