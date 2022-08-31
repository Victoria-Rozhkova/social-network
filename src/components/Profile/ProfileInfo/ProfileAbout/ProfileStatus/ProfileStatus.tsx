import React, { useEffect, useState, FC, ChangeEvent } from "react";
import module from "./ProfileStatus.module.css";

type PropsType = {
  status: string;
  updateStatus: (newStatus: string) => void;
};

export const ProfileStatus: FC<PropsType> = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status || "...");

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div className={module.profileStatus}>
      {!editMode && (
        <div>
          <span className={module.status} onDoubleClick={activateEditMode}>
            {props.status || (
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
