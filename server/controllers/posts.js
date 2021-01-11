import PostMessages from "../models/postsMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessages.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log(error);
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessages(post);

  try {
    await newPost.save();
    res.send(201).json(newPost);
  } catch (error) {
    res.send(404).json({ message: error.message });
  }
};
