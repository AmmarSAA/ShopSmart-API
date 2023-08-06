# ShopSmart API

Table of Contents
- [ShopSmart API](#shopsmart-api)
  - [Introduction](#introduction)
  - [Endpoints](#endpoints)
    - [User Management](#user-management)
    - [Category Management](#category-management)
    - [Brand Management](#brand-management)
    - [Product Management](#product-management)
  - [Environment Variables](#environment-variables)
  - [How to Run](#how-to-run)
  - [Customization](#customization)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Introduction

The ShopSmart API is a powerful backend application built using Express and MongoDB. It provides various endpoints to manage users, categories, brands, and products for your e-commerce platform.

## Endpoints

### User Management

- `/api/users/signin`: User login endpoint.
- `/api/users/signup`: User registration endpoint.
- `/api/users/getUsers`: Get all users from the database.
- `/api/users/updateUser`: Update user profile.
- `/api/users/getUserByID`: Get user details by ID.
- `/api/users/deleteUser`: Delete user from the database.

### Category Management

- `/api/category/getCategory`: Get all categories from the database.
- `/api/category/getCategoryByName`: Get category details by name.
- `/api/category/createCategory`: Create a new category.
- `/api/category/deleteCategory`: Delete category from the database.
- `/api/category/updateCategory`: Update category details.

### Brand Management

- `/api/brand/getBrand`: Get all brands from the database.
- `/api/brand/getBrandByName`: Get brand details by name.
- `/api/brand/createBrand`: Create a new brand.
- `/api/brand/deleteBrand`: Delete brand from the database.
- `/api/brand/updateBrand`: Update brand details.

### Product Management

- `/api/product/getProduct`: Get all products from the database.
- `/api/product/getProductByName`: Get product details by name.
- `/api/product/createProduct`: Create a new product.
- `/api/product/deleteProduct`: Delete product from the database.
- `/api/product/updateProduct`: Update product details.

## Environment Variables

Before running the API, make sure to set the following environment variables in a `.env` file:

- `MONGO_URI`: Your MongoDB connection string.
- `JWT_SECRET`: Secret key for JWT token generation.

## How to Run

1. Install the required dependencies using `npm install`.
2. Set up the environment variables in the `.env` file.
3. Start the server with `npm start`.
4. The API will be accessible at `http://localhost:PORT`, where `PORT` is the port number specified in your environment or the default `3000`.

## Customization

Feel free to customize the API according to your specific requirements. You can add more endpoints or modify existing ones to suit your application's needs.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or need further assistance, feel free to contact us at [s.ammarahmed14@gmail.com](mailto:s.ammarahmed14@gmail.com).
