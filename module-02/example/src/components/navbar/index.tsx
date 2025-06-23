"use client";

import { Button } from "../ui/button";
import { LoginModal } from "./components/login";
import useAuthStore from "@/store/useAuthStore";

export default function Navbar() {
  const { user, isLogin, clearAuth } = useAuthStore((state) => state);

  return (
    <div className="flex flex-row w-full p-4 justify-between align-middle shadow-2xl">
      <div>
        <img src={"/next.svg"} alt="img-logo" width={180} height={38} />
      </div>
      <div>
        {isLogin ? (
          <div className="flex flex-row gap-3 align-middle">
            <h2 className="text-lg">Hello, {user?.email}</h2>
            <Button variant={"outline"} onClick={clearAuth}>
              Logout
            </Button>
          </div>
        ) : (
          <LoginModal />
        )}
      </div>
    </div>
  );
}
