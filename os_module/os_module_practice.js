const os = require("os");

const listOfVersions = [
  os.version(),
  os.hostname(),
  os.platform(),
  os.release(),
  os.homedir(),
  os.freemem(),
  os.machine(),
  os.totalmem(),
  os.uptime(),
  os.type(),
  os.arch(),
];

listOfVersions.map((data) => console.log(`Showing by Using Map:> ${data}`));
