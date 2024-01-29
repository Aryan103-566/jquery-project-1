$(function(){


// NAVBAR STARTS HERE //
let navbar = $('.navbar')
$(window).scroll(function(){
    let scrTop  = $(window).scrollTop() 

    if(scrTop > 200){
        navbar.addClass('fixed')
    } 
    
    else{
        navbar.removeClass('fixed')
    }
})
// NAVBAR ENDS HERE //


// FAQ STARTS HERE //
let faq = $('#faqWrapper .faq')

faq.click(function () {
     if($(this).hasClass('active')){
        $(this).removeClass("active");
     } 
     
     else{
         faq.removeClass('active')
         $(this).addClass('active')
     }
});
// FAQ ENDS HERE //


// PRE-LOADER STARTS HERE //
let preLoader = $('.preLoader')
    $(window).on('load',function(){
        preLoader.fadeOut(200)
    })
// PRE-LOADER ENDS HERE //


})