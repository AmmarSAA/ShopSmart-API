/********************************
* File Name: Controller.js 		*
* Author: Ameen Hamza 			*
* Output: Controller for orders 	*
********************************/

const { connect } = require('mongoose');
require('dotenv').config();
const User = require('../user/Model');
const Order = require('./Model');
const nodemailer = require("nodemailer");
var Mailgen = require('mailgen');

///api/demomail
const ordermail = async (req, res) => {
    const { email, customerName } = req.body;


    if (!email || !customerName) {
        res.status(401).json({
            message: "Please fill all fields"
        })
    }

    const config = {
        service: 'gmail',
        host: "smtp.forwardemail.net",
        port: 465,
        secure: true,
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASSWORD
        }
    }


    const transporter = nodemailer.createTransport(config);

    var mailGenerator = new Mailgen({
        theme: 'default',
        product: {
            // Appears in header & footer of e-mails
            name: 'Mailgen Mymart',
            link: 'https://mailgen.js/'
        }
    });

    var mailGenEmail = {
        body: {
            name: customerName,
            intro: 'Welcome to Mailgen! We\'re very excited to have you on board.',
            table: {
                data: [
                    {
                        name: customerName,
                        email: email,
                        token: "123456"
                    }
                ]
            },
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    };

    const response = {
        from: process.env.NODEMAILER_EMAIL, // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: mailGenerator.generate(mailGenEmail), // html body
    }

    try {
        await transporter.sendMail(response);

        res.json({ message: "Check your email" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

///api/order/addorders

// const addOrders = async (req, res) => {
//     try {
//         const { items, totalBill, customerAddress, customerContact, customerName, customerEmail } = req.body

//         if (!items || !totalBill || !customerAddress || !customerContact || !customerName || !customerEmail) {
//             res.status(401).json({
//                 message: "Oops 😭 Invalid Credentials"
//             })
//         }

//         else {
//             await connect(process.env.MONGO_URI)
//             const order = await Order.create({ items, totalBill, customerAddress, customerContact, customerName, customerEmail })

//             res.status(201).json({
//                 message: "Order Create Successfully",
//                 TrakingId: order._id
//             })
//         }

//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         })
//     }
// }

///api/order/getBrand
const createOrder = async (req, res) => {

    const { items, totalBill, customerAddress, customerContact, customerName, customerEmail, status } = req.body



    if (!items || !totalBill || !customerAddress || !customerContact || !customerName || !customerEmail || !status) {
        res.status(400).json({
            message: "Oops! Missing Required Field."
        })
    }

    //proceed for signup
    else {

        try {

            await connect(process.env.MONGO_URI)

            const CheckUser = await User.findOne({ email: customerEmail })
            //if email found, stop
            if (!CheckUser) {
                res.json({
                    message: "Oops! User not found."
                })
            }


            const order = await Order.create({ items, totalBill, customerAddress, customerContact, customerName, customerEmail, status })

            // EMAIL

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                host: "smtp.forwardemail.net",
                port: 465,
                secure: true,
                auth: {
                    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                    user: process.env.NODEMAILER_EMAIL,
                    pass: process.env.NODEMAILER_PASSWORD
                }
            });

            // Mail Generator Setup

            var mailGenerator = new Mailgen({
                theme: 'default',
                product: {
                    // Appears in header & footer of e-mails
                    name: 'Mailgen Mymart',
                    link: 'https://mailgen.js/'
                }
            });

            await transporter.sendMail({
                from: process.env.NODEMAILER_EMAIL, // sender address
                to: email, // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: mailGenerator.generate({
                    body: {
                        name: customerName,
                        intro: 'Welcome to Mailgen! We\'re very excited to have you on board.',
                        table: {
                            data: [
                                {
                                    name: customerName,
                                    email: customerEmail,
                                    TrackingId: order._id,
                                    address: customerAddress,
                                    contact: customerContact
                                }
                            ]
                        },
                        outro: 'Please make sure the above mentioned details are correct, incase of any mistake, you can contact us'
                    }
                }), // html body
            });

            res.json({
                message: "Success! Order create Successfully!."
            })
        }
        catch (error) {
            res.json({
                message: error.message
            })
        }

        //create user with encrypted password

    }

}

const getOrder = async (req, res) => {

    try {
        await connect(process.env.MONGO_URI)

        const allOrders = await Order.find()

        if (allOrders.length === 0) {
            return res.json({
                message: "Oops! No Oders."
            })
        }
        res.json({
            message: "Success",
            orders: allOrders
        })


    } catch (error) {
        res.json({
            message: error.message
        })
    }

}

const getOrderByEmail = async (req, res) => {
    const { customerEmail } = req.query

    try {
        //connection
        //Connection to database
        await connect(process.env.MONGO_URI)
        //find one from name and fetch it's details
        const customer = await Order.findOne({ customerEmail })

        if (!customer) {
            return res.json({
                message: "Oops! Customer Not Found."
            });
        }
        res.json({ customer })
    }

    //catches error and broadcasts
    catch (error) {
        res.json({
            message: error.message
        })
    }
}

const getOrderByID = async (req, res) => {
    const { _id } = req.query

    try {
        //connection
        //Connection to database
        await connect(process.env.MONGO_URI)
        //find one from name and fetch it's details
        const customerId = await Order.findOne({ _id })

        if (!customer) {
            return res.json({
                message: "Oops! Customer Not Found."
            });
        }
        res.json({ customerId })
    }

    //catches error and broadcasts
    catch (error) {
        res.json({
            message: error.message
        })
    }
}

const updateOrder = async (req, res) => {
    const { _id, items, totalBill, customerAddress, customerContact, customerName, customerEmail, status } = req.body

    const filter = { _id }
    const update = { items, totalBill, customerAddress, customerContact, customerName, customerEmail, status }

    try {
        //connection
        //Connection to database
        await connect(process.env.MONGO_URI)
        //find one from _id and updates it
        const updated = await Order.findOneAndUpdate(filter, update, {
            new: true
        })

        res.json({
            message: "Woohoo! Updated Successfully.",
            order: updated
        })
    }

    //catches error and broadcasts
    catch (error) {
        res.json({
            message: error.message
        })
    }


}

const deleteOrder = async (req, res) => {

    const { _id } = req.body

    try {
        //connection
        //Connection to database
        await connect(process.env.MONGO_URI)
        //find one from _id and delete it
        await Order.deleteOne({ _id })
        //Success Message
        res.json({ message: "Success! Order Deleted." })
    }

    //catches error and broadcasts
    catch (error) {
        res.json({
            message: error.message
        })
    }

}

module.exports = { ordermail, createOrder, getOrder, getOrderByEmail, getOrderByID, updateOrder, deleteOrder }
