$(function () {

    /* ===== Stickyfill ===== */
    /* Ref: https://github.com/wilddeer/stickyfill */
    // Add browser support to position: sticky
    var elements = $('.sticky');
    Stickyfill.add(elements);


    /* Hack related to: https://github.com/twbs/bootstrap/issues/10236 */
    $(window).on('load resize', function () {
        $(window).trigger('scroll');
    });

    /* Activate scrollspy menu */
    $('body').scrollspy({target: '#doc-menu', offset: 100});

    /* Smooth scrolling */
    $('a.scrollto').on('click', function (e) {
        //store hash
        var target = this.hash;
        e.preventDefault();
        $('body').scrollTo(target, 1000, {offset: 0, 'axis': 'y'});
        window.location.hash = this.hash; // update URL hash.

    });


    /* ======= jQuery Responsive equal heights plugin ======= */
    /* Ref: https://github.com/liabru/jquery-match-height */

    // $('#cards-wrapper .item-inner').matchHeight();
    // $('#showcase .card').matchHeight();

    /* Bootstrap lightbox */
    /* Ref: http://ashleydw.github.io/lightbox/ */

//    $(document).delegate('*[data-toggle="lightbox"]', 'click', function (e) {
//        e.preventDefault();
//        $(this).ekkoLightbox();
//    });

    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });


    // Scrolling Update.

    var $scrollto = $(".scrollto.active"),
            $doc_sub_menu = $(".doc-sub-menu");
    $doc_sub_menu.addClass('d-none');

    // When Load A Page For The First Time We are going to remove submenu class.
    if ($scrollto.next('.doc-sub-menu').length === 1) {
        $scrollto.next('.doc-sub-menu').removeClass('d-none');
    }


    // When user click on a specific menu item, we are going to show it's submenu items.

    $(document).on('click', ".scrollto", function () {
        $doc_sub_menu.addClass('d-none');
        $(this).addClass('active').next('.doc-sub-menu').removeClass('d-none');
    });

    $(document).on('click', ".doc-sub-menu .scrollto", function () {
        $doc_sub_menu.addClass('d-none');
        $(this).addClass('active').parent('.doc-sub-menu').removeClass('d-none');
    });


    // Add Function For Scrolling Mode

    $(document).on('scroll', function () {
        if ($(".nav-link.scrollto.active").next('.doc-sub-menu').length) {
            $doc_sub_menu.addClass('d-none');
            $(".nav-link.scrollto.active").next('.doc-sub-menu').removeClass('d-none');
        }

    });

    // VENOBOX VIDEO.

    $(document).ready(function () {
        $('.venobox').venobox();
    });

    // Back to top

    $('#backTop').backTop({
        'theme': 'custom'
    });



});