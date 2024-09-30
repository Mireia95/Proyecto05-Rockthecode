export const createMusicCatching = () => {
  const music = document.createElement('audio');
  music.src = './public/assets/CatchingBanana/BGMusic.mp3';
  music.volume = '0.3';
  return music;
};
