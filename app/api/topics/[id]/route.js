import { NextResponse } from "next/server";
import dbConnect from '@/libs/dbConnect'
import Topic from "@/models/topic";

export const PUT = async (req, { params }) => {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await req.json();
    await dbConnect();
    await Topic.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Topic Updated" }, { status: 201 });
}

export const GET = async (req, { params }) => {
    const { id } = params;
    await dbConnect();
    const topic = await Topic.findOne({ _id: id });
    return NextResponse.json({ message: "OK", topic }, { status: 201 });
}