$(document).ready(function(){
  
  
  function giphyURLWithSearchTerm(searchTerm) {
    var NewUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=rehab+centers+in+"+searchTerm+"&key=AIzaSyAMwaRN1IBRCMRQ9YzBn8ihEnV3tuC-pAA&callback=cb"
    return NewUrl;
}

function appendImageToBody(srcURL) {
    $('body').append('<img src=' + srcURL + '>');
}

function callGiphyAPIWithSearchTerm(searchTerm) {
    $.ajax({
      url: giphyURLWithSearchTerm(searchTerm) ,
      method: "GET",
      jsonp: 'cb',
      success: function(response) {
          console.log(response.data);
          for(var i=0;i< response.data.length;i++){
          var url = response.data[i].images.original.url;
           appendImageToBody(url);
          }
           
      },
    }); 
}

//Add a click handler below to call the function when the button is clicked
$("button").click(function(){
    console.log("hello");
    $("#container").empty();
    var searchTerm = $("input").val();
    return callGiphyAPIWithSearchTerm(searchTerm);
});
  
});


