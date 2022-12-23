import { request, response } from "express";

export const exampleGetAll = async (req = request, res = response) => {
  res.json({
    msg: 'Example get all'
  });
};

export const exampleGet = async (req = request, res = response) => {
  res.json({
    msg: 'Example get'
  });
};

export const examplePost = async (req = request, res = response) => {
  res.json({
    msg: 'Example post all'
  });
};

export const examplePut = async (req = request, res = response) => {
  res.json({
    msg: 'Example put'
  });
};

export const exampleDelete = async (req = request, res = response) => {
  res.json({
    msg: 'Example delete'
  });
};
