import React from "react";
import Person from "@/components/pages/PersonInfo";
import { ApiError } from "next/dist/server/api-utils";

export default function page() {
  const apiKey = process.env.REACT_APP_API_KEY;
  return <Person apiKey={apiKey} />;
}
