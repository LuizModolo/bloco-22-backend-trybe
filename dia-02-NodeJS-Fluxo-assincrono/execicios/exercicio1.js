function testOne (param1, param2, param3) {
  return new Promise((resolve, reject) => {
    if (typeof param1 !== 'number' || typeof param2 !== 'number' || typeof param3 !== 'number') {
      return reject(new Error("Informe apenas números"));
    }

    const result = ((param1 + param2) * param3);

    if (result < 50) return reject(new Error("Valor muito baixo"));

    resolve(result)
  })
}

testOne(3, 'teste', 5)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error.message))

testOne(3, 7, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error.message))

testOne(3, 7, 5)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error.message))