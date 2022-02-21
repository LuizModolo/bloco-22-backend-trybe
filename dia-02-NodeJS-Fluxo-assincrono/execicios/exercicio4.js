const fs = require('fs').promises;

// parte 1

async function main() {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8')
      const dataArray = JSON.parse(data);
      dataArray.map((caract) => {
        console.log(`${caract.id} - ${caract.name}`)
      })
  } catch (e) {
    console.log(e.message)
  }
}

main();

// parte 2

async function mainTwo(id) {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8')
      const dataArray = JSON.parse(data);
      const findCaracter = dataArray.find((caract) => {
        return +caract.id === id;
      })
      if (!findCaracter) throw new Error('id não encontrado');
      console.log(`${findCaracter.id} - ${findCaracter.name}`)
  } catch (e) {
    console.log(e.message)
  }
}

mainTwo(4);
