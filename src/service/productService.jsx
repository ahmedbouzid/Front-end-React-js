import http from './axiosContext'


const create =(data)=>{
    return http.post('/product/create' ,data)
}
const getAll =()=>{
    return http.get('/product/' )
}
const getById=(id)=>{
    return http.get(`/product/${id}`)
}
const update=(id , data)=>{
    return http.put(`/product/update/${id}`,data)
}
const deleteOne = (id)=>{
return http.delete(`/product/delete/${id}`)
}
export default {
    create ,
    getAll,
    getById,
    update,
    deleteOne,
}











