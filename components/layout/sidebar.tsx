"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    name: "首页",
    href: "/",
  },
  {
    name: "数据录入",
    href: "/data-entry",
  },
  {
    name: "患者管理",
    href: "/patient/all",
  },
  {
    name: "系统管理",
    href: "/system/users",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full border-r bg-white">
      <div className="flex h-16 items-center border-b px-4">
        <h1 className="text-lg font-semibold">医疗系统</h1>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`block rounded-md px-3 py-2 text-sm font-medium ${
              pathname === item.href
                ? "bg-indigo-100 text-indigo-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}