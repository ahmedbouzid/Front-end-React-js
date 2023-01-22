
import http from './axiosContext'
const create =(data)=>{
    return http.post('/subCategorie/create' ,data)
}
const getAll =()=>{
    return http.get('/subCategorie' )
}
const getById=(id)=>{
    return http.get(`/subCategorie/getBy/${id}`)
}
const update=(id , data)=>{
    return http.put(`/subCategorie/update/${id}`,data)
}
const deleteOne = (id)=>{
return http.delete(`/subCategorie/delete/${id}`)
}
const getSubCatByCat =()=>{
    return http.get('/subCategorie/getSubCatByCat' )
}
export default {
    create ,
    getAll,
    getById,
    getSubCatByCat,
    update,
    deleteOne,

}



























