import { NextResponse } from "next/server";
import dbConnect from '@/libs/dbConnect'
import Topic from '@/models/topic'

export const POST = async (req) => {
    const { title, description } = await req.json();
    await dbConnect();
    await Topic.create({ title, description });
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });

}

export const GET = async () => {
    await dbConnect();
    const topics = await Topic.find();
    return NextResponse.json({ message: "OK", topics }, { status: 200 });


}

export const DELETE = async (req) => {
    const id = req.nextUrl.searchParams.get('id');
    await dbConnect();
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({ message: "Topic Deleted" }, { status: 200 });
}

