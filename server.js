const express = require("express")

const app = express()

const users = [
    { id: 0, name: "User 0" },
    { id: 2, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
    { id: 4, name: "User 4" },
    { id: 5, name: "User 5" },
    { id: 6, name: "User 6" },
    { id: 7, name: "User 7" },
    { id: 8, name: "User 8" }
]

app.get("/users", (req, res) => {
    res.json(users)
})


app.listen(3000)