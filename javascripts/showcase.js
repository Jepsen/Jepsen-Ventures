$(document).ready(function() {
  var selected = $("#showcase .first");
  
  $("#showcase .nav a").click( function() {
    if($(this) != selected) {
      $('#showcase .nav a.selected').removeClass('selected');
      selected.hide();
      selected = $($(this).attr('href'));
      selected.show();
      $(this).addClass('selected');
      return false; // Stops href from jumping to the anchor
    }
  })
});