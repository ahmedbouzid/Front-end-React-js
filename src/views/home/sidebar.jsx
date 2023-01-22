const Sidebar=()=>{

    return (
    <>
    
      {/* START PAGE SIDEBAR */}
  <div className="page-sidebar">
    {/* START X-NAVIGATION */}
    <ul className="x-navigation">
      <li className="xn-logo">
        <a href="index.html">Joli Admin</a>
        <a href="#" className="x-navigation-control" />
      </li>
      <li className="xn-profile">
        <a href="#" className="profile-mini">
          <img src="assets/images/users/avatar.jpg" alt="John Doe" />
        </a>
        <div className="profile">
          <div className="profile-image">
            <img src="assets/images/users/avatar.jpg" alt="John Doe" />
          </div>
          <div className="profile-data">
            <div className="profile-data-name">John Doe</div>
            <div className="profile-data-title">Web Developer/Designer</div>
          </div>
          <div className="profile-controls">
            <a href="pages-profile.html" className="profile-control-left"><span className="fa fa-info" /></a>
            <a href="pages-messages.html" className="profile-control-right"><span className="fa fa-envelope" /></a>
          </div>
        </div>                                                                        
      </li>
      <li className="xn-title">Navigation</li>
      <li className="active">
        <a href="/"><span className="fa fa-desktop" />
         <span className="xn-text">Dashboard</span></a>                        
      </li>   
          
      

                              
       
      <li >
        <a href="/login"><span className="fa fa-desktop" />
         <span className="xn-text">Login</span>
        </a>                        
      </li>     
                   
       <li className="xn-title">Categorie</li>   
       <li >
        <a href="/categorie"><span className="fa fa-desktop" />
         <span className="xn-text">Add Categorie</span>
        </a>                        
      </li>   
      <li >
        <a href="/listcategorie"><span className="fa fa-desktop" />
         <span className="xn-text">liste Categorie</span>
        </a>                        
      </li>    
      <li className="xn-title"> SubCategorie</li>   
       <li >
        <a href="/subcategorie"><span className="fa fa-desktop" />
         <span className="xn-text">Add SubCategorie</span>
        </a>                        
      </li>   
      <li >
        <a href="/listsubcategorie"><span className="fa fa-desktop" />
         <span className="xn-text">liste SubCategorie</span>
        </a>                        
      </li> 
      <li className="xn-title">Products</li>   
       <li >
        <a href="/listProduct"><span className="fa fa-desktop" />
         <span className="xn-text">List Products</span>
        </a>                        
      </li>   
      <li >
        <a href="/product"><span className="fa fa-desktop" />
         <span className="xn-text">Add Products</span>
        </a>                        
      </li>                    
     
    </ul>
    {/* END X-NAVIGATION */}
  </div>
  {/* END PAGE SIDEBAR */}
    </>
    );
};
export default Sidebar ;