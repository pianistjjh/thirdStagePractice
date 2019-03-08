$(function(){

var $grid = $('.grid').isotope({
  itemSelector: '.element_item',
  layoutMode: 'fitRows'
});


var filterFns = {};
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
	  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter : filterValue });
  
});



$('.button_group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is_checked').removeClass('is_checked');
    $( this ).addClass('is_checked');
  });
});
  

	
});