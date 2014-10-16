source 'https://rubygems.org'

ruby '2.1.2'

gem 'rails', '~> 3.2.18'
gem 'passenger'
gem 'lograge'

group :development do
  gem 'better_errors'
  gem 'letter_opener'
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
  #gem 'therubyracer'
  gem 'uglifier', '>= 1.0.3'
  gem 'turbo-sprockets-rails3'
end

gem 'jquery-rails'

# Refinery CMS
gem 'refinerycms', '~> 2.0.0'

# Specify additional Refinery CMS Extensions here (all optional):
gem 'refinerycms-i18n', '~> 2.0.0'
gem 'refinerycms-inquiries', github: 'refinery/refinerycms-inquiries', branch: '2-0-stable'
gem 'refinerycms-page-images', '~> 2.0.0'
gem 'refinerycms-copywriting', '~> 2.0.0'
gem 'refinerycms-search', '~> 2.0.0'

# Fog allows you to use S3 assets (added for Heroku)
gem 'fog'

# For memcached
# gem 'dalli'