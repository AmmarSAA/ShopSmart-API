/****************************
* File Name: Routes.js      *
* Author: Ammar S.A.A       *
* Output: Router for users  *
****************************/

const express = require('express')
const router = express.Router()

const { Signin, Signup, deleteUser, updateUser, userByID, getUsers } = require('./Controller')


router.post('/signin', Signin)
router.post('/signup', Signup)
router.get('/getUsers', getUsers)
router.get('/getUserByID', userByID)
router.delete('/deleteUser', deleteUser)
router.put('/updateUser', updateUser)

// router.get('/signup', (req, res) => {
//     // Handle the request for the /api/users route
//     res.send('Hello from /api/users/signup route');
// });


module.exports = router