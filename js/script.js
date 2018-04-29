// sidebar
$('#btn-toggle-sidebar').click(e => {
    e.stopPropagation()
    $('body').addClass('sidebar-show')
})
$('body').click(() => $('body').removeClass('sidebar-show'))
$('section.sidebar').click(e => e.stopPropagation())

// modal
$('#btn-toggle-modal').click(() => $('body').addClass('modal-show'))
$('.modal').click(e => {
    e.stopPropagation()
    $('body').removeClass('modal-show')
})
$('.modal-content').click(e => e.stopPropagation())
$('.modal-content > button').click(() => $('body').removeClass('modal-show'))

// cards
$('.cards > .card').click(function() {
    $(this).siblings('.card').removeClass('card-show-more')
    $(this).toggleClass('card-show-more')
})