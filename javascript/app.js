// Dia um
let btnOne = document.querySelector('#btn1');
let articleOne = document.querySelector('#article-one');


btnOne.addEventListener('click', function() {
    articleOne.classList.toggle('hide');
});