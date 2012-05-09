Refinery::SearchEngine.class_eval do
  # Overriding default functionality found here: https://github.com/resolve/refinerycms-search/blob/master/app/models/refinery/search_engine.rb
  # We're only searching pages, and we don't want ones not in menu (IE my instructions for Jake) to show up.
  def self.search(query, page = 1)
    if query.present?
      Refinery::Page.where(:show_in_menu => true).limit(RESULTS_LIMIT).with_query(query)[0..(RESULTS_LIMIT) - 1]
    else
      []
    end
  end
end

