let slider = document.querySelector('.slider');
let cajaTestimonio = document.querySelectorAll('.cont-slider');

let contador = 1;

// let tamanoWidth =  cajaTestimonio[0].clientWidth;
let tamanoWidth = 100;
let intervalo = 3000;

setInterval(() => {
    slides();
}, intervalo)


// window.addEventListener('resize', function(){
//     tamanoWidth =  cajaTestimonio[0].clientWidth;
// })
window.addEventListener('resize', function(){
    tamanoWidth = 100;
})

const slides = () => {
    slider.style.transition = 'transform 1s';
    slider.style.transform = 'translateX('+(-tamanoWidth*contador) + '%)';
    contador++;
    if(contador === cajaTestimonio.length){
        contador = 0;
        setTimeout(function(){
            slider.style.transform = 'translateX(0)';
            slider.style.transition = 'transform 0s';
        }, intervalo);
    }
}
