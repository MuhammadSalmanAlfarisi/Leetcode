/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s.length == 0) return true

    let tpointer = 0
    let spointer = 0

    while (tpointer < t.length) {
        if (t.charAt(tpointer) == s.charAt(spointer)) {
            spointer++
            if (spointer == s.length) return true
        }
        tpointer++
    }
    return false
};