//client/home.js

Router.route('homeTemplate', {
  path: '/'
})

Template.homeTemplate.events({
  'click #header': function(event, template){
    event.preventDefault()

    const scrollTop = $('body').scrollTop()

    console.log('scrollTop', scrollTop)

  }
})

Template.homeTemplate.helpers({
  opacity: function(){
    console.log('template helper opacity', Session.get('zoomOpacity'))
    return Session.get('zoomOpacity')
  }
})

Tracker.autorun(function(){
  // const opacity = Session.get('zoomOpacity')

  // console.log('opacity', opacity)

  // $('#header').css('opacity', opacity)

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

    Session.set('zoomOpacity', self.zoom)

    console.log(self.zoom)
    console.log('scrollTop', scrollTop)

    $('#header').css({'opacity': zoomAmount})

    //~~~~~~~~~~~~~~~~~~~~~~~~~
    //decrease opacity on scroll then fadeOut()
    // $('#header').animate({
    //   'opacity' : 0.25
    // }, 1000)

    // if($('#header').css('opacity') == 0.25){
    //   console.log('opacity == 0.25')
    //   $('#header').fadeOut()
    // }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~
    // zoom fade
    // console.log('on scroll', scrollTop)

    // if(scrollTop > 200){
    //   $('#header').animate({opacity:0}, 1000)
    // } else if(scrollTop < 200) {
    //   $('#header').animate({opacity:1}, 200)
    // }
  })

})