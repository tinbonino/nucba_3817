import { get,save } from "./filesMethods.js";
import { promptNewUser } from "./userPrompts.js";

import inquirer from "inquirer";

const main = async () => {
    let run = true;

    while(run){
        const action = await inquirer.prompt([
            {
                type:"list",
                name:"chosen",
                message: "Elija amigo!",
                choices:[
                    {value:1,name:"Obtener todos los usuarios"},
                    {value:2,name:"Crear un nuevo usuario"},
                    {value:99,name:"Me quiero ir!"},
                ]
            }
        ])
       
        switch(action.chosen) {
            case 1:
                await getAllUsers();
                break;
            case 2:
                await createNewUser();
                break;
            case 99:
                run=false;
                break;
            default:
                run=false;
                break;
        }
    }
    console.log("Gracias por usar EmpanadaTech");
}

main()

async function createNewUser(){
    console.log("Creando nuevo usuario con un robot muy tecnológico");
    const newUserData= await promptNewUser();
    console.log("Creando:",newUserData);

    const currentUsers=await get("users");
    currentUsers.push(newUserData);
    await save("users",currentUsers)
}

async function getAllUsers(){
    const currentUsers=await get("users");
    console.log(currentUsers);
}