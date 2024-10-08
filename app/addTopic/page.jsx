"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";


export default function AddTopic() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    let handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form is Submitted");

        try {
            const res = await fetch("http://localhost:3000/api/topics", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ title, description })
            });

            if (res.ok) {
                router.refresh()
                router.push("/")
            } else {
                throw new Error("Failed to create a topic");
            }
        } catch (error) {
            console.log("error: ", error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                    type="text"
                    className="border border-slate-500 px-8 py-2"
                    placeholder="Topic Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                />
                <input
                    type="text"
                    className="border border-slate-500 px-8 py-2"
                    placeholder="Topic Description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    required

                />
                <button type="submit" className="bg-green-600 w-fit font-bold px-6 py-3">
                    Add Topic
                </button>
            </form>
        </>
    );
}
