import { request, response } from "express";
import { uploadFile } from "../helpers/fileUtils.js";

export const uploadPost = async (req = request, res = response) => {  
    const { file } = req.files;

    let nameFile;
    try {
        nameFile = await uploadFile(file);
    } catch (error) {
        return res.status(500).send({error});
    }

    res.send({msg: 'File uploaded as ' + nameFile});
};  