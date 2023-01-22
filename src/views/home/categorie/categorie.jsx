
import { useState } from "react";
import categorieService from '../../../service/categorieService'
function Categorie() {
  const [Data , setData]=useState({});
  const OnchangeHandler=(e)=>{
    setData({ ...Data,
      [e.target.name]:e.target.value,}
     
    )
    console.log(Data)
  }
  const OnSubmitHandler = (e)=>{
    e.preventDefault()
    categorieService.create(Data)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
    return ( 
        <>
       <form className="form-horizontal " onClick={OnSubmitHandler}>
  <div className="panel panel-default">
    <div className="panel-heading">
      <h3 className="panel-title"><strong> Add Categorie</strong> </h3>
      <ul className="panel-controls">
        <li><a href="#" className="panel-remove"><span className="fa fa-times" /></a></li>
      </ul>
    </div>
   
    <div className="panel-body">                                                                        
      <div className="form-group">
        <label className="col-md-3 col-xs-12 control-label">name</label>
        <div className="col-md-6 col-xs-12">                                            
          <div className="input-group">
            <span className="input-group-addon"><span className="fa fa-pencil" /></span>
            <input name="name" onChange={OnchangeHandler} type="text" className="form-control"  />
          </div>                                            
          <span className="help-block">This is sample of text field</span>
        </div>
      </div>
 
      <div className="form-group">
        <label className="col-md-3 col-xs-12 control-label">Description</label>
        <div className="col-md-6 col-xs-12">                                            
          <input type="text" name="description" onChange={OnchangeHandler} className="form-control"   />
          <span className="help-block">Description</span>
        </div>
      </div>
      
     
     
      
      
    </div>
    <div className="panel-footer">
      <button className="btn btn-primary pull-right"  >Submit</button>
    </div>
  </div>
</form> 

       </>
     );
}

export default Categorie;