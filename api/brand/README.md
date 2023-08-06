# Brand Management API

This is a Brand Management API built using Express and MongoDB to handle brand data and basic CRUD operations. It provides the following endpoints for managing brands in your application.

- [Brand Management API](#brand-management-api)
  - [Endpoints](#endpoints)
    - [Get All Brands](#get-all-brands)
    - [Get Brand By Name](#get-brand-by-name)
    - [Create Brand](#create-brand)
    - [Delete Brand](#delete-brand)
    - [Update Brand](#update-brand)
  - [Environment Variables](#environment-variables)
  - [How to Run](#how-to-run)

## Endpoints

### Get All Brands

**Description:** This endpoint retrieves all brands from the database.

**HTTP Method:** GET

**Endpoint:** `/api/brand/getBrand`

**Response:**
{
  "brands": [
    {
      "_id": "brand_id_1",
      "Name": "Brand 1",
      "Image": "brand_image_url_1"
    },
    {
      "_id": "brand_id_2",
      "Name": "Brand 2",
      "Image": "brand_image_url_2"
    },
    // More brands...
  ]
}

### Get Brand By Name

**Description:** This endpoint retrieves a brand's details by `Name`.

**HTTP Method:** GET

**Endpoint:** `/api/brand/getBrandByName?Name=brand_name`

**Response:**
{
  "brand": {
    "_id": "brand_id",
    "Name": "Brand Name",
    "Image": "brand_image_url"
  }
}

### Create Brand

**Description:** This endpoint is for creating a new brand.

**HTTP Method:** POST

**Endpoint:** `/api/brand/createBrand`

**Request Body:**
{
  "Name": "New Brand",
  "Image": "brand_image_url"
}

**Response:**
{
  "message": "Success! New Brand Added."
}

### Delete Brand

**Description:** This endpoint deletes a brand from the database based on the provided `_id`.

**HTTP Method:** DELETE

**Endpoint:** `/api/brand/deleteBrand`

**Request Body:**
{
"_id": "brand_id"
}

**Response:**
{
"message": "Success! Brand Deleted."
}

### Update Brand

**Description:** This endpoint is for updating the brand's profile. It updates the brand's email, name, and profile picture based on the provided `_id`.

**HTTP Method:** PUT

**Endpoint:** `/api/brand/updateBrand`

**Request Body:**
{
  "_id": "brand_id",
  "Name": "Updated Brand Name",
  "Image": "updated_brand_image_url"
}

**Response:**
{
  "message": "Success",
  "brands": [
    {
      "_id": "brand_id_1",
      "Name": "Brand 1",
      "Image": "brand_image_url_1"
    },
    {
      "_id": "brand_id_2",
      "Name": "Updated Brand Name",
      "Image": "updated_brand_image_url"
    },
    // More brands...
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

Feel free to use this API as a foundation for your brand management system!