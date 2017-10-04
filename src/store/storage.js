const STORAGE_KEY = 'persistedState';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (serializedState !== null) {
      const persistedState = JSON.parse(serializedState);
      if (persistedState !== null) {
        return persistedState;
      }
    }
  } catch (error) {
    return;
  }
};

const saveState = (state) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

const clearState = () => {
  localStorage.removeItem(STORAGE_KEY);
};
