$(function() {
  // Take the contents and format it according to how many sections there are, using the template's framework
  // Each auto_columns div should contain what will show in one row.
  // Each "item" should consist of one <h3> tag followed by one <p> tag.
  $("div.auto_columns").each(function() {
    var outer = $(this);
    // Base # of items on how many h3s there are
    var num_divs = outer.children("h3").length;
    var number_class = function() {
      switch (num_divs)
      {
        case 2: return "two";
        case 3: return "three";
        case 4: return "four";
        case 5: return "five";
        default: return "";
      }
    }();
    if (number_class != ""){
        // Add "read more" links
        outer.children("h3").children("a").each(function() {
          // If the title is a link, add the "read more" link at the end of the <p> with the same href.
          var read_more = $("<a class='read_more'>read more →</a>");
          read_more.attr("title", $(this).attr("title"));
          read_more.attr("href", $(this).attr("href"));
          $(this).parent().next().append(read_more);
          // If there's an image (inside the <p>), wrap it with an anchor.
          $(this).parent().next().find("img").wrap("<a href='" + $(this).attr("href") + "'></a>");
        });
        // Surround "item" contents with divs as required by the framework.
        outer.children("h3").each(function(){
            $(this).next().andSelf().wrapAll("<div class='box " + number_class + "'><div class='featured'></div></div>");
        });
        var inner_divs = outer.children("div.box");
        $("div.box").hover(
            function() { $(this).animate({"background-color" : "#FFFFC3"}); },
            function() { $(this).animate({"background-color" : "#FFF"}); }
        );
        // Add first and last classes
        inner_divs.first().addClass("first");
        inner_divs.last().addClass("last");

        // Now replace h3s with h4s, because refinery only lets you go down to h3, and h4s look better.
        inner_divs.find("h3").each(function() {
            $(this).replaceWith("<h4>" + $(this).html() + "</h4>");
        });
        // Move images to before headings
        inner_divs.each(function() {
            var image = $(this).find("img").first()
            if (image.length) {
                $(this).prepend(image);
            }
        });
    }
  })
});

