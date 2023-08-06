# Product Management API

This is a Product Management API built using Express and MongoDB to handle product data and basic CRUD operations. It provides the following endpoints for managing products in your application.

- [Product Management API](#product-management-api)
  - [Endpoints](#endpoints)
    - [Get All Products](#get-all-products)
    - [Get Product By Name](#get-product-by-name)
    - [Create Product](#create-product)
    - [Delete Product](#delete-product)
    - [Update Product](#update-product)
  - [Environment Variables](#environment-variables)
  - [How to Run](#how-to-run)

## Endpoints

### Get All Products

**Description:** This endpoint retrieves all products from the database.

**HTTP Method:** GET

**Endpoint:** `/api/product/getProduct`

**Response:**
{
  "products": [
    {
      "_id": "product_id_1",
      "Name": "Product 1",
      "Image": "product_image_url_1"
    },
    {
      "_id": "product_id_2",
      "Name": "Product 2",
      "Image": "product_image_url_2"
    },
    // More products...
  ]
}

### Get Product By Name

**Description:** This endpoint retrieves a product's details by `Name`.

**HTTP Method:** GET

**Endpoint:** `/api/product/getProductByName?Name=product_name`

**Response:**
{
  "product": {
    "_id": "product_id",
    "Name": "Product Name",
    "Image": "product_image_url"
  }
}

### Create Product

**Description:** This endpoint is for creating a new product.

**HTTP Method:** POST

**Endpoint:** `/api/product/createProduct`

**Request Body:**
{
  "Name": "New Product",
  "Image": "product_image_url"
}

**Response:**
{
  "message": "Success! New Product Added."
}

### Delete Product

**Description:** This endpoint deletes a product from the database based on the provided `_id`.

**HTTP Method:** DELETE

**Endpoint:** `/api/product/deleteProduct`

**Request Body:**
{
"_id": "product_id"
}

**Response:**
{
"message": "Success! Product Deleted."
}

### Update Product

**Description:** This endpoint is for updating the product's profile. It updates the product's email, name, and profile picture based on the provided `_id`.

**HTTP Method:** PUT

**Endpoint:** `/api/product/updateProduct`

**Request Body:**
{
  "_id": "product_id",
  "Name": "Updated Product Name",
  "Image": "updated_product_image_url"
}

**Response:**
{
  "message": "Success",
  "products": [
    {
      "_id": "product_id_1",
      "Name": "Product 1",
      "Image": "product_image_url_1"
    },
    {
      "_id": "product_id_2",
      "Name": "Updated Product Name",
      "Image": "updated_product_image_url"
    },
    // More products...
  ]
}

## Environment Variables

Before running the API, make sure to set the following environment variables in a `.env` file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

## How to Run

1. Install the required dependencies using `npm install`.
2. Set up the environment variables in the `.env` file.
3. Start the server with `npm start`.
4. The API will be accessible at `http://localhost:PORT`, where `PORT` is the port number specified in your environment or the default `3000`.

Feel free to use this API as a foundation for your product management system!
