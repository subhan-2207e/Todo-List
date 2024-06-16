import inquirer from "inquirer";
import chalk from "chalk";

let todolist: String [] = [];
let condition = true;

console.log(chalk.bold.blue("\n \t Welcome to Subhankhan Todo-list \n"))

let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name:"choices",
                type:"list",
                message:"Select an option you want to do",
                choices:["Add Task","Delete Task","Update Task","View Todo-list","Exit"]
            }
        ])

        if (option.choices === "Add Task") {
            await taskadd()
        }
        else if (option.choices === "Delete Task"){
            await taskdelete()
        }
        else if (option.choices === "Update Task"){
            await Updatetask()
        }
        else if (option.choices === "View Todo-list"){
            await Viewtask()
        }
        else if (option.choices === "Exit"){
              condition = false;
        }
    }
}


let taskadd = async () =>{
let Addtask = await inquirer.prompt([
    {
        name:"task",
        type:"input",
        message:"Enter your new task :"
    }
])
todolist.push(Addtask.task);
console.log(`\n ${Addtask.task} task added succesfully in todo-list \n`);
}


let Viewtask = () => {
    console.log(`\n your todo-list: \n`)
    todolist.forEach((task,index) => {
        console.log(`${index +1},${task}`)
    })
}


let taskdelete = async () =>{

    await Viewtask()

    let DeleteTask = await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:"Enter the 'index no' you want to delete task",
        },
    ]);
    let taskdelete = todolist.splice(DeleteTask.index -1, 1);
    console.log(`${taskdelete} this task has been delete from todo-list`)
}

let Updatetask = async() =>{

    await Viewtask()

    let taskupdate = await inquirer.prompt([
        {
            name:"taskupd",
            type:"number",
            message:"Enter the 'index no' you want to update task :",
        },
        {
            name:"new_task",
            type:"input",
            message:"Now Enter now task name :"
        }
    ]);

    todolist[taskupdate.taskupd -1] = taskupdate.new_task;
    console.log(`\n task at index no ${taskupdate.taskupd -1} update successfully`);
}

main();