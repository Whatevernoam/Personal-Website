"use strict";

function getPage(url, idname) {
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (xhr.readyState === 4 && xhr.status === 200) {
  
   var mean = JSON.parse(xhr.responseText);
    console.log(mean.length)
    if(mean) {
      
    var names = [];
    for (var i = 0; i < mean.length; i++) {
      names.push(mean[i].title.toLowerCase());
    }
    }
    console.log(names);
   
    document.getElementById('exampleModalLabel').innerHTML = mean[names.indexOf(idname)].title;
    document.getElementById('modal-body').innerHTML = mean[names.indexOf(idname)].content;

	}
};
xhr.open('Get', url, true);
xhr.send();
}
/***** utilities above *****/


var getMongo = function () {
  getPage("mean.json", "mongodb");
  
}

var getExpress = function () {
  getPage("mean.json", "express");
  
}

var getAngular = function () {
  getPage("mean.json", "angular");
  
}

var getNodejs = function () {
  getPage("mean.json", "nodejs");
  
}


$(document).ready(function () {

  $(".skill").click(function () {
    $("#mongodb").css({
      "boxShadow": "0px 0px 10px 1px rgba(0,128,0,1)"
    });
  });

  $("#mongodb").mouseleave(function () {
    $("#mongodb").css({
      "boxShadow": "0px 0px 0px 0px rgba(0,128,0,0)"
    });
    
  });   
  
  $("#mongodb").click(getMongo);
  $("#express").click(getExpress);
  $("#angular").click(getAngular);
  $("#nodejs").click(getNodejs);
  
});


$( window ).scroll(()=> {
  $( "#go-top" ).show();
  console.log(document.body.scrollTop)
  if ( document.body.scrollTop === 0) {
    $( "#go-top" ).hide();
  }
});
         

//$(window).mousemove(() => {
//  $("header").css("display", "none").fadeOut("slow");
//})

