source 'https://rubygems.org'

gem 'rails', '3.2.11'

group :development, :test do
    gem 'sqlite3'
    gem 'ruby-debug19', :require => 'ruby-debug'
end

group :development do
  gem 'better_errors'
end

group :production do
  gem 'pg'
  gem 'thin'
  gem 'newrelic_rpm'
  gem 'sentry-raven'
end

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails'#,   '~> 3.2.3'
  gem 'bourbon'
  #gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  gem 'therubyracer'
  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails'

# Refinery CMS
gem 'refinerycms', '~> 2.0.0'

# Specify additional Refinery CMS Extensions here (all optional):
gem 'refinerycms-i18n'
gem 'refinerycms-inquiries'
gem 'refinerycms-page-images'
gem 'refinerycms-copywriting'
gem 'refinerycms-search'

# The Heroku gem allows you to interface with Heroku's API
gem 'heroku'

# Fog allows you to use S3 assets (added for Heroku)
gem 'fog'

# For memcached
# gem 'dalli'

