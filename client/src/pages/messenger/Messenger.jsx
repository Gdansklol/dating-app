import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Messenger() {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);

    const {user} = useContext(AuthContext);

    useEffect(()=>{
        const getConversations = async ()=> {
            try{
            const res = await axios.get("/conversations/"+user._id)
            console.log(res);
            setConversations(res.data)
            } catch (err){
            console.log(err);
            }
        };
        getConversations();
    }, [user._id]);

    return (
        <>
        <Topbar />
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="Search for another users..." className="chatMenuInput"/>
                {/* <Conversation />
                <Conversation /> */}
                {conversations.map((c)=>(
                    <Conversation conversation={c} currentUser={user} />
                ))}
            
                </div>
            </div>
        <div className="chatBox">
        < div className="chatBoxWrapper">
        {
            currentChat ? 
            <>
        
            <div className="chatBoxTop">
            <Message />
            <Message own={true}/>
            <Message />
            <Message />
        </div>
        <div className="chatBoxBottom">
            <textarea className="chatMessageInput" placeholder="Write somthing here "></textarea>
            <button className="chatSubmitButton">Send</button>
        </div> 
        </> : 
        <span className="noConversationText"> Open a conversation to start a chat.</span> }
    </div>
    </div>

    < div className="chatOnline">
        <div className="chatOnlineWrapper">
            <ChatOnline />
            </div>
            </div>
        </div>
        </>
    );
}
