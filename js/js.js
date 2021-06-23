let li = document.querySelectorAll('.main-nav__list');
let tabContent = document.querySelectorAll('.tab-content');
li[0].classList.add('active');

function item(e, item) {
    let i;
    for (i = 0; i < li.length; i++) {
        tabContent[i].style.display = 'none';
        li[i].classList.remove('active');
    }

    document.getElementById(item).style.display = 'block';
    e.currentTarget.classList.add('active');


}

// MODAL=========
let body = document.querySelector("body");
let modal = document.querySelector('#myModal');
let modalButton = document.querySelector("#modalBtn");
let closeTheModal = document.querySelector(".close");

modalButton.addEventListener('click', function () {
    modal.style.display = "block";
    body.style.overflow = "hidden";
});

closeTheModal.addEventListener('click', function () {
    modal.style.display = "none";
    body.style.overflow = "auto";
});

window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "auto";
    }
});



// GAMBURGER=========
$(function () {
    $('.menu-burger').on('click', function () {
        $('.navigation, .social').slideToggle("slow", function () {
            if ($(this).css('display') === "none") {
                $(this).removeAttr('style');
            }
        });
    });
});