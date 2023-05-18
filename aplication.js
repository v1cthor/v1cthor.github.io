var texto_final;
const txtarea = document.querySelector(".txtInput");
const mensaje = document.querySelector(".mensaje");

function encriptar() {

    const txtEncriptar = document.getElementById("textoEncriptar").value.toLowerCase();

    if (!txtEncriptar == '') {
        let textoEncriptado = txtEncriptar.replaceAll('e', 'enter');
        textoEncriptado = textoEncriptado.replaceAll('i', 'imes');
        textoEncriptado = textoEncriptado.replaceAll('a', 'ai');
        textoEncriptado = textoEncriptado.replaceAll('o', 'ober');
        textoEncriptado = textoEncriptado.replaceAll('u', 'ufat');
        mensaje.value = textoEncriptado;
        txtarea.value = "";
        mensaje.style.backgroundImage = "none";
        oculatImagen();
        mostrarTxtarea();
        mostrarBtn();
    }

}


function desEncriptar() {
    const txtDesencriptar = document.getElementById("textoEncriptar").value.toLowerCase();
    let textoDesencriptado = txtDesencriptar.replaceAll('enter', 'e');
    textoDesencriptado = textoDesencriptado.replaceAll('imes', 'i');
    textoDesencriptado = textoDesencriptado.replaceAll('ai', 'a');
    textoDesencriptado = textoDesencriptado.replaceAll('ober', 'o');
    textoDesencriptado = textoDesencriptado.replaceAll('ufat', 'u');
    console.log(textoDesencriptado);
    mensaje.value = '';
    mensaje.value = textoDesencriptado;
    oculatImagen();
    mostrarTxtarea();
    mostrarBtn();
}

function mostrar() {
    div = document.getElementById('flotante');
    div.style.display = '';
}

function oculatImagen() {
    div = document.getElementById('flotante');
    div.style.display = 'none';
}

function mostrarTxtarea() {
    div = document.getElementById('txtEncriptados');
    div.style.display = '';
}

function mostrarBtn() {
    div = document.getElementById('btnCopiarH');
    div.style.display = '';
}

function copiarTexto() {
    let copyText = document.querySelector("#txtEncriptados");
    copyText.select();
    document.execCommand("copy");
}