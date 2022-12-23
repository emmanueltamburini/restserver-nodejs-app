import { request, response } from "express";
import { Category } from "../models/index.js";
import {
  CATEGORY_ALREADY_EXISTS,
  SOMETHING_WENT_WRONG,
} from "../constant/messages.constant.js";

export const categoryGetAll = async (req = request, res = response) => {
  const { query } = req;

  const { page = 0, limit = 5 } = query;

  const currentQuery = { status: true };

  const categoryPromise = Category.find(currentQuery)
    .populate("user")
    .skip(Number(page * limit))
    .limit(Number(limit));

  const totalPromise = Category.countDocuments(currentQuery);

  const [categories, total] = await Promise.all([
    categoryPromise,
    totalPromise,
  ]);

  res.json({
    categories,
    total,
  });
};

export const categoryGet = async (req = request, res = response) => {
  const { id } = req.params;

  const category = await Category.findOne({ _id: id, status: true })
    .populate("user");

  if (!category) {
    return res.status(204).json();
  }

  res.json({
    category,
  });
};

export const categoryPost = async (req = request, res = response) => {
  const { body, user } = req;
  let { name } = body;
  name = name.toUpperCase();

  const data = {
    name,
    user: user._id,
  };

  const category = new Category(data);

  try {
    await category.save();

    res.status(201).json({
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: SOMETHING_WENT_WRONG,
    });
  }
};

export const categoryPut = async (req = request, res = response) => {
  const { id } = req.params;
  const { body } = req;
  let { name } = body;

  name = name.toUpperCase();

  const category = await Category.findByIdAndUpdate(
    id, { name }, { new: true }
  );

  res.json({
    category,
  });
};

export const categoryDelete = async (req = request, res = response) => {
  const { id } = req.params;

  const category = await Category.findByIdAndUpdate(id, {status: false}, {new: true});

  res.json({
    category
  });
};
