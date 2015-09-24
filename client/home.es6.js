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
    const zoomAmountMiddle = (scrollTop/(windowHeight*1.1))
    const zoomAmountBottom = ((scrollTop/(windowHeight*1.1))-1)

    const x_coeff = (zoomAmountMiddle -1)

    const zoomMiddle = (-(x_coeff * x_coeff)) + 1

    console.log('zoomMiddle', zoomMiddle)
    console.log('zoomMiddle MINUS 1', (zoomAmountMiddle-1))

    console.log('zoomAmountTop', zoomAmountTop)
    console.log('zoomAmountMiddle', zoomAmountMiddle)
    console.log('zoomAmountBottom', zoomAmountBottom)

    $('#header').css('opacity', zoomAmountTop)
    $('#sun').css('opacity', zoomMiddle)
    $('#photoBottom').css('opacity', zoomAmountBottom)

  })

})