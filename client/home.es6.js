//client/home.js

Router.route('home', {
  path: '/'
})

Template.home.onCreated(function(){

  $(window).on('scroll', function(event){

    // dynamic fading
    const scrollTop = $(this).scrollTop()
    const windowHeight = $(window).height()

    const zoomAmountTop = (1-(scrollTop/windowHeight))

    const zoomAmountBottom = (scrollTop/windowHeight)

    console.log('zoomAmountTop', zoomAmountTop)
    console.log('zoomAmountBottom', zoomAmountBottom)

    $('#header').css('opacity', zoomAmountTop)

    $('#photoBottom').css('opacity', zoomAmountBottom)

  })

})