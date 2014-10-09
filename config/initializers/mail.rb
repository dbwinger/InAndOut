# ActionMailer::Base.smtp_settings = {
#   :address => 'smtp.gmail.com',
#   :domain  => 'inandoutcleaning.net',
#   :port      => 587,
#   :user_name => ENV['SMTP_USERNAME'],
#   :password => ENV['SMTP_PASSWORD'],
#   :authentication => :plain,
#   :enable_starttls_auto => true
# }

ActionMailer::Base.smtp_settings = {
  :address        => 'smtp.sendgrid.net',
  :port           => '587',
  :authentication => :plain,
  :user_name      => ENV['SENDGRID_USERNAME'],
  :password       => ENV['SENDGRID_PASSWORD'],
  :domain         => 'inandoutcleaning.net',
  :enable_starttls_auto => true
}