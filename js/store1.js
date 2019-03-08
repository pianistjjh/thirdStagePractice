$(function(){
/*

var $grid = $('.grid').isotope({
  itemSelector: '.element_item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$('#sorts').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.button_group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is_checked').removeClass('is_checked');
    $( this ).addClass('is_checked');
  });
});




*/


var $grid = $('.grid').isotope({
  itemSelector: '.element_item',
  layoutMode: 'fitRows',
  /*getSortData: {

    category: '[data-category]'
    
    }*/
});


var filterFns = {/*
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }*/
};
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
  

	
	
	
	
	/*
	
	
	
	
	var $grid = $("#content_body").isotope({
	itemSelector: ".content_content",
	layoutMode:"fitRows"
	});
	
	var filterFns = {
	
	};
	$(".filters-button-group").on("click","button",function(){
		var filterValue = $(this).attr("data-filter");
		filterValue = filterFns[ filterValue ] || filterValue;
		$grid.isotope({filter:filterValue});	
	});
	$(".content_title_button_wrap").each(function(i, buttonGroup){
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on("click","button", function(){
		 $buttonGroup.find(".is_checked").removeClass("is_checked");
		 $(this).addClass("is_checked");
		});
	});
	
*/
});