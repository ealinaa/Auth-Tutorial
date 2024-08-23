// import mongoose from 'mongoose'
// export const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URL)
//     } catch (error)

// }
import mongoose from 'mongoose'
export const connectionDB = async () => {
    try{
        console.log("mongo_url:", process.env.MONGO_URL)
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDb Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log("Error Connection to MongoDB:", error.message)
        process.exit(1) // 1 is failure ,0 status code to success
        
    }

}