import Header from "./Header";
import Footer from "./Footer";
import AuthContext from "./AuthContext";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./Login";
import AuthenticateContext from "./AuthenticateContext";
import WelcomePage from "./WelcomePage";
import Logout from "./Logout";
import ListTodoComponent from "./ListTodoComponent";
import ErrorComponent from "./ErrorComponent";
import TodoComponent from "./TodoComponent";
const TodoApp = ()=>{
    return (
        <div>
            <AuthContext>
                <BrowserRouter>
                   <Header/>
                   <Routes>
                     <Route path='/' element= {<Login/>}/>
                     <Route path='/login' element={<Login/>}/>
                     <Route path='/welcome/:username' element={
                        <AuthenticateContext>
                            <WelcomePage/>
                        </AuthenticateContext>
                     }/>
                        <Route path='/todo/:id' element={<AuthenticateContext><TodoComponent /></AuthenticateContext>} />

  
                     <Route path ='/todos' element={
                        <AuthenticateContext>
                            <ListTodoComponent/>
                        </AuthenticateContext>
                     }/>
                   
                     <Route path = '/logout' element={
                        <AuthenticateContext>
                            <Logout/>
                        </AuthenticateContext>
                     }/>
                     <Route path='*' element={
                        <ErrorComponent/>
                     }/>                   </Routes>
                </BrowserRouter>
            </AuthContext>
            
            <Footer/>
        </div>
    )
};
export default TodoApp;