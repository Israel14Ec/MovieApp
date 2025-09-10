import { useRef, useState } from "react";
import { useWindowDimensions, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

interface Props {
  keyVideo: string;
}

export const MovieVideo = ({ keyVideo }: Props) => {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);

  const { width: widthDimension } = useWindowDimensions();

  const onStateChange = (state: string) => {
    if (state === "ended") {
      setPlaying(false);
    }
  };

  return (
    <View
      className=" flex-1"
      style={{ width: widthDimension }}
    >
      <YoutubePlayer
        ref={playerRef}
        height={250}
        play={playing}
        videoId={keyVideo}
        onChangeState={onStateChange}
      />
    </View>
  );
};
