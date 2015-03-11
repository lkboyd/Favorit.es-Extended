$(document).ready(function () {

    //a tags have an event associated with them, so we'll represent that with a parameter called event
    $('body').on('click', '.photo a', function (event) {
        //when we click on a <a> under an element with the class of photo, do this...
        
        //we want to prevent the default behavior of the <a> tag.
        event.preventDefault();

        var theATag = $(this);
        //for theATag object, we want the value of the attribute (attr) href
        var theATagsHREF = theATag.attr('href');

        //make the AJAX request
        //$.get(url, function(data) { ... });
        // data represents the response from the server
        $.get(theATagsHREF, function (data) {
            if (data == "OK") {
                //everything worked great, expected response was "OK"
                //add the class "heart" to the div
                theATag.children('div').addClass('heart');
            }
        });
    });

});