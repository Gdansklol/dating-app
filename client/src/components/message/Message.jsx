import "./message.css";
import { format } from "timeago.js";


export default function Message({message,own}) {

    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img 
                className="messageImg"
                src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                // src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                />
                <p className="messageText">
                    {/* Hello this is a message... */}
                    {message.text}
                </p>
        </div>
        <div className = "messageBottom">
            {/* A few minutes ago */}
            {format(message.createdAt)}
        </div>
        </div>
    )
}