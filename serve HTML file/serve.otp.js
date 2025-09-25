import path from "path";
import {__dirname} from '../utils/path.js'

const otpVerify = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/otpVerify.html"));
};

export { otpVerify };
