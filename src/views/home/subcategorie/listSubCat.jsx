import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SubcategorieService from '../../../service/subCategorie'
const ListSubCategorie=()=>{

 // Use the state and functions returned from useTable to build your UI









  const [subCategories , setSubCategories] = useState();
  const getAll =()=>{
    SubcategorieService
    .getAll()
    .then((res)=>{
      console.log(res)
      setSubCategories(res.data.data);
    })
    .catch((err)=>{
      console.log(err)
    })

  }
  useEffect(()=>{
    getAll();
  }, [])

    return(
     <>
 
  
 {/* START RESPONSIVE TABLES */}
<div className="row">
  <div className="col-md-12">
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Responsive tables</h3>
      </div>
      <div className="panel-body panel-body-table">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-actions className=" >
            <thead>
              <tr>
                <th width={50}>id</th>
                <th>name</th>
                <th width={100}>Description</th>
                <th>Categorie</th>
                <th>product</th>
                <th width={100}>actions</th>


                
              </tr>
            </thead>
            <tbody>     
              {subCategories?.map((item,index)=>{
                return(
                  <tr id="trow_1">
                  <td className="text-center">{item._id}</td>
                  <td><strong>{item.name}</strong></td>
                  <td>{item.description}</td>
                  <td>{item.categorie}</td>
                  <td>product</td>
  
  
                  
                    <td>
                    <Link to={'/updatesubcategorie/'+item._id}><button className="btn btn-default btn-rounded btn-sm"><span className="fa fa-pencil" /></button></Link>
                    <button className="btn btn-danger btn-rounded btn-sm" onclick="delete_row('trow_1');"><span className="fa fa-times" /></button>
                  </td>
                </tr>
  
                )
              })}                                       
            
            </tbody>
          </table>
        </div>                                
      </div>
    </div>                                                
  </div>
</div>
{/* END RESPONSIVE TABLES */}

    </>
    )

}
export default ListSubCategorie;