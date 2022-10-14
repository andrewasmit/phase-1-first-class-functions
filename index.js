function receivesAFunction(cb){
    cb();
    return 'cb is the name of my call back function, which I have invoked in the previous line.';
}

function returnsANamedFunction(){
    return receivesAFunction;
}

function returnsAnAnonymousFunction(){
    return ()=>console.log('What\'s up?');
}