import React from 'react';
import profileBackground from '../assets/images/profile-background.png';


export const Profile = () => {
    return (
        <main className="main">
            <div className="profile">
                <img src={profileBackground} alt="profile-background"/>
                <div>avatar + descr</div>
                <div>My posts</div>
                <div>New post</div>
                <div>
                    <div>Post1</div>
                    <div>Post2</div>
                </div>
            </div>
        </main>
    )
}