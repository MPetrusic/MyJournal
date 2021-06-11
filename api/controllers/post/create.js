const PostsController = require("../PostsController");

module.exports = {


  friendlyName: 'Create',


  description: 'Create post.',


  inputs: {
    title: {
      description: 'Title of post object',
      type: 'string',
      required: true
    },
    body: {
      type: 'string',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {

    const userId = this.req.session.userId

    await Post.create({title: inputs.title, body: inputs.body, user: userId})

    this.res.redirect('/home')
    // return;

  }


};
