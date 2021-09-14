$(document).ready(function(){
    $("#pdesign").click(function(){
      $("#pdesign").hide();
      $("#pdesign2").show();
  });
  $("#pdesign2").click(function(){
    $("#pdesign2").slideUp();
    $("#pdesign").slideDown();
  });
  });
  
  $(document).ready(function(){
    $("#pdevelopment").click(function(){
      $("#pdevelopment").hide();
      $("#pdevelopment2").show();
  });
  $("#pdevelopment2").click(function(){
    $("#pdevelopment2").slideUp();
    $("#pdevelopment").slideDown();
  });
  });
  $(document).ready(function(){
    $("#product").click(function(){
      $("#product").hide();
      $("#product2").show();
  });
  $("#product2").click(function(){
    $("#product2").slideUp();
    $("#product").slideDown();
  });
  });
///////
  $(document).ready(function(){
    $("#mouse_click_1").mouseover(function(){
      $("#mouse_click_1").slideUp(1000);
    }).mouseout(function(){
      $("#mouse_click_1").slideDown(1500);
    });
  });
  $(document).ready(function(){
    $("#dribble_1").mouseover(function(){
      $("#dribble_1").slideUp(500);
    }).mouseout(function(){
      $("#dribble_1").slideDown(500);
    });
  });
  $(document).ready(function(){
    $("#facebook_1").mouseover(function(){
      $("#facebook_1").slideUp(500);
    }).mouseout(function(){
      $("#facebook_1").slideDown(500);
    });
  });
  $(document).ready(function(){
    $("#g_plus_1").mouseover(function(){
      $("#g_plus_1").slideUp(500);
    }).mouseout(function(){
      $("#g_plus_1").slideDown(500);
    });
  });
  $(document).ready(function(){
    $("#skype_1").mouseover(function(){
      $("#skype_1").slideUp(500);
    }).mouseout(function(){
      $("#skype_1").slideDown(500);
    });
  });
  $(document).ready(function(){
    $("#behance_1").mouseover(function(){
      $("#behance_1").slideUp(500);
    }).mouseout(function(){
      $("#behance_1").slideDown(500);
    });
  });
  $(document).ready(function(){
    $("#twitter_1").mouseover(function(){
      $("#twitter_1").slideUp(500);
    }).mouseout(function(){
      $("#twitter_1").slideDown(500);
    });
  });
  $(document).ready(function(){
    $("#pinterest_1").mouseover(function(){
      $("#pinterest_1").slideUp(500);
    }).mouseout(function(){
      $("#pinterest_1").slideDown(500);
    });
  });
  $(document).ready(function(){
    $("#flickr_1").mouseover(function(){
      $("#flickr_1").slideUp(500);
    }).mouseout(function(){
      $("#flickr_1").slideDown(500);
    });
  });
  $(document).ready(function(){
    $("#stumble_upon_1").mouseover(function(){
      $("#stumble_upon_1").slideUp(500);
    }).mouseout(function(){
      $("#stumble_upon_1").slideDown(500);
    });
  });
//////
  $(document).ready(function(){
    $("#gray_background").mouseover(function(){
      $("#white_front0").slideDown(3000);
    }).mouseout(function(){
        $("#white_front0").slideUp(5000);
    });
    $("#ontario").mouseover(function(){
      $("#white_front1").slideDown(3000);
    }).mouseout(function(){
        $("#white_front1").slideUp(5000);
    });
 });
 $(document).ready(function(){
    $("#orange_brown").mouseover(function(){
      $("#white_front2").slideDown(3000);
    }).mouseout(function(){
        $("#white_front2").slideUp(5000);
    });
    $("#jim_carey_").mouseover(function(){
      $("#white_front3").slideDown(3000);
    }).mouseout(function(){
        $("#white_front3").slideUp(5000);
    });
 });
 $(document).ready(function(){
    $("#work5_1").mouseover(function(){
      $("#white_front4").slideDown(3000);
    }).mouseout(function(){
        $("#white_front4").slideUp(5000);
    });
    $("#work6_1").mouseover(function(){
      $("#white_front5").slideDown(3000);
    }).mouseout(function(){
        $("#white_front5").slideUp(5000);
    });
    $("#work7_1").mouseover(function(){
      $("#white_front6").slideDown(3000);
    }).mouseout(function(){
        $("#white_front6").slideUp(5000);
    });
    $("#work8_1").mouseover(function(){
      $("#white_front7").slideDown(3000);
    }).mouseout(function(){
        $("#white_front7").slideUp(5000);
    });
 });

//////////////////////////////////////

    $("form#form").on('submit',function(event){
      event.preventDefault();
      let name = $("input#name_box").val();
      let email = $("input#email___").val();
      let message = $("textarea#your_message_here___").val();

      if ($("input#name_box").val() && $("input#email___").val()){
          swal("Thankyou!" + name + "", "Message Sent", "success");
          alert("Thankyou for your feedback" + "", name)
      }
  });

////////////////////////////////////////
  function nameValidation(){
    let name = document.getElementById("name_box").value;
    if(name == "")
    swal("Please input field"," ", "error");
    return false;
} 
function emailValidation(){
    let email = document.getElementById("email___").value;
    if(email == "")
    swal("Please input field"," ","error");
    return false;
} 
function textValidation(){
    let text = document.getElementById("your_message_here___").value;
    if(text == "")
    swal("Please input field"," ","error");
    return false;
} 