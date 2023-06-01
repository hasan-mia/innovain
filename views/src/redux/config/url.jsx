import config from './config';

const url = {};
// authentication
url.signUp = `${config.baseUrl}api/v1/auth/register`;
url.signIn = `${config.baseUrl}api/v1/auth/login`;
// user information
url.updateStatus = `${config.baseUrl}api/v1/user/status`; // id with parameters [put] and isAdmin = true
url.allUser = `${config.baseUrl}api/v1/user/all`; // [get]
url.userInfo = `${config.baseUrl}api/v1/user`; // email with body [get] or params as id
// category
url.addCategory = `${config.baseUrl}api/v1/category`; // [post]
url.updateCategory = `${config.baseUrl}api/v1/category/update`; // id with parameters [put]
url.deleteCategory = `${config.baseUrl}api/v1/category/delete`; // id with parameters [delete]
url.allCategory = `${config.baseUrl}api/v1/category/all`;
// post
url.addPost = `${config.baseUrl}api/v1/post`; // [post]
url.updatePost = `${config.baseUrl}api/v1/post/update`; // id with parameters  [put]
url.deletePost = `${config.baseUrl}api/v1/post/delete`; // id with parameters [delete]
url.allPost = `${config.baseUrl}api/v1/post`; // [get]
url.singlePost = `${config.baseUrl}api/v1/post`; // id with parameters [get]
url.switchStatus = `${config.baseUrl}api/v1/post/switch`; // id with parameters [put] and isAdmin = true

export default url;
