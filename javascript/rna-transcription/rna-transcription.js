var DnaTranscriber = function () { };

DnaTranscriber.prototype.toRna = function (str) {
    return str.split('').reduce((acc, cur) => {

        if (cur == 'C') acc += 'G';
        else if (cur == 'G') acc += 'C';
        else if (cur == 'A') acc += 'U';
        else if (cur == 'T') acc += 'A';
        else throw new Error('Invalid input');

        return acc;
    }, '');
};

module.exports = DnaTranscriber;