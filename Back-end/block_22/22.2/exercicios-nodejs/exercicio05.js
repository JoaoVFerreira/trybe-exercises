 const fs = require('fs').promises;
 
 const arrayStrings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']

 async function fileToWrite() {

  const createFiles = arrayStrings.map((string, index) => {
     fs.writeFile(`./file${index + 1}.txt`, JSON.stringify(string))
   })

   await Promise.all(createFiles)

   const fileNames = ['file1.txt', 'file2.txt','file3.txt', 'file4.txt', 'file5.txt'];

   
   const fileContent = await Promise.all(fileNames.map((file) => {
    fs.readFile(file, 'utf-8')
   }))  

   const newFileContent = fileContent.join(' ');

   await fs.writeFile('./fileAll.txt', newFileContent)

 }

 fileToWrite()


