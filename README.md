# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @seeratkaur/lotide`

**Require it:**

`const _ = require('@seeratkaur/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: A function for arrays to retrieve the first element from the array.
* `tail(array))`: A function to retrieve every element except the head (first element) of the array.
* `middle(array)`: A function to return an array with only the middle element(s) of the provided array.
* `countLetters(string)`: The function takes in a sentence (as a string) and then returns a count of each of the letters in that sentence.
* `countOnly(array, object)`: Given an array and an object, it will return an object containing counts of everything that the input object listed.
* `findKey(object, callback)`: A function which takes in an object and a callback. It scans the object and returns the first key for which the callback returns a truthy value. 
* `findKeyByValue(object, value)`: It will help us search for a key on an object where its value matches a given value.
* `flatten(array)`: Given an array with other arrays inside, this function can flatten it into a single-level array.
* `letterPositions(string)`: A function which returns all the indices (zero-based positions) in the string where each character is found.
* `map(array, callback)`: A function that takes an array and a callback function. It will return a new array based on the results of the callback function.
* `takeUntil(array, callback)`: The function returns a "slice of the array with elements taken from the beginning." It keeps going until the callback/predicate returns a truthy value.
* `without(array, itemsToRemove)`: This function takes in a source array and a itemsToRemove array. It returns a new array with  only those elements from source that are not present in the itemsToRemove array.
