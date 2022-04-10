"use strict";
var expect = chai.expect;

function sum(x,y) {
    return x+y;
}
let sumCounter=0
function suma(input) {
    if(parseInt(input))sumCounter+=parseInt(input);
    return sumCounter
}
function cyfry(input){
    return input.length-litery(input)
}
function litery(input){
    let temp;
    temp=input.replace(new RegExp("\\d", "g"), "");
    return temp.length;
}
describe('The sum() function', function() {
    it('Returns 100 for 100', function() {
        expect(suma("100")).to.equal(100);
    });
    it('Returns 300 for 200aa100', function() {
        expect(suma("200aa100")).to.equal(300);
    });
    it('Returns 300 for aa', function() {
        expect(suma("aa")).to.equal(300);
    });
    it('Returns 300 for ', function() {
        expect(suma("")).to.equal(300);
    });
    it('Returns 300 for aa100', function() {
        expect(suma("aa100")).to.equal(300);
    });


    it('Returns 3 for 100', function() {
        expect(cyfry("100")).to.equal(3);
    });
    it('Returns 6 for 200aa100', function() {
        expect(cyfry("200aa100")).to.equal(6);
    });
    it('Returns 0 for aa', function() {
        expect(cyfry("aa")).to.equal(0);
    });
    it('Returns 0 for ', function() {
        expect(cyfry("")).to.equal(0);
    });
    it('Returns 3 for aa100', function() {
        expect(cyfry("aa100")).to.equal(3);
    });


    it('Returns 0 for 100', function() {
        expect(litery("100")).to.equal(0);
    });
    it('Returns 2 for 200aa100', function() {
        expect(litery("200aa100")).to.equal(2);
    });
    it('Returns 2 for aa', function() {
        expect(litery("aa")).to.equal(2);
    });
    it('Returns 0 for ', function() {
        expect(litery("")).to.equal(0);
    });
    it('Returns 2 for aa100', function() {
        expect(litery("aa100")).to.equal(2);
    });
});

let input=prompt('Write value')
while(true){
    if(input===null)break
    console.log(input)
    console.log(cyfry(input)+" "+litery(input)+" "+suma(input))
    input=prompt('Write value')
}