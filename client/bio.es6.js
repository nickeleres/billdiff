//client/bio.es6

Router.route('bio', {
  path: '/bio',
  template: 'bioTemplate'
})

//TODO helper to only show books button

Template.bioTemplate.helpers({
  showBioButton: ()=>{
    return true
  }
})
