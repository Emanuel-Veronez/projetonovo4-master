$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");

        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show")
        } else {
            $('.scroll-up-btn').removeClass("show")
        }
    });
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    })

    var typed = new Typed(".typing", {
        strings: ["Estudante", "Desenvolvedor", "Analista de suporte"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
    var typed = new Typed(".typing-2", {
        strings: ["Estudante", "Desenvolvedor", "Analista de suporte"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
    var typed = new Typed(".typing-3", {
        strings: ["Especialidades"],
        typeSpeed: 150,
        backSpeed: 100,
        loop: true
    })
    var typed = new Typed(".typing-4", {
        strings: ["Minha Equipe"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    })
    var typed = new Typed(".typing-5", {
        strings: ["Contato"],
        typeSpeed: 150,
        backSpeed: 100,
        loop: true
    })
    var typed = new Typed(".typing-6", {
        strings: ["Curiosidades"],
        typeSpeed: 150,
        backSpeed: 100,
        loop: true
    })
    var typed = new Typed(".typing-7", {
        strings: ["Sobre"],
        typeSpeed: 150,
        backSpeed: 100,
        loop: true
    })
    var typed = new Typed(".typing-8", {
        strings: ["Bem-vindo"],
        typeSpeed: 150,
        backSpeed: 100,
        loop: true
    })
    var typed = new Typed(".typing-9", {
        strings: ["Emanuel Veronez"],
        typeSpeed: 150,
        backSpeed: 100,
        loop: true
    })


    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }

    })
});