//client/books.es6

Router.route('books',{
  path: '/books',
  template: 'booksTemplate'
})

Template.booksTemplate.helpers({
  showBooksButton: ()=>{
    return true
  }
})