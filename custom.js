
    $(window).scroll(function(){
        if($(window).scroll < -100){
            $('.navigation').addClass(show);
        }
        else{
            $(".navigation").removeClass(show);
        }
    })





  
   $(".faq-box .qus-ans1").click(function(){
        $('.qus-ans1 .ans p').toggle(200);
        $(".qus-ans1 .pluse").children('span').fadeToggle();
    });

    $(".faq-box .qus-ans2").click(function(){
        $('.qus-ans2 .ans p').toggle(200);
        $(".qus-ans2 .pluse").children('span').fadeToggle();
    });
      $(".faq-box .qus-ans3").click(function(){
        $('.qus-ans3 .ans p').toggle(200);
        $(".qus-ans3 .pluse").children('span').fadeToggle();
    });
    $(".faq-box .qus-ans4").click(function(){
        $('.qus-ans4 .ans p').toggle(200);
        $(".qus-ans4 .pluse").children('span').fadeToggle();
    });
    
    $(".faq-box .qus-ans5").click(function(){
        $('.qus-ans5 .ans p').toggle(200);
        $(".qus-ans5 .pluse").children('span').fadeToggle();
    });
     $(".faq-box .qus-ans6").click(function(){
        $('.qus-ans6 .ans p').toggle(200);
        $(".qus-ans6 .pluse").children('span').fadeToggle();
    });

   $(".faq-box .qus-ans7").click(function(){
        $('.qus-ans7 .ans p').toggle(200);
        $(".qus-ans7 .pluse").children('span').fadeToggle();
    });








    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        nav:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            770:{
                items:2
            },            
         
            1200:{
                items:3
            }
        }
    });
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });