const os = require('os');
const { arch, platform, freemem, totalmem } = os;

setInterval(() => {
  const totalram = parseInt(totalmem() / 1024 / 1024);
  const freeram = parseInt(freemem() / 1024 / 1024);
  const usageram = parseInt(totalram - freeram);
  const usage = parseInt((usageram * 100) / totalram);

  const status = {
    os: platform(),
    archs: arch(),
    totalMem: `${totalram} MB`,
    freeMem: `${freeram} MB`,
    usageRam: `${usageram} MB`,
    usage: `${usage}%`,
  };

  console.clear();
  console.table(status);
  exports.status = status;
}, 1000);
