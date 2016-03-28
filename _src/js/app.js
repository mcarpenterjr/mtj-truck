function about() {
  var name = ko.observable(model.about.name),
 nickName = ko.observable(model.about.shortName),
 phone = ko.observable(model.about.contacts.phone),
 email = ko.observable(model.about.contacts.email),
 breifAbout = ko.observable(model.about.short),
 services = ko.observable(model.about.services),
 badge = ko.observable(model.about.mainPic);
}

function workExp() {

}

function education() {

}

function projects() {

}


$(document).ready(function() {
  $('.parallax').parallax();
  $(".button-collapse").sideNav();

  /* Face Book JS */
  $.ajaxSetup({ cache: true });
    $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
      FB.init({
        appId: '{1078294885527262}',
        version: 'v2.5' // or v2.0, v2.1, v2.2, v2.3
      });
      $('#loginbutton,#feedbutton').removeAttr('disabled');
      FB.getLoginStatus(updateStatusCallback);
    });
});
