const {
    filter,
    of,
    first,
    last,
    elementAt,
    skip,
    skipUntil,
    interval,
    timer,
} = require("rxjs");

const source$ = interval(1000);

source$.pipe().subscribe(console.log);
