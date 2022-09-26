import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./signup";
import Test from "./Login";
export default function Nav(){
    return(<>
    <BrowserRouter>
    <Routes>
        <Route path={"/"} element={<Test/>}></Route>
        <Route path={"/signup"} element={<SignUp/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </>)
}