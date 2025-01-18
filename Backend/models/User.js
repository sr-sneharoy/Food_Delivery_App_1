const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({ //Schema is used to give the structure of the data that we are going to store in the database
  username: {
    type: String,   //just giving condition to username that it should be string
    required: true, //required is used to make the username mandatory
    unique: true,  //unique is used to make the username unique
    trim: true, //trim is used to remove extra spaces from the username
    minlength: 3, //minlength is used to give the minimum length of the username
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,  
    required: true, 
    trim: true,
  },
  email: {
    type: String,  
    required: true, 
    trim: true,
  },
  password: {
    type: String,  
    required: true, 
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,  //default is used to give the default value of the date
}
});

module.exports = mongoose.model('user', userSchema);  //here i export the model of userSchema with the name "user" which is used in other files to interact with the database