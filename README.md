# InnovaInfo Mern Stack Project

# Folder Stracture

index
config
-connection.js
controllers
-AuthController.js
middleware
-verifyJWT
-limiter
models
-User.js
public
-index.html
-404.html
routes
-api
-v1
-auth.route.js
-category.route.js
-post.route.js
-user.route.js
views
-public
-src
-app.js
-index.css
-index.js
env

## Uses tools for server / rest api

### bcrypt

### express

### express-rate-limit

### helmet

### jsonwebtoken

### mongoose

### morgan

### nodemon

### helmet

## Uses tools for cient/frontend

### react

### react router dom

### tailwind

## ENV Setup and change value

NODE_ENV=development
DATABASE_URL=mongodb+srv://database:password@cluster0.ngw4z7m.mongodb.net/?retryWrites=true&w=majority
ACCESS_TOKEN_SECRET="YmAb0fJLyOVdX5jWL4rRJc3CN41ZA1b/J8QRYaTGC4C/yR34b7lTEQDmlZKVJEO1gnHbV=="

## Generate secret totken

openssl rand -base64 128

## Install Dependencies

yarn
or
npm install

## Serve with at http://localhost:5000

yarn server
or
npm run server

## Client with at http://localhost:3000

cd views (To go views directory and run)

yarn start
or
npm start

## build for production with minification

yarn build
or
npm run build

## API Documention

#### https://documenter.getpostman.com/view/25680118/2s93mBvdYw

### Register a new User

http://localhost:5000/api/v1/auth/register
Method: POST
Body:
{
"username": "example",
"email": "example@example.com",
"password": "123456"
}
Response:
{
"status": 200,
"success": true,
"message": "Register successfully",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDc0NGI0MDFjYTJlM2NlOTE3OGRhMGYiLCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY4NTM0MzIzMX0.f6Kp1-6pVhVs2rqMjDTUa5eCqucu3s2iCg8kezpzcOI"
}

### Login User

http://localhost:5000/api/v1/auth/login
Method: POST
Body:
{
"username": "example",
"password": "123456"
}
or
{
"email": "example@example.com",
"password": "123456"
}

Response:
{
"status": 200,
"success": true,
"message": "login success",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDc0NGI0MDFjYTJlM2NlOTE3OGRhMGYiLCJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY4NTM0MzIzMX0.f6Kp1-6pVhVs2rqMjDTUa5eCqucu3s2iCg8kezpzcOI"
}
