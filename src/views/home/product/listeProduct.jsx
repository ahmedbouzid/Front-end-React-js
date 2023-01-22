import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import productService from "../../../service/productService";
import Swal from "sweetalert2";
function ListProduct(){
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
        productService.deleteOne(id).then((res)=>{
          getAll()
        })
        Swal.fire('Deleted!', 'Your file has been deleted', 'success') } })}
  const [products , setProducts]=useState()
  const getAll =()=>{
    productService
    .getAll()
    .then((res)=>{
      console.log(res)
      setProducts(res.data.data);})
    .catch((err)=>{
      console.log(err)})}
  useEffect(()=>{
    getAll();
  }, [])
    return <>
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
              <th width={50}>Index</th>

                <th width={50}>id</th>
                <th width={100}>Referance</th>
                <th width={100}>Qte</th>
                <th width={100}>Price</th>
                <th width={100}>SubCateg</th>
                <th width={100}>Galerry</th>
                <th width={100}>actions</th>
              </tr>
            </thead>
            <tbody>                                            
            {products?.map((item , index)=>{
              return(
                <tr id="trow_1">
                  <td className="text-name">{index}</td>
                  <td> {item._id}</td>
                  <td> {item.reference}</td>
                  <td> {item.price}</td>
                  <td> {item.Qte}</td>
                  <td> {item.subCategorie?.name}</td>
                  <td> {item.galeries?.map((image)=>{
                    return(
                      <>
                      {image &&(
                        <img src={"http://localhost:4440/getImage/"+image.name }
                        style={{width:'50%', height:'10%'}}/>
                      )}
                      </>
                    )

                  })}</td>

<td>
                   <Link to={'/updateproduct'}> <button className="btn btn-default btn-rounded btn-sm">
                    <span className="fa fa-pencil" /></button></Link>
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

    
    </>;
}
export default ListProduct;