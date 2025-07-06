import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";

function UseAuthStats() {
  const [login, setLogin] = useState(false);
  const [checkingStats, setCheckStats] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogin(true);
      }
      setCheckStats(false);
    });
  }, []);
  return { login, checkingStats };
}

export default UseAuthStats;
