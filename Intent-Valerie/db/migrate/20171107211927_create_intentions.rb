class CreateIntentions < ActiveRecord::Migration[5.1]
  def change
    create_table :intentions do |t|

      t.timestamps
    end
  end
end
