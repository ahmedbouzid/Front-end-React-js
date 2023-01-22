import Header from "./header";
import Sidebar from "./sidebar";
import { Outlet  } from "react-router-dom";
const Home = ()=>{

    return <>

{/* START PAGE CONTAINER */}
<div className="page-container">
     <Sidebar />
  {/* PAGE CONTENT */}
  <div className="page-content">

  <Header />

  <Outlet />             
                     
  </div>            
  {/* END PAGE CONTENT */}
</div>
{/* END PAGE CONTAINER */}

    </>;
};
export default Home ;