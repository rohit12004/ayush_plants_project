
gsap.from("header",{
    y:-100,
    delay:0.2,
    opacity:0,
    duration:0.5,
})

// let usernames = document.querySelector(".usernames")


// fetch("http://localhost:3000/user")
// .then(res=>res.json())
// .then(json=>{
//     json.map(data=>{
//         // console.log(data)
//         usernames.append(data_fun(data))
//     })
// })


// function data_fun({id,name}){
//     let div = document.createElement('div');
//     div.innerHTML = ` 
//     <h2>${id}</h2>
//     <h2>${name}</h2>`;
//     return div
// }