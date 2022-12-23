import { request, response } from "express";
import { Category } from "../models/index.js";
import { CATEGORY_ALREADY_EXISTS, SOMETHING_WENT_WRONG } from "../constant/messages.constant.js";

export const categoryGetAll = async (req = request, res = response) => {

  res.json({
    msg: 'get all'
  });
};

export const categoryGet = async (req = request, res = response) => {

  res.json({
    msg: 'get'
  });
};

export const categoryPost = async (req = request, res = response) => {
  const {body, user} = req;
  let {name} = body;
  name = name.toUpperCase();

  const categoryDB = await Category.findOne({name});
  
  if (categoryDB) {
    return res.status(400).json({
        msg: CATEGORY_ALREADY_EXISTS(categoryDB.name)
    });
  }

  const data = {
    name,
    user: user._id
  }

  const category = new Category(data);

  try {
    await category.save();

    res.status(201).json({
      category
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: SOMETHING_WENT_WRONG
    });
  }
};


export const categoryPut = async (req = request, res = response) => {

  res.json({
    msg: 'put'
  });
};


export const categoryDelete = async (req = request, res = response) => {

  res.json({
    msg: 'delete'
  });
};
