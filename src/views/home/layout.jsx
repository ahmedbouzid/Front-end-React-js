import { useEffect, useState } from "react";
import categorieService from "../../service/categorieService";
import subCategorieService from "../../service/subCategorie";
import productService from "../../service/productService";
import { Link } from "react-router-dom";
import {Pie, PolarArea } from "react-chartjs-2";

const Layout=()=>{
  const [categories , setCategories] = useState();
  const [subCategories , setSubCategories] = useState();
  const [products , setProducts]=useState()
 
  
  const labels = ["Categorie", "SubCat", "Product"];
  
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: ["green",
                          "crimson",
                          
                            "lightblue"],
        borderColor: "rgb(255, 99, 132)",
        data: [categories?.length, subCategories?.length, products?.length],
      },
    ],
  };
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

  };
  const getAllS =()=>{
    subCategorieService
    .getAll()
    .then((res)=>{
      console.log(res)
      setSubCategories(res.data.data);
    })
    .catch((err)=>{
      console.log(err)
    })

  };
  const getAllP =()=>{
    productService
    .getAll()
    .then((res)=>{
      console.log(res)
      setProducts(res.data.data);
    })
    .catch((err)=>{
      console.log(err)
    })

  }
  
  useEffect(()=>{
    getAll();
    getAllS();
    getAllP()
  }, [])

    return (
    <>
        {/* START BREADCRUMB */}
        <ul className="breadcrumb">
      <li><a href="#">Home</a></li>                    
      <li className="active">Dashboard</li>
    </ul>
    {/* END BREADCRUMB */}                       
    {/* PAGE CONTENT WRAPPER */}
    <div className="page-content-wrap">
      {/* START WIDGETS */}                    
      <div className="row">
      <div className="col-md-3">
          {/* START WIDGET MESSAGES */}
          <div className="widget widget-default widget-item-icon" onClick="location.href='pages-messages.html';">
                                        
            <div className="widget-data">
            <div className="widget-title">You have </div>

              <div className="widget-int num-count">{categories?.length}</div>
              <div className="widget-subtitle">categorie</div>
            </div>      
            <Link to={'/listcategorie'}   style={{margin:'2px' , paddingLeft:'3px'}} >  List Categorie </Link>

          </div>                            
          {/* END WIDGET MESSAGES */}
        </div>
        <div className="col-md-3">
          {/* START WIDGET MESSAGES */}
          <div className="widget widget-default widget-item-icon" onClick="location.href='pages-messages.html';">
                                        
            <div className="widget-data">
            <div className="widget-title">You have </div>

              <div className="widget-int num-count">{subCategories?.length}</div>
              <div className="widget-subtitle">Subcategorie</div>
            </div>      
            <Link to={'/listsubcategorie'}   style={{margin:'2px' , paddingLeft:'3px'}} >  List Subcategorie </Link>

          </div>                            
          {/* END WIDGET MESSAGES */}
        </div>
        <div className="col-md-3">
          {/* START WIDGET MESSAGES */}
          <div className="widget widget-default widget-item-icon" onClick="location.href='pages-messages.html';">
                                        
            <div className="widget-data">
            <div className="widget-title">You have </div>

              <div className="widget-int num-count">{products?.length}</div>
              <div className="widget-subtitle">Product</div>
            </div>   
            <Link to={'/listProduct'}   style={{margin:'2px' , paddingLeft:'3px'}} >  List product </Link>
            
          </div>                            
          {/* END WIDGET MESSAGES */}
        </div>
       
      </div>
      {/* END WIDGETS */}                    
      <div className="row">
        <div className="col-md-6">
          {/* START USERS ACTIVITY BLOCK */}
          <div className="panel panel-default">
            
              <div className="panel-title-box">
                <h3>Charts</h3>
              </div>                                                                              
            <div className="panel-body padding-0" >
            <Pie data={data}/> 
              
              
             
            </div>                                    
          </div>
          {/* END USERS ACTIVITY BLOCK */}
        </div>
        
        <div className="col-md-6">
          {/* START PROJECTS BLOCK */}
          <PolarArea 
          data={{
            labels:products?.map((x)=>x.reference),
            datasets:[
              {
                label:"reference/price",
                data:products?.map((x)=>x.price),
                backgroundColor:[
                          "green",
                          "crimson",
                          
                            "lightblue"
                ]
              }
            ]
          }}
          options={{
            scales:{
              y:{
                beginAtZero:true,
              },
            },
          }}
          >

          </PolarArea>
          {/* END PROJECTS BLOCK */}
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          {/* START SALES BLOCK */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <div className="panel-title-box">
                <h3>Sales</h3>
                <span>Sales activity by period you selected</span>
              </div>                                     
              <ul className="panel-controls panel-controls-title">                                        
                <li>
                  <div id="reportrange" className="dtrange">                                            
                    <span /><b className="caret" />
                  </div>                                     
                </li>                                
                <li><a href="#" className="panel-fullscreen rounded"><span className="fa fa-expand" /></a></li>
              </ul>                                    
            </div>
            <div className="panel-body">                                    
              <div className="row stacked">
                <div className="col-md-4">                                            
                  <div className="progress-list">                                               
                    <div className="pull-left"><strong>In Queue</strong></div>
                    <div className="pull-right">75%</div>                                                
                    <div className="progress progress-small progress-striped active">
                      <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>75%</div>
                    </div>
                  </div>
                  <div className="progress-list">                                               
                    <div className="pull-left"><strong>Shipped Products</strong></div>
                    <div className="pull-right">450/500</div>                                                
                    <div className="progress progress-small progress-striped active">
                      <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>90%</div>
                    </div>
                  </div>
                  <div className="progress-list">                                               
                    <div className="pull-left"><strong className="text-danger">Returned Products</strong></div>
                    <div className="pull-right">25/500</div>                                                
                    <div className="progress progress-small progress-striped active">
                      <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '5%'}}>5%</div>
                    </div>
                  </div>
                  <div className="progress-list">                                               
                    <div className="pull-left"><strong className="text-warning">Progress Today</strong></div>
                    <div className="pull-right">75/150</div>                                                
                    <div className="progress progress-small progress-striped active">
                      <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>50%</div>
                    </div>
                  </div>
                  <p><span className="fa fa-warning" /> Data update in end of each hour. You can update it manual by pressign update button</p>
                </div>
                <div className="col-md-8">
                  <div id="dashboard-map-seles" style={{width: '100%', height: 200}} />
                </div>
              </div>                                    
            </div>
          </div>
          {/* END SALES BLOCK */}
        </div>
        <div className="common-modal modal fade" id="common-Modal1" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-content">
            <ul className="list-inline item-details">
              <li><a href="http://themifycloud.com/downloads/janux-premium-responsive-bootstrap-admin-dashboard-template/">Admin templates</a></li>
              <li><a href="http://themescloud.org">Bootstrap themes</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          {/* START SALES & EVENTS BLOCK */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <div className="panel-title-box">
                <h3>Sales &amp; Event</h3>
                <span>Event "Purchase Button"</span>
              </div>
              <ul className="panel-controls" style={{marginTop: 2}}>
                <li><a href="#" className="panel-fullscreen"><span className="fa fa-expand" /></a></li>
                <li><a href="#" className="panel-refresh"><span className="fa fa-refresh" /></a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="fa fa-cog" /></a>                                        
                  <ul className="dropdown-menu">
                    <li><a href="#" className="panel-collapse"><span className="fa fa-angle-down" /> Collapse</a></li>
                    <li><a href="#" className="panel-remove"><span className="fa fa-times" /> Remove</a></li>
                  </ul>                                        
                </li>                                        
              </ul>
            </div>
            <div className="panel-body padding-0">
              <div className="chart-holder" id="dashboard-line-1" style={{height: 200}} />
            </div>
          </div>
          {/* END SALES & EVENTS BLOCK */}
        </div>
      </div>
      {/* START DASHBOARD CHART */}
      <div className="chart-holder" id="dashboard-area-1" style={{height: 200}} />
      <div className="block-full-width">
      </div>                    
      {/* END DASHBOARD CHART */}
    </div>
    {/* END PAGE CONTENT WRAPPER */}  
       
    </>
    );
  };
  export default Layout ;