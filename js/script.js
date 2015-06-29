

function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview as background image
    var $street = $('#street');
    var $city = $('#city');

    var streetAddress = $street.val();
    var cityAddress = $city.val();

    var address = streetAddress + ', ' + cityAddress;
    $greeting.text('So, you want to live at ' + address + '?');
    var imgURL = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=';
    imgURL += address;
    $body.append('<img class="bgimg" src="' + imgURL + '">');

    // load new york times articles about this city
    var nytAPI = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=glocations("' +
        cityAddress + '")&api-key=2c5d61d769d51f6765f05168036cc94b:18:65453603';
    $.getJSON(nytAPI, function(data) {
       data.response.docs.forEach(function(story) {
        $nytHeaderElem.text('New York Times articles about ' + cityAddress);
        $nytElem.append(
            '<li class="article">' +
            '<a href="' + story.web_url + '">' + story.headline.main + '</a>' +
            '<p>' + story.lead_paragraph + '</p></li>'
            )
       })
    })
    .error(function() {
        console.log("an error occurred loading NYTimes articles");
        $nytHeaderElem.text('New York Times articles could not be loaded.');
    });

    return false;
};

$('#form-container').submit(loadData);

// loadData();
