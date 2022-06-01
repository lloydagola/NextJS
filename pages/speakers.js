import React from "react";
import SpeakersRenderProps from "./SpeakersRenderProps";

const Speakers = () => (
  <SpeakersRenderProps>
    {({ speakers }) => (
      <div>
        {speakers.map(({ imageSrc, name }) => {
          return (
            <img src={`images/${imageSrc.jpg}`} alt={name} key={imageSrc} />
          );
        })}
      </div>
    )}
  </SpeakersRenderProps>
);

export default Speakers;
