import { webs } from "./data_web.js";

let divPaginas = document.querySelector(".caja1");

webs.forEach((cada_web) => {

    let div_web = document.createElement("div");
    div_web.innerHTML = `
        
        <div class ="contenedor_padre">
        <img src="${cada_web.img}" alt="">
            <h3 class="titulo">${cada_web.nombre}</h3>
            <p class="descripcion">${cada_web.descripcion}</p>

            <div class ="botoness">
            <a href="${cada_web.repositorio}" class="github">repositorio</a>
            <a href="${cada_web.githubpage}" class="github">GitHub</a>
            </div>
            
        </div>
    `;
    divPaginas.appendChild(div_web);
});