class CreateManifestations < ActiveRecord::Migration[5.1]
  def change
    create_table :manifestations do |t|
      t.string :immediate
      t.string :short_term
      t.string :long_term

      t.timestamps
    end
  end
end
