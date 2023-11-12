import React from "react";
import InfoMovie from "@/components/pages/InfoMovie";

export default function page() {
  const apiKey = process.env.REACT_APP_API_KEY;
  return <InfoMovie apiKey={apiKey} />;
}
