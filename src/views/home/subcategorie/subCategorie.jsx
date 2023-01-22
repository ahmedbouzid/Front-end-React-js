import { useEffect, useState } from "react";
import subcategoryservice from "../../../service/subCategorie";
import categoryService from "../../../service/categorieService";
import {   useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function AddSubCategory() {
  const [Data, setData] = useState({});

  const navigate=useNavigate()

  const [categories, setCategories] = useState();

  const onChangeHandler = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();



    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        subcategoryservice
        .create(Data)
        .then((res) => {
          console.log(res);
          navigate('/listsubcategorie')
        })
        .catch((err) => {
          console.log(err);
        });


        
        Swal.fire('Saved!', '', 'saved')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })








   
  };

  const getAll = () => {
    categoryService
      .getAll()
      .then((res) => {
        console.log(res);
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <div className="page-content-wrap">
        <div className="row">
          <div className="col-md-12">
            <form className="form-horizontal">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">
                    <strong>Add SubCategory</strong>{" "}
                  </h3>
                  <ul className="panel-controls">
                    <li>
                      <a href="#" className="panel-remove">
                        <span className="fa fa-times" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="panel-body">
                  <div className="form-group">
                    <label className="col-md-3 col-xs-12 control-label">
            
                      Category
                    </label>
                    <div className="col-md-6 col-xs-12">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <span className="fa fa-pencil" />
                        </span>
                        <select
                          name="categorie"
                          onChange={onChangeHandler}
                          style={{ fontSize: "18px", padding: "2px" }}
                        >
                          {categories?.map((item, index) => {
                            return <option>{item._id}</option>;
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="panel-body">
                    <div className="form-group">
                      <label className="col-md-3 col-xs-12 control-label">
                        Name SubCategory
                      </label>
                      <div className="col-md-6 col-xs-12">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <span className="fa fa-pencil" />
                          </span>
                          <input
                            name="name"
                            onChange={onChangeHandler}
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-md-3 col-xs-12 control-label">
                        Description
                      </label>
                      <div className="col-md-6 col-xs-12">
                        <textarea
                          name="description"
                          onChange={onChangeHandler}
                          className="form-control"
                          rows={5}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="panel-footer">
                    <button
                      className="btn btn-primary pull-right"
                      onClick={onSubmitHandler}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddSubCategory;
