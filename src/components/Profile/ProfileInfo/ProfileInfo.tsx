import React from "react";
import s from'./ProfileInfo.module.css'

type ProfileInfoPropsType = {}
const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <>
            <div>
                <img src="https://cdn.stocksnap.io/img-thumbs/280h/Z28P4HBP06.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+dicription
            </div>
        </>
    )}

export default ProfileInfo