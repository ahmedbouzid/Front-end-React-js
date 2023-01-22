import { useEffect, useState } from "react";
import productService from "../../../service/productService";
import { useParams ,useNavigate} from "react-router-dom";
import subcategorieService from "../../../service/subCategorie"
const Products =()=>{
const [Data ,setData] = useState({})
  const [subcategoories , setSubCategories]=useState()
  const [image , setImage]=useState({})
  const navigate = useNavigate()
  const OnchangeHandler=(e)=>{
     console.log(e.target.value)
    setData({
      ...Data ,
      [e.target.name]:e.target.value})}
  const OnSubmitHandler=(e)=>{
    e.preventDefault();
    const formadata = new FormData();
    formadata.append("reference", Data.reference);
    formadata.append('price' , Data.price);
    formadata.append('Qte',Data.Qte);
    formadata.append('subCategorie' , Data.subCategorie);
    for (let i = 0; i <=image.length ; i++){
      formadata.append('galeries', image[i])    }
    productService.create(formadata).then
    ((res)=>{
      navigate('/listProduct')    }) };
  const HandleImage=(e)=>{
    setImage(e.target.files)}
  const getAll=()=>{
    subcategorieService.getAll()
    .then((res)=>{
      console.log(res)
      setSubCategories(res.data.data)
      setData({
      ...Data , 
      subCategorie : res
      ?.data?.data?.[0]?._id    })
                })  
      .catch((err)=>{
      console.log(err)
                    })}
  useEffect(()=>{
    getAll()
  },[])
    return(

        <>
        
        <form className="form-horizontal" onSubmit={OnSubmitHandler} >
  <div className="panel panel-default">
    <div className="panel-heading">
      <h3 className="panel-title"><strong>Add Products</strong> </h3>
      <ul className="panel-controls">
        <li><a href="#" className="panel-remove"><span className="fa fa-times" /></a></li>
      </ul>
    </div>
   
    <div className="panel-body">                                                                        
   
      <div className="form-group">
        <label className="col-md-3 col-xs-12 control-label">Reference</label>
        <div className="col-md-6 col-xs-12">                                            
          <div className="input-group">
            <span className="input-group-addon"><span className="fa fa-pencil" /></span>
            <input onChange={OnchangeHandler} name="reference" type="text" className="form-control" />
          </div>                                            
          <span className="help-block">This is sample of text field</span>
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-3 col-xs-12 control-label">Qte</label>
        <div className="col-md-6 col-xs-12">                                            
          <div className="input-group">
            <span className="input-group-addon"><span className="fa fa-pencil" /></span>
            <input onChange={OnchangeHandler} name="Qte" type="number" className="form-control" />
          </div>                                            
          <span className="help-block">This is sample of text field</span>
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-3 col-xs-12 control-label">Price</label>
        <div className="col-md-6 col-xs-12">                                            
          <div className="input-group">
            <span className="input-group-addon"><span className="fa fa-pencil" /></span>
            <input onChange={OnchangeHandler} name="price" type="number" className="form-control" />
          </div>                                            
          <span className="help-block">This is sample of text field</span>
        </div>
      </div>
      <div class="form-group">
                                        <label class="col-md-3 col-xs-12 control-label">Select</label>
                                        <div class="col-md-6 col-xs-12">                                                                                            
                                            <select class="form-control select" onChange={OnchangeHandler} name="subCategorie" >
                                                
                                                  {subcategoories?.map((item=>{
                                                    return <option   >{item._id}</option>
                                                  }))}
                                                
                                              </select>
                                            <span class="help-block">Select subcategorie</span>
                                        </div>
                                    </div>
   
      <div className="form-group">
        <label className="col-md-3 col-xs-12 control-label">Gellery</label>
        <div className="col-md-6 col-xs-12">                                                                                                                                        
          <input type="file" 
          onChange={HandleImage} 
          name="galeries" multiple
          
          className="fileinput btn-primary" 
           id="filename" title="Browse file" />
          <span className="help-block">Input type file</span>
        </div>
      </div>
      
    </div>
    <div className="panel-heading">
      <h3 className="panel-title"><strong> Add Product</strong> </h3>
      <ul className="panel-controls">
        <li><a href="#" className="panel-remove"><span className="fa fa-times" /></a></li>
      </ul>
    </div>
   
    <div className="panel-footer">
                                        
      <button className="btn btn-primary pull-right">Submit</button>
    </div>
  </div>
</form>

        
        </>
    )
}
export default Products;