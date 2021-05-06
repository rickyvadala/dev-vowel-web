function technologyClicked(tech){
    if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        return;
    }
    $(`.all-techs`).each(function () {
        let e = $(this);
        if (!e.hasClass(tech)) {
            e.addClass('filter-tech')
        } else {
            e.removeClass('filter-tech')
        }
    })
}