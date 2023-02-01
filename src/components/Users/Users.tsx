import React from "react";
import {UserType} from "../../redux/users-reducer";
import s from './users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/vini.png'


export const Users = (props: UsersPropsType) => {
    if(props.usersPage.users.length===0)
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{

            props.setUsers(response.data.items)})

    return <div>
        {

            props.usersPage.users.map(u => <div key={u.id}>
      <span>
          <div>
              <img src={u.photos.small!=null?u.photos.small:userPhoto} className={s.photo}/>
          </div>
          <div>
              {u.followed?
                  <button onClick={()=>{props.unfollow(u.id)}}>Follow</button>:
                  <button onClick={()=>{props.follow(u.id)}}>Unfollow</button>}
          </div>
      </span>
                <span>
         <span>
             <div>{u.name}</div>
             <div>{u.status}</div>
         </span>
         <span>
             <div>{'u.location.country'}</div>
             <div>{'u.location.city'}</div>
         </span>
      </span>


            </div>)

        }

    </div>

}