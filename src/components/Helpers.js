export function checkWin(correct, wrong, word) {
    let status = 'win';
    // Checking for win
    word
      .split("")
      .filter((letter) => letter.trim() !== "")
      .forEach((letter) => {
        if (!correct.includes(letter)) {
          status = "";
        }
      });
    // Checking for lose
    if (wrong.length === 7) status = 'lose';
    return status
}
