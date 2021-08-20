$(document).ready(() => {

  $("#form").on("submit", (e) => {
     let name = $("#form .name");
     let email = $("#form .email");
     let message = $("#form .message");

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