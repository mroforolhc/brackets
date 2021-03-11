module.exports = function check(str, bracketsConfig) {
  const stack = [];
  let isCorrect = true;

  str.split('').forEach((bracket) => {
    if (isCorrect) {
      bracketsConfig.forEach((array) => {
        // Если скобка открытая – в стек, если закрытая – достаём открытую из стека и проверяем
        if (bracket === array[0]) {
            if (array[0] === array[1] && bracket === stack[stack.length - 1]) stack.pop();
            else stack.push(bracket);
        }
        else if ((bracket === array[1]) && (stack.pop() !== array[0])) isCorrect = false;
      })
    }
  });

  if (isCorrect && !stack.length) return true;
  return false;
}
