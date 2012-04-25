class AddServicesToRefineryInquiriesInquiries < ActiveRecord::Migration
  def change
    add_column :refinery_inquiries_inquiries, :services, :string

  end
end

