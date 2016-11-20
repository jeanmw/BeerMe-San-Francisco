$(document).ready(function() {
  console.log("sanigyt che")
  $('#searchForm').submit(function(e){
    e.preventDefault();
    $.ajax({
        method: 'get',
        data: data,
        url: '/search',
        success: beerSearchSucc,
        error: beerSearchErr
      });
  });
});



function beerSearchErr(err){
  if(err){
    console.error(err);
  }
}

function beerSearchSucc(results){
  console.log(results);

  $( "#beers" ).slideToggle( "slow", function() {
    // Animation complete.
  });
}

function render(json, html, target) {
  //  console.log('rendering', json);
   var hbTemplate = Handlebars.compile(html.html());
   var htmlData = hbTemplate(json);
   target.prepend(htmlData);
 }
