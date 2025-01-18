// const mongoose = require('mongoose');
// const mongoURL = 'mongodb+srv://gofoodadmin:goFood123SR@clustergofood.fi4gq.mongodb.net/?retryWrites=true&w=majority&appName=ClusterGoFood';

// const mongoDB = async () => {
//  await mongoose.connect(mongoURL, () => console.log("CONNECTED"));
// }

// module.exports = mongoDB;



const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://gofoodadmin:goFood123SR@clustergofood.fi4gq.mongodb.net/?retryWrites=true&w=majority&appName=ClusterGoFood';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("CONNECTED to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the application if unable to connect
  }
};

module.exports = mongoDB;


