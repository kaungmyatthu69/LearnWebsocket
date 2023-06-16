import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function ChatPage() {
    interface UserData{
        name:string,
        message:string
    }
    const port = 1222;
    const ws = new WebSocket (`ws://localhost:${port}`)
    const navigate= useNavigate()
    const [message,setMessage]= useState<UserData[]>([])
    const name = localStorage.getItem('name')
    const [typing,setTyping]= useState('')


    const [inputValue,setInputValue]= useState('')
    const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{

        setInputValue(e.target.value)
    }

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const data={
            type:'data',
            name:name,
            message:inputValue
        }
        ws.send(JSON.stringify(data))
        setInputValue('')

    }
    const handleKeyPress=()=>{
        const data={
            type:'typing',
            name:name,
            message:`${name} is Typing....`
        }
        ws.send(JSON.stringify(data))
    }

    useEffect(()=>{
        ws.onopen=(()=>{
            console.log('connected')
        })
        ws.onmessage=(event=>{
            const data = JSON.parse(event.data)
            switch (data.type){
                case "data":{
                    const newUserData={
                        name:data.name,
                        message:data.message
                    }
                    setMessage((preMessage)=>[...preMessage,newUserData])
                } break
                case "typing":{
                   setTyping(data.message)
                    setTimeout(()=>{
                        setTyping('')
                    },2000)
                }


            }

            console.log(data)

        })
    },[])

    return (
        <>
            <div >
                <h2>This is Chat app</h2>

                <button onClick={()=>{
                    navigate('/')
                    localStorage.clear()
                }} >Log out</button>

            </div>

            <div>

                {
                    message.map(({name,message},index)=>{
                        return (
                            <p key={index} >{name} -{message} </p>
                        )
                    })
                }
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} />
                <p>{typing}</p>
                <button type='submit' >Send</button>
            </form>
        </>
    )
}

export default ChatPage;
