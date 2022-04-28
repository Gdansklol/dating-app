import axios from "axios";
import "./conversation.css";
import {useState, useEffect} from "react";


export default function Conversation ({conversation, currentUser}) {
    const [user, setUser] = useState(null)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
        try {
        const res = await axios("/users?userId=" + friendId);
        setUser(res.data);
        } catch (err) {
        console.log(err);
        }
    };
    getUser();
    }, [currentUser, conversation]);



    return (
        <div className="conversation">
            <img 
            className="converstionImg" 
            // src="https://static3.srcdn.com/wordpress/wp-content/uploads/2021/03/Harry-potter-and-the-cursed-child-movie.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5"
                src={
            user?.profilePicture
            ? PF + user.profilePicture
            : PF + "person/noAvatar.png"
        }
        alt="" />
            <span className="conversaionName">{user?.username}</span>

        </div>
    )
}
