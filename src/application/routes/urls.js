const DIVIDER = '/';

const join = (...sections) => `${DIVIDER}${sections.join(DIVIDER)}`;

// eslint-disable-next-line import/prefer-default-export
export const root = () => join();
