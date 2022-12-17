import {request, response} from 'express';

export const userGet = (req = request, res = response) => {
  res.json({
    msg: 'get API - controller'
  });
}

export const userPost = (req = request, res = response) => {
  const {body} = req;

  const {name, age} = body;

  res.status(201).json({
    msg: 'post API - controller',
    name,
    age
  });
}

export const userPut = (req = request, res = response) => {
  res.json({
    msg: 'put API - controller'
  });
}

export const userDelete = (req = request, res = response) => {
  res.json({
    msg: 'delete API - controller'
  });
}

export const userPatch = (req = request, res = response) => {
  res.json({
    msg: 'patch API - controller'
  });
}
