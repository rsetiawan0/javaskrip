var sticky_closed = false;
  $(window).scroll(function(){
    if(!sticky_closed){
      var docScroll = $(document).scrollTop();
      if(docScroll <=90){
        $(".sticky-footer").slideUp();
      }else{
        $(".sticky-footer").slideDown();
      }
    }
  });
  $(".sticky-close").on('click',function(){
    footer = $(this).parent('.sticky-footer');
    footer.slideToggle();
    sticky_closed = true;
  });
