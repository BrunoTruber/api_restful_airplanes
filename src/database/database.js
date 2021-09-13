const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose.connect(process.env.DATABASE_URI,{
    useUnifiedTopology: true
  })
};
module.exports = connectToDb;