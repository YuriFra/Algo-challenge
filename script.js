let checkPalin = function (string) {
    if (string === string.split("").reverse().join("")) {
       console.log(string + ' is palindrome');
    } else {
        console.log(string + ' is not a palindrome');
    }
}
checkPalin("abba");
checkPalin("1redder2");

let array = [];
let checkLongest = function (string) {
    for (let i = 0; i < string.length; i++) {
        for (let j = i + 1; j < string.length; j++) {
            if (string[i] === string[j]) {
                let fullString = string.slice(i, j + 1);
                let stringReverse = fullString.split('').reverse().join('');
                    if (fullString === stringReverse) {
                        array.push(fullString);
                    }
                }
            }
        }
        console.log(array);
    let longest = array.reduce(function (a, b) { return a.length > b.length ? a : b; });
    console.log(longest);
}

checkLongest("1redder2");
checkLongest("redderrotavatorabba");
checkLongest("redderrotavatorabbadeleveledreleveler");
checkLongest("liveontimeemitnoevilsexesredderrotavatorpullupifipullupabbadeleveledrelevelerdetartratedamanaplanacanalpanamasumsarenotsetasatestonerasmus");







