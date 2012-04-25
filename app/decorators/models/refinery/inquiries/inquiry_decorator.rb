Refinery::Inquiries::Inquiry.class_eval do
  attr_accessible :company, :services

  before_save :disassemble_services_array

  # Because of using checkboxes, it's sent in as an array.  Join it to show a nice looking list.
  def disassemble_services_array
    if services && services.class == Array
      self.services = self.services.join(", ")
    end
  end
end

