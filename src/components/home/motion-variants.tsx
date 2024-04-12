export const container = {
  initial: {
    y: 24,
  },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.75,
      type: "spring",
    },
  },
  exit: {
    y: 24,
    transition: {
      staggerChildren: 0.1,
      type: "spring",
    },
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 24,
  },
};
