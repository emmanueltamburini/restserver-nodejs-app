import { request, response } from "express";

export const loginPost = (req = request, res = response) => {

  res.json({
    msg: 'login ok',
  });
};
