function openPOPUP(){ 
 require(["mojo/signup-forms/Loader"], function (L) { L.start({"baseUrl": "mc.us18.list-manage.com", "uuid": "YOUR UUID", "lid": "YOUR LID"})}); 
 document.cookie = "MCPopupClosed=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC"; 
 document.cookie = "MCPopupSubscribed=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
 }

<input type="button" onclick="openPOPUP();" value="Subscribe" id="button-color" class="newslatter-new">

$(function () {
    let desp = $('#desp');
    let desp = $('#desp');
    let devp = $('#devp');
    let devp = $('#devp');
    let prop = $('#prop');
    let prop = $('#prop');
    let destext = $('#destxt');
    let destext = $('#destxt');
    let devtext = $('#devtext');
    let devtext = $('#devtext');
    let protext = $('#protext');
    let protext = $('#protext');
    $(desp).hide();
    $(desp).hide();
    $(devp).hide();
    $(devp).hide();
    $(prop).hide();
    $(prop).hide();
    //Show paragraph content
    //Show paragraph content
    $('.des').on('click', function () {
    $('.des').on('click', function () {
        $('.des').slideUp('slow');
        $('.des').slideUp('slow');
        $(desp).show(400);
        $(desp).show(400);
        $(destext).animate({fontWeight:'bolder',fontSize:'30px'})
        $(destext).animate({fontWeight:'bolder',fontSize:'30px'})
    });
    });
    $('.dev').on('click', function () {
    $('.dev').on('click', function () {
        $('.dev').slideUp('slow');
        $('.dev').slideUp('slow');
        $(devp).show(400);
        $(devp).show(400);
        $(devtext).animate({fontWeight:'bolder',fontSize:'35px'})
        $(devtext).animate({fontWeight:'bolder',fontSize:'35px'})
    });
    });
    $('.pro').on('click', function () {
    $('.pro').on('click', function () {
        $('.pro').slideUp('slow');
        $('.pro').slideUp('slow');
        $(prop).show(400);
        $(prop).show(400);
        $(protext).animate({fontWeight:'bolder',fontSize:'35px'})
        $(protext).animate({fontWeight:'bolder',fontSize:'35px'})
    });
    });


    //Hide paragraph content
    //Hide paragraph content
    $(desp).on('click', function () {
    $(desp, destext).on('click', function () {
        $('.des').slideDown();
        $('.des').slideDown();
        $(desp).hide(400);
        $(desp).hide(400);
        $(destext).animate({fontWeight:'normal',fontSize:'20px'})
        $(destext).animate({fontWeight:'normal',fontSize:'20px'})
    });
    });
    $(devp).on('click', function () {
    $(devp, devtext).on('click', function () {
        $('.dev').slideDown();
        $('.dev').slideDown();
        $(devp).hide(400);
        $(devp).hide(400);
        $(devtext).animate({fontWeight:'normal',fontSize:'20px'})
        $(devtext).animate({fontWeight:'normal',fontSize:'20px'})
    });
    });
    $(prop).on('click', function () {
    $(prop, protext).on('click', function () {
        $('.pro').slideDown();
        $('.pro').slideDown();
        $(prop).hide(500);
        $(prop).hide(500);
        $(protext).animate({fontWeight:'normal',fontSize:'16px'})
        $(protext).animate({fontWeight:'normal',fontSize:'16px'})
    })
    })
    //Overlay images
    //Overlay images
    $('.portimg').hover(function(){
    $('.portimg').hover(function(){
        $('.porttext',this).slideToggle('slow');
        $('.porttext',this).slideToggle('slow');
     }, function(){
     }, function(){
        $('.porttext',this).slideToggle('slow');
        $('.porttext',this).slideToggle('slow');
     });
     });
    //Form Validation
    //Form Validation
        $("form#form").on('submit',function(event){
        $("form#form").on('submit',function(event){
            event.preventDefault();
            event.preventDefault();
            let name = $("input#name").val();
            let name = $("input#name").val();
            let email = $("input#email").val();
            let email = $("input#email").val();
            let message = $("textarea#message").val();
            let message = $("textarea#message").val();
            if ($("input#name").val() && $("input#email").val()){
            if ($("input#name").val() && $("input#email").val()){
                alert ("Hey " + name + ", Thanks for reaching out, we'll get back to you shortly..Enjoy");
                alert ("Hey " + name + ", Thanks for reaching out, we'll get back to you shortly..Enjoy");
                  }
            else {
            else {
                alert("Please provide your correct name and email!");
                alert("Please provide your correct name and email!");
            }
            }
        });
        });
});
});