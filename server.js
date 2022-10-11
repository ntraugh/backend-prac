const express = require("express")
const mongoose = require("mongoose")
const users = require("./users")
const app = express()

const User = require("./users")

mongoose.connect("mongodb://localhost/pagination")
const db = mongoose.connection
db.once("open", async() => {
    // if there are no new users we return 
    if(await User.countDocuments().exec() > 0) return 

    Promise.all([
        User.create({name: "User 1"}),
        User.create({name: "User 2"}),
        User.create({name: "User 3"}),
        User.create({name: "User 4"}),
        User.create({name: "User 5"}),
        User.create({name: "User 6"}),
        User.create({name: "User 7"}),
        User.create({name: "User 8"}),
        User.create({name: "User 10"}),
        User.create({name: "User 11"}),
        User.create({name: "User 12"}),
    ]).then(() => console.log("Users Added"))
})


app.get("/users", (req, res) => {
    const page = req.query.page
    const limit = req.query.limit

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const usersPerPage = users.slice(startIndex, endIndex)
    usersPerPage.usersPerPage = model.find().limit(limit).skip(startIndex).exec()

})


app.listen(3000)