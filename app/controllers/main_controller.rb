class MainController < ApplicationController
  layout 'angular'

  def dashboard
  end

  def social_auth
    if params[:provider] == 'facebook'
      id = Koala::Facebook::API.new(params[:token]).get_object('me')['id']
      @user = User.find_or_create_user(id, 'facebook')
    elsif params[:provider] == 'google'
      response = HTTParty.get("https://www.googleapis.com/oauth2/v2/userinfo",
      headers: {
      'Authorization' => "OAuth #{params[:token]}"
      })
      @user = User.find_or_create_user(response['id'], 'google')
    end
    sign_in @user
    render json: { data: @user }
  end

end
