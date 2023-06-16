import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import ChatPage from "./pages/ChatPage.tsx";

const App=()=>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<LoginPage/>} />
                    <Route path={'/chatpage'} element={<ChatPage/>} />
                </Routes>

            </BrowserRouter>

        </div>
    )
}
export  default  App;