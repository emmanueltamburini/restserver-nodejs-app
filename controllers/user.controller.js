import { request, response } from "express";
import User from "../models/user.js";
import bcryptjs from "bcryptjs";

export const userGet = (req = request, res = response) => {
  const { query } = req;

  const { q, name = "No name", apiKey, page = 1, limit } = query;

  res.json({
    msg: "get API - controller",
    q,
    name,
    apiKey,
    page,
    limit,
  });
};

export const userPost = async (req = request, res = response) => {
  const { body } = req;

  const { name, email, password, role } = body;

  const user = new User({ name, email, password, role });

  const salt = bcryptjs.genSaltSync(10);

  user.password = bcryptjs.hashSync(user.password, salt);

  await user.save();

  res.status(201).json({
    msg: "post API - controller",
    user,
  });
};

export const userPut = (req = request, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "put API - controller",
    id,
  });
};

export const userDelete = (req = request, res = response) => {
  res.json({
    msg: "delete API - controller",
  });
};

export const userPatch = (req = request, res = response) => {
  res.json({
    msg: "patch API - controller",
  });
};
