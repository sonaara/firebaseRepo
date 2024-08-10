import { useEffect } from "react";

function handleArrowNavPress(direction) {
  const routes = ["/login", "/no-friends", "/friends", "/discover"];
  const currentPath = window.location.pathname;
  const currentRouteIndex = routes.findIndex((route) => route === currentPath);
  if (currentRouteIndex === -1) {
    // No route match, nav to first route
    window.location.href = routes[0];
    return;
  }

  // Nav to next or previous route
  let nextRouteIndex =
    direction === "left" ? currentRouteIndex - 1 : currentRouteIndex + 1;
  if (nextRouteIndex === -1) nextRouteIndex = routes.length - 1;
  else if (nextRouteIndex === routes.length) nextRouteIndex = 0;
  window.location.href = routes[nextRouteIndex];
}

function handleArrowLeftPress() {
  handleArrowNavPress("left");
}

function handleArrowRightPress() {
  handleArrowNavPress("right");
}

export function useKeyboardNavigation() {
  // Register keyboard up event listener for left or right arrow press
  useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.key === "ArrowLeft") {
        handleArrowLeftPress();
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleArrowRightPress();
      }
    };
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("keydown", handleKeyDown);
    };
  });
}
