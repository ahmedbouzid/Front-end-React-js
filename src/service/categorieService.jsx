import http from './axiosContext'







const create =(data)=>{
    return http.post('/categorie/create' ,data)
}
const getAll =()=>{
    return http.get('/categorie' )
}
const getById=(id)=>{
    return http.get(`/categorie/${id}`)
}
const upate=(id , data)=>{
    return http.put(`/categorie/update/${id}`,data)
}
const deleteOne = (id)=>{
return http.delete(`/categorie/delete/${id}`)
}
export default {
    create ,
    getAll,
    getById,
    upate,
    deleteOne,
}





















