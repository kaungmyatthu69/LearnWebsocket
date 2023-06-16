import  {WebSocketServer} from "ws";
import {WebSocket} from "ws";

const  port =1222
const wss= new WebSocketServer({port})
const clients= new Set();
wss.on('connection',(ws)=>{
    console.log('Client is connected')
     //Add client to the set
    clients.add(ws)
    // ws.on('message',(data)=>{
    //     clients.forEach((client)=>{
    //         if(client !== ws && client.readyState === WebSocket.OPEN){
    //             client.send(`${data}`)
    //         }
    //     })
    // })
    ws.on('message',(data)=>{
        console.log(`${data}`)
        wss.clients.forEach((client)=>{
            if(  client !== ws  && client.readyState=== WebSocket.OPEN){
                client.send(`${data}`)
            }
        })
    })

    ws.on('close',()=>{
        console.log("Client disconnected")
    })
})