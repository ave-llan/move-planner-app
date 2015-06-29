
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
    console.log(address);

    $greeting.text('So, you want to live at ' + address + '?');

    var imgURL = 'https://maps.googleapis.com/maps/api/streetview?size=600x300&location=';
    imgURL += address;
    console.log(imgURL);
    $body.append('<img class="bgimg" src="' + imgURL + '">');

    return false;
};

$('#form-container').submit(loadData);

// loadData();
