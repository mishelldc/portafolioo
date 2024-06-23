import { cuadro_del_lado} from "./lado.js";
import {header} from "./header.js";

let conexion = document.querySelector(".root");

function cargardiv(){
    conexion.innerHTML=`
    <div class="header">${header}</div>
    <div class="lado">${cuadro_del_lado}</div>
    <div class="caja1"></div>
    `;
}
cargardiv();