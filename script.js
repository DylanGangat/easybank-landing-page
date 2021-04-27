console.log('Hello World');
const toggleBtn = document.querySelector('.toggle-menu');
const overlay = document.querySelector('.overlay');
const hamburger = document.querySelector('.hamburger-icon');
const close = document.querySelector('.close-icon');

toggleBtn.addEventListener('click', e => {
    overlay.classList.toggle('show');

    if(e.target.parentElement.classList.contains('hamburger-icon')) {
        close.classList.remove('hidden');
        hamburger.classList.add('hidden');
    } else {
        hamburger.classList.remove('hidden');
        close.classList.add('hidden');
    }

    // if(e.target.parentElement.classList.contains('hamburger-icon')) {
    //     close.classList.remove('hidden');
    //     hamburger.classList.add('hidden');
    // };

    // if(e.target.parentElement.classList.contains('close-icon')) {
    //     hamburger.classList.remove('hidden');
    //     close.classList.add('hidden');
    // };

    // console.log(e.target.parentElement);
});