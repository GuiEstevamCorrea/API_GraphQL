import Post from '../../../models/Post'

export default {
  Post: {
    author: (post) => User.findById(post.author)
  },

  Query: {
    posts: async () => await Post.find(),
    post: (_, { id }) => Post.findById(id),
  },
  Mutation: {
    createPost: (_, { data }) => Post.create(data),
    updatePost: (_, { id, data }) => Post.findOneAndUpdate(id, data, { new: true }),
    deletePost: async (_, { id }) => !!(await Post.findOneAndDelete(id)),
  },
}