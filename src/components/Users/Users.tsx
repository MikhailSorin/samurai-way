import React from "react";
import {UserType} from "../../redux/users-reducer";
import s from './users.module.css'
import {UsersPropsType} from "./UsersContainer";


export const Users = (props: UsersPropsType) => {
    if(props.usersPage.users.length===0)props.setUsers([
        {
            id: '1',
            photoUrl: 'https://fsd.multiurok.ru/html/2021/11/01/s_617f4ebb30e29/phpFoOsNh_Skazka-v-teatre_html_13c580d83d659783.jpg',
            fullName: 'Dmitriy',
            followed: false,
            status: "I'm boss",
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: '2',
            photoUrl: 'https://fsd.multiurok.ru/html/2021/11/01/s_617f4ebb30e29/phpFoOsNh_Skazka-v-teatre_html_13c580d83d659783.jpg',
            fullName: 'Michael',
            followed: true,
            status: "I'm boss",
            location: {city: 'St Petersburg', country: 'Russia'}
        },
        {
            id: '3',
            photoUrl: 'https://fsd.multiurok.ru/html/2021/11/01/s_617f4ebb30e29/phpFoOsNh_Skazka-v-teatre_html_13c580d83d659783.jpg',
            fullName: 'Igor',
            followed: false,
            status: "I'm boss",
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: '4',
            photoUrl: 'https://fsd.multiurok.ru/html/2021/11/01/s_617f4ebb30e29/phpFoOsNh_Skazka-v-teatre_html_13c580d83d659783.jpg',
            fullName: 'Ivan',
            followed: true,
            status: "I'm boss",
            location: {city: 'Porto', country: 'Portugal'}
        },
        {
            id: '5',
            photoUrl: 'https://fsd.multiurok.ru/html/2021/11/01/s_617f4ebb30e29/phpFoOsNh_Skazka-v-teatre_html_13c580d83d659783.jpg',
            fullName: 'Maya',
            followed: false,
            status: "I'm boss",
            location: {city: 'St Petersburg', country: 'Russia'}
        },
        {
            id: '6',
            photoUrl: 'https://fsd.multiurok.ru/html/2021/11/01/s_617f4ebb30e29/phpFoOsNh_Skazka-v-teatre_html_13c580d83d659783.jpg',
            fullName: 'Liya',
            followed: true,
            status: "I'm boss",
            location: {city: 'St Petersburg', country: 'Russia'}
        },

    ])

    return <div>
        {

            props.usersPage.users.map(u => <div key={u.id}>
      <span>
          <div>
              <img src={u.photoUrl} className={s.photo}/>
          </div>
          <div>
              {u.followed?
                  <button onClick={()=>{props.unfollow(u.id)}}>Follow</button>:
                  <button onClick={()=>{props.follow(u.id)}}>Unfollow</button>}
          </div>
      </span>
                <span>
         <span>
             <div>{u.fullName}</div>
             <div>{u.status}</div>
         </span>
         <span>
             <div>{u.location.country}</div>
             <div>{u.location.city}</div>
         </span>
      </span>


            </div>)

        }

    </div>

}