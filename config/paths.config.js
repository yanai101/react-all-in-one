const path = require('path');

const outDir = "dist";
const projectPath = path.resolve(__dirname , '..');
const srcPath = path.join(projectPath, "src");


const config = {
    projectPath,
    srcPath,
    buildPath : path.join(projectPath, "dist"),
    appPath : path.join(srcPath, "app"),
    outDir
}

module.exports = config;