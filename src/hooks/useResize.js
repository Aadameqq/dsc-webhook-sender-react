import React, { useEffect, useState } from "react";

const useResize = () => {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};
export default useResize;
