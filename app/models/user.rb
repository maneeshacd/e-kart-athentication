class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable
  enum provider: [:facebook, :twitter, :google, :email]
  validates :email, presence: true, if: :email?

  def email_required?
    self.email? ? true : false
  end
end
