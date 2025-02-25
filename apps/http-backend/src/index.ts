import "dotenv/config";

import express, { Router } from "express";
import authRoutes from "./routes/auth.routes";
import roomRoutes from "./routes/room.routes";
import chatRoutes from "./routes/chat.routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

const v1Route = Router();

app.use("/api/v1", v1Route);

v1Route.use("/auth", authRoutes);
v1Route.use("/room", roomRoutes);
v1Route.use("/chat", chatRoutes);

const PORT = 5001;

app
  .listen(PORT, () => {
    console.log(
      `App is listening on PORT ${PORT} at http://localhost:${PORT}/api/v1`
    );
  })
  .on("error", (error) => {
    console.error("Server startup error:", error);
  });
