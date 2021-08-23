// This app allows users to create a file by typing
// the filename in the terminal

// load 'fs' and 'readline' modules;
// 'fs' module lets users create file,
// 'readline' lets users input filename
const fs = require('fs');
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const createFile = () => {
  rl.question('Write a filename: ', function(filename) {
    if (!fs.existsSync(filename)) {
      fs.writeFile(filename, "You are awesome", function() {
        console.log(`You have successfully created file ${filename}`);
        rl.close();
      })
    } else {
      console.log(`The file ${filename} already exists. Please try different name.`);
      createFile();
    }
  })
}
createFile();