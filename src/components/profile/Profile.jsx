import React from "react";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {useOutletContext} from "react-router-dom";

const Profile = (props) => {
  const [data, setData] = useOutletContext()

  return (
      <div>
        <ProfileInfo/>
        <MyPosts data={data} />
      </div>
  );
};

export default Profile;