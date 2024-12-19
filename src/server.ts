import mongoose from "mongoose";
import { environmentVariables } from "./environments/environmentAccess.js";
import app from "./app.js";

const localDatabaseConnectionString = "mongodb://localhost:27017/assignment-3";

(async () => {
  try {
    // await mongoose.connect(
    //   environmentVariables.database_connection_string as string
    // );
    await mongoose.connect(localDatabaseConnectionString);
    console.log(`Database is connected successfully!`);
    app.listen(environmentVariables.default_port, () => {
      console.log(
        `The server is running on port ${environmentVariables.default_port}`
      );
    });
  } catch (error) {
    console.log(
      "database connection failed and hence server also failed to start."
    );
  }
})();
