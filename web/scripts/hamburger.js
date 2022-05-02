window.onload = function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    // const arrowBtn = document.querySelector(".fa-circle-chevron-down");
    // const faqContent = document.querySelector("#item-content");
    // arrowBtn.addEventListener("click", showContent);

    // function showContent() {
    //     faqContent.classList.toggle("hide");
    // }

    // $(document).ready(function () {

    //     $('.fa-circle-chevron-down').click(function () {

    //         if ($(this).parent().is('.show')) {
    //             $(this).closest('.faq-item').find('.item-content-container').animate({ 'height': '0' }, 500);
    //             $(this).closest('.faq-item').removeClass('show');

    //         } else {
    //             const newHeight = $(this).closest('.faq-item').find('#item-content').height() + 'px';
    //             $(this).closest('.faq-item').find('.item-content-container').animate({ 'height': newHeight }, 500);
    //             $(this).closest('.faq-item').addClass('show');
    //         }
    //     });
    // });

    // const faqBtn = document.querySelector(".fa-circle-chevron-down");
    // const faqItem = document.querySelector(".faq-item");
    // const faqContent = document.querySelector("#item-content");
    // const faqContentContainer = document.querySelector(".item-content-container");

    // faqBtn.addEventListener("click", showContent);

    // function showContent() {
    //     if (faq)
    // }
}