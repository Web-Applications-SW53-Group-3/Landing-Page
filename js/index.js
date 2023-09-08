let btnArriba = document.getElementById('up');
btnArriba.style.display = 'none';

window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
      btnArriba.style.display = 'block';
    } else {
      btnArriba.style.display = 'none';
    }
});

let btnRegresarArriba = document.getElementById('up');