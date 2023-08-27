import React, { useEffect, useState } from 'react'
import useUserInfo from '../Utils/useUserInfo';
import Shimmers from './Shimmers';
import useOnline from '../Utils/useOnline';

const Profile = ({COdingProfile}) => {
    const userInfo = useUserInfo();
    const isOnline = useOnline();
  
    if(!isOnline) return <h1> OFFLINE SOMETHIGN WENT WRONG!!</h1>


  if(!userInfo) return <Shimmers/>;

  return(
    <>
        <h1>Profile Functional Component</h1>
        <img src={userInfo?.avatar_url} />
        <h2>Name: {userInfo.name}</h2>
        <h3>Coding Name: {COdingProfile}</h3>
        <h3>Location: {userInfo.location}</h3>
    </>
);    
}

export default Profile