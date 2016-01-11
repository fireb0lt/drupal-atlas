(function($){



function checkOrientation(image) {
  var parentHeight = image.closest("div").innerHeight();
  var parentWidth = image.closest("div").innerWidth();
  var imgHeight = image.height();
  var imgWidth = image.width();
  console.log("Container   -   Height: " + parentHeight + "   Width:" + parentWidth);
  console.log("Image   -   Height: " + imgHeight + "   Width:" + imgWidth);

  if (imgHeight < parentHeight) {
    console.log("HEIGHT FLAG");
    image.css({"height":"100%","width":"auto"});
  } else if (imgWidth < parentWidth) {
    console.log("Width FLAG");
    image.css({"width":"100%","height":"auto"});
  } else {

  }

}


$( "img" ).each( function() {
  checkOrientation( $( this ));
});









})(jQuery);
