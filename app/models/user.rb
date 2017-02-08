class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  enum provider: [:facebook, :twitter, :google, :email]
  validates :email, presence: true, if: :email?

  def email_required?
    self.email? ? true : false
  end

  def email_changed?
    false
  end

  def self.find_or_create_user(id, provider)
    @user = User.find_by(provider_id: id)
    unless @user
      @user = User.create(provider: provider,
                          password: SecureRandom.hex,
                          provider_id: id)
    end
    @user
  end
end
