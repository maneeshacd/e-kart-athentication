class MainController < ApplicationController
  layout 'angular'

  def dashboard
  end

  def social_auth
    id = Koala::Facebook::API.new(params[:token]).get_object('me')['id']
    @user = User.find_by(provider_id: id)
    unless @user
      @user = User.create(provider: params[:provider],
                          password: SecureRandom.hex,
                          provider_id: id)
    end
    sign_in @user
    render json: { data: @user }
  end

end
