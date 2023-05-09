let clientesFormulario = document.querySelector("#Modulo de clientes")
clientesFormulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    let data=Object.fromEntries(new FormData(e.target))
    opc[e.submitter.dataset.accion](data);
})

let clientesRutas = document.querySelector("#Modulo de rutas de aéreas")
clientesFormulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    let data=Object.fromEntries(new FormData(e.target))
    opc[e.submitter.dataset.accion](data);
})

let clientesflota = document.querySelector("#Modulo de flota aérea")
clientesFormulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    let data=Object.fromEntries(new FormData(e.target))
    opc[e.submitter.dataset.accion](data);
})

let compraEtiquetas = document.querySelector("#Modulo de compra de etiquetas")
clientesFormulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    let data=Object.fromEntries(new FormData(e.target))
    opc[e.submitter.dataset.accion](data);
})

let personal = document.querySelector("#Modulo de personal")
clientesFormulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    let data=Object.fromEntries(new FormData(e.target))
    opc[e.submitter.dataset.accion](data);
})

const opc = {
    "GET":() => getUserALL(),
    "PUT":(data) => putUserAll(data),
    "DELETE":(data) => deleteUserAll(data),
    "SEARCH":(data) => searchUserAll(data),
    "POST":(data) => postUserAll(data),
}

let config = {
    headers:new Headers({
        "Content-Type":"application/json"
    }),
};
const getUserALL = async()=>{
    config.method = "GET";
    let res = await ( await fetch(" http://localhost:400/posts",config)).json();
    console.log(res);
}
const postUserAll = async(data)=>{
    config.method = "POST";
    config.body = JSON.stringify(data);
    let res = await ( await fetch ("http://localhost:400/posts",config)).json();
    console.log(res);
}
const putUserAll = async(data)=>{
    config.method = "PUT";
    config.body = JSON.stringify(data);
    let res = await ( await fetch (`http://localhost:400/posts/${data.id}`,config)).json();
    console.log(res);
}
const deleteUserAll = async(data)=>{
    config.method = "DELETE";
    config.body = JSON.stringify(data);
    let res = await ( await fetch (`http://localhost:400/posts/${data.id}`,config)).json();
    console.log(res);
}
const searchUserAll = async(data)=>{
    config.method = "SEARCH";
    config.body = JSON.stringify(data);
    let res = await ( await fetch (`http://localhost:400/posts?q=${object.values(data).join("")}`,config)).json();
    console.log(res);
}

