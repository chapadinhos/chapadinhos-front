"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const SideMenu = (props: any) => {
  const [sideMenuVisibility, setSideMenuVisibility] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const list = ["/", "/access", "/access/signup"];
    setSideMenuVisibility(!list.includes(pathname));
  }, [pathname]);

  function renderizaSideMenu() {
    if (sideMenuVisibility) {
      return (
        <div className="fixed h-screen flex-row pt-[80px]">
          <div className="h-full w-[75px] flex-none">
            <div className="flex h-full flex-col bg-black">
              <Link
                href="/dashboard"
                className="grid h-[75px] place-content-center text-gray-50 hover:bg-gray-800"
              >
                <span>H</span>
              </Link>
              <Link
                href="/profile"
                className="grid h-[75px] place-content-center text-gray-50 hover:bg-gray-800"
              >
                <span>P</span>
              </Link>
              <Link
                href="/history"
                className="grid h-[75px] place-content-center text-gray-50 hover:bg-gray-800"
              >
                <span>H</span>
              </Link>
              <div className="flex grow flex-row justify-between"></div>
              <Link
                href="/configuration"
                className="grid h-[75px] place-content-center text-gray-50 hover:bg-gray-800"
              >
                <span>C</span>
              </Link>
            </div>
          </div>
        </div>
      );
    }
    return;
  }

  return renderizaSideMenu();
};

export default SideMenu;
