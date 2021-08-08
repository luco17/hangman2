export function winChecker(word, guesses, nWrong) {
    let status = "win";  
    
    word.forEach(ltr => {
      if (!guesses.has(ltr)) {
        status = ""; 
      }
    });
    
    if (nWrong === 6) status = "lose";

    return status;
  } 

export function gameReset() {
  window.location.reload();
}