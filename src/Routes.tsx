import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { Login } from "./pages/Login";
import { Request } from "./pages/Request";

export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path='*' element={<Navigate to='/login' />} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/request" element={<Request/>}/>
            </Routes>
        </Router>
    );
}