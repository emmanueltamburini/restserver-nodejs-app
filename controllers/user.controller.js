import {request, response} from 'express';

export const userGet = (req = request, res = response) => {
  res.json({
    msg: 'get API - controller'
  });
}

export const userPost = (req, res) => {
  res.status(201).json({
    msg: 'post API - controller'
  });
}

export const userPut =(req, res) => {
  res.json({
    msg: 'put API - controller'
  });
}

export const userDelete =(req, res) => {
  res.json({
    msg: 'delete API - controller'
  });
}

export const userPatch =(req, res) => {
  res.json({
    msg: 'patch API - controller'
  });
}
