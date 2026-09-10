import pino from "pino";

const devTransport = {
  target: "pino-pretty",
  options: {
    colorize: true,
    translateTime: "SYS:HH:MM:ss",
    ignore: "pid,hostname",
  },
};

export const Logger = pino({
  level: process.env.LOG_LEVEL || "info",
  ...(process.env.NODE_ENV === "development" && { transport: devTransport }),
});
