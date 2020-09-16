/**
 * Place any initialization of this shared bundle in this function. That way, 
 * you can run:
 *
 * 		require('shared-bundle');
 *
 * in your dependent projects, before using this shared bundle and you will make
 * sure that this code is executed once.
 */
function init() {
    console.log('aaaaaaaaaaaaaaa');
}
function init2() {
    console.log("bbbbbbbbbbbbbbb");
}

export {
    init,
    init2
}