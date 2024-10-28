import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="bg-white h-20 relative">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200" />

        <div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center">
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-purple-600"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-purple-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-purple-600"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="text-sm text-muted-foreground pb-4 text-center flex flex-row justify-center items-center select-none">
          <span className="cursor-pointer">
            Made By{" "}
            <span className="font-black text-base text-orange-600">
              Mohammad Abo Zamel
            </span>{" "}
          </span>
          <img src="/logo.svg" alt="logo" className="w-6 h-6 pl-2" />
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
