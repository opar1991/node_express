const os = require("os");
const path = require("path");

const systemInfo = () => {
  console.log(os.platform());
  console.log(os.userInfo());
  console.log(os.uptime());
  console.log(os.release());
};
systemInfo();
const filePath = path.join("files", "members.txt");
console.log(filePath);
const base = path.basename(filePath);
console.log(base);
const absolute = path.resolve(__dirname, "files", "members.txt");
console.log(absolute);
