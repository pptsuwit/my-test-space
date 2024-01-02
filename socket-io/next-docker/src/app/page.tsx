"use client";
import { useEffect, useState } from "react";

import { io } from "socket.io-client";

interface IMessage {
  message: string;
  name: string;
  createAt: string;
}
export default function Home() {
  const chatServer = "http://localhost:5000";
  const [socket, setSocket] = useState<any>(undefined);
  const [inbox, setInbox] = useState<any>([]);
  const [message, setMessage] = useState("");
  // const [roomName, setRoomName] = useState("");
  const [name, setName] = useState("");
  const [saveName, setSaveName] = useState(false);

  function handleSend() {
    socket.emit("message", message, name, getNewDate());
    setMessage("");
  }
  // function handleJoin() {
  //   socket.emit("joinRoom", roomName);
  // }

  function getNewDate() {
    var d = new Date();
    d.setHours(d.getHours());
    var h = d.getHours() % 12 || 12;
    return (h < 10 ? "0" : "") + h + (d.getMinutes() < 10 ? ":0" : ":") + d.getMinutes() + (d.getHours() < 12 ? " AM" : " PM");
  }
  useEffect(() => {
    if (localStorage.getItem("my_app_socket_io_name")) {
      setSaveName(true);
      setName(localStorage.getItem("my_app_socket_io_name") || "");
    }
    const sc = io(chatServer);
    sc.emit("connected");
    sc.on("message", (item) => {
      // setInbox((inbox: any) => [...inbox, message]);
      setInbox(item);
    });
    setSocket(sc);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 pt-">
      <div className="container mx-auto p-4 rounded shadow-lg max-w-[800px]">
        <div className="flex items-center">
          <input
            name="name"
            onChange={(e) => {
              setName(e.target.value);
              localStorage.setItem("my_app_socket_io_name", e.target.value);
            }}
            defaultValue={name}
            type="text"
            placeholder="Type your name..."
            className="flex-1 border rounded p-2 mr-2 focus:outline-none focus:border-blue-500"
            disabled={saveName}
          />
          <button
            disabled={saveName}
            onClick={() => setSaveName(true)}
            className={`${!saveName ? "bg-emerald-500 hover:bg-emerald-600" : "bg-gray-300"} text-white px-4 py-2 rounded focus:outline-none `}
          >
            Set Name
          </button>
        </div>
      </div>
      <div className="container mx-auto mt-12 p-4 bounded shadow-lg max-w-[800px]">
        <div className="mb-4">
          <div className="border rounded-lg p-4 bg-gray-200">
            {inbox.map((item: IMessage, index: number) =>
              item.name === name ? (
                <div key={index + name} className="flex items-center justify-end mb-2 ">
                  <span className="text-xs mr-2 text-gray-500">{item.createAt}</span>
                  <div className="bg-blue-500 text-white py-2 px-4 rounded-l-lg max-w-xs">
                    <p>{item.message}</p>
                  </div>
                </div>
              ) : (
                <div key={index + name} className="flex items-center mb-2">
                  <div className="bg-gray-300 py-2 px-4 rounded-r-lg max-w-xs">
                    <p className="text-black text-[10px]">{item.name}</p>
                    <p>{`${item.message}`}</p>
                  </div>
                  <span className="text-xs ml-2 text-gray-500">{item.createAt}</span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="flex items-center">
          <input
            disabled={!saveName}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            type="text"
            placeholder="Type your message..."
            className="flex-1 border rounded p-2 mr-2 focus:outline-none focus:border-blue-500"
          />
          <button disabled={!saveName} onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-600">
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
