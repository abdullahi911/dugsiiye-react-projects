import React, { useContext } from 'react'
import Languagecontext from './Languagepr'

export const Languagech = () => {

  const language = useContext(Languagecontext);

  return (
    <div>
      Current language: {language}
    </div>
  );
}