
export default class Realtime{
  constructor(url='ws://localhost:3000/ws' ,freezer){
    this.socket = new WebSocket(url);

    let i=0;
    this.socket.onopen = () => {
      setInterval( () => {
        this.send({"method": "ping", "id": ++i})
      },10000)
    }

    this.socket.onmessage = (msg) => {
      console.log((new Date())+ " <== "+msg.data+"\n");
    }
    return this;
  }

  send(data){
    console.log((new Date())+ " ==> "+JSON.stringify(data)+"\n")
    this.socket.send(JSON.stringify(data))
  }
}
