class RemoveDefaultValueEmail < ActiveRecord::Migration[5.0]
  def change
    change_column_default(:users, :email, nil)
  end
end
