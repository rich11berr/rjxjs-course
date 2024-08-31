const {
    take,
    Subject,
    BehaviorSubject,
    AsyncSubject,
    ReplaySubject,
    range,
} = require("rxjs");

const source$ = range(1, 5);

source$.subscribe(console.log);
