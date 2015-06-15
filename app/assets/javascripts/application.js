// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs

// From ThemeForest theme
// TODO: Check if all of these are actually used.
//= require jquery.easing.1.3
//= require jquery.cycle.all.min
//= require jquery.tools.min
//= require jquery.validate
//= require jquery.form
//= require jquery.nivo.slider.pack
//= require colortip-1.0-jquery
//= require menu_min
//= require script

// END from ThemeForest theme

//= require_tree .

var rttheme_slider_timeout = 7000; //miliseconds 7000 = 7 seconds
var rttheme_slider_effect = "fade";
var rttheme_template_dir = "/assets";
  
  
function replaceSafeEmail(safeEmail) {
  return safeEmail.replace(" at ", "@").replace(" dot ", ".");
}

$(function() {
   $("#body_content_title").addClass("line");

   // All mailto links, replace with real email addresses on hover.
   $("a[href ^='mailto:']").live("hover", function() {
     $(this).attr("href", replaceSafeEmail($(this).attr("href")));
     // Replace text with email address
     if ($(this).hasClass("hover-show")) {
      $(this).html($(this).attr("href").replace("mailto:",""));
     }
   });

   // Navigate on dropdown change
   $('#dropdown_nav').change(function() {
     window.location.href = $('#dropdown_nav').val();
   });

   $("#navigation ul>li>a+ul:visible").prev().addClass("active")
   $("#navigation ul>li>a+ul:hidden").prev().addClass("inactive").parent().hover(function() {
     $(">a", this).addClass("active").next().show("slide");
   });
});

