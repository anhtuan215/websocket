class ChatController < WebsocketRails::BaseController

  def user_connected
    p 'user connected'
    # send_message :user_info, {:user => current_user.screen_name}
    user_info = {:email => "email"}
    send_message :user_info, user_info
  end

  def incoming_message
    p 'user comment'
    broadcast_message :new_message, {:user => current_user.email, :message => message[:message]}
  end

end