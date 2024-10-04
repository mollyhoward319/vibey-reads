// CommonJS and Modules
import dotenv from "dotenv";
import express from "express";
import sequelize from "./src/config/connection.js";

dotenv.config();
import cors from "cors";

import routes from "./src/routes/index.js";

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.static("client/dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

// Force true to drop/recreate table(s) on every sync
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});

// done
