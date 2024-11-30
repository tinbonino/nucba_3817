import nodemailer from "nodemailer";

// crear el transporte

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user:"nucbazappi3317@gmail.com",
        pass:"bygv zcmh zrkz vqmg"
    },
    from:"nucbazappi3317@gmail.com"
});

export const sendEmail = async (to:string,code:string):Promise<void> => {
    try {
        const mailOption = {
            from: "NucbazAPI - La 3839 manda!",
            to,
            subject: "C´digo de verificación para tu cuenta",
            text: `Llegó tu código para NucbazAPI. 
            El código es:${code}`
        };

        await transporter.sendMail(mailOption);
        console.log("Correo electrónico enviado");
    } catch (error){
        console.error("Error al enviar el correo",error)
    }
}
