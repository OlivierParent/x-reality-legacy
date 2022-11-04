const CLOCK_SIZE = 2;

export const CLOCK = Object.freeze({
  HH: 12,
  MM: 60,
  SS: 60,
  HAND: {
    HH: {
      COLOR: 0xffffff,
      LENGTH: 0.5 * CLOCK_SIZE,
      WIDTH: 0.06 * CLOCK_SIZE,
    },
    MM: {
      COLOR: 0xffffff,
      LENGTH: 0.7 * CLOCK_SIZE,
      WIDTH: 0.04 * CLOCK_SIZE,
    },
    SS: {
      COLOR: 0xffcc66,
      LENGTH: 0.8 * CLOCK_SIZE,
      WIDTH: 0.02 * CLOCK_SIZE,
    },
    THICKNESS: 0.02 * CLOCK_SIZE,
  },
  MARK: {
    HH: {
      COLOR: 0xff0000,
      COLOR_FIRST: 0x0000ff,
      LENGTH: 0.1 * CLOCK_SIZE,
      WIDTH: 0.02 * CLOCK_SIZE,
    },
    MM: {
      COLOR: 0xffffff,
      LENGTH: 0.08 * CLOCK_SIZE,
      WIDTH: 0.01 * CLOCK_SIZE,
    },
    THICKNESS: 0.005 * CLOCK_SIZE,
    OFFSET: 0.05 * CLOCK_SIZE,
  },
  SIZE: CLOCK_SIZE,
});
