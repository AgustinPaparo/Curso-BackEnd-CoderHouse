const socket = io()
socket.on('messages', (data) => {
        const html = data.map(elem => {
            return(`<div>
                <strong>${elem.author}</strong>
                <em>${elem.mensaje}</em></div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
})

function addMessage(){
    const message = {
        author: document.getElementById('username').value,
        mensaje: document.getElementById('text').value
    }

    socket.emit('new-message' , message)
    return
}