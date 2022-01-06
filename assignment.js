const sayHello = (name) => {
  console.log('Hi ' + name);
};

const serus = (name, phrase) => {
  console.log(phrase + ' ' + name);
};

const seruss = () => {
  console.log('Hi hard-coded');
};
const serusss = (name) => {
  console.log('Hi ' + name);
};

sayHello('Radu');
serus('Radu', 'Hello')
seruss('Radu')
serusss('Radu')

const serus5 = (name, phrase = 'Serus') => {
  console.log(phrase + ' ' + name);
};

serus5('Radu')
serus5('Radu', 'sal')