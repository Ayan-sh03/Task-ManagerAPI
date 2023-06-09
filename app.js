const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const port = process.env.port || 3000;
const connectDB = require('./db/connect')
 require('dotenv').config();
const notFound = require('./middleware/notfound')
 // middleware
app.use(express.json());
app.use(express.static('./public'))

//routes


app.use('/api/v1/tasks',tasks);

app.use(notFound)

// app.get('/api/v1/tasks') get all the tasks
// app.post('/api/v1/tasks') - create a new task
// app.get('/api/v1/tasks/:id') - get single task
// app.patch('/api/v1/tasks/:id') - update task
// app.delete('/api/v1/tasks/:id') - delete task

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>console.log("Server is listening",port))
    }catch(err){
        console.log(err)
    }
}

start();

