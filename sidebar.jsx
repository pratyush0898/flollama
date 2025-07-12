import React, { useState } from "react";

const Sidebar = () => {
  const [State, setState] = useState(true);
  function toggleSatate() {
    setState(!State);
  }
  return (
    <>
      <button onClick={toggleSatate}>CLick me</button>
      <div className="w-auto max-w-[364px]">
        {State ? (
          <>
          SMALL
          </>
        ) : (
          <>
            <div className="min-w-[256px]">
              BLAH BALH BALH BALH BLAH
            </div>
            <div className="w-full">BLAH BALH BALH</div>
          </>
        )}
      </div>
    </>
  );
};

export default Sidebar;
