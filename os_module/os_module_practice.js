const os = require("os");

const osModules = [
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

osModules.map((data) => console.log(`Showing by Using Map:> ${data}`));
