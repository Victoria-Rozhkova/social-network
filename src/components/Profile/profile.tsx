import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { withAuthRedirect } from "@/hoc/with-auth-redirect";
import { getProfile, getStatus } from "@/redux/profile.reducer";
import { userIdSelector } from "@/redux/selectors/auth.selectors";
import { MyPosts } from "@/components/Profile/posts/my-posts";
import module from "@/components/Profile/profile.module.css";
import { ProfileInfo } from "@/components/Profile/profile-info";

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
