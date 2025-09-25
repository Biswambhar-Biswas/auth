import path from "path"
import { fileURLToPath } from "url";
// Fix __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export {__dirname}