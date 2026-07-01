const express = require('express')
const users = require('./mock_data.json')
const fs = require('fs')


const app = express()
const PORT = 8000

app.use(express.urlencoded({ extended: false }))



// REST APIS 
app.get('/api/users', (req, res) => {
    return res.send(users)
})
app.get('/users', (req, res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`)}
    </ul>
    `
    return res.send(html)
})



app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id)
        return res.send(user)
    })
    .patch((req, res) => {

        const id = Number(req.params.id)
        const user = users.find((user) => user.id === id)
        if (!user) {
            return res.status(404).json({
                message: "user not found"
            })
        }
        Object.assign(user, req.body);
        fs.writeFile('./mock_data.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).json({
                    message: "Failed to update user"
                })
            }
            return res.json({
                status: "success",
                data: user
            })
        })
    })
    .delete((req, res) => {

        const id = Number(req.params.id);

        const index = users.findIndex((user) => user.id === id);

        if (index === -1) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const deletedUser = users.splice(index, 1);

        fs.writeFile('./mock_data.json', JSON.stringify(users, null, 2), (err) => {

            if (err) {
                return res.status(500).json({
                    message: "Something went wrong"
                });
            }

            return res.json({
                status: "success",
                deletedUser
            });
        });

    })


app.post('/api/users', (req, res) => {

    console.log("Users before push:", users.length);

    const body = req.body;
    console.log("Body:", body);

    users.push({ ...body, id: users.length + 1 });

    console.log("Users after push:", users.length);

    fs.writeFile('./mock_data.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: err.message });
        }

        return res.json({
            status: 'success',
            id: users.length
        });
    });
});





app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})