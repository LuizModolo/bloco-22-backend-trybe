function testThree (param1, param2, param3) {
  return new Promise((resolve, reject) => {
    if (typeof param1 !== 'number' || typeof param2 !== 'number' || typeof param3 !== 'number') {
      return reject(new Error("Informe apenas números"));
    }

    const result = ((param1 + param2) * param3);

    if (result < 50) return reject(new Error("Valor muito baixo"));

    resolve(result)
  })
}

const randonNumber = () => {
  return Math.floor(Math.random() * 10 + 1);
}

async function callTestThree() {
  try {
    const result = await testThree(randonNumber(), randonNumber(), randonNumber())
    console.log(result)
  } catch (e) {
    console.error(e.message)
  }
}

callTestThree()
