import { Link } from "react-router-dom";

const Error=()=>{

    return (
    <>
    <div class="error-container">
            <div class="error-code">404</div>
            <div class="error-text">page not found</div>
            <div class="error-subtext">Unfortunately we're having trouble loading the page you are looking for. Please wait a moment and try again or use action below.</div>
            <div class="error-actions">                                
                <div class="row">
                    
                    <div class="col-md-6">
                     <Link to="/" >  <button class="btn btn-primary btn-block btn-lg" 
                     >Previous page</button> </Link>
                    </div>
                </div>                                
            </div>
            
        </div> 
  </>
  );
};
export default Error ;  