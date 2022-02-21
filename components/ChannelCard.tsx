import React from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";

export type ChannelCardProps = {
  channelTitle: string;
  channelThumbnail: string;
  userIcon: string;
  username: string;
};

const ChannelCard = ({
  channelTitle,
  channelThumbnail,
  userIcon,
  username,
}: ChannelCardProps) => {
  return (
    <div className="px-4 py-2 m-4 border rounded-lg shadow-lg">
      <div className="flex flex-col items-stretch gap-2">
        <h3 className="font-bold leading-8">{channelTitle}</h3>
        <div className="relative aspect-square">
          <Image
            src={channelThumbnail}
            alt={channelTitle}
            objectFit="cover"
            layout="fill"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="relative w-8 h-8 mr-2">
            <Image
              src={userIcon}
              alt={username}
              objectFit="cover"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <span className="flex-1 text-sm text-gray-600">{username}</span>
          <div>
            <AiOutlineHeart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelCard;
