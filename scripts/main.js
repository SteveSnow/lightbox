$(document).ready(function() {


    $('#whaleLink').click(function(e) {
        showWhale(e)
    })

    $('.lightBoxOuter').click(function(e) {
        hideWhale(e)
    })
});

function showWhale(e) {
    var url = $('#whaleLink').data('img')
    var image = $('#lightBoxImage')
    image.attr('src', url)
    centerImage(image)
    $('.lightBoxOuter').show()

}

function hideWhale(e) {
    $('.lightBoxOuter').hide()
}

function centerImage(image) {

    image.load(function() {
        var pageHeight = $(window).height();
        var imageHeight = image.height();
        var imageHeightOffset = (pageHeight - imageHeight) / 2;
        image.parent().css("margin-top", imageHeightOffset);
    });
}
