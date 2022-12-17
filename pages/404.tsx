import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex-col gap-6 bg-white flex w-full justify-center items-center">
      <h2 className="text-4xl text-black">404 Not found page</h2>
      <button
        onClick={() => window.history.back()}
        className="text-white capitalize text-2xl rounded-full bg-primary px-14 py-4"
      >
        back to page
      </button>
    </div>
  );
};

export default NotFound;
