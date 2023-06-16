import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
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