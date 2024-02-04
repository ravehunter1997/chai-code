import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import { app } from "./app.js";
dotenv.config({ path: "./env" });

connectDB().then(() => {
  app
    .listen(process.env.PORT || 500, () => {
      console.log(`Server is running on ${process.env.PORT}`);
    })
    .catch((error) => console.log("Error", error));
});

// ;(async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         console.log("connected to MONGO")
//     }
//     catch(error){
//       console.log("Error",error)
//     }
// })()
