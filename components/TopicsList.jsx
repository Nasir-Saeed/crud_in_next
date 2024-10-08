import RemoveBtn from '@/components/RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'


const getTopics = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/topics", { cache: "no-store" });
        if (!res.ok) {
            throw new Error("Error in Fetching Data");
        }
        const data = await res.json();
        return data
    } catch (error) {
        console.log("Error: ", error)
        return { topics: [] };
    }
}


export default async function TopicsList() {
    const { topics } = await getTopics();
    return (
        <>
            {
                topics.map((t) => (
                    <div key={t._id} className='p-4 border-slate-300 my-3 flex justify-between gap-5 items-start'>
                        <div>
                            <h2 className='font-bold text-2xl'>{t.title}</h2>
                            <h2>{t.description}</h2>
                        </div>
                        <div className='flex gap-2'>
                            <RemoveBtn id={t._id} />
                            <Link href={`/editTopic/${t._id}`}>
                                <HiPencilAlt size={24} />
                            </Link>
                         
                        </div>
                    </div>
                ))
            }
        </>
    )
}