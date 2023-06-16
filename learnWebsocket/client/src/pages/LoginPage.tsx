import {useNavigate} from "react-router-dom";
import {useState} from "react";


const LoginPage=()=>{
    const navigate = useNavigate()
    const [name,setName]= useState('')
    const handleSubmit=()=>{
       navigate('/chatpage')
        localStorage.setItem('name',name)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input placeholder={'enter your name'} onChange={(e)=>setName(e.target.value)} />
            <button>Login</button>
        </form>
    )
}
export default LoginPage;