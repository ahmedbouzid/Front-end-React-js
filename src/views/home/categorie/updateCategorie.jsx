import { useEffect } from "react";
import { useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";


import categorieService from '../../../service/categorieService'
function UpdateCategorie() {
  const [Data, setData]=useState({});
  const { id }=useParams();
  const navigate=useNavigate();
  const OnChangeHandler=(e)=>{
    setData({
      ...Data,
      [e.target.name]:e.target.value,
    });
  };
  const OnSubmitHandler=(e)=>{
    e.preventDefault();
    categorieService.upate(id,Data).then((res)=>{
      console.log(res);
      navigate("/listcategorie");
    })
    .catch((err)=>{
      console.log(err);
    });
  };
  useEffect(()=>{
    categorieService.getById(id).then((res)=>{
      console.log(res.data.data)
      setData(res.data.data)
    })
  },[])
  

    return ( 
        <>
       <form className="form-horizontal " onSubmit={OnSubmitHandler}>
  <div className="panel panel-default">
    <div className="panel-heading">
      <h3 className="panel-title"><strong> Update Categorie</strong> </h3>
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
            <input name="name" onChange={OnChangeHandler} value={Data.name} type="text" className="form-control"  />
          </div>                                            
          <span className="help-block">This is sample of text field</span>
        </div>
      </div>
 
      <div className="form-group">
        <label className="col-md-3 col-xs-12 control-label">Description</label>
        <div className="col-md-6 col-xs-12">                                            
          <input type="text" name="description" onChange={OnChangeHandler} value={Data.description} className="form-control"   />
          <span className="help-block">Description</span>
        </div>
      </div>
      
     
     
      
      
    </div>
    <div className="panel-footer">
      <button className="btn btn-primary pull-right" >Submit</button>
    </div>
  </div>
</form> 

       </>
     );
}

export default UpdateCategorie  ;