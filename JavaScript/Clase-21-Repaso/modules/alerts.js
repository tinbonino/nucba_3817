import Swal from "sweetalert2";

export function showAlert(){
    Swal.fire({
        title: "Que linda alerta",
        text: "Muy bien clickeado!",
        icon: "info"
      });
}