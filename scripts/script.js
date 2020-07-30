$.noConflict();

jQuery(document).ready(($) => {

    const partsContainer = $("#deuxieme").height() / ($('#slides div').length + 1);

    /* ------------- Initialisation AOS ------------- */
    AOS.init({
        duration: 1000,
    })

    /* Règles CSS dynamiques */
    $('p#swipe').css('top', $('header').outerHeight() + 10);
    // $('video').css({ 'width': $('#premier div').width(), 'left' : `calc( (100% - ${$('#premier div').width()}) /2 )` });


    /* Apparition "Faites défiler" */
    setTimeout(() => {
        $('p#swipe').fadeIn(1000);
    }, 3000)


    /* ------------- Initialisation scroll ------------- */
    $(window).on("scroll", () => {
        // console.log(window.scrollY);

        $('.vjs-loading-spinner').css('display', 'none');

        if (window.scrollY > $('header').outerHeight()) {
            $('p#swipe').fadeOut(1000);
        }
        /* console.log($("main").outerHeight());

        scroll(350, "#second h3 span", true);
        scroll(750, "#third h3 span", false);
        scroll(1250, "main div:last h3 span", true); */

        let hauteurVideo =
            $("body").outerHeight() -
            $("#premier").outerHeight() -
            $("#troisieme").outerHeight() -
            $(window).outerHeight();


        /* ------------- Initialisation VideoJs ------------- */

        const myPlayer = videojs("video_maison").ready(function () {
            const croix =
                ((window.scrollY - $("#premier").height()) / hauteurVideo) *
                this.duration();

            this.currentTime(croix.toFixed(1));

        });

        if (window.scrollY > $("#premier").outerHeight() && window.scrollY < $("main").outerHeight() - $('#troisieme').outerHeight() - $('footer').outerHeight() - 400) {
            $('.parent-video').css({ 'opacity': '1' });

        }
        else {
            $('.parent-video').css({ 'opacity': '0' });

        }


        /* for (let i = 0; i < 5; i++) {

            if (window.scrollY > $("#premier").height() + (partsContainer * (i + 1)) && window.scrollY > $("#premier").height() + (partsContainer * (i + 1)) + 100) {
                $('#slides div').css('display', 'none');
                $('#slides div').eq(i).css({ 'display': 'flex', 'width': `${$('video').width()}` });
            }
            else if (window.scrollY < $("#premier").height() + (partsContainer)) {
                $('#slides div').css('display', 'none');
            }
        } */

        for (let i = 0; i < 5; i++) {

            if (window.scrollY > $("#premier").height() + (partsContainer * (i + 1)) && window.scrollY > $("#premier").height() + (partsContainer * (i + 1)) + 100) {

                $('#slides div').each((j, e) => {
                    if (j == i) {
                        $(e).css({ 'opacity': '0.9' });
                    } else {
                        $(e).css({ 'opacity': '0' });
                    }
                });
            }
            else if (window.scrollY < $("#premier").height() + (partsContainer)) {
                $('#slides div').css({ 'opacity': '0' });

            }
        }

    });
});


