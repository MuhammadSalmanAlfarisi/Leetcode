/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    let i = 1;
        
    // check each strings
    while(i < strs.length){
        // using a method to see if each strings after the first index
        // is the same as the declared prefix
        if(!strs[i].startsWith(prefix)){
            // if not, slice the prefix by the last index
            prefix = prefix.slice(0, -1)
        }
        else{
            // if true, we get the current prefix, check the other strings
            i++
        }
    }
    
    return prefix
};