const { readFile, writeFile } = require("fs");
const date = new Date();

readFile("./files/opar.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    const first = result;
    readFile("./files/members.txt", "utf-8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        const second = result;
        const combinedContent = `here is our final: ${first}, ${second}, created on: ${date} `;
        writeFile("./files/ouma.txt", combinedContent, (err) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log("File 'ouma.txt' has been written successfully.");
        });
      }
    });
  }
});
