const greet = str => {
  str = str || 'my friend';

  const reg = RegExp('^[^a-z]*$');
  const regCheck = RegExp('^"');

  if (Array.isArray(str)) {
    str.map((e, ind) => {
      if (regCheck.test(e)) {
        str[ind] = e.slice(1, e.length - 1);
      } else if (e.includes(',')) {
        str.splice(ind, 1, ...e.split(', '));
      }
    });
    console.log('str:', str);

    const lowerCase = [],
      upperCase = [];
    let talk = '';
    let shout = '';

    for (let i of str) {
      if (reg.test(i)) {
        upperCase.push(i);
      } else {
        lowerCase.push(i);
      }
    }
    if (upperCase) {
      upperCase.forEach(el => (shout += ` AND HELLO ${el}!`));
    }

    if (lowerCase.length === 2) {
      talk += `, ${lowerCase[0]} and ${lowerCase[1]}.`;
    } else if (lowerCase.length > 2) {
      lowerCase.forEach((el, ind, array) => {
        if (ind === lowerCase.length - 1) {
          talk += `, and ${el}.`;
        } else {
          talk += `, ${el}`;
        }
      });
    }
    return `Hello${talk}${shout}`;
  }

  if (reg.test(str)) return `HELLO, ${str.toUpperCase()}!`;

  return `Hello, ${str}.`;
};

module.exports = {
  greet,
};

console.log(greet(['Bob', '"Charlie, Dianne"']));
