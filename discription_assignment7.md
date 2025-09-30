ToDoList Assignment 7

Now, here there are 2 set of APIs:
    1)User
    2)ToDoList

1)User:
    get =>http://localhost:8081/users => to get all existing users
    <img src="images/users/image.png" alt="Screenshot" width="600">
    get =>http://localhost:8081/users/:id => to get user with specific id
    <img src="images/users/image2.png" alt="Screenshot" width="600">
    post =>http://localhost:8081/users => to creat a new user account (must have email which don't have account) input can be data(name, email, password)
    <img src="images/users/image3.png" alt="Screenshot" width="600">
    put =>http://localhost:8081/users/:id => enter user id which you want to update there information input can be data(name, email, password)
    <img src="images/users/image4.png" alt="Screenshot" width="600">
    delete =>http://localhost:8081/users/:id => to delete certain user account
    <img src="images/users/imag5.png" alt="Screenshot" width="600">


2)ToDoList
    get =>http://localhost:8081/todolist => to get all existing tasks 
    <img src="images/todolist/image.png" alt="Screenshot" width="600">
    get =>http://localhost:8081/todolist/:userid => to get all existing tasks of user with this user_id
    <img src="images/todolist/image2.png" alt="Screenshot" width="600">
    get =>http://localhost:8081/todolist/:userid/:taskid => to get existing task of user with this user_id and id
    <img src="images/todolist/image3.png" alt="Screenshot" width="600">
    post =>http://localhost:8081/todolist/:userid => to creat new task by user with this user_id input is task ans complete is by default false
    <img src="images/todolist/image4.png" alt="Screenshot" width="600">
    put =>http://localhost:8081/todolist/:userid/:taskid => to update certain task with id taskid input can be task and complete(option: true,false)
    <img src="images/todolist/image5.png" alt="Screenshot" width="600">
    delete =>http://localhost:8081/todolist/:userid/:taskid => to delete certain task with id taskid
    <img src="images/todolist/image6.png" alt="Screenshot" width="600">