import EditTopicForm from '@/components/EditTopicForm'

const getTopicById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, { cache: 'no-store' });
        if (!res.ok) {
            throw new Error("Data is not fetching");
        }
        return res.json()
    } catch (error) {
        console.log("Error: ", error)
    }
}

export default async function EditTopic({ params }) {
    const { id } = params;
    const { topic } = await getTopicById(id);
    if (!topic) {
        return <h2>Error: Topic Not Found</h2>
    }
    const { title, description } = topic;
    return <>
        <EditTopicForm id={id} title={title} description={description} />
    </>
}