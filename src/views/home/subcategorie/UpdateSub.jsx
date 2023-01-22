
import { useEffect } from "react";
import { useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import subCategorieService from '../../../service/subCategorie'

const UpdateSubCategorie=()=> {
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
    subCategorieService.update(id,Data).then((res)=>{
      console.log(res);
      
    },navigate("/listsubcategorie"))
    
    .catch((err)=>{
      console.log(err);
    });
  };
  useEffect(()=>{
    subCategorieService.getById(id).then((res)=>{
      console.log(res)
      setData(res.data.data)
    })
  },[])
    return ( 
        <>
       <form className="form-horizontal" onSubmit={OnSubmitHandler}>
  <div className="panel panel-default">
    <div className="panel-heading">
      <h3 className="panel-title"><strong> Update SubCategorie</strong> </h3>
      <ul className="panel-controls">
        <li><a href="#" className="panel-remove"><span className="fa fa-times" /></a></li>
      </ul>
    </div>
   
    <div className="panel-body">                                                                        
      <div className="form-group">
        <label className="col-md-3 col-xs-12 control-label">SubCategorie</label>
        <div className="col-md-6 col-xs-12">                                            
          <div className="input-group">
            <span className="input-group-addon"><span className="fa fa-pencil" /></span>
            <input type="text" className="form-control" 
            name="name" onChange={OnChangeHandler} value={Data.name}/>
          </div>                                            
          <span className="help-block">This is sample of text field</span>
        </div>
      </div>
      <div className="form-group">
        <label className="col-md-3 col-xs-12 control-label">Categorie</label>
        <div className="col-md-6 col-xs-12">                                            
          <div className="input-group">
            <span className="input-group-addon"><span className="fa fa-pencil" /></span>
            <input type="text" className="form-control" name="categorie" onChange={OnChangeHandler} value={Data.categorie}/>
          </div>                                            
          <span className="help-block">This is sample of text field</span>
        </div>
      </div>
    
      <div className="form-group">
        <label className="col-md-3 col-xs-12 control-label">Description</label>
        <div className="col-md-6 col-xs-12">                                            
          <textarea className="form-control" rows={5} defaultValue={""} name="description" onChange={OnChangeHandler} value={Data.description} />
          <span className="help-block">Description</span>
        </div>
      </div>
      
     
     
      
      
    </div>
    <div className="panel-footer">
      <button className="btn btn-primary pull-right">Submit</button>
    </div>
  </div>
</form> 

       </>
     );
}

export default UpdateSubCategorie;