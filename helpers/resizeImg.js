import Jimp from 'jimp';
import HttpError from '../helpers/HttpError.js';

const resizeImage = async (filePath, newFilePath, width, height) => {
  try {
    const image = await Jimp.read(filePath);
    await image.resize(width, height).writeAsync(newFilePath);
  } catch (error) {
    throw HttpError(500);
  }
};

export default resizeImage;
