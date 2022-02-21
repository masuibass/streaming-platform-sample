import React from "react";

import { sampleChannelCards } from "../samples/sampleChannels";
import ChannelCard from "../components/ChannelCard";
type Props = {};

const ChannelFeed = ({}: Props) => {
  return (
    <div className="grid w-full grid-flow-row-dense grid-cols-1 mx-aut sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {sampleChannelCards.map(({ ...props }, i) => (
        <ChannelCard key={i} {...props} />
      ))}
    </div>
  );
};

export default ChannelFeed;
