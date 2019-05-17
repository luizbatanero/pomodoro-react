function pad2(num) {
  return num > 9 ? num : `0${num}`;
}

export function formatTime(time) {
  const minutes = pad2(Math.floor(time / 60));
  const seconds = pad2(Math.floor(time % 60));

  return `${minutes}:${seconds}`;
}
