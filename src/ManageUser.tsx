import React, { useState } from "react";
// import { Form } from "react-bootstrap";

interface ManageUserProps {
    user: string;
    options: string[];
    setOptions: (newOptions: string[]) => void;
    members: string[];
    setMembers: (newMembers: string[]) => void;
}
export function ManageUser({
    user,
    options,
    setOptions,
    members,
    setMembers
}: ManageUserProps) {
    const [editUsers, setEditUsers] = useState(false);

    function handleUserClick() {
        setEditUsers(true);
    }
    function handleUserDone() {
        setEditUsers(false);
    }

    function removeOption(exUser: string) {
        setOptions(
            options.filter((currUser: string): boolean => currUser !== exUser)
        );
        setMembers(
            members.filter((currUser: string): boolean => currUser !== exUser)
        );
        handleUserDone();
    }

    return (
        <>
            <div>
                {editUsers ? (
                    <UserEdit
                        user={user}
                        userDone={handleUserDone}
                        removeOption={removeOption}
                    />
                ) : (
                    <span
                        className="namePlaque"
                        key={user}
                        onClick={handleUserClick}
                    >
                        {" "}
                        {user}{" "}
                    </span>
                )}
            </div>
        </>
    );
}

interface userEditProps {
    user: string;
    userDone: () => void;
    removeOption: (exUser: string) => void;
}
export function UserEdit({ user, userDone, removeOption }: userEditProps) {
    function handleDeleteClick() {
        removeOption(user);
    }
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row"
            }}
            className="toggle-user"
        >
            <button onClick={handleDeleteClick}>Delete</button>
            <button onClick={userDone}>Cancel</button>
        </div>
    );
}
