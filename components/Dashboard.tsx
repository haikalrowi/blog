"use client";

import { userLogout } from "@/lib/action";
import { UserContext, UserContextType } from "./context/User";

export function Dashboard({ context }: { context: UserContextType }) {
  const logout = async () => {
    await userLogout();
  };
  return (
    <UserContext.Provider value={context}>
      <div>Dashboard</div>
      <div>
        <button onClick={logout}>Logout</button>
      </div>
    </UserContext.Provider>
  );
}
