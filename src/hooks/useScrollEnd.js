import {useEffect, useState} from "react";

export const useScrollEnd = (ref) => {
  const [isEndScroll, setIsEndScroll] = useState(false);
  const handleScroll = () => {
    const isEndScroll =
      ref?.current?.clientHeight < window.innerHeight + window.scrollY + 5;
    setIsEndScroll(isEndScroll);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return isEndScroll;
};
