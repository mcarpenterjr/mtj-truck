define(['facebook'], function(){
  FB.init({
    appId      : '{1078294885527262}',
    version    : 'v2.5'
  });
  $('#loginbutton,#feedbutton').removeAttr('disabled');
  FB.getLoginStatus(function(response) {
    console.log(response);
  });
});
