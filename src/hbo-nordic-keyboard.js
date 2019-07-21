const videoDiv = "div.video-js";
const playButton = "button.vjs-play-control";
const fullscreenButton = "button.vjs-fullscreen-control";
const backwardButton = "button.backward-button";
const forwardButton = "button.forward-button";
const volumeButton = "div.vjs-volume-menu-button";

const preventSpacebarClick = selector => {
  const element = document.querySelector(selector);
  if (!element) {
    return;
  }
  element.onkeyup = e => e.preventDefault();
};

const click = selector => {
  const element = document.querySelector(selector);
  if (!element) {
    return;
  }
  element.click();
};

const toggleFullscreen = () => {
  if (window.fullScreen) {
    click(fullscreenButton);
  } else {
    document.querySelector(videoDiv).requestFullscreen();
  }
};

const keymap = {
  " ": () => click(playButton),
  f: toggleFullscreen,
  ArrowLeft: () => click(backwardButton),
  ArrowRight: () => click(forwardButton),
  m: () => click(volumeButton)
};

document.addEventListener("keydown", event => {
  preventSpacebarClick(playButton);
  preventSpacebarClick(fullscreenButton);
  preventSpacebarClick(backwardButton);
  preventSpacebarClick(forwardButton);
  preventSpacebarClick(volumeButton);
});

document.addEventListener("keyup", event => {
  const action = keymap[event.key];
  if (action) {
    action();
  }
});
