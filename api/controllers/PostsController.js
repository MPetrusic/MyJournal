// const { Sails } = require("sails")

// const Post = require("../models/Post")

// const Post = require("../models/Post")

// const Post = require("../models/Post")

// const post1 = { id: 1,
//      title: 'POST TITLE 1', body: 
//      'This is my body!'}

// const post2 = { id: 2, title: 
//     'POST TITLE 2', body: 
//     'Body 2!'}

// const post3 = { id: 3, title: 
//     'POST TITLE 3', 
//     body: 'Third Body!'}

// const allPosts = [post1, post2, post3]


module.exports = {
    posts: async function(req, res) {

        //Shorhtand syntax - same as the one commented below
        const posts = await Post.find()
        res.send(posts)


        // Post.find().exec(function(err,posts) {
        //     if (err) {
        //         return res.serverError(err.toString())
        //     }
        //     res.send(posts)
        // })

    },

    // create: function(req, res) {
    //     const title = req.body.title
    //     const body = req.body.body

    //     sails.log.debug('My title:' + title)
    //     sails.log.debug('Body: ' + body)

    //     Post.create({title: title, body: body}).exec(function(err) {
    //         if (err) {
    //             return res.serverError(err.toString())
    //         }
    //         console.log("Finished creating post object")
    //         return res.redirect('/home')
    //     })
    // },

    findById: function(req, res) {
        const postId = req.param('postId')

        const filteredPosts = allPosts.filter(p => {return p.id == postId})

        if (filteredPosts.length > 0) {
            res.send(filteredPosts[0])
        } else {
            res.send('Failed to find post by id: ' + postId)
        }
    },

    // delete: async function(req, res) {
    //     const postId = req.param('postId')

    //     await Post.destroy({id: postId})

    //     res.send('Finished deleting post!')
    // }
}