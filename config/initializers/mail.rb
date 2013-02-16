ActionMailer::Base.smtp_settings = {
  :address => 'smtpout.secureserver.net',
  :domain  => 'inandoutcleaning.net',
  :port      => 80,
  :user_name => ENV['SMTP_USERNAME'],
  :password => ENV['SMTP_PASSWORD'],
  :authentication => :plain
}

