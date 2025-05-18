"use client";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProductData from "../../constants/Productdata";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface SidebarLink {
  imgURL: string;
  route: string;
  label: string;
}

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/about",
    label: "About",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/products",
    label: "Products",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/contact",
    label: "Contact",
  },
];

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <SheetClose key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const Navbar = () => {
  return (
    <div className="h-[100px] w-full py-20  flex flex-row px-6 md:px-12 lg:px-16 xl:px-24 justify-between items-center">
      <Link href="/">
        <Image
          src="/images/logo.png"
          width={80}
          height={80}
          className=""
          alt="Ratan Herbs"
        />
      </Link>

      <div className="hidden sm:flex flex-row gap-[40px]">
        {sidebarLinks.map((item: any) => (
          <div
            className="text-black hover:underline underline-offset-8 hover:cursor-pointer relative decoration-green-500 font-bold text-lg"
            key={item.route}
          >
            {item.label === "Products" ? (
              <>
                <div
                  className={`group relative flex cursor-pointer items-center gap-1 text-pretty text-black `}
                >
                  <p>Products</p>
                  {/* <BsChevronDown size={8} /> */}
                  <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] items-center justify-center h-[400px] custom-scrollbar  overflow-y-scroll   translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-gray-200 px-4 py-6  opacity-0 gap-5  transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100  lg:w-[200px]">
                    {/* <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-gray-200"></div> */}
                    {ProductData.map((item, index) => (
                      <div
                        className="text-gray-500 hover:scale-95 hover:text-black capitalize transition-all duration-300 first:mt-10"
                        key={index}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              // <DropdownMenu>
              //   <DropdownMenuTrigger>Products</DropdownMenuTrigger>
              //   <DropdownMenuContent>
              //     <DropdownMenuLabel>Our Products</DropdownMenuLabel>
              //     <DropdownMenuSeparator />
              //     <DropdownMenuItem>Profile</DropdownMenuItem>
              //     <DropdownMenuItem>Billing</DropdownMenuItem>
              //     <DropdownMenuItem>Team</DropdownMenuItem>
              //     <DropdownMenuItem>Subscription</DropdownMenuItem>
              //   </DropdownMenuContent>
              // </DropdownMenu>
              <p>{item.label}</p>
            )}
          </div>
        ))}
      </div>
      <div className="block sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Image
              src="/assets/icons/hamburger.svg"
              width={36}
              height={36}
              alt="Menu"
              className="invert-colors sm:hidden"
            />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="background-light900_dark200 border-none"
          >
            <Link href="/" className="flex items-center gap-1">
              <Image
                src="/images/logo.png"
                width={23}
                height={23}
                alt="Ratan Harbal"
              />
              <p className="h2-bold  text-black ">
                Devbhumi <span className="text-primary-500">Ratan Harbal</span>
              </p>
            </Link>
            <div>
              <SheetClose asChild>
                <NavContent />
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
