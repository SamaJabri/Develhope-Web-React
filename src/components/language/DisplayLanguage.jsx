import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function DisplayLanguage() {
  const language = useContext(LanguageContext);

  return <h1>{language}</h1>;
}
