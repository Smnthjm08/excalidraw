import express, { Router } from "express";
import authRoutes from "./routes/authRoutes";
import roomRoutes from "./routes/roomRoutes";

const app = express();

const v1Route = Router(); 

app.use("/api/v1", v1Route);

v1Route.use("/auth", authRoutes);
v1Route.use("/room", roomRoutes);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
