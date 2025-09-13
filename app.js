import express from "express";
import cors from 'cors'

import path from "path"
import { fileURLToPath } from "url";
// Fix __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express()


app.use(cors())
app.use(express.json())


app.use(express.static(path.join(__dirname, "public")));




export {app}