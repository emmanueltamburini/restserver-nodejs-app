import { request, response } from "express";
import { CATEGORY, PRODUCT, USER } from "../constant/paramsQueries.constant.js";
import { FUNCTIONALITY_NOT_IMPLEMENTED_YET } from "../constant/messages.constant.js";
import { Types } from "mongoose";
import User from "../models/user.js";
import Category from "../models/category.js";
import Product from "../models/product.js";

const searchUser = async (term = '', res = response) => {
    const isMongoID = Types.ObjectId.isValid(term);
    let users = null;
    if (isMongoID) {
        users = await User.findOne({_id: term, status: true}).exec();
    } else {
        const regexName = RegExp(term, 'i');
        users = await User.find({
            $or: [{name: regexName}, {email: regexName}],
            $and: [{status: true}]
        }).exec();
    }

    return res.json({
        results: !!users ? [users] : []
    });
}

const searchCategory = async (term = '', res = response) => {
    const isMongoID = Types.ObjectId.isValid(term);
    let categories = null;
    if (isMongoID) {
        categories = await Category.findOne({_id: term, status: true})
        .populate('user', 'name')
        .exec();
    } else {
        const regexName = RegExp(term, 'i');
        categories = await Category.find({name: regexName, status: true})
        .populate('user', 'name')
        .exec();
    }

    return res.json({
        results: !!categories ? [categories] : []
    });
}

const searchProduct = async (term = '', res = response) => {
    const isMongoID = Types.ObjectId.isValid(term);
    let products = null;
    if (isMongoID) {
        products = await Product.findOne({_id: term, status: true})
        .populate('user', 'name')
        .populate('category', 'name')
        .exec();
    } else {
        const regexName = RegExp(term, 'i');
        products = await Product.find({
            $or: [{name: regexName}, {description: regexName}],
            $and: [{status: true}]
        })
        .populate('user', 'name')
        .populate('category', 'name')
        .exec();
    }

    return res.json({
        results: !!products ? [products] : []
    });
}

export const searchGet = async (req = request, res = response) => {
    const { collection, term } = req.params; 

    switch (collection) {
        case USER:
            searchUser(term, res);
            break;

        case CATEGORY:
            searchCategory(term, res);
            break;

        case PRODUCT:
            searchProduct(term, res);
            break;
    
        default:
            res.status(500).json({
                msg: FUNCTIONALITY_NOT_IMPLEMENTED_YET
            })
    }
};
