const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const pool = require('./db/connect.js')
const path = require('path')
const app = express()
dotenv.config()

const PORT = process.env.PORT || 8000

app.use(express.json());
// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
app.use(cors())

app.get('/api/todos', async (req, res) => {
    try {
        const client = await pool.connect()
        const data = await pool.query('SELECT * FROM todos;')
        res.json(data.rows)
        client.release()
    } catch (err) {
        console.error(err.message)
    }
});

app.get('/api/todos/:id', async (req, res) => {
    try {
        const data = await pool.query('SELECT * FROM todos WHERE todo_id = $1;', [req.params.id])
        res.json(data.rows)
    } catch (err) {
        console.error(err.message)
    }
});

app.post('/api/todos', async (req, res) => {
    try {
        const result = await pool.query('INSERT INTO todos (todo) VALUES ($1) RETURNING *;', [req.body.todo])
        res.json(result.rows)
    } catch (err) {
        console.error(err.message)
    }
})

app.patch('/api/todos/:id', async (req, res) => {
    try {
        const { todo, completed } = req.body
        const todos = await pool.query('SELECT * FROM todos WHERE todo_id = $1', [req.params.id])
        const obj = {
            todo: todo || todos.rows[0].todo,
            complete: completed || todos.rows[0].completed
        }
        const result = await pool.query('UPDATE todos SET todo = $1,completed = $2 WHERE todo_id = $3 RETURNING *;', [obj.todo, obj.complete, req.params.id])
        res.json(result.rows)
    } catch (err) {
        console.error(err.message)
    }
})

app.delete('/api/todos/:id', async (req, res) => {
    try {
        const result = await pool.query('DELETE FROM todos WHERE todo_id = $1', [req.params.id])
        res.json(result.rows)
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(PORT, () => {
    console.log('Listening on PORT:', PORT)
})
