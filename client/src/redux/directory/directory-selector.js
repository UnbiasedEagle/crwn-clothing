import { createSelector } from 'reselect';

const getDirectory = (state) => state.directory;

export const sectionsSelector = createSelector([ getDirectory ], (directory) => directory.sections);
