import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Countdown() {
  const [countdown, setCountdown] = useState(10);
  const router = useRouter();

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      router.push("https://cureangelman.org.uk");
    }
  }, [countdown, router]);

  return <span>Redirecting in {countdown} seconds...</span>;
}

export default Countdown;
