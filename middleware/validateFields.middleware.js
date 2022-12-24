import { request, response } from "express";
import { validationResult } from "express-validator";
import { ELEMENT_NOT_FOUND, NOT_FILES } from "../constant/messages.constant.js";
import { FILE } from "../constant/paramsQueries.constant.js";

export const validateFields = (req = request, res = response, next = () => {}) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }

    next();
}

export const validateFiles = (filesName = '') => (req = request, res = response, next = () => {}) => {

    if (!req.files || Object.keys(req.files).length === 0) {
      res.status(400).send({msg: NOT_FILES});
      return;   
    }

    if (!req.files[filesName]) {
        res.status(400).send({msg: ELEMENT_NOT_FOUND(filesName, FILE)});
        return;   
    }

    next();
}