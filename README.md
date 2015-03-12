# base-to-base

Simple package to convert any number in any base to another base

## Instalation
`npm install base-to-base`

## Usage

    var baseToBase = require('base-to-base');

    // converting number 2 on decimal base to binary base
    var number = 2,
        currentBase = 10,
        toBase = 2;

    baseToBase(number, currentBase, toBase) // '0010'

    // number 2 on binary base to decimal base
    baseToBase('0010', 2, 10) // 10

    // number 2 on hex base to binary base
    baseToBase(2, 16, 2) // 10


## Author

Daniel <danielpaulino030@gmail.com>
