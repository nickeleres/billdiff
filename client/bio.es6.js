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

// SeoCollection.update(
//     {
//         route_name: 'bio'
//     },
//     {
//         $set: {
//             route_name: 'bio',
//             title: 'Bill Diffenderffer -- About',
//             meta: {
//                 'description': 'Bill Diffenderffer is a science fiction autor, 
//                 sci-fi author, quantum physics author, spirituality author'
//             },
//             og: {
//                 'title': 'About -- Bill Diffen',
//                 'image': 'http://manuel-schoebel.com/images/authors/manuel-schoebel.jpg'
//             }
//         }
//     },
//     {
//         upsert: true
//     }
// );

SeoCollection.update(
    {
        route_name: 'aboutMe'
    },
    {
        $set: {
            route_name: 'aboutMe',
            title: 'About - Manuel Schoebel',
            meta: {
                'description': 'Manuel Schoebel is an experienced web developer and startup founder. He develops but also consults startups about internet topics.'
            },
            og: {
                'title': 'About - Manuel Schoebel',
                'image': 'http://manuel-schoebel.com/images/authors/manuel-schoebel.jpg'
            }
        }
    },
    {
        upsert: true
    }
);

