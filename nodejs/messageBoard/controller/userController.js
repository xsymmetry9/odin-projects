//saved as /controller/userController.js
const asyncHandler = require("express-async-handler");

class CustomNotFoundError extends Error{
    constructor(message){
        super(message);
        this.statusCode = 404;
        this.name = "Not Found Error";
    }

}
const messages =[
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

const getMessages = asyncHandler(async(req, res) =>{
    res.render("index", {title: "Mini Messageboard", messages: messages});
});

const plotForm  = asyncHandler(async(req, res) =>{
    res.render("form");
});

const readForm = asyncHandler(async(req, res) =>{
    const {messageText, messageUser} = req.body;
    messages.push({text: messageText, user: messageUser, added: new Date()})
    res.redirect("/");
})

module.exports = {getMessages, plotForm, readForm}