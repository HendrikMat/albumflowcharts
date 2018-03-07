function unhide(divID) {

  var item = document.getElementById(divID);

  if (item) {

    item.className = (item.className == "hidden") ? "unhidden" : "hidden";

  }
}
$('.firstgenbtn').click(() => {
  $('html, body').animate({
    scrollTop: $('.firstgenbtn').offset().top
  }, 1000);
});

$('.secondgenbtn').click(() => {
  $('html, body').animate({
    scrollTop: $('#btntxt2').offset().top
  }, 1000);
});

$('.thirdgenbtn').click(() => {
  $('html, body').animate({
    scrollTop: $('#btntxt3').offset().top
  }, 1000);
});

$('.fourthgenbtn').click(() => {
  $('html, body').animate({
    scrollTop: $('#btntxt4').offset().top
  }, 1000);
});

function unhidebtn1(divID) {

  var item = document.getElementById(divID);

  if (item) {

    item.className = (item.className == "hidden") ? "unhidden" : "hidden";
    $(".firstgenbtn").prop('disabled', true);
  }
}

function unhidebtn2(divID) {

  var item = document.getElementById(divID);

  if (item) {

    item.className = (item.className == "hidden") ? "unhidden" : "hidden";
    $(".secondgenbtn").prop('disabled', true);
  }
}

function unhidebtn3(divID) {

  var item = document.getElementById(divID);

  if (item) {

    item.className = (item.className == "hidden") ? "unhidden" : "hidden";
    $(".thirdgenbtn").prop('disabled', true);
  }
}

function unhidebtn4(divID) {

  var item = document.getElementById(divID);

  if (item) {

    item.className = (item.className == "hidden") ? "unhidden" : "hidden";
    $(".fourthgenbtn").prop('disabled', true);
  }
}
