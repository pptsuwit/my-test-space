import React from "react";

export default function header() {
  return (
    <div className="w-screen fixed top-0 h-16 z-50">
      <div className="bg-emerald-300 flex h-full items-center justify-between px-6">
        <div className="bg-red-300 w-full">Header Content</div>
        <div className="flex gap-2 min-w-96">
          <a href="#" className="no-underline">
            Menu 1
          </a>
          <a href="#" className="no-underline">
            Menu 2
          </a>
          <a href="#" className="no-underline">
            Menu 3
          </a>
          <a href="#" className="no-underline">
            Menu 4
          </a>
          <a href="#" className="no-underline">
            Menu 5
          </a>
          <a href="#" className="no-underline">
            Menu 6
          </a>
        </div>
      </div>
    </div>
  );
}
