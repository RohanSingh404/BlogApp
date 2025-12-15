import { NextResponse } from "next/server";
import EmailModel from "../../../../lib/model/EmailModel";
import { connectdb } from "../../../../lib/config/db";

const LoadDB = async() =>{
    await connectdb();
}

LoadDB();

export async function POST(request){
    const formData = await request.formData();
    const emailData = {
        email : `${formData.get('email')}`,
    }
    await EmailModel.create(emailData)
    return NextResponse.json({success:true , msg:"email Subscribed !!"})
}

export async function GET(request){
    const emails = await EmailModel.find({});
    return NextResponse.json({emails});
}

export async function DELETE(request){
    const id = await request.nextUrl.searchParams.get('id');
    await EmailModel.findByIdAndDelete(id)
    return NextResponse.json({success:true , msg:"Email Deleted !"})
}