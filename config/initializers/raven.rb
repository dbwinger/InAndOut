require 'raven'

Raven.configure do |config|
  config.dsn = 'https://3fc0cc30eff740ffa7138d196d66307a:ab5be1e93ddb419ba06eb120419ee286@app.getsentry.com/37923'
  config.open_timeout = 10
end