import React from "react";

const withData = (max) => (Component) => {
  const speakers = [
    { imageSrc: "speaker-1124", name: "Douglas Crockford" },
    { imageSrc: "speaker-1530", name: "Tamara Baker" },
    { imageSrc: "speaker-10803", name: "Eugene Chuvyrov" },
  ];

  return () => {
    const maxSpeakers = speakers.slice(0, max);
    return <Component speakers={maxSpeakers} />;
  };
};

export default withData;
