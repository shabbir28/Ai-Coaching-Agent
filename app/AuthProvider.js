"use client";

import { useUser } from "@stackframe/stack";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { UserContext } from "./_context/UserContext";
import React, { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const user = useUser();

  const createUser = useMutation(api.users.createUser);
  const [userData, setUserData] = useState();

  useEffect(() => {
    console.log(user);
    if (user) {
      createNewUser();
    }
  }, [user]);

  const createNewUser = async () => {
    const result = await createUser({
      name: user?.displayName,
      email: user.primaryEmail,
    });

    console.log(result);
    setUserData(result);
  };

  return <div>
    <UserContext.Provider value={{userData, setUserData}}>
      {children}
    </UserContext.Provider>
  </div>;
};

export default AuthProvider;
