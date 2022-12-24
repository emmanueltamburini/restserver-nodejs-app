import { request, response } from "express";
import path from 'path'
import * as url from 'url';
import { generateNameFile } from "../helpers/utils.js";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const uploadPost = async (req = request, res = response) => {  
    const { file } = req.files;

    const uploadPath = path.join(__dirname, '../uploads/', generateNameFile(req.extFile))
  
    file.mv(uploadPath, function(err) {
      if (err) {
        console.log(err);
        return res.status(500).send({err});
      }
  
      res.send({msg: 'File uploaded to ' + uploadPath});
    });
};  