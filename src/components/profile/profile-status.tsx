import React, { useEffect, useState, FC, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateStatus } from "@/redux/profile.reducer";
import { statusSelector } from "@/redux/selectors/profile.selectors";
import module from "@/components/profile/profile-status.module.css";

type PropsTypes = {
  isOwner: boolean;
};

export const ProfileStatus: FC<PropsTypes> = ({ isOwner }) => {
  const statusFromStore = useSelector(statusSelector);

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(statusFromStore || "...");

  const dispatch = useDispatch();

  const activateEditMode = () => {
    if (isOwner) {
      setEditMode(true);
    }
    return;
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    dispatch(updateStatus(status) as any);
  };
  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    setStatus(statusFromStore);
  }, [statusFromStore]);

  return (
    <div className={module.profileStatus}>
      {!editMode && (
        <div>
          <span className={module.status} onDoubleClick={activateEditMode}>
            {statusFromStore || (
              <span className={module.status}>...no status...</span>
            )}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            className={module.statusInput}
            autoFocus
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            type="text"
            value={status}
          />
        </div>
      )}
    </div>
  );
};
