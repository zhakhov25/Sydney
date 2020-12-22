$(document).ready(function(){
    $('.nav_burger').click(function() {
        $('#top_header').toggleClass('red_header')
    })
})

$(document).ready(function(){
    $('.nav_burger').click(function() {
        if ($('.logo_img').attr('src') == './img/logo_sydney.png')
            $('.logo_img').attr('src','./img/logo_sydney2.png')
        else
            $('.logo_img').attr('src','./img/logo_sydney.png')    
        })
})

var owl = $('#fleet_carousel').owlCarousel({
    autoplay:true,
    loop:true,
    margin:10,
    navText: [' ', ' '],
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            nav:false,
            items:1
        },
        576:{
            nav:false,
            items:2
        },
        992:{
            nav:false,
            items:3
        },
        1300:{
            items:3,
            nav:true
        }
    },
    onResized: function() {
        owl.trigger('refresh.owl.carousel');
    }
})

$(document).ready(function(){
    $('#testimonials_carousel').owlCarousel({
        autoplay:true,
        loop:true,
        margin:10,
        nav:true,
        navText: [' ', ' '],
        dots: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            576:{
                items:2
            },
            992:{
                items:3
            }
        }
    })
})