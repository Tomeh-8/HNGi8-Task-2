$(document).ready(() => {
  // toggle menu/navbar script
  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

//text animation
var typed = new Typed(".type-animate-1", {
    strings: ["Hi, my name is"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});

  $("#form").on("submit", (e) => {
     let name = $("#form .Name");
     let email = $("#form .Email");
     let message = $("#form .Message");

     let userInfo = {
         name: name.val(),
         email: email.val(),
         message: message.val()
     };

     $.ajax({
        type: "POST",
        url: "/",
        data: userInfo,
        success: function(){
            location.reload();
            alert(`Hello ${userInfo.name}! your message has been successfully sent. I will get back in touch with you soon! Have a great day!`);
        }
    });
    return false;
  });
});