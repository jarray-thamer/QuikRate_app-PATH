import React from "react";

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black bg-opacity-95 w-screen text-center py-4 flex-none mt-auto">
      <h4 className="text-white text-xs font-normal">
        All rights reserved {currentYear} Path
      </h4>
    </div>
  );
};

export default FooterComponent;
