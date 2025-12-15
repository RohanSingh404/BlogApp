const { NextResponse } = require("next/server");
import { writeFile } from "fs/promises";
import { title } from "process";
import BlogModel from "../../../../lib/model/BlogModel";
import { connectdb } from "../../../../lib/config/db";

const fs = require('fs');
const LoadDB = async () => {
    await connectdb();
}

LoadDB();


export async function GET(request) {
    const blogId = request.nextUrl.searchParams.get('id');
    if(blogId){
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json({blog});
    }else{
        const blogs = await BlogModel.find({});
        return NextResponse.json({blogs});
    }
    
}


export async function POST(request) {
    

    const formData = await request.formData();
    const timeStamp = Date.now();


    const img=  formData.get("image");
    if (!img || typeof img === "string") {
        return NextResponse.json(
            { error: "Image file not received" },
            { status: 400 }
        );
    }
    const imageByteData = await img.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/uploads/${timeStamp}_${img.name}`;
    await writeFile(path , buffer);

    const imageURL = `/uploads/${timeStamp}_${img.name}`;
    

    const blogData = {
        title : `${formData.get('title')}`,
        desc : `${formData.get('desc')}`,
        category : `${formData.get('category')}`,
        author : `${formData.get('author')}`,
        authorImage : `${formData.get('authorImg')}`,
        image : `${imageURL}`
    }

    await BlogModel.create(blogData);

    return NextResponse.json({success:true , msg : "Blog Saved"});
}

export async function DELETE(request){
    const id = await request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(id)
    fs.unlink(`/public/uploads/${blog.image}`, () =>{});
    await BlogModel.findByIdAndDelete(id);

    return NextResponse.json({msg:"Blog Deleted"});
}