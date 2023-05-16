/* eslint-disable prettier/prettier */
import React, { useState } from "react";


interface ManageUserProps {
    user: string;
    options: string[];
    setOptions: (newOptions: string[]) => void;
    members: string[];
    setMembers: (newMembers: string[]) => void;
    movieCount: number; // Add movieCount property
    setMovieCount: (count: number) => void;
}
export function ManageUser({
    user,
    options,
    setOptions,
    members,
    setMembers,
    movieCount
}: ManageUserProps) {
    const [editUsers, setEditUsers] = useState(false);

    //used to keep track of site users, when super is in edit mode
    function handleUserClick() {
        setEditUsers(true);
    }

    //when super quits user edit mode
    function handleUserDone() {
        setEditUsers(false);
    }

    //remove user from list
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
                {editUsers &&
                user !== "Movie Master" &&
                user !== "Movie Mentor" ? (
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
                            {user} Movie Count: {movieCount} {/* Display movie count */}
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
    //allows for super to delete users
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

