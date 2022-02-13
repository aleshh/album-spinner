import { useState, useEffect } from "react";

function useDelay() {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1500);

    return () => clearTimeout(timer);
  });

  return show;
}

export default useDelay;
