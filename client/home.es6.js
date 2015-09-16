//client/home.js

Router.route('homeTemplate', {
  path: '/'
})

Template.homeTemplate.onCreated(function(){

  $(window).on('scroll', function(event){

    // dynamic fading
    var self = this;
    self.zoom = new ReactiveVar(0);

    const scrollTop = $(this).scrollTop()
    const windowHeight = $(window).height()

    const zoomAmount = (windowHeight/(scrollTop * 10))

    self.zoom.set(zoomAmount)

    console.log('zoomAmount', zoomAmount)

    $('#header').css({'opacity': zoomAmount})

  })

})