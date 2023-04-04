import { keyframes } from "styled-components";

const glowEffect = (color, type, inset=false) => {
  const insetTrue= inset ? 'inset' : '';

  return keyframes`
    0% {
      ${type}-shadow: 0 0 8px var(--ls-${color}) ${insetTrue};
    }
    20% {
      ${type}-shadow: 0 0 10px var(--ls-${color}) ${insetTrue};
    }
    40% {
      ${type}-shadow: 0 0 13px var(--ls-${color}) ${insetTrue};
    }
    60% {
      ${type}-shadow: 0 0 13px var(--ls-${color}) ${insetTrue};
    }
    80% {
      ${type}-shadow: 0 0 10px var(--ls-${color}) ${insetTrue};
    }
    100% {
      ${type}-shadow: 0 0 8px var(--ls-${color}) ${insetTrue};
    }
  `;
};

export default glowEffect;
