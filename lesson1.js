const { Observable } = require("rxjs");
const { map } = require("rxjs/operators");

// Lesson #1

const arr = [0, 5, 8, 5, 8, 9];

const observable = new Observable((subscriber) => {
    subscriber.next(arr);
});

const observer = {
    next: (value) => {
        console.log("next " + value);
    },
    error: (err) => {
        console.log("error " + err);
    },
    complete: () => {
        console.log("stream is complete");
    },
};

observable
    .pipe(
        map((arr) => {
            console.log("map 1");
            return arr.map((x) => x * 2);
        })
    )
    .subscribe(observer);

// Homework #1

const users = {
    data: [
        {
            gender: "male",
            age: 18,
        },
        {
            gender: "female",
            age: 14,
        },
        {
            gender: "male",
            age: 12,
        },
        {
            gender: "female",
            age: 10,
        },
        {
            gender: "male",
            age: 30,
        },
    ],
};

/* Filter by male and then return an average age */
