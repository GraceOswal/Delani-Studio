let APIkey = 'ef50c141cfec2b466e42cdaa95b572b9-us3';
$(function () {
let APIkey = 'ef50c141cfec2b466e42cdaa95b572b9-us3';
    let name = $("input#name").val();
    let email = $("input#email").val();
    let message = $("textarea#message").val();

    $("form#form").submit(function(event){
        event.preventDefault();
        if (name.val() && email.val()){
            alert ("Hello " + name + ", Thanks for reaching out...Well get back to you very soon..Enjoy!");
        }
        else {
            alert("Please provide your correct name and email!");
        }
    });

}); 