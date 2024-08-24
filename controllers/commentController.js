//import model
const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

//create comment
exports.createComment = async (req, res) => {
  try {
    //fetch data from request body
    const { post, user, body } = req.body;
    //create comment
    const comment = new Comment({
      post,
      user,
      body,
    });
    //save comment
    const savedComment = await comment.save();
    //find the post
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      {
        new: true,
      }
    )
      .populate("comments")
      .exec();

    res.json({
      post: updatedPost,
    });
  } catch (error) {
    return res.status(500).json({ error: "Error while creating comment" });
  }
};
