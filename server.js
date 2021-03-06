const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const pool = require('./db/connect.js')
const path = require('path')
const app = express()
dotenv.config()

const PORT = process.env.PORT || 8000

app.use(express.json());
app.use(cors())

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});

app.get("/home", function (req, res) {
    res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.get("/complete", function (req, res) {
    res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.get("/incomplete", function (req, res) {
    res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});


app.get('/api/todos', async (req, res) => {
    try {
        const client = await pool.connect()
        const data = await client.query('SELECT * FROM todos;')
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
