const SpeakersRenderProps = ({ children }) => {
  const speakers = [
    { imageSrc: "speaker-1124", name: "Douglas Crockford" },
    { imageSrc: "speaker-1530", name: "Tamara Baker" },
    { imageSrc: "speaker-10803", name: "Eugene Chuvyrov" },
  ];
  return children({ speakers: speakers });
};

export default SpeakersRenderProps;
