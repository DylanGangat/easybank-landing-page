const toggleBtn = document.querySelector('.toggle-menu');
const overlay = document.querySelector('.overlay');
const hamburger = document.querySelector('.hamburger-icon');
const close = document.querySelector('.close-icon');

toggleBtn.addEventListener('click', e => {
    overlay.classList.toggle('show');

    if(e.target.parentElement.classList.contains('hamburger-icon')) {
        console.log(e.target);
        close.classList.remove('hidden');
        hamburger.classList.add('hidden');
    } else {
        console.log(e.target);
        hamburger.classList.remove('hidden');
        close.classList.add('hidden');
    }
});

overlay.addEventListener('click', e => {
    if(e.target.classList.contains('overlay')) {
        overlay.classList.remove('show');
    }   
});