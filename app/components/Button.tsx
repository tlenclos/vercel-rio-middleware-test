"use client";

import { useState } from "react";
import { reactActionExample } from "../actions/react-action-example";
import huge from "./huge.json";

const Button = () => {
  const [isLoading, setIsLoading] = useState(false);

  const call = async () => {
    setIsLoading(true);
    const response = await reactActionExample(huge);

    if (response.status === "success") {
      // window.location.href = response.url!;
      alert("it worked");
    }

    setIsLoading(false);
  };
  return (
    <button type="button" onClick={call} disabled={isLoading}>
      {isLoading ? "Loading" : "Call action"}
    </button>
  );
};

export default Button;
