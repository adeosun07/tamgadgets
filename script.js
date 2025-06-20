var myMenu = document.querySelector(".menu-icon");
var dropdown = document.querySelector(".dropdown");
myMenu.addEventListener('click', function(event){
    dropdown.classList.toggle("show-dropdown");
    event.stopPropagation();
})
window.addEventListener('click', ()=>{
    dropdown.classList.remove('show-dropdown');
})

/*Script for the flip card in the services page*/
var cards = document.querySelectorAll(".flip-container");

for (i = 0; i < cards.length; i++){
   cards[i].addEventListener('click', function (){
    this.classList.toggle('clicked');
   })
}

/* script for the team page */
var teamContainer = document.querySelectorAll(".tcontainer");

for(i=0; i < teamContainer.length; i++){
    teamContainer[i].addEventListener('click', function(){
        this.classList.add('zoomed');

        setTimeout(() => {
            this.classList.remove('zoomed');
        }, 300);
})
}

//Styling for the fade in
var fadeIn = document.querySelectorAll('.fade-in');


function handleScroll(){
    for(i=0; i<fadeIn.length; i++){
        var position = fadeIn[i].getBoundingClientRect();
        var isVisible = position.top < window.innerHeight - 100;
        if(isVisible){
            fadeIn[i].classList.add('fade-in-visible');
        }else{
            fadeIn[i].classList.remove('fade-in-visible');
        }
    }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

var images= document.querySelectorAll('img');

function lazyload(){
    for(i=0; i<images.length; i++){
        images[i].setAttribute('loading', 'lazy');
    }
}

window.addEventListener('load', lazyload);
