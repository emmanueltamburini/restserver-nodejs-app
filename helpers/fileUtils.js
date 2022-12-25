import * as url from 'url';
import path from 'path'
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import cloudinary from 'cloudinary'

import { LOCAL_ASSETS_FOLDER_PATH, LOCAL_PREVIOUS_PATH, LOCAL_UPLOAD_PATH } from '../constant/routes.constant.js';
import { DEFAULT_IMAGE } from '../constant/values.constant.js';

const cloudinaryV2 = cloudinary.v2;

export const __dirname = url.fileURLToPath(new URL(LOCAL_PREVIOUS_PATH, import.meta.url));

export const generateNameFile = (file) => `${uuidv4()}.${getExtFromFile(file)}`

export const getExtFromFile = (file) => {
    const cutName = file.name.split('.');
    return cutName[cutName.length - 1];
}

export const getIdFromCloudinaryFile = (imagePath = '') => {
    const cutName = imagePath.split('/');
    const name = cutName[cutName.length - 1];
    const [id] = name.split('.');
    return id;
}

export const getFile = (nameFile = '', folder = '') => {
    if (process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET){
        return getFileFromCloudinary(nameFile, folder);
    } else {
        return getFileFromLocale(nameFile, folder);
    }
}

export const uploadFile = (file, folder = '') => {
    if (process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET){
        return uploadFileFromCloudinary(file, folder);
    } else {
        return uploadFileFromLocale(file, folder);
    }
}

export const deleteFile = (nameFile = '', folder = '') => {
    if (process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET){
        return deleteFileFromCloudinary(nameFile, folder);
    } else {
        return deleteFileFromLocale(nameFile, folder);
    }
}

const getFileFromLocale = (nameFile = '', folder = '') => {
    const imagePath = path.join(__dirname, LOCAL_UPLOAD_PATH, folder, nameFile);

    if (nameFile !== '' && fs.existsSync(imagePath)) {
        return imagePath;
    }

    return path.join(__dirname, LOCAL_ASSETS_FOLDER_PATH, '', DEFAULT_IMAGE);
}

const uploadFileFromLocale = (file, folder = '') => {
    return new Promise((resolve, reject) => {
        const nameFile = generateNameFile(file);
        const uploadPath = path.join(__dirname, LOCAL_UPLOAD_PATH, folder, nameFile);
  
        file.mv(uploadPath, function(error) {
          if (error) {
            console.log(error);
            reject(error);
          }
      
          resolve(nameFile);
        });
    });
}

const deleteFileFromLocale = (nameFile = '', folder = '') => {
    const imagePath = path.join(__dirname, LOCAL_UPLOAD_PATH, folder, nameFile);

    if (nameFile !== '' && fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath)
    }
}

const getFileFromCloudinary = (nameFile = '', folder = '') => {
    if (nameFile !== '') {
        return nameFile;
    }

    return path.join(__dirname, LOCAL_ASSETS_FOLDER_PATH, '', DEFAULT_IMAGE);
}

const uploadFileFromCloudinary = async (file, folder = '') => {
    const {tempFilePath} = file;
    const {secure_url} = await cloudinaryV2.uploader.upload(tempFilePath, {folder});

    return secure_url;
}

const deleteFileFromCloudinary = (nameFile = '', folder = '') => {
    const id = getIdFromCloudinaryFile(nameFile);
    cloudinaryV2.uploader.destroy(`${folder}/${id}`)
}
