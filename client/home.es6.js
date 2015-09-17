//client/home.js

Router.route('home', {
  path: '/'
})

Template.home.onCreated(function(){

  $(window).on('scroll', function(event){

    // dynamic fading
    const scrollTop = $(this).scrollTop()
    const windowHeight = $(window).height()

    const zoomAmount = (1-(scrollTop/windowHeight))

    console.log('zoomAmount', zoomAmount)

    $('#header').css('opacity', zoomAmount)

  })

})