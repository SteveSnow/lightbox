$(document).ready(function() {
    $('#whaleLink').click(function(e) {
        showWhale(e)
    });

    $('.lightBoxOuter').click(function(e) {
        hideWhale(e)
    });

    $(window).resize(function(e) {
    	   var image = $('#lightBoxImage');
    	   centerImage(image);
    });
});

function showWhale(e) {
    var url = $('#whaleLink').data('img');
    var image = $('#lightBoxImage');
    image.attr('src', url);
    centerImage(image);
    $('.lightBoxOuter').show();

}

function hideWhale(e) {
    $('.lightBoxOuter').hide();
}

function centerImage(image) {

    image.load(function() {
        //centers vertically
        var pageHeight = $(window).height();
        var imageHeight = image.height();
        var imageHeightOffset = (pageHeight - imageHeight) / 2;
        image.parent().css("margin-top", imageHeightOffset);
        //centers horizontally
        var pageWidth = $(window).width();
        var imageWidth = image.width();
        var imageWidthOffset = (pageWidth - imageWidth) / 2;
        image.parent().css("margin-left", imageWidthOffset);
    });
}
