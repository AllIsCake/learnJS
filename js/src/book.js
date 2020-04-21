$(document).ready(function() {
    $('.menu__title').click(function (e) { 
        $('.menu__title').not($(this)).removeClass('active');
        $('.menu__links').not($(this).next()).slideUp(300);
        $(this).toggleClass('active').next().slideToggle(300);
    });
    $('.task__btn').click(function (e) { 
        $(this).prev().prev().slideToggle(300);
        if ($(this).html() == 'Решение') {
            $(this).html('Скрыть');
        } else {
            $(this).html('Решение');
        }
    });
    $('.burger__wrapper').click(function (e) {
        $('.burger__wrapper, .map__ghost, .map, .main__wrapper, body').toggleClass('active')
    })
})
let gameBlock = document.querySelector('.game');
//fetching files
let request = (url) => {
    if (url === 'https://raw.githubusercontent.com/AllIsCake/learnJS/master/flies/forBegining/intro.txt') {
        gameBlock.style.display = 'block'
    } else {
        gameBlock.style.display = 'none'
    }
    document.querySelector('.main__content').innerHTML = `<div class="loading_circle"></div>`;

    let xhr = new XMLHttpRequest();

    xhr.open('GET', url );
    
    xhr.responseType = 'text';
    
    xhr.send();
    
    xhr.onload = function() {
        if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
            document.querySelector('.main__content').innerHTML = ` <h1 class="main__error">error</h1>
            <img src="https://www.meme-arsenal.com/memes/49dd6e7eb126d91b0f3b46d0891ac63c.jpg" alt="" style="width: 0px; display: block; margin: 0 auto;">`;
            console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else { // если всё прошло гладко, выводим результат        
            let responseObj = xhr.response;
            document.querySelector('.main__content').innerHTML = responseObj;
        }
    };
    lazyLoad();
} 


document.addEventListener("DOMContentLoaded", () => {
    request( document.cookie || 'https://raw.githubusercontent.com/AllIsCake/learnJS/master/flies/forBegining/intro.txt');
});


let fetchButtons = document.querySelectorAll('.menu__links-item');
console.log(fetchButtons)
for (let i = 0; i < fetchButtons.length; i++) {
    fetchButtons[i].addEventListener("click", function() {
        request(fetchButtons[i].getAttribute('contentData'));
        document.cookie = fetchButtons[i].getAttribute('contentData');
        if (window.innerWidth < 1200) {
            $('.burger__wrapper, .map__ghost, .map, .main__wrapper, body').toggleClass('active')
        }
    });
}
