module ApplicationHelper
  def dropdown_nav_menu_options items = nil, level = 0
    options = items.nil? ? ['– Main Menu –', nil] : []
    (items || Refinery::Menu.new(Refinery::Page.fast_menu).roots).each do |item|
      options << ["#{'–' * level} #{item.title.titleize}", refinery.url_for(item.url)]
      if item.has_children?
        options = options + dropdown_nav_menu_options(item.children, level + 1) 
      end
    end
    options.compact
  end
end