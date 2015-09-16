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

Template.homeTemplate.onCreated(function(){
  console.log('on created')

  $(document).on('scroll', function(event){

    const scrollTop = $('body').scrollTop()

    console.log('on scroll', scrollTop)

    if(scrollTop > 300){
      $('#header').fadeOut()
    } else if(scrollTop < 300) {
      // $('#header').fadeIn()
    }
  })

})