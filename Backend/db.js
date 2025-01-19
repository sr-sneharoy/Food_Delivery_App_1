const mongoose = require('mongoose');
require('dotenv').config();
const mongoURL = process.env.MONGO_URL;

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("CONNECTED to MongoDB");

    const fetched_data = await mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray(); // Use await for toArray() to properly resolve it   //here i give "{}" empty object inside "find({})" to fetch all data from collection

    // console.log('Data fetched from MongoDB:', data);  // Uncomment this line to see the fetched data
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the application if unable to connect
  }
};

module.exports = mongoDB;






// const mongoose = require('mongoose');
// const mongoURL = 'mongodb+srv://gofoodadmin:goFood123SR@clustergofood.fi4gq.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=ClusterGoFood';

// const mongoDB = async() => {
//  await mongoose.connect(mongoURL, {useNewUrlParse: true }, async(err, result) => {
//   if(err) console.log("---", err);
//   else {
//     console.log("CONNECTED to MongoDB");
//     const fetched_data = await mongoose.connection.db.collections("food_items");
//     fetched_data.find({}).toArray((err, data) => {  //here i give "{}" empty object inside "find({})" to fetch all data from collection
//       if(err) console.log("Error fetching data from MongoDB ", err);
//       else console.log("Data fetched from MongoDB", data);
//     });
//   }
//  });
// }

// module.exports = mongoDB




