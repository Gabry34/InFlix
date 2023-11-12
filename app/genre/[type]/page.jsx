import React from "react";
import GenreMovie from "@/components/pages/GenreMovie";

export default function page() {
  const apiKey = process.env.REACT_APP_API_KEY;
  return <GenreMovie apiKey={apiKey} />;
}
