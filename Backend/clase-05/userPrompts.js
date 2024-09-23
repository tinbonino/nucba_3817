import inquirer from "inquirer";

export async function promptNewUser(){
    return await inquirer.prompt(newUserPrompt)
}

const newUserPrompt = [
    {
        type:"input",
        name: "document",
        message: "Ingrese su DNI:"
    },
    {
        type: "input",
        name: "full_name",
        message: "Ingrese su nombre completo:"
    },
    {
        type: "input",
        name: "birth_date",
        message: "Ingrese su fecha de nacimiento:"
    },
    {
        type: "input",
        name: "nationality",
        message: "Ingrese su nacionalidad:"
    }
]