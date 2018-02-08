
$( document ).ready(function() {
  var dispatcher = new WebSocketRails('localhost:3000/websocket');
  var user = ''

  dispatcher.bind('user_info', function(user_info) {
    user = user_info.email
    joinroom(user)
  });

  $('#send_message').click(function(){
    var data = {comment: $("#new_message").val()}
    dispatcher.trigger('incoming_message', data)
  })

  dispatcher.bind('new_message', function(data) {
    html = '<p>' + data.user + ':' + data.message + '</p>'
    $("#chat_history").append(html)
  });

  function joinroom(user){
    html = '<span>' + 
        "<label class='label label-'>" + 
          "[Joined Channel]" +
        "</label>" + user + 
      "</span> <br />"

    $("#chat_history").append(html)
  }
})