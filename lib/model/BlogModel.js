import mongoose, { Model, Schema } from "mongoose";

const blogSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    desc : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now()
    },
    author : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    authorImage : {
        type : String,
        required : true
    }
})

const BlogModel =
  mongoose.models.blog || mongoose.model("blog", blogSchema);

export default BlogModel;
