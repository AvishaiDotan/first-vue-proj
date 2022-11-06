export const utils = {
    getCurrentSeason
}


function getCurrentSeason() {
    // It's plus one because January is index 0
    const now = new Date();
    const month = now.getMonth() + 1;
  
    if (month > 3 && month < 6) {
      return 'spring';
    }
  
    if (month > 6 && month < 9) {
      return 'summer';
    }
  
    if (month > 9 && month < 12) {
      return 'autumn';
    }
  
    if (month >= 1 && month < 3) {
      return 'winter';
    }
}