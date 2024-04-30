import './style.css'
import { showAlert } from './modules/alerts';
import { showNotification } from './modules/notification';

//tippy
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

document.querySelector("#showAlert").addEventListener("click",() => {
  showAlert();
});

document.querySelector("#showNotification").addEventListener("click",() => {
  showNotification();
})

tippy("#showAlert",{
  content:"Alertas sarpadas",
  theme:"light",
  backdrop:0
});
tippy("#showNotification",{
  content:"Alta Notificación",
  theme:"light",
  backdrop:0
});
tippy("#showTippy",{
  content:"Tippy",
  theme:"light",
  backdrop:0
});