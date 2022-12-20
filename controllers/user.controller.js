import { request, response } from "express";
import User from "../models/user.js";
import { generatePassword } from "../helpers/utils.js";

export const userGet = async (req = request, res = response) => {
  const { query } = req;

  const { page = 0, limit = 5 } = query;

  const currentQuery = {status: true};

  const usersPromise = User.find(currentQuery)
    .skip(Number(page*limit))
    .limit(Number(limit)); 

  const totalPromise = User.countDocuments(currentQuery);

  const [users, total] = await Promise.all([usersPromise, totalPromise]);

  res.json({
    users,
    total
  });
};

export const userPost = async (req = request, res = response) => {
  const { body } = req;

  const { name, email, password, role } = body;

  const user = new User({ name, email, password, role });

  user.password = generatePassword(user.password);

  await user.save();

  res.status(201).json({
    msg: "post API - controller",
    user,
  });
};

export const userPut = async (req = request, res = response) => {
  const { id } = req.params;

  const { body } = req;

  let { name, email, password, role } = body;

  if (password) {
    password = generatePassword(password);
  }

  const user = await User.findByIdAndUpdate(id, {
    name,
    email,
    password,
    role
  }, {new: true});

  res.json({
    user
  });
};

export const userDelete = async (req = request, res = response) => {
  const { id } = req.params;

  const user = await User.findByIdAndUpdate(id, {status: false}, {new: true});

  res.json({
    user,
    msg: "delete API - controller",
  });
};

export const userPatch = (req = request, res = response) => {
  res.json({
    msg: "patch API - controller",
  });
};
