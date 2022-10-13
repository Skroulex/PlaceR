export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('myBasket');
    if (serializedState === null) {
      return undefined;
    }
    
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}; 

export const saveState = (state : object) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('myBasket', serializedState);
  } catch {
    // ignore write errors
  }
};