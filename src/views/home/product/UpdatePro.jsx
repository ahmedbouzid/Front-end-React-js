import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productService from "../../../service/productService";



const UpdateProducts =()=>{
const [Data , setData]=useState({})
const {id} = useParams()
const navigate = useNavigate()
const OnChangeHandler=(e)=>{
  setData({
    [e.target.name]:e.target.value
  })
}
const OnSubmitHandler=(e)=>{
  e.preventDefault()
  productService.update(id , Data)
  .then((res)=>{
    console.log(res)
  },navigate('/updateproduct'))
  .catch((err)=>{
    console.log(err)
  })
}
useEffect(()=>{
  productService.getById(id)
  .then((res)=>{
    console.log(res)
    setData(res.data.data)
  })
},[])
    return(

        <>
        
        <form className="form-horizontal " onSubmit={OnSubmitHandler}>
  <div className="panel panel-default">
    <div className="panel-heading">
      <h3 className="panel-title"><strong>Update Products</strong> </h3>
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
            <input type="text" className="form-control" name="reference" onChange={OnChangeHandler} value={Data.reference} />
          </div>                                            
          <span className="help-block">This is sample of text field</span>
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-3 col-xs-12 control-label">Qte</label>
        <div className="col-md-6 col-xs-12">                                            
          <div className="input-group">
            <span className="input-group-addon"><span className="fa fa-pencil" /></span>
            <input type="number" className="form-control" name="Qte" onChange={OnChangeHandler} value={Data.Qte} />
          </div>                                            
          <span className="help-block">This is sample of text field</span>
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-3 col-xs-12 control-label">Price</label>
        <div className="col-md-6 col-xs-12">                                            
          <div className="input-group">
            <span className="input-group-addon"><span className="fa fa-pencil" /></span>
            <input type="number" className="form-control" name="price" onChange={OnChangeHandler} value={Data.price} />
          </div>                                            
          <span className="help-block">This is sample of text field</span>
        </div>
      </div>
      <div class="form-group">
                                        <label class="col-md-3 col-xs-12 control-label">Select</label>
                                        <div class="col-md-6 col-xs-12">                                                                                            
                                            <select class="form-control select">
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                                <option>Option 4</option>
                                                <option>Option 5</option>
                                            </select>
                                            <span class="help-block">Select subcategorie</span>
                                        </div>
                                    </div>
      
      
    
      
     
      <div className="form-group">
        <label className="col-md-3 col-xs-12 control-label">Gellery</label>
        <div className="col-md-6 col-xs-12">                                                                                                                                        
          <input type="file" className="fileinput btn-primary" name="filename" id="filename" title="Browse file" />
          <span className="help-block">Input type file</span>
        </div>
      </div>
      
    </div>
    <div className="panel-heading">
      <h3 className="panel-title"><strong> Update Product</strong> </h3>
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
export default UpdateProducts;