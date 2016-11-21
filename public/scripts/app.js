$(document).ready(function() {
  console.log("sanigyt che")
  $('.search').submit(function(e){
    e.preventDefault();
    var query = $(this).serialize();

    if(query.length <= 4){
      console.log(query.length);
      return;
    }
    $.ajax({
        method: 'get',
        data: query,
        url: '/search',
        success: beerSearchSucc,
        error: beerSearchErr
      });
  });

  $('').submit(function(e){
    e.preventDefault();
    var data = $(this).serialize();
    $.ajax({
        method: 'get',
        data: query,
        url: '/search',
        success: beerSearchSucc,
        error: beerSearchErr
      });
  })
});



function beerSearchErr(err){
  if(err){
    console.error(err);
  }
}

function beerSearchSucc(beerResults){
  // $( "#beers" ).slideToggle( "slow", function() {});
  render(beerResults, $('#beer-template'), $('#beers'));
}

function render(json, html, target) {
    target.empty();
    if(!json.length){
      target.append('<h4>Sorry, no results for that.</h4>');
      target.append('<button> Add Your Beer </button');
    }
    json.forEach(function(ele, idx, arr){
      var hbTemplate = Handlebars.compile(html.html());
      var htmlData = hbTemplate(ele);
      target.append(htmlData);
    });
 }
