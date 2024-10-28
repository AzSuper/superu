import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";
import Image from "next/image";

interface phoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  phoneColor?: string;
  dark?: boolean;
}

const Phone = ({
  imgSrc,
  className,
  phoneColor,
  dark = false,
  ...props
}: phoneProps) => {
  return (
    <div
      className={cn(
        `relative pointer-events-none z-50 overflow-hidden ${phoneColor}`,
        className
      )}
      {...props}
    >
      <img
        src={dark ? "/border-dark.png" : "/border-light.png"}
        alt="img"
        className="pointer-events-none z-50 select-none"
      />
      <div className="absolute -z-10 inset-0 overflow-hidden">
        <img
          alt="imageback"
          className="object-cover min-w-full min-h-full"
          src={imgSrc}
        />
      </div>
    </div>
  );
};

export default Phone;
