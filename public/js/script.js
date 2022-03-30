

$(document).ready(function () {
    $(".container, .scrollbtn").css('display', "none");
    $(".content-2, .content-3").css('display', "none");
    setTimeout(() => {
        $(".container, .scrollbtn").fadeIn(1000);
    }, 300);
    
    $(".aboutbtn").on("click", function () {
        window.location = "./about.html";
    })
    
    $(".resumebtn").on("click", function () {
        window.location = "./resume.html";
    })
    
    $(".workbtn").on("click", function () {
        window.location = "./work.html";
    })

    $(".contentbtn-vue-website").on("click", function () {
        window.open("https://kimphakai.github.io/vue/");
    })
    $(".contentbtn-vue-github").on("click", function () {
        window.open("https://github.com/KimphaKai/vue/tree/main/");
    })
    $(".contentbtn-php-website").on("click", function () {
        window.open("https://github.com/KimphaKai");
    })
    $(".contentbtn-php-github").on("click", function () {
        window.open("https://github.com/KimphaKai");
    })
    $(".contentbtn-sweetbakery-website").on("click", function () {
        window.open("https://github.com/KimphaKai/sweetBakery");
    })
    $(".contentbtn-sweetbakery-github").on("click", function () {
        window.open("https://github.com/KimphaKai/sweetBakery");
    })


    $(".scrollbtn-1").mouseenter(function () {
        $(".scrollbtn-1").css("background-color", "#212940");
        $(".scrollbtn-2").css("background-color", "#f2f2f2");
        $(".scrollbtn-3").css("background-color", "#f2f2f2");
        $(".content-2, .content-3").fadeOut(700);
        setTimeout(() => {
            $(".content-1").fadeIn(700);
        }, 700);
    })

    $(".scrollbtn-2").mouseenter(function () {
        $(".scrollbtn-1").css("background-color", "#f2f2f2");
        $(".scrollbtn-2").css("background-color", "#212940");
        $(".scrollbtn-3").css("background-color", "#f2f2f2");
        $(".content-1, .content-3").fadeOut(700);
        setTimeout(() => {
            $(".content-2").fadeIn(700);
        }, 700);
    })

    $(".scrollbtn-3").mouseenter(function () {
        $(".scrollbtn-1").css("background-color", "#f2f2f2");
        $(".scrollbtn-2").css("background-color", "#f2f2f2");
        $(".scrollbtn-3").css("background-color", "#212940");
        $(".content-1, .content-2").fadeOut(700);
        setTimeout(() => {
            $(".content-3").fadeIn(700);
        }, 700);
    })


    
})