//import model
const Post = require("../models/postModel");

//create post
exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({
      title,
      body,
    });
    const savedPost = await post.save();
    res.json({ post: savedPost });
  } catch (err) {
    return res.status(400).json({
      err: "Error in creating post",
    });
  }
};

//get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("likes") //for populating the likes of the post
      .populate("comments")
      .exec();

    res.json({ posts });
  } catch (err) {
    return res.status(400).json({
      err: "Error in fetching post",
    });
  }
};
