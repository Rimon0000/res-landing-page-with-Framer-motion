export const getServices = () =>{
    return fetch("http://localhost:5000/api/v1/services")
    .then(res => res.json())
}