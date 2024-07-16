let task;
let taskArray = [];
while(task != "quit"){
    task = prompt('What would you like to do');
    if (task === "new"){
        let newTodo = prompt('Enter a new todo');
        console.log(`${newTodo} added to the list`)
        taskArray.push(newTodo);
    }
    else if (task === "list"){
        console.log('***********')
        for (let i = 0; i<taskArray.length ; i++){
            console.log(`${i} : ${taskArray[i]}`)
        }
        console.log('***********')
    }
    else if (task === "delete"){
        let deleteTask = parseInt(prompt('Enter the index you want to delete'));
        for (let i = 0; i<taskArray.length; i++){
            if (deleteTask == i){
                taskArray.splice(deleteTask , 1);
            }
            console.log('Todo removed');
        }
    } else if (task === "quit"){
        console.log('Ok, you quit the app');
    }
}