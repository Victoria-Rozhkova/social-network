import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { withAuthRedirect } from "src/hoc/withAuthRedirect";
import { getProfile, getStatus } from "src/redux/profileReduser";
import { userIdSelector } from "src/redux/selectors/authSelectors";
import { MyPosts } from "./MyPosts/MyPosts";
import module from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

const Profile: FC = () => {
  const [isOwner, setIsOwner] = useState(false);

  const userId = useSelector(userIdSelector);

  const dispatch = useDispatch();

  const { id } = useParams();
  useEffect(() => {
    if (Number(id)) {
      dispatch(getProfile(id as unknown as number) as any);
      dispatch(getStatus(id as unknown as number) as any);
      setIsOwner(false);
    }
    if (id === undefined || id === null) {
      dispatch(getProfile(userId as number) as any);
      dispatch(getStatus(userId as number) as any);
      setIsOwner(true);
      return;
    }
  }, [id, userId, dispatch]);

  return (
    <div className={module.content}>
      <ProfileInfo isOwner={isOwner} />
      <MyPosts />
    </div>
  );
};

export default withAuthRedirect(Profile);
