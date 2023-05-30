import config from './config';

const url = {};
// authentication
url.signUp = `${config.baseUrl}api/v1/auth/register`;
url.signIn = `${config.baseUrl}api/v1/auth/login`;
// user information
url.allUser = `${config.baseUrl}api/v1/user/all`; // [get]
url.userInfo = `${config.baseUrl}api/v1/user`; // id with parameters [get]
// category
url.addCategory = `${config.baseUrl}api/v1/category`; // [post]
url.updateCategory = `${config.baseUrl}api/v1/category/update`; // id with parameters [put]
url.deleteCategory = `${config.baseUrl}api/v1/category/delete`; // id with parameters [delete]
url.allCategory = `${config.baseUrl}api/v1/category`;
// post
url.addPost = `${config.baseUrl}api/v1/post`; // [post]
url.updatePost = `${config.baseUrl}api/v1/post/update`; // id with parameters  [put]
url.deletePost = `${config.baseUrl}api/v1/post/delete`; // id with parameters [delete]
url.allPost = `${config.baseUrl}api/v1/post`; // [get]
url.singlePost = `${config.baseUrl}api/v1/post`; // id with parameters [get]

export default url;
