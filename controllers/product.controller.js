import { request, response } from "express";
import { Product } from "../models/index.js";
import {
    ELEMENT_IS_NOT_AVAILABLE,
    SOMETHING_WENT_WRONG
} from "../constant/messages.constant.js";
import { PRODUCT } from "../constant/paramsQueries.constant.js";

export const productGetAll = async (req = request, res = response) => {
  const { query } = req;

  const { page = 0, limit = 5 } = query;

  const currentQuery = { status: true };

  const productPromise = Product.find(currentQuery)
    .populate('user', 'name email')
    .populate('category', 'name')
    .skip(Number(page * limit))
    .limit(Number(limit)).exec();

  const totalPromise = Product.countDocuments(currentQuery).exec();

  const [products, total] = await Promise.all([
    productPromise,
    totalPromise,
  ]);

  res.json({
    products,
    total,
  });
};

export const productGet = async (req = request, res = response) => {
  const { id } = req.params;

  const product = await Product.findOne({ _id: id, status: true })
    .populate('user', 'name email')
    .populate('category', 'name')
    .exec();

  if (!product) {
    return res.status(204).json();
  }

  res.json({
    product,
  });
};

export const productPost = async (req = request, res = response) => {
  const { body, user } = req;
  let { name, price, category, description, available } = body;
  name = name.toUpperCase();

  const data = {
    name,
    user: user._id,
    price,
    category,
    description,
    available
  };

  const product = new Product(data);

  try {
    await product.save();
    await Product.populate(product, { path: 'user', select: 'name' });
    const newProduct = await Product.populate(product, { path: 'category', select: 'name' });
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: SOMETHING_WENT_WRONG,
    });
  }
};

export const productPut = async (req = request, res = response) => {
  const { id } = req.params;
  const { body, user } = req;
  let { name, price, category, description, available } = body;

  if (name) {
    name = name.toUpperCase();
  }
  const data = {
    name,
    user: user._id,
    price,
    category,
    description,
    available
  };

  const product = await Product.findOneAndUpdate(
    {_id: id, status: true}, data, { new: true }
  ).exec();

  if (!product) {
    return res.status(404).json({
        msg: ELEMENT_IS_NOT_AVAILABLE(PRODUCT)
    });
  }

  await Product.populate(product, { path: 'user', select: 'name' });
  const newProduct = await Product.populate(product, { path: 'category', select: 'name' });

  res.json(newProduct);
};

export const productDelete = async (req = request, res = response) => {
  const { id } = req.params;

  const product = await Product.findByIdAndUpdate(id, {status: false}, {new: true}).exec();

  res.json({
    product
  });
};
