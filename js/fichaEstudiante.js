
async function fetchficha(){
    let response = await fetch('/data/fichaEstudiante.json');
    let data = await response.json();
}

async function getFicha() {
    let url = '/data/fichaEstudiante.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderFicha() {
    let ficha = await getFicha();
    let html = '';
    ficha.forEach(user => {
        let htmlSegment = `<div class="user">
                            <img src="${user.img}" width='250px' class ='img-fluid rounded-circle' >
                            <h2 class="nombre">${user.nombre} ${user.apellido}</h2>
                            <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                            <div class="descripcion"> ${user.descipcion}</div>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderFicha();