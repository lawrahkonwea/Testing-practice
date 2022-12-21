function stringLength(string) {
    if (string.length > 0 && string.length < 10) {
        return true;
        // }else
        // {
        //     return ("There is an error");
    }
}

function reverseString(string) {
    return string.split("").reverse().join("");
}

function capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


module.exports.stringLength = stringLength;
module.exports.reverseString = reverseString;
module.exports.capitalizeString = capitalizeString;