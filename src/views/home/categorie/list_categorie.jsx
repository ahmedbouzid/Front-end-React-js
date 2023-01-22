import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categorieService from '../../../service/categorieService'
import Swal from "sweetalert2";

const ListCategorie=()=>{
  const OnDelete=(id)=>{
    Swal.fire({
      title: 'Are you sure',
      text:"You won't be able to reserve this",
      icon:"warning",
      showCancelButton: true,
      confirmButtonColor:"#3085d6",
      cancelButtonColor:"#d33",
      confirmButtonText: 'Yes , Delete it',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        categorieService.deleteOne(id).then((res)=>{
          getAll()
        })
        Swal.fire('Deleted!', 'Your file has been deleted', 'success')
      } 
    })
      }

  const [categories , setCategories] = useState();
  const getAll =()=>{
    categorieService
    .getAll()
    .then((res)=>{
      console.log(res)
      setCategories(res.data.data);
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
          <table className="table table-bordered table-striped table-actions">
            <thead>
              <tr>
                <th width={50}>id</th>
                <th>name</th>
                <th width={100}>Description</th>
                <th>SubCategorie</th>

                
                <th width={100}>actions</th>
              </tr>
            </thead>
            <tbody> 
              {categories?.map((item,index)=>{
                return(
                  <tr id="trow_1">
                  <td className="text-center">{item._id}</td>
                  <td><strong>{item.name}</strong></td>
                  <td>{item.description}</td>

                  <td>
                    {item.subCategories?.map((i)=>{
                      return <tr>{i.name}</tr>
                    })}
                  </td>
  
                 
                    <td>
                   <Link to={`/updatecategorie/${item._id}`}> <button className="btn btn-default btn-rounded btn-sm"><span className="fa fa-pencil" /></button></Link>
                    <button className="btn btn-danger btn-rounded btn-sm" 
                    onClick={(e)=>OnDelete(item._id)}>
                      <span className="fa fa-times" /></button>
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
export default ListCategorie;