'use strict';

const lista=[];
const aggiungi=document.getElementById("aggiungi");
const item=document.getElementById("item");
const listaH=document.getElementById("lista");
let i=0;

aggiungi.addEventListener("click",function(){
    if (item.value != '')
    {
        lista.push(item.value);
        let tmp="";
        while(i<lista.length)
        {
            tmp+=`<div class="col-12"><div class="ir-alert p-2">${lista[i]}</div></div>`;
            listaH.innerHTML+=tmp;
            i++;
        }
    }
    else {
        alert("Inserisci un campo corretto");
    }
});

