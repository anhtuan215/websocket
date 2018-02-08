$ ->
  dispatcher = new WebSocketRails('localhost:3000/websocket')

  dispatcher.bind 'user_info', (data) ->
    alert data.email