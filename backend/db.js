const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/inotebook-public";

// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI, ()=>{
//         console.log("Connected to Mongo Successfully, Yay!!!");
//     })
// }

async function connectToMongo() {
  await mongoose
    .connect(mongoURI)
    .then(() => console.log("Connected to Mongo Successfully, Yay!!!"))
    .catch((err) => console.log(err));
}

module.exports = connectToMongo;
