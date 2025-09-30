ToDoList Assignment 7

Now, here there are 2 set of APIs:
    1)User
    2)ToDoList

1)User:<br>
    \tget =>http://localhost:8081/users => to get all existing users<br>
    <img src="images/users/image.png" alt="Screenshot" width="600"><br>
    get =>http://localhost:8081/users/:id => to get user with specific id<br>
    <img src="images/users/image2.png" alt="Screenshot" width="600"><br>
    post =>http://localhost:8081/users => to creat a new user account (must have email which don't have account) input can be data(name, email, password)<br>
    <img src="images/users/image3.png" alt="Screenshot" width="600"><br>
    put =>http://localhost:8081/users/:id => enter user id which you want to update there information input can be data(name, email, password)<br>
    <img src="images/users/image4.png" alt="Screenshot" width="600"><br>
    delete =>http://localhost:8081/users/:id => to delete certain user account<br>
    <img src="images/users/image5.png" alt="Screenshot" width="600"><br>


2)ToDoList:<br>
    get =>http://localhost:8081/todolist => to get all existing tasks <br>
    <img src="images/todolist/image.png" alt="Screenshot" width="600"><br>
    get =>http://localhost:8081/todolist/:userid => to get all existing tasks of user with this user_id<br>
    <img src="images/todolist/image2.png" alt="Screenshot" width="600"><br>
    get =>http://localhost:8081/todolist/:userid/:taskid => to get existing task of user with this user_id and id<br>
    <img src="images/todolist/image3.png" alt="Screenshot" width="600"><br>
    post =>http://localhost:8081/todolist/:userid => to creat new task by user with this user_id input is task ans complete is by default false<br>
    <img src="images/todolist/image4.png" alt="Screenshot" width="600"><br>
    put =>http://localhost:8081/todolist/:userid/:taskid => to update certain task with id taskid input can be task and complete(option: true,false)<br>
    <img src="images/todolist/image5.png" alt="Screenshot" width="600"><br>
    delete =>http://localhost:8081/todolist/:userid/:taskid => to delete certain task with id taskid<br>
    <img src="images/todolist/image6.png" alt="Screenshot" width="600"><br>

