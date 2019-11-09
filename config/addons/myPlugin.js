class MyPlugin{
    apply(compiler) {
        compiler.hooks.done.tapAsync("MyPlugin", (stats, cb) => {
            const assetNames = [];
            for (let assetName in stats.compilation.assets) {
                assetNames.push(assetName);
            }
            console.log(assetNames.join("\n"));
            cb();
        });
        // compiler.hooks.compilation.tap("MyPlugin", (compilation, params) => {
        //     new MyFirstWebpackCompilationPlugin().apply(compilation);
        // });
    }
}

module.exports = MyPlugin;


 // in this option you cen Using environment variables in React
 // https://medium.com/@trekinbami/using-environment-variables-in-react-6b0a99d83cf5
 
// module.exports = (env) => {
//     // create a nice object from the env variable
//     const envKeys = Object.keys(env).reduce((prev, next) => {
//       prev[`process.env.${next}`] = JSON.stringify(env[next]);
//       return prev;
//     }, {});
  
//     return {
//       plugins: [
//         new webpack.DefinePlugin(envKeys)
//       ]
//     };
//   };