const url = "http://localhost:5500/api"

function getUsers(){
    axios.get(url)
        .then(response => {
           apiGetUsers.textContent = JSON.stringify(response.data)
        })
        .catch(err => console.error(err))
}

function addUser(newUser){
    axios.post(url, newUser)
        .then(response => console.log(response))
        .catch(err => console.error(err))
}

function getUser(idUser){
    axios.get(`${url}/${idUser}`)
        .then(response => {
            apiChosenUserName.textContent = response.data.name
            apiChosenUserCity.textContent = response.data.city
            apiChosenUserAvatar.src = response.data.avatar
        })
        .catch(err => console.error())
}

function updateUser(updatedUser, idUser) {
    axios.put(`${url}/${idUser}`, updatedUser)
        .then(response => console.log(response))
        .catch(err => console.error(err))
}

function deleteUser(idUser){
    axios.delete(`${url}/${idUser}`).
        then(response => console.log(response))
        .catch(err => console.error(err))
}

const newUser = {
    name: "Thiago G.",
    avatar:  "https://picsum.photos/200/300",
    city: "Campo M."  
}

const updatedUser = {
    name: "Thiago Gariani",
    avatar:  "https://avatars.githubusercontent.com/u/95106865?v=4",
    city: "Campo Mourão"  
}

addUser(newUser)
getUsers()
updateUser(updatedUser, 2)
getUser(6)
deleteUser(5)