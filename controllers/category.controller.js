import { request, response } from "express";

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

  res.json({
    msg: 'post'
  });
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
