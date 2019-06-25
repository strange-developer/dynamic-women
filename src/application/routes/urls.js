const DIVIDER = '/';
const SEARCH_RESULTS = 'search';

const join = (...sections) => `${DIVIDER}${sections.join(DIVIDER)}`;

// eslint-disable-next-line import/prefer-default-export
export const root = () => join();
export const searchResults = () => join(SEARCH_RESULTS);
