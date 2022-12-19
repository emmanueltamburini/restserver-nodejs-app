import { request, response } from "express";
import User from "../models/user.js";

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

  const user = new User(body);

  await user.save();

  res.status(201).json({
    msg: "post API - controller",
    user
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
