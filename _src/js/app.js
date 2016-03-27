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


$(document).ready(function(d, s, id) {
  $('.parallax').parallax();
  $(".button-collapse").sideNav();

  /* Face Book JS */
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=594934110523222";
  fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
