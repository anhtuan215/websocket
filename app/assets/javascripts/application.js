// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require websocket_rails/main

$( document ).ready(function() {
  var dispatcher = new WebSocketRails('localhost:3000/websocket');

  dispatcher.bind('chat.new_message', function(message) {
    alert(message);
  });

  dispatcher.bind('chat.user_info', function(user_info) {
    alert(user_info);
  });

  dispatcher.bind('user_info', function(user_info) {
    alert(user_info);
  });

  $('#send_message').click(function(){
    console.log('go')
    message = $("#new_message").val()
    dispatcher.trigger('chat..incoming_message', message)
  })
})