import React from "react";
import "../css/Profile.css";

const Profile = () => {
    return <div className={'content'}>
        <div>
            <img src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"}/>
        </div>
        <div>
            ava + description
        </div>
        <div>
            MyPost
        </div>
        <div className={"posts"}>
            New post
        </div>
        <div className={"item"}>
            post 1
        </div>
        <div className={"item"}>
            post 2
        </div>
    </div>
}

export default Profile