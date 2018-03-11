const commonConfig = require('./webpack.common');
const webpackMeare = require('webpack-merge');


const addons = (addonsArg) => {
    let addons = []
        .concat.apply([],[addonsArg])  // normalize array of addons
        .filter(Boolean);              // if addon is undefined - filter it out

    return addons.map( addonName => require(`./addons/webpack.${addonName}.js`));
}

module.exports = (env) =>{

    const envType =  env ? env.env : 'dev';
    const envAddons =env && env.addons ? env.addons : null ;

    const envConfig = require(`./webpack.${envType}.js`);

    // console.log(webpackMeare(commonConfig,envConfig ,...addons(env.addons)) );

    return webpackMeare(commonConfig,envConfig ,...addons(envAddons)) ;
}