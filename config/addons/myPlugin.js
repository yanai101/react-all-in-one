class MyPlugin{
    apply(compiler){
        compiler.plugin('emit',(compiler ,callback)  =>{
            console.log('You can put here sny plugin...');
            callback();
        });
    }
}

module.exports = MyPlugin;