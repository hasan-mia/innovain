import CryptoJS from "crypto-js";

const helpers = {};
helpers.encrypt = (string) => CryptoJS.AES.encrypt(string, config.secretKey).toString();

helpers.decrypt = (string) => CryptoJS.AES.decrypt(string, config.secretKey).toString(CryptoJS.enc.Utf8);

export default helpers;