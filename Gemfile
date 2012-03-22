source 'https://rubygems.org'

gem 'rails', '3.2.2'

gem 'therubyracer'

group :development, :test do
    gem 'sqlite3'
    gem 'ruby-debug19', :require => 'ruby-debug'
end

group :production do
  gem 'pg'
  gem 'thin'
  gem 'newrelic_rpm'
end

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer'

  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails'


# Refinery CMS
gem 'refinerycms', '~> 2.0.0'

# Specify additional Refinery CMS Extensions here (all optional):
gem 'refinerycms-i18n',   '~> 2.0.0'
#  gem 'refinerycms-blog', '~> 2.0.0'
  gem 'refinerycms-inquiries', '~> 2.0.0'
#  gem 'refinerycms-search', '~> 2.0.0'
  gem 'refinerycms-page-images', '~> 2.0.0'


# The Heroku gem allows you to interface with Heroku's API
gem 'heroku'

# Fog allows you to use S3 assets (added for Heroku)
gem 'fog'

