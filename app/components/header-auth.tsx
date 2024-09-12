"use client";

import React from "react";
import { signOut as nextAuthSignOut, useSession } from "next-auth/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import * as actions from "@/app/actions";

export default function HeaderAuth() {
  const { data: session, status } = useSession();

  let authContent: React.ReactNode;
  if (status === "loading") {
    return (authContent = null); // Optionally, add a loading spinner or skeleton
  } else if (session?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session?.user.image || ""} />
        </PopoverTrigger>
        <PopoverContent>
          <div className=" p-4">
            <form
              action={async () => {
                await actions.signOut();
                await nextAuthSignOut({ redirect: false });
              }}
            >
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign In
            </Button>
          </form>
        </NavbarItem>

        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="primary" variant="flat">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }
  return authContent;
}
