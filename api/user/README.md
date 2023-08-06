# User Management API

This is a User Management API built using Express and MongoDB to handle user authentication and basic CRUD operations. It provides the following endpoints:

- [User Management API](#user-management-api)
  - [Endpoints](#endpoints)
    - [Signin](#signin)
    - [Signup](#signup)
    - [Get Users](#get-users)
    - [Update User](#update-user)
    - [Get User By ID](#get-user-by-id)
    - [Delete User](#delete-user)
  - [Environment Variables](#environment-variables)
  - [How to Run](#how-to-run)

## Endpoints

### Signin

**Description:** This endpoint is for user login. It checks the provided email and password against the database and generates a JSON Web Token (JWT) if the credentials are correct.

**HTTP Method:** POST

**Endpoint:** `/api/users/signin`

**Request Body:**
{
"Email": "user@example.com",
"Password": "user_password"
}

makefile
Copy code

**Response:**
{
"message": "Success! Logged In.",
"token": "your_generated_jwt_token"
}

markdown
Copy code

### Signup

**Description:** This endpoint is for user registration. It checks if the provided email already exists in the database, and if not, it creates a new user with an encrypted password.

**HTTP Method:** POST

**Endpoint:** `/api/users/signup`

**Request Body:**
{
"Name": "John Doe",
"Email": "user@example.com",
"Password": "user_password"
}

makefile
Copy code

**Response:**
{
"message": "Success! New User Added."
}

markdown
Copy code

### Get Users

**Description:** This endpoint retrieves all users from the database.

**HTTP Method:** GET

**Endpoint:** `/api/users/getUsers`

**Response:**
{
"users": [
{
"_id": "user_id_1",
"Name": "John Doe",
"Email": "user1@example.com",
"ProfilePic": "profile_picture_url_1",
"Joining": "user1_joining_date"
},
{
"_id": "user_id_2",
"Name": "Jane Smith",
"Email": "user2@example.com",
"ProfilePic": "profile_picture_url_2",
"Joining": "user2_joining_date"
},
// More users...
]
}

python
Copy code

### Update User

**Description:** This endpoint is for updating the user's profile. It updates the user's email, name, and profile picture based on the provided `_id`.

**HTTP Method:** PUT

**Endpoint:** `/api/users/upadateUser`

**Request Body:**
{
"_id": "user_id",
"Email": "updated_user@example.com",
"Name": "Updated Name",
"ProfilePic": "updated_profile_picture_url"
}

makefile
Copy code

**Response:**
{
"message": "Woohoo! Updated Successfully.",
"user": {
"_id": "user_id",
"Name": "Updated Name",
"Email": "updated_user@example.com",
"ProfilePic": "updated_profile_picture_url",
"Joining": "user_joining_date"
}
}

markdown
Copy code

### Get User By ID

**Description:** This endpoint retrieves a user's details by `_id`, excluding the password from the response.

**HTTP Method:** GET

**Endpoint:** `/api/users/getUserByID?_id=user_id`

**Response:**
{
"user": {
"_id": "user_id",
"Name": "User Name",
"Email": "user@example.com",
"ProfilePic": "profile_picture_url",
"Joining": "user_joining_date"
}
}

markdown
Copy code

### Delete User

**Description:** This endpoint deletes a user from the database based on the provided `_id`.

**HTTP Method:** DELETE

**Endpoint:** `/api/users/deleteUser`

**Request Body:**
{
"_id": "user_id"
}

makefile
Copy code

**Response:**
{
"message": "Success! User Deleted."
}

bash
Copy code

## Environment Variables

Before running the API, make sure to set the following environment variables in a `.env` file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

typescript
Copy code

## How to Run

1. Install the required dependencies using `npm install`.
2. Set up the environment variables in the `.env` file.
3. Start the server with `npm start`.
4. The API will be accessible at `http://localhost:PORT`, where `PORT` is the port number specified in your environment or the default `3000`.

Feel free to use this API as a foundation for your user management system!

[def]: #how-to-run