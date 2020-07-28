$.noConflict();

jQuery(document).ready(($) => {

    const partsContainer = $(".container:last-child").height() / 5;
    /* const scroll = (hauteur, ciblage, coteCheck) => {
        if (window.scrollY > hauteur) {
            if (coteCheck == true) {
                $(ciblage).animate({ right: "0" }, 1000);
            } else {
                $(ciblage).animate({ left: "0" }, 1000);
            }
        }
    }; */

    /* Initialisation AOS */
    AOS.init({
        duration: 2800,
    })

    /* Initialisation scroll pour les slides */
    $(window).on("scroll", () => {
        console.log(window.scrollY);
        /* console.log($("main").outerHeight());

        scroll(350, "#second h3 span", true);
        scroll(750, "#third h3 span", false);
        scroll(1250, "main div:last h3 span", true); */

        let hauteurVideo =
            $("body").outerHeight() -
            $(".container:first-child").outerHeight() -
            $(window).outerHeight();


        /* Initialisation VideoJs */

        const myPlayer = videojs("video_maison").ready(function () {


            if (window.scrollY > $(".container:first-child").outerHeight()) {
                const croix =
                    ((window.scrollY - $(".container:first-child").height()) / hauteurVideo) *
                    this.duration();

                this.currentTime(croix.toFixed(1));
            }
        });

        // console.log($(".container:last-child").height() / 5);
        // console.log($('#slides div'));

        

        for (let i = 0; i < 5; i++) {

            if (window.scrollY > $(".container:first-child").height() + (partsContainer * (i + 1)) && window.scrollY > $(".container:first-child").height() + (partsContainer * (i + 1)) + 100) {
                $('#slides div').css('display', 'none');
                $('#slides div').eq(i).css({'display': 'flex', 'width': `${$('video').width()}`});
            }
            else if (window.scrollY < $(".container:first-child").height() + (partsContainer)) {
                $('#slides div').css('display', 'none');
            }
        }

        /* for (let i = 0; i < 5; i++) {

            if (window.scrollY > $(".container:first-child").height() + (partsContainer * (i + 1)) && window.scrollY > $(".container:first-child").height() + (partsContainer * (i + 1)) + 100) {
                $('#slides div').fadeOut(1000);
                $('#slides div').eq(i).fadeIn(1000);
            }
        } */

    });
});


