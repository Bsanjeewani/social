import React from "react";
import {
  HatLogo,
  MessageLogo,
  NotificationLogo,
  SOCONLogo,
} from "../../assets";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center w-full justify-between px-8 pt-4 bg-black">
      {/* Left Logo with Hat Overlay */}
      <div className="relative flex items-center ">
        <img src={SOCONLogo} alt="SOCON Logo" className="h-6" />
        <img
          src={HatLogo}
          alt="Hat Logo"
          className="absolute left-0 top-0 transform -translate-x-2 -translate-y-2 h-4"
        />
      </div>

      {/* Right Icons */}
      <div className="flex gap-4">
        <div>
          <img src={MessageLogo} alt="Messages" className="h-8" />
        </div>
        <div>
          <img src={NotificationLogo} alt="Notifications" className="h-8" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
