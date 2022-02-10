const fs = require('fs').promises

const stringArray = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']

const stringToFile = async () => {
  const strings = stringArray.map((str, i) => {
    fs.writeFile(`file${i + 1}.txt`, str)
  })

  return await Promise.all(strings)
}

// stringToFile()