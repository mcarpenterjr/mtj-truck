requirejs.config({
  baseUrl: 'js/libs',
  shim: {
    'facebook' : {
      exports: 'FB',
    }
  },
  paths: {
    app: '../app',
    'facebook': '//connect.facebook.net/en_US/sdk'
  },
});

requirejs(['jquery', 'materialize', 'fb', 'sweetalert-dev', 'knockout']);

$(document).ready(function() {
  $('.parallax').parallax();
  $(".button-collapse").sideNav();
});
