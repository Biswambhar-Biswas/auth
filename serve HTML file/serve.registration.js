import path from "path";
import  {__dirname} from '../utils/path.js'

const serveRegistration = (req, res) => {
  res.sendFile(path.join(__dirname, "../public",'mordanRegister.html'));
};

export { serveRegistration };
