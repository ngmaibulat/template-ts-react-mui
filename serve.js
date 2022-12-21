import servor from "servor";
import fs from "node:fs";

const port = 3000;

const options = {
    root: "public",
    fallback: "index.html",
    module: false,
    static: false,
    reload: true,
    inject: "",
    credentials: {
        cert: fs.readFileSync("./localhost.pem"),
        key: fs.readFileSync("./localhost-key.pem"),
    },
    port: port,
};

const instance = await servor(options);

console.log(`Listening on port ${port}`);
