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

// SeoCollection.update(
//     {
//         route_name: 'books'
//     },
//     {
//         $set: {
//             route_name: 'books',
//             title: 'Bill Diffenderffer--Books',
//             meta: {
//                 'description': 'Bill Diffenderffer is a science fiction, sci-fi, quantum
//                 physics, spirituality author'
//             },
//             og: {
//                 'title': 'Books - Bill Diffenderffer',
//                 'image': 'http://manuel-schoebel.com/images/authors/manuel-schoebel.jpg'
//             }
//         }
//     },
//     {
//         upsert: true
//     }
// );