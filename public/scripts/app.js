$(document).ready(function() {

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


  $('.modalBtn').closest('beer-id').submit(function(e){
    e.preventDefault();
    var data = $(this).serialize();
    console.log("data: " + data);
    $.ajax({
        method: 'post',
        data: data,
        url: '/api/beer/update',
        success: beerUpdateSucc,
        error: beerUpdateErr
      });
  });


  $('.addBeer').submit(function(e){
    e.preventDefault();
    console.log($(this).serialize());
    $.ajax({
        method: 'post',
        data: $(this).serialize(),
        url: '/api/beer/create',
        success: beerCreateSucc,
        error: beerCreateErr
      });
  });



});

function beerCreateErr(err){
  if(err){
  console.error(err);
  }
}

function beerCreateSucc(json){
  console.log(json);
}






function beerDeleteErr(err){
  if(err){
    console.error(err);
  }
}

function beerDeleteSucc(json){
  console.log('beer deleted');
}







function beerUpdateErr(err){
  if(err){
    console.error(err);
  }
}

function beerUpdateSucc(json){

}







function beerSearchErr(err){
  if(err){
    console.error(err);
  }
}

function beerSearchSucc(beerResults){
  render(beerResults, $('#beer-template'), $('#beers'));
  $('.deleteBtn').click(function(e){
    e.preventDefault();
    var id = $(this).data('beer-id');
    console.log(id);
    $.ajax({
      method: 'delete',
      data: {_id: id},
      url: '/api/beer/' + id,
      success: beerDeleteSucc,
      error: beerDeleteErr
    });
  });

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
