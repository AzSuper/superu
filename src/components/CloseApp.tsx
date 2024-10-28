import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const CloseApp = () => {
  const navigate = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate.push("/"); // Redirect to the home path after 40 seconds
    }, 40000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-[100]">
      <div className="relative max-w-md p-6 bg-white text-gray-800 rounded-lg shadow-lg text-center">
        <p className="mb-4 text-lg font-semibold">Hi This Just a Demo App 😄</p>
        <p className="text-zinc-950 hover:text-[#ea580c]">
          ooh Hello i'm Mohammad i'm soo glad that you reach this point Hope you
          like this app im looking forward to working with you Visit my
          Portfolio :
        </p>
        <a
          href="your-portfolio-link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-950 hover:text-[#ea580c] underline"
        >
          AzSuper
        </a>
      </div>
    </div>
  );
};

export default CloseApp;
