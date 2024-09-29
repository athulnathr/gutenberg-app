
// Custom debounce function
const  debounce = (func: Function, delay: number) =>{
    let timeoutId: ReturnType<typeof setTimeout>;
  
    const debounced = (...args: any[]) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  
    debounced.cancel = () => {
      clearTimeout(timeoutId);
    };
  
    return debounced;
  }
  

export default debounce;