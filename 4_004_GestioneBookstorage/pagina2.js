"use strict"
let jsonVet=this.localStorage.getItem("bookstore_json");
window.onload = function(){
    
    this.console.log(vettoreContenenteiCampi);
    let _titolo=this.document.getElementById("txtTitolo");
    let _autori=this.document.getElementById("txtAutore");
    let _categoria=this.document.getElementById("txtCategoria");
    let _lingua=this.document.getElementById("txtLingua");
    let _anno=this.document.getElementById("txtAnno");
    let _prezzo=this.document.getElementById("txtPrezzo");
    salva();
}
function salva(){
    for (let i = 0; i < jsonVet.length; i++) {
        if (jsonVet[i]>0) {
            
        }
    }
}