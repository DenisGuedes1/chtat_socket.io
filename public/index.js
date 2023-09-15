const setLocalStorage = (usuario) => localStorage.setItem("usuario", JSON.stringify(usuario));

const btnEntrar = () =>{
    let inputName = document.getElementById('nome').value
     if (inputName.trim() !== "") {
        let idUser = (Math.random() * 1000).toString();

        setLocalStorage({
            nome: inputName,
            myId: idUser
        });

        window.location.href = "chat.html?usuarionome=" + inputName + "&meuid=" + idUser;
    } else {
        alert("Por favor, forneça um nome antes de entrar no chat.");
    }
}