import app from "./app.js";
import { env } from "../server/config/env.js";
import { initializeSocketServer } from "../server/sockets/socket.js";

const server = app.listen(env.port, () => {
  console.info(`API server running on http://localhost:${env.port}`);
});

initializeSocketServer(server);
