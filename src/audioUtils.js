import music from "./public/delete.mp3"
import add from "./public/add.mp3"


export const playAddSound = () => {
  const audio = new Audio(add);
  audio.play();
};

export const playDeleteSound = () => {
  const audio = new Audio(music);
  audio.play();
};
