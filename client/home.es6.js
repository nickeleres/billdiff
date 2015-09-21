//client/home.js

Router.route('home', {
  path: '/'
})

Template.home.onCreated(function(){

  $(window).on('scroll', function(event){

    // dynamic fading
    const scrollTop = $(this).scrollTop()
    const windowHeight = $(window).height()

    const zoomAmountTop = (1-((scrollTop*1.2)/windowHeight))

    const zoomAmountBottom = (scrollTop/(windowHeight*1.1))

    console.log('zoomAmountTop', zoomAmountTop)
    console.log('zoomAmountBottom', zoomAmountBottom)

    $('#header').css('opacity', zoomAmountTop)

    $('#photoBottom').css('opacity', zoomAmountBottom)

  })

})