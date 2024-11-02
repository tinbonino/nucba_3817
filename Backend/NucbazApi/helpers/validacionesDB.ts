import { sendEmail } from "../mailer/mailer";
import Usuario, { IUser } from "../models/Usuario";


export const existeEmail = async (email: string):Promise<void> => {

	const existeMail: IUser | null = await Usuario.findOne({ email });
	if (existeMail && existeMail.verified) {
		throw new Error(`El correo ${email} ya está registrado`);
	 }

    if(existeMail && !existeMail.verified ){
        await sendEmail(email, existeMail.code as string)
        throw new Error(`El usuario ya está registrado, se envio nuevamente el codigo por email`)

    }
}