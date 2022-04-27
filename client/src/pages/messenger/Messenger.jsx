import "./messenger.css"
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";

export default function Messenger() {
    return (
        <>
        <Topbar />
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="Search for another users..." className="chatMenuInput"/>
                <Conversation />
                <Conversation />
                <Conversation />
                </div>
            </div>
        <div className="chatBox">
        <div className="chatBoxWrapper">
            <Message />
            <Message />
            <Message />
        </div>
    </div>

    < div className="chatOnline">
        <div className="chatOnlineWrapper"> Online</div>
            </div>
    </div>
        </>
    );
}
