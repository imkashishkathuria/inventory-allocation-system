import express from 'express'
import cors from 'cors'
import connectDB from './db/mongo.js';
import orderRoutes from "./routes/order.routes.js"

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", orderRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
