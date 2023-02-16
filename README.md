# RestSerer

## RestSerer README

This application is an example on nodejs, its functionality is to simulate a rest API on user, products and categories. It also has all the functionality of regular login authentication and google login, as well as file upload and flexible search api. You can see the api examples below

You can check final result [here](https://websocket-nodejs-app-production.up.railway.app/) (if you have a problem with url please notice to emmanueltamburini@gmail.com)

## Getting started

Run `npm install` to install all dependencies of the app.

Create and configure .env file (you can use .example.env to know what environment variables you must define):

    PORT: This variable is the port where you want your app runs

    MONGODB_CNN: this is the url to connect to mongo data base, for this you can check [the documentation](https://www.mongodb.com/docs/cloud-manager/tutorial/getting-started/)

    SECRET_PRIVATE_KEY: This variable is the secret key to encrypt and decrypt your json web token, if you change this, all the current logged user will lose access

    GOOGLE_CLIENT_ID: This variable is the google client id, for this you can check [the documentation](https://developers.google.com/identity/gsi/web/guides/overview)

    GOOGLE_SECRET_ID: This variable is the google secret id, for this you can check [the documentation](https://developers.google.com/identity/gsi/web/guides/overview)

    CLOUDINARY_CLOUD_NAME: This variable is the cloud name from cloudinary, for this you can check [the documentation](https://cloudinary.com/documentation) but for easy way when you create your account in the main dashboard you can see the this name.

    CLOUDINARY_API_KEY: This variable is the api key from cloudinary, for this you can check [the documentation](https://cloudinary.com/documentation) but for easy way when you create your account in the main dashboard you can see the this key.

    CLOUDINARY_API_SECRET: This variable is the api secret key from cloudinary, for this you can check [the documentation](https://cloudinary.com/documentation) but for easy way when you create your account in the main dashboard you can see the this key.

Before Create and configure .env file you can use `npm start` to start your app in the port that you configured. If you run this locally you can find your login google app in <http://localhost:[PORT]> and your api in <http://localhost:[PORT]>/api (You can see the api examples below)

Api documentation

## Project: Nodejs coffee app
Nodejs coffee api. You must change {{url}} for the url where your app will be running, if you run this app locally, you can change it for <http://localhost:[PORT]> where PORT is the port you define in .env file

## End-point: Post user
### Method: POST
>```
>{{url}}/api/user
>```
### Body (**raw**)

```json
{
    "name": "test1",
    "email": "test1@test.com",
    "password": "123456",
    "role": "SELLER_ROLE"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Put user
### Method: PUT
>```
>{{url}}/api/user/63a131c2ed2c1d15b41d238f
>```
### Body (**raw**)

```json
{
    "name": "test1",
    "email": "test1@test.com",
    "password": "123456",
    "role": "ADMIN_ROLE"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get user
### Method: GET
>```
>{{url}}/api/user?page=0&limit=15
>```
### Query Params

|Param|value|
|---|---|
|page|0|
|limit|15|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete user
### Method: DELETE
>```
>{{url}}/api/user/63a1af5c89c257ee4c5211ed
>```
### Headers

|Content-Type|Value|
|---|---|
|x-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2M2ExMzFjMmVkMmMxZDE1YjQxZDIzOGYiLCJpYXQiOjE2NzE2NTQ3ODEsImV4cCI6MTY3MTY2OTE4MX0.SgTtf1qGdZpyiX8ZR_o0A4jBzFaFza1PWZcEbjYOeto|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Post login
### Method: POST
>```
>{{url}}/api/auth/login
>```
### Body (**raw**)

```json
{
    "email": "test1@test.com",
    "password": "123456"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Post google
### Method: POST
>```
>{{url}}/api/auth/google
>```
### Body (**raw**)

```json
{
    "id_token": "abc"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Renew token
### Method: GET
>```
>{{url}}/api/auth
>```
### Headers

|Content-Type|Value|
|---|---|
|x-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2M2ExMzFjMmVkMmMxZDE1YjQxZDIzOGYiLCJpYXQiOjE2NzI4MDEzNDEsImV4cCI6MTY3MjgxNTc0MX0.2U3PZcE550-6138InclJxeXqHEUEgfoLKLheQEJPF1E|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get all category
### Method: GET
>```
>{{url}}/api/category?page=0&limit=5
>```
### Query Params

|Param|value|
|---|---|
|page|0|
|limit|5|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Post category
### Method: POST
>```
>{{url}}/api/category
>```
### Headers

|Content-Type|Value|
|---|---|
|x-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2M2ExMzFjMmVkMmMxZDE1YjQxZDIzOGYiLCJpYXQiOjE2NzE4MjgxNTksImV4cCI6MTY3MTg0MjU1OX0.ZyaUkGxBWXe4tSjGYd0SgLhNhoZQWLbMg-0rTaml704|


### Body (**raw**)

```json
{
    "name": "category1"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Put category
### Method: PUT
>```
>{{url}}/api/category/63a4d18739510173c9b8c620
>```
### Headers

|Content-Type|Value|
|---|---|
|x-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2M2ExYWY2Njg5YzI1N2VlNGM1MjExZjEiLCJpYXQiOjE2NzE4MjUxMDksImV4cCI6MTY3MTgzOTUwOX0.AXBaVWb1JCoJQ5Q0H7dSa_rdmgwN-Z-M3N48D8g_kV8|


### Body (**raw**)

```json
{
    "name": "category15"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete category
### Method: DELETE
>```
>{{url}}/api/category/63a5ae3e9b24c900deb8340c
>```
### Headers

|Content-Type|Value|
|---|---|
|x-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2M2ExMzFjMmVkMmMxZDE1YjQxZDIzOGYiLCJpYXQiOjE2NzE4MjUyOTAsImV4cCI6MTY3MTgzOTY5MH0.QdKClNSAFuiQgPyubizZhyGUD5kdOCEq21O3kICKIJk|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get category
### Method: GET
>```
>{{url}}/api/category/63a59e8fbc859aa1f5efd166
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Post product
### Method: POST
>```
>{{url}}/api/product
>```
### Headers

|Content-Type|Value|
|---|---|
|x-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2M2ExMzFjMmVkMmMxZDE1YjQxZDIzOGYiLCJpYXQiOjE2NzE4MjgxNTksImV4cCI6MTY3MTg0MjU1OX0.ZyaUkGxBWXe4tSjGYd0SgLhNhoZQWLbMg-0rTaml704|


### Body (**raw**)

```json
{
    "name": "product8",
    "category": "63a59e8fbc859aa1f5efd166",
    "price": 50,
    "description": "product description",
    "available": false
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get all product
### Method: GET
>```
>{{url}}/api/product?page=0&limit=10
>```
### Query Params

|Param|value|
|---|---|
|page|0|
|limit|10|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get product
### Method: GET
>```
>{{url}}/api/product/63a61306ad53281e1a353ed0
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Put product
### Method: PUT
>```
>{{url}}/api/product/63a61306ad53281e1a353ed0
>```
### Headers

|Content-Type|Value|
|---|---|
|x-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2M2ExMzFjMmVkMmMxZDE1YjQxZDIzOGYiLCJpYXQiOjE2NzE4MjgxNTksImV4cCI6MTY3MTg0MjU1OX0.ZyaUkGxBWXe4tSjGYd0SgLhNhoZQWLbMg-0rTaml704|


### Body (**raw**)

```json
{
    "name": "product1",
    "category": "63a59e8fbc859aa1f5efd166",
    "price": 50,
    "description": "product description",
    "available": false
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete product
### Method: DELETE
>```
>{{url}}/api/product/63a61306ad53281e1a353ed0
>```
### Headers

|Content-Type|Value|
|---|---|
|x-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2M2ExMzFjMmVkMmMxZDE1YjQxZDIzOGYiLCJpYXQiOjE2NzE4MjgxNTksImV4cCI6MTY3MTg0MjU1OX0.ZyaUkGxBWXe4tSjGYd0SgLhNhoZQWLbMg-0rTaml704|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get search
### Method: GET
>```
>{{url}}/api/search/category/C
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Post upload
### Method: POST
>```
>{{url}}/api/upload
>```
### Headers

|Content-Type|Value|
|---|---|
|x-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2M2ExMzFjMmVkMmMxZDE1YjQxZDIzOGYiLCJpYXQiOjE2NzE4MjgxNTksImV4cCI6MTY3MTg0MjU1OX0.ZyaUkGxBWXe4tSjGYd0SgLhNhoZQWLbMg-0rTaml704|


### Body formdata

|Param|value|Type|
|---|---|---|
|file|/home/emmanuel/Imágenes/Captura de pantalla de 2022-11-14 09-07-30.png|file|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Put upload
### Method: PUT
>```
>{{url}}/api/upload/user/63a131c2ed2c1d15b41d238f
>```
### Headers

|Content-Type|Value|
|---|---|
|x-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2M2ExMzFjMmVkMmMxZDE1YjQxZDIzOGYiLCJpYXQiOjE2NzE4MjgxNTksImV4cCI6MTY3MTg0MjU1OX0.ZyaUkGxBWXe4tSjGYd0SgLhNhoZQWLbMg-0rTaml704|


### Body formdata

|Param|value|Type|
|---|---|---|
|file|/home/emmanuel/Imágenes/Captura de pantalla de 2022-11-15 17-34-29.png|file|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get upload
### Method: GET
>```
>{{url}}/api/upload/user/63a131c2ed2c1d15b41d238f
>```
### Headers

|Content-Type|Value|
|---|---|
|x-token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2M2ExMzFjMmVkMmMxZDE1YjQxZDIzOGYiLCJpYXQiOjE2NzE4MjgxNTksImV4cCI6MTY3MTg0MjU1OX0.ZyaUkGxBWXe4tSjGYd0SgLhNhoZQWLbMg-0rTaml704|

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
