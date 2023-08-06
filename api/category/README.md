# Category Management API

This is a Category Management API built using Express and MongoDB to handle category data and basic CRUD operations. It provides the following endpoints for managing categories in your application.

- [Category Management API](#category-management-api)
  - [Endpoints](#endpoints)
    - [Get All Categories](#get-all-categories)
    - [Get Category By Name](#get-category-by-name)
    - [Create Category](#create-category)
    - [Delete Category](#delete-category)
    - [Update Category](#update-category)
  - [Environment Variables](#environment-variables)
  - [How to Run](#how-to-run)

## Endpoints

### Get All Categories

**Description:** This endpoint retrieves all categories from the database.

**HTTP Method:** GET

**Endpoint:** `/api/categories/getCategory`

**Response:**
{
  "categories": [
    {
      "_id": "category_id_1",
      "Name": "Category 1",
      "Image": "category_image_url_1"
    },
    {
      "_id": "category_id_2",
      "Name": "Category 2",
      "Image": "category_image_url_2"
    },
    // More categories...
  ]
}

### Get Category By Name

**Description:** This endpoint retrieves a category's details by `Name`.

**HTTP Method:** GET

**Endpoint:** `/api/category/categoryByName?Name=category_name`

**Response:**
{
  "category": {
    "_id": "category_id",
    "Name": "Category Name",
    "Image": "category_image_url"
  }
}

### Create Category

**Description:** This endpoint is for creating a new category.

**HTTP Method:** POST

**Endpoint:** `/api/category/createCategory`

**Request Body:**
{
  "Name": "New Category",
  "Image": "category_image_url"
}

**Response:**
{
  "message": "Success! New Category Added."
}

### Delete Category

**Description:** This endpoint deletes a category from the database based on the provided `_id`.

**HTTP Method:** DELETE

**Endpoint:** `/api/category/deleteCategory`

**Request Body:**
{
"_id": "category_id"
}

**Response:**
{
"message": "Success! Category Deleted."
}

### Update Category

**Description:** This endpoint is for updating the category's profile. It updates the category's email, name, and profile picture based on the provided `_id`.

**HTTP Method:** PUT

**Endpoint:** `/api/category/updateCategory`

**Request Body:**
{
  "_id": "category_id",
  "Name": "Updated Category Name",
  "Image": "updated_category_image_url"
}

**Response:**
{
  "message": "Success",
  "categories": [
    {
      "_id": "category_id_1",
      "Name": "Category 1",
      "Image": "category_image_url_1"
    },
    {
      "_id": "category_id_2",
      "Name": "Updated Category Name",
      "Image": "updated_category_image_url"
    },
    // More categories...
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

Feel free to use this API as a foundation for your category management system!