export const createMusicCatching = () => {
  const music = document.createElement('audio');
  music.src = './public/assets/CatchingBanana/BGMusic.mp3';
  music.volume = '0.3';
  music.loop = true; //para que cuando acabe siga en play en loop
  return music;
};
