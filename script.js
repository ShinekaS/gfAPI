fetch("http://127.0.0.1:3000/pet")
.then(res => res.json())
.then(data => {  
    console.log(data); 
})
////Pet ID page is not displaying,

// fetch("http://127.0.0.1:3000/pet/id")
// .then(res => res.json())
// .then(data => {   
// })

fetch("http://127.0.0.1:3000/users")
.then(res => res.json())
.then(data => {   
 })

// Introduction paragraph at the top of the home page

document.getElementById('top-paragraph').innerHTML= "Welcome to Pet Place. Here are at the Pet Place, we invite you to a new experience with pet rentals.  Studies have shown that pets can help boost moral and uplift one spirit especially if they are ill and recoving. This pet rental service is ideal for those in need of this service but not looking to own a pet long term.";

// DOM objects for Pet selection (from image)
let dog =document.querySelector('.pic-1');
console.log(dog)
let cat =document.querySelector('.pic-2');
let bird =document.querySelector('.pic-3');
let reptile =document.querySelector('.pic-4');
let other =document.querySelector('.pic-5');

dog.addEventListener("click",() => {
   fetch("http://127.0.0.1:3000/pet")
   console.log(dog);
} );
cat.addEventListener("click",() =>{
    fetch("http://127.0.0.1:3000/pet")
    console.log(cat);
} );
bird.addEventListener("click",() =>{
    fetch("http://127.0.0.1:3000/pet")
    console.log(bird);
} );
reptile.addEventListener("click",() =>{
    fetch("http://127.0.0.1:3000/pet")
    console.log(reptile);
} );
other.addEventListener("click",() =>{
    fetch("http://127.0.0.1:3000/pet")
    console.log(other);
} );

// DOM for pet selections ends here

// Adding more to main images

const ACTIVECLASS = 'active';
const IMAGES = document.querySelectorAll('.slider');

IMAGES[0].classList.add(ACTIVECLASS);

function removeActiveClass() {
    const elm = document.querySelector(`.${ACTIVECLASS}`);
    if (elm){
        elm.classList.remove(ACTIVECLASS);
    }
}

function addClass($event){
    $event.stopPropagation();
    removeActiveClass();
    const target = $event.currentTarget;
    target.classList.add(ACTIVECLASS);
}

IMAGES.forEach(image => {
    image.addEventListener('click', addClass);
});