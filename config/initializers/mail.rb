ActionMailer::Base.smtp_settings = {
  :address => 'smtpout.secureserver.net',
  :domain  => 'inandoutcleaning.net',
  :port      => 80,
  :user_name => 'inquiries@inandoutcleaning.net',
  :password => 'Inandoutcleaning1',
  :authentication => :plain
}

