import { request, response } from "express";
import { deleteFile, getFile, uploadFile } from "../helpers/fileUtils.js";
import { PRODUCT, USER } from "../constant/paramsQueries.constant.js";
import { ELEMENT_ID_DOES_NOT_EXIST, FUNCTIONALITY_NOT_IMPLEMENTED_YET } from "../constant/messages.constant.js";
import User from "../models/user.js";
import Product from "../models/product.js";

const updateUser = async (id = '', image = '', res = response) => {
    const user = await User.findOneAndUpdate({_id: id, status: true}, {image}, {new: false}).exec();
    if (!user) {
        return res.status(400).json({msg: ELEMENT_ID_DOES_NOT_EXIST(id, USER)});
    }

    if (user.image) {
        deleteFile(user.image, USER);
    }

    user.image = image;
    return res.json(user);
}

const updateProduct = async (id = '', image = '',res = response) => {
    const product = await Product.findOneAndUpdate({_id: id, status: true}, {image}, {new: false})
        .populate('user', 'name')
        .populate('category', 'name')
        .exec();

    if (!product) {
        return res.status(400).json({msg: ELEMENT_ID_DOES_NOT_EXIST(id, PRODUCT)});
    }

    if (product.image) {
        deleteFile(product.image, PRODUCT);
    }

    product.image = image;

    return res.json(product);
}

const getUserImage = async (id = '', res = response) => {
    const user = await User.findOne({_id: id, status: true}).exec();
    if (!user) {
        return res.status(400).json({msg: ELEMENT_ID_DOES_NOT_EXIST(id, USER)});
    }

    return res.sendFile(getFile(user.image, USER));
}

const getProductImage = async (id = '', res = response) => {
    const product = await Product.findOne({_id: id, status: true})
        .populate('user', 'name')
        .populate('category', 'name')
        .exec();

    if (!product) {
        return res.status(400).json({msg: ELEMENT_ID_DOES_NOT_EXIST(id, PRODUCT)});
    }

    return res.sendFile(getFile(product.image, PRODUCT));
}


export const uploadGet = async (req = request, res = response) => {  
    const {id, collection} = req.params;
    switch (collection) {
        case USER:
            getUserImage(id, res);
            break;

        case PRODUCT:
            getProductImage(id, res);
            break;
    
        default:
            res.status(500).json({
                msg: FUNCTIONALITY_NOT_IMPLEMENTED_YET
            })
    }
};  

export const uploadPost = async (req = request, res = response) => {  
    const { file } = req.files;

    let nameFile;
    try {
        nameFile = await uploadFile(file);
    } catch (error) {
        return res.status(400).send({error});
    }

    res.send({msg: 'File uploaded as ' + nameFile});
};  

export const uploadPut = async (req = request, res = response) => {
    const {id, collection} = req.params;
    const { file } = req.files;
    let nameFile;
    try {
        nameFile = await uploadFile(file, collection);
    } catch (error) {
        return res.status(400).send({error});
    }

    switch (collection) {
        case USER:
            updateUser(id, nameFile, res);
            break;

        case PRODUCT:
            updateProduct(id, nameFile, res);
            break;
    
        default:
            res.status(500).json({
                msg: FUNCTIONALITY_NOT_IMPLEMENTED_YET
            })
    }

};  