$(document).ready(function() {
  console.log("sanigyt che")
  $('.search').submit(function(e){
    e.preventDefault();
    $.ajax({
        method: 'get',
        data: $(this).serialize(),
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
  $( "#beers" ).slideToggle( "slow", function() {});
  render(results, $('#beer-template'), $('#beers'));
}

function render(json, html, target) {
  //  console.log('rendering', json);
    // console.log(json);
    // target.html().empty();
    json.forEach(function(ele, idx, arr){
      console.log(ele)
      var hbTemplate = Handlebars.compile(html.html());
      var htmlData = hbTemplate(ele);
      target.append(ele);
    });
 }
