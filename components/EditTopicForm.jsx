"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";


export default function EditTopicForm({ id, title, description }) {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const router = useRouter()
    let handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newTitle, newDescription })
            });

            if (!res.ok) {
                throw new Error("Failed to Updated a topic");
            } 
            router.refresh();
            router.push("/")
        } catch (error) {
            console.log("Error: ", error)
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                    type="text"
                    className="border border-slate-500 px-8 py-2"
                    placeholder="Topic Title"
                    onChange={(e) => setNewTitle(e.target.value)}
                    value={newTitle}
                    required
                />
                <input
                    type="text"
                    className="border border-slate-500 px-8 py-2"
                    placeholder="Topic Description"
                    onChange={(e) => setNewDescription(e.target.value)}
                    value={newDescription}
                    required
                />
                <button type="submit" className="bg-green-600 w-fit font-bold px-6 py-3">
                    Update Topic
                </button>
            </form>
        </>
    );
}
