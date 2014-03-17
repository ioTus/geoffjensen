if (Meteor.isClient) {


  // MOBILE NAVIGATION
  Template.navigation.rendered = (function (){
    // Create the dropdown base
    $("<select />").appendTo("nav");

    // Create default option "Go to..."
    $("<option />", {
       "selected": "selected",
       "value"   : "",
       "text"    : "Go to..."
    }).appendTo("nav select");

    // Populate dropdown with menu items
    $("nav a").each(function() {
     var el = $(this);
     $("<option />", {
         "value"   : el.attr("href"),
         "text"    : el.text()
     }).appendTo("nav select");
    });

    $("nav select").change(function() {
      window.location = $(this).find("option:selected").val();
    });
  });
  // end MOBILE NAVIGATION




  // SCROLL TO TOP
  Template.orb.events = ({
    'click .toTop': function(event){
      $('html, documentElement').animate({scrollTop: 0}, "slow");
      return false;
    }
  });
  // end SCROLL TO TOP
  


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
