import mongoose from "mongoose"

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('DB Connected!')

    } catch (error) {
        console.log("Error: DB Not Connected", error)
    }
}

export default dbConnect;