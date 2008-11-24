$(document).ready(function() {
  var selected;
  
  $("#showcase .nav a").each(function() {
    if($(this).hasClass('selected')) {
      selected = $($(this).attr('href'));
      selected.show();
    } else {
      $($(this).attr('href')).hide();
    }
    
    $(this).click( function() {
      if($(this) != selected) {
        $('#showcase .nav a.selected').removeClass('selected');
        selected.hide();
        selected = $($(this).attr('href'));
        selected.show();
        $(this).addClass('selected');
        return false; // Stops href from jumping to the anchor
      }
    });
  
  });
  
});