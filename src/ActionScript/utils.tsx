// @ts-ignore
import { gsap, Power1 } from "gsap";
import { getSizes } from "./";

const duration = 1;

export const fadeOut = (divId: string) => {
  try {
    const el = getElement(divId);
    if (!el) {
      console.warn("fadeOut fail;", divId);
      return false;
    }
    console.warn("el", el);
  } catch (error) {
    return false;
  }
};

export const fadeIn = (divId: string) => {
  try {
    const el = getElement(divId);
    if (!el) {
      console.warn("fadeIn fail;", divId);
      return false;
    }
    gsap.to(`#${divId}`, {
      opacity: 1,
      ease: Power1.easeOut,
      duration,
      onComplete: () => {
        return true;
      },
    });
  } catch (error) {
    return false;
  }
};

export const getElement = (divId) => {
  try {
    const el = document.getElementById(divId);
    if (!el) return false;

    let mode = "square";
    let isMobile = false;
    if (el.offsetWidth < 650) isMobile = true;
    if (el.offsetHeight < el.offsetWidth) mode = "landscape";
    if (el.offsetHeight > el.offsetWidth) mode = "portrait";

    return {
      id: `#${divId}`,
      height: el.offsetHeight,
      width: el.offsetWidth,
      mode,
      isMobile,
    };
  } catch (error) {
    return false;
  }
};

export const setPosition = (divId, position, offset) => {
  try {
    const el = getElement(divId);
    if (!el) {
      console.error("No element called ", divId);
      return false;
    }
    const sizes = getSizes(divId);
    // @ts-ignore
    const { stageW, stageH, elW, elH } = sizes;
    let pos;
    if (position === `topleft`)
      pos = {
        x: 0,
        y: 0,
      };
    if (position === `topmiddle`)
      pos = {
        x: stageW / 2 - elW / 2,
        y: 0,
      };
    if (position === `topright`)
      pos = {
        x: stageW - elW,
        y: 0,
      };
    if (position === `centered`)
      pos = {
        x: stageW / 2 - elW / 2,
        y: stageH / 2 - elH / 2,
      };
    if (position === `bottomleft`)
      pos = {
        x: 0,
        y: stageH - elH,
      };
    if (position === `bottommiddle`)
      pos = {
        x: stageW / 2 - elW / 2,
        y: stageH - elH,
      };
    if (position === `bottomright`)
      pos = {
        x: stageW - elW,
        y: stageH - elH,
      };
    const { x, y } = pos;
    gsap.set(`#${divId}`, {
      x: x + offset.left,
      y: y + offset.top,
    });
  } catch (error) {
    return false;
  }
};
