let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let mostrarSlides =()  => {
       for (let i = 0;i<slides.length;i++) {
        slides[i].style.display = "none";
        slideIndex++;
       }
       if(slideIndex > slides.length) {slideIndex = 1}
       slides[slideIndex-1].style.display = "block";
       setTimeout(mostrarSlides,3500);
       
}

let izqSlide = () =>{
    for (let i = 0;i<slides.length;i++) {
        slides[i].style.display = "none";
       }
       slideIndex--;
       if(slideIndex > slides.length) {slideIndex = 1}
       if(slideIndex == 0) {slideIndex =3}
       slides[slideIndex-1].style.display = "block";
       console.log(slideIndex);
}
let derSlide = () =>{
    for (let i = 0;i<slides.length;i++) {
        slides[i].style.display = "none";
       }
       slideIndex++;
       if(slideIndex > slides.length) {slideIndex = 1}
       slides[slideIndex-1].style.display = "block";
       console.log(slideIndex);
}
mostrarSlides();