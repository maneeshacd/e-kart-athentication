class AddProviderToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :provider, :integer
    add_column :users, :provider_id, :string
  end
end
