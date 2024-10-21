import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

interface IObjetoAGuardar {
    id:number,
    username:string,
    isAdmin:boolean
};

// Creamos el objeto

const objetoAGuardar : IObjetoAGuardar = {
    id:1,
    username: "SebaProCrackGamer2010Messi",
    isAdmin:true
}

const claveSecreta = "H3CT0RV0LV3";

// const tokenFirmado= jwt.sign(objetoAGuardar,claveSecreta);

// console.log(tokenFirmado)

const generarJWT = (dato:IObjetoAGuardar) => {
  return new Promise((resolve,reject) => {
    jwt.sign(dato,claveSecreta,{
        expiresIn:"50s"
    },
    (err,token) => {
      if(err){
        console.log(err);
        reject("Fallo la creacion del token");
      } else {
        console.log("Está todo piola");
        resolve(token);
      }
    }

    )
  })
}

(async () => {
    const respuesta = await generarJWT(objetoAGuardar);
    console.log(respuesta);
})();

// const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJTZWJhUHJvQ3JhY2tHYW1lcjIwMTBNZXNzaSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyOTU1MDYxMSwiZXhwIjoxNzI5NTUwNjYxfQ.Lrs3_vqhsx1mWcAKsv0HIj-prB_mwvOwyveJH7Y7y2A"

// const infoVerificada= jwt.verify(token,claveSecreta)
// console.log(infoVerificada)

// Bcrypt

const claveAEncriptar = "claveloca";

const salt = bcrypt.genSaltSync(10);

console.log("sal 🧂")
console.log(salt);

const claveEncriptada = bcrypt.hashSync(claveAEncriptar,salt);
console.log("Password encriptada");
console.log(claveEncriptada);

const claveValida = bcrypt.compareSync(claveAEncriptar,claveEncriptada)

console.log(claveValida)