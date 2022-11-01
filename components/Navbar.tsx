import { ConnectWallet } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export const Navbar = () => (
    
    <>
    <nav className="bg-[#111827] border-green-900 ">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a>
          <img
           // src="https://flowbite.com/docs/images/logo.svg"
            //className="mr-3 h-6 sm:h-9"
            //alt="Flowbite Logo"
          />
          <span className="self-center text-3xl font-bold text-[#892afe]">
            HELL&WIN
          </span>
        </a>
        <div>
            <ConnectWallet accentColor="#B9261C"/>
        </div>
      </div>
    </nav>
    <nav className="bg-gradient-to-r from-[#892afe] 66% via-[#ff2366] 33% to-[#B9261C]">
      <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
        <div className="flex items-center">
          <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
           
            
          
           
          </ul>
        </div>
      </div>
    </nav>
  </>
    );
  
      