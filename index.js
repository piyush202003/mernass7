const express = require('express');
const { users } = require('./data/users.json');
const { todolist } = require('./data/todolist.json');


const app = express();
const PORT = 8081;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});


// http://localhost:8081/users
// APIs for users
// CRUD - Create, Read, Update, Delete
// GET - Read

app.get('/users', (req, res) => {
    // res.send('Hello, World!');
    // res.write('<h1>This is home page</h1>');
    // res.sendFile(__dirname + '/public/index.html');
    res.status(200).json({
        success:true,
        data: users
    })
});
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find((each) => each.id === Number(id));
    if(user){
        return res.status(200).json({
            success:true,
            data: user
        });
    }
    res.status(404).json({
        success: false,
        // message: 'User not found for id: ' + id
        message: `User not found for id: ${id}`
    });
}); 
app.post('/users', (req, res) => {
    const { name, email,password } = req.body;
    if(!name || !email || !password){
        return res.status(400).json({
            success: false,
            message: 'Name, email and password are required'
        });
    }
    const userExists = users.find((each)=>each.email === email);
    if(userExists){
        return res.status(409).json({
            success: false,
            message: 'User already exists with email: ' + email
        });
    }
    const newUser = {
        id: users.length + 1,
        name,
        email,
        password
    };
    users.push(newUser);
    res.status(201).json({
        success: true,
        data: newUser
    });
});
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    const user=users.find((each)=>each.id === Number(id));
    // const user=users.find((each)=>each.id === id);
    if(!user){
        return res.status(404).json({
            success: false,
            message: 'User not found for id: ' + id
        });
    }
    const updatedUser = users.map((each)=>{
        if(each.id === Number(id)){
            return {
                ...each,
                ...data
            };
        }
        return each;
    });
    res.status(200).json({
        success: true,
        message: 'User updated successfully',
        data:updatedUser
    });
});
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const user=users.find((each)=>each.id === Number(id));
    if(!user){
        return res.status(404).json({
            success: false,
            message: 'User not found for id: ' + id
        });
    }
    const filteredUsers = users.filter((each)=>each.id !== Number(id));
    res.status(200).json({
        success: true,
        message: 'User deleted successfully',
        data: filteredUsers
    });
});
// app.use((req,res)=>{
//     res.status(404).sendFile(__dirname + '/public/404.html');
// });


// http://localhost:8081/dolist
// APIS FOR TODOLIST
// CRUD - Create, Read, Update, Delete
// GET - Read
app.get('/todolist', (req, res) => {
    res.status(200).json({
        success:true,
        data: todolist
    })
});
app.get('/todolist/:userid', (req, res) => {
    const { userid } = req.params;
    const userTasks = todolist.filter((each) => each.user_id === Number(userid));
    if(userTasks.length > 0){
        return res.status(200).json({
            success:true,
            data: userTasks
        });
    }
    res.status(404).json({
        success: false,
        message: `No tasks found for user id: ${userid}`
    });
});
app.get('/todolist/:userid/:taskid', (req, res) => {
    const { userid, taskid } = req.params;
    const task = todolist.find((each) => each.user_id === Number(userid) && each.id === Number(taskid));
    if(task){
        return res.status(200).json({
            success:true,
            data: task
        });
    }
    res.status(404).json({
        success: false,
        message: `No task found for user id: ${userid} and task id: ${taskid}`
    });
});
app.post('/todolist/:userid', (req, res) => {
    const { userid } = req.params;
    const { task } = req.body;
    const userTasks = todolist.filter((each) => each.user_id === Number(userid));
    
    if(!task){
        return res.status(400).json({
            success: false,
            message: 'Task is required'
        });
    }
    const taskExists = userTasks.find((each)=>each.task === task);
    if(taskExists){
        return res.status(409).json({
            success: false,
            message: 'Task already exists: ' + task
        });
    }
    const newTask = {
        id: todolist.length + 1,
        user_id: Number(userid),
        task,
        completed: false
    };
    todolist.push(newTask);
    const updatedList = todolist.filter((each) => each.user_id === Number(userid));
    res.status(201).json({
        success: true,
        data: updatedList
    });
});
app.put('/todolist/:userid/:taskid', (req, res) => {
    const { userid, taskid } = req.params;
    const { data } = req.body;
    const task = todolist.find((each) => each.user_id === Number(userid) && each.id === Number(taskid));
    if(!task){
        return res.status(404).json({
            success: false,
            message: `No task found for user id: ${userid} and task id: ${taskid}`
        });
    }
    const updatedTasks = todolist.map((each) => {
        if(each.user_id === Number(userid) && each.id === Number(taskid)){
            return {
                ...each,
                ...data
            };
        }
        return each;
    });
    const filteredTasks = updatedTasks.filter((each) => (each.user_id === Number(userid) && each.id === Number(taskid)));
    res.status(200).json({
        success: true,
        message: 'Task updated successfully',
        data: filteredTasks
    });
});
app.delete('/todolist/:userid/:taskid', (req, res) => {
    const { userid, taskid } = req.params;
    const task = todolist.find((each) => each.user_id === Number(userid) && each.id === Number(taskid));
    if(!task){
        return res.status(404).json({
            success: false,
            message: `No task found for user id: ${userid} and task id: ${taskid}`
        });
    }
    const filteredTasks = todolist.filter((each) => !(each.user_id === Number(userid) && each.id === Number(taskid)));
    res.status(200).json({
        success: true,
        message: 'Task deleted successfully',
        data: filteredTasks
    });
});

//  Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
