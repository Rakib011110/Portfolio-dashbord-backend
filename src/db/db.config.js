const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://portfolioDb:portfolioDb1234@atlascluster.pe2j94r.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = dbConnection;
