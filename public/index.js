const setLocalStorage = (usuario) => localStorage.setItem("usuario", JSON.stringify(usuario));

const btnEntrar = () =>{
    let inputName = document.getElementById('nome').value
    let idUser = (Math.random() * 1000).toString();

    setLocalStorage({
        nome: inputName,
        myId: idUser
    });
    window.location.href="chat.html?usuarionome=" + inputName + "&meuid=" + idUser
}