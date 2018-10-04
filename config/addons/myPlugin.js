class MyPlugin{
    apply(compiler){
        compiler.plugin('emit',(compiler ,callback)  =>{
            console.log('You can put here sny plugin...');
            callback();
        });
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