import servor from "servor";
import fs from "node:fs";
import dotenv from "dotenv";

dotenv.config();

const port = parseInt(process.env.PORT || "3000");
const host = process.env.HOST || "localhost";

const options = {
    root: "public",
    fallback: "index.html",
    module: false,
    static: false,
    reload: true,
    inject: "",
    credentials: {
        cert: fs.readFileSync(`./${host}.pem`),
        key: fs.readFileSync(`./${host}-key.pem`),
    },
    port: port,
};

const instance = await servor(options);

console.log(`App available via: https://${host}:${port}/`);
