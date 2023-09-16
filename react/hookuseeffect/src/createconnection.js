export default function Createconnection(roomId,serverUrl)
{
return{
    connect()
    {
        console.log("Connected to "+ roomId + " " + serverUrl);
    },
    disconnect()
    {
        console.log("Disconnected from "+ roomId + " " + serverUrl);
    }
}
}