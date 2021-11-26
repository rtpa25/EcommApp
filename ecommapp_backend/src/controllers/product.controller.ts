/** @format */

//Dependencies
import { Response, NextFunction } from 'express';
import Cloudinary from 'cloudinary';

//internal imports
import Product from '../models/product.model';
import logger from '../utils/logger';
import { CustomReq } from '../utils/UserCustomReqObject';

const cloudinary = Cloudinary.v2;

/*****************************************ADMIN ONLY******************************************/

//-----ADD_PRODUCT CONTROLLER ----//
export const addProduct = async (
  req: CustomReq,
  res: Response,
  next: NextFunction
) => {
  try {
    //req.user is the user who is accessing this api
    if (req.user.isAdmin === false) {
      res.status(400).json({
        success: false,
        message: 'Admin Only',
      });
    }
    //if we do not receive files
    if (!req.files) {
      res.status(401).json({
        success: false,
        message: 'Image is required to be uploaded',
      });
    }

    const { img } = req.files;

    await cloudinary.uploader.upload(img[0].tempFilePath, {
      folder: 'Portfolio_Projects_Products',
    });
  } catch (error: any) {
    logger.error(error);
    //send error message
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
  next();
};
