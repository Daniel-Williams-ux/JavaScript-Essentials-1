// Explain the difference between let, const, and var in JavaScript. Provide an example for each to illustrate how they work and their scope.

// var: Function-scoped or globally-scoped, can be re-declared and updated. It is subject to hoisting (accessible before declaration, but undefined).
function exampleVar() {
  if (true) {
    var name = 'Dan';
    console.log(name); // 'Dan'
  }
  console.log(name); // 'Dan'
}
exampleVar();

// let: Block-scoped, cannot be re-declared in the same scope, but can be updated. Not hoisted in the same way as var (cannot access before declaration).
function exampleLet() {
  if (true) {
    let name = 'Dan';
    console.log(name); // 'Dan'
  }
  // console.log(name); // ReferenceError: name is not defined
}
exampleLet();

// const: Block-scoped, cannot be re-declared or updated. The variable itself is immutable, but the contents of objects or arrays assigned to it can be changed.
function exampleConst() {
  const name = 'Dan';
  // name = 'Will'; // TypeError: Assignment to constant variable.
  console.log(name); // 'Dan'
}
exampleConst();
