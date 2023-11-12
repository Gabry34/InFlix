import React from "react";
import SearchMovie from "@/components/pages/SearchMovie";

export default function page() {
  const apiKey = process.env.REACT_APP_API_KEY;
  return <SearchMovie apiKey={apiKey} />;
}
