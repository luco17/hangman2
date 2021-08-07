export function winChecker(word, guesses, nWrong) {
    let status = "You win";  
    
    word.forEach(ltr => {
      if (!guesses.has(ltr)) {
        status = ""; 
      }
    });
    
    if (nWrong === 6) status = "You lose!";

    return status;
  } 