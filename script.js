 $("button").click(function(e){ 
  e.preventDefault();
  $.ajax({
        url: 'http://localhost:5005/webhooks/rest/webhook',
        type: "POST",
        data: JSON.stringify({"sender":"default","message":$('input').val()}),
        dataType: 'json',
        contentType: 'application/json;charset=UTF-8',
        success: function (response) { 
          //for(var i = 0; i <response.length;i+=1){   
            console.log(JSON.stringify(response))
          for(var i = 0; i <response.length;i+=1){   
          //}
        $('#right').append("<li style='border:1px solid white;padding:50px 30px 40px 30px;background-color:blue;border-radius:70px;color:white;font-size:25px'>" + $('input').val() + "</li>" + "<br>" + "<li style='border:1px solid white;padding:50px 30px 40px 30px;background-color:grey;border-radius:70px;font-size:25px'>" + JSON.stringify(response[i].text) + "</li>" +  "<br>")
        $("#right").append("<li class='btn' style='padding:50px 30px 40px 30px;border-radius:70px;font-size:25px;color:blue'>"  + response[i].buttons[0].title + "</li>")
        $("#right").append("<li class='btn' style='padding:50px 30px 40px 30px;border-radius:70px;font-size:25px;color:blue'>"  +  response[i].buttons[1].title + "</li>")
        $("#right").append("<li class='btn' style='padding:50px 30px 40px 30px;border-radius:70px;font-size:25px;color:blue'>"  + response[i].buttons[2].title +  "</li>") 
        $("#right").append("<li class='btn' style='padding:50px 30px 40px 30px;border-radius:70px;font-size:25px;color:blue'>"  +  response[i].buttons[3].title +  "</li>")
        $("#right").append("<li><img src=" + response[i].image + "></li>")

          }
          }
        })
  })
    function init(){
    $("#right").html("<li style='border:1px solid white;padding:50px 30px 40px 30px;background-color:grey;border-radius:70px;font-size:25px'>" + '<p> Hello visitor!. I am StripeBot your stripe assistant. To begin your stripe journey type start.' + "</li>" + "<br>")
}
