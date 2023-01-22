import Home from "./views/home/home";
import {BrowserRouter as Router , Navigate, Route , Routes} from "react-router-dom"
import ListProduct from "./views/home/product/listeProduct";
import Layout from "./views/home/layout";
import Login from "./views/home/Login";
import Error from "./views/home/error";
import Categorie from "./views/home/categorie/categorie";
import ListCategorie from "./views/home/categorie/list_categorie";
import UpdateCategorie from "./views/home/categorie/updateCategorie";
import SubCategorie from "./views/home/subcategorie/subCategorie";
import UpdateSubCategorie from "./views/home/subcategorie/UpdateSub";
import ListSubCategorie from "./views/home/subcategorie/listSubCat";
import Products from "./views/home/product/Products";
import UpdateProducts from "./views/home/product/UpdatePro";

function App() {

  const PrivateRoute=({children})=>{
    if(!localStorage.getItem("user")){
      return<Navigate to='/login'></Navigate>
    }
    return children;
  }
  return (
   <div className="App">
    <Router>
    <Routes>
    <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}>
      <Route path="/" element={<Layout/>}></Route>
      <Route path="/categorie" element={<PrivateRoute><Categorie/></PrivateRoute>}></Route>
      <Route path="/listcategorie" element={<PrivateRoute><ListCategorie/></PrivateRoute>}></Route>
      <Route path="/updatecategorie/:id" element={<PrivateRoute><UpdateCategorie/></PrivateRoute>}></Route>
      <Route path="/subcategorie" element={<PrivateRoute><SubCategorie/></PrivateRoute>}></Route>
      <Route path="/updatesubcategorie/:id" element={<PrivateRoute><UpdateSubCategorie/></PrivateRoute>}></Route>
      <Route path="/listsubcategorie" element={<PrivateRoute><ListSubCategorie/></PrivateRoute>}></Route>
      <Route path="/listProduct" element={<PrivateRoute><ListProduct/></PrivateRoute>}></Route>
      <Route path="/product" element={<PrivateRoute><Products/></PrivateRoute>}></Route>
      <Route path="/updateproduct" element={<PrivateRoute><UpdateProducts/></PrivateRoute>}></Route>
    </Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/*" element={<Error/>}></Route>

    </Routes>
   </Router>

   </div>
  );
}

export default App;
