const supertest = require('supertest');

const chai = require('chai');
const { expect } = require('chai');
chai.use(require('chai-json'));

const { getHtmlResponse, calculated, eval } = require('../script');

describe('Check json', () => {
    it('Is it json file', () => {
        expect('./json/test.json')
            .to.be.a.jsonObj()
            .and.contain.jsonWithProps({ x: 2, y: 2, operation: '+' });
    });
});

describe('Check eq', () => {
    it('Returns 4 for 2 + 2', () => {
        expect(eval('+',2, 2)).to.be.equal(4);
    });
    it('Returns 0 for 2 - 2', () => {
        expect(eval('-', 2, 2)).to.be.equal(0);
    });
    it('Returns 5 for 1 * 5', () => {
        expect(eval('*', 1, 5)).to.be.equal(5);
    });
    it('Returns 0 for 0 * 4', () => {
        expect(eval('*', 0, 4)).to.be.equal(0);
    });
    it('Returns Infinity for 10 / 2', () => {
        expect(eval('/', 10, 2)).to.be.equal(5);
    });
});

describe('Check HTML', () => {
    it('html for 4 + 7 =11 ', () => {
        const json = [{ operation: '+', x: 4, y: 7 }];
        expect(getHtmlResponse(json))
            .to.include('<table>')
            .and.to.include('<tr>')
            .and.to.include('<td>')
            .and.to.include('<th>')
            .and.to.include('11');
    });
    it('html for 3 * 6 = 18 ', () => {
        const json = [{ operation: '*', x: 3, y: 6 }];
        expect(getHtmlResponse(json))
            .to.include('<table>')
            .and.to.include('<tr>')
            .and.to.include('<td>')
            .and.to.include('<th>')
            .and.to.include('18');
    });
    it('html for 2 - -6 = 8 ', () => {
        const json = [{ operation: '-', x: 2, y: -6 }];
        expect(getHtmlResponse(json))
            .to.include('<table>')
            .and.to.include('<tr>')
            .and.to.include('<td>')
            .and.to.include('<th>')
            .and.to.include('8');
    });
    it('html for 5 / -1 = -5 ', () => {
        const json = [{ operation: '/', x: 5, y: -1 }];
        expect(getHtmlResponse(json))
            .to.include('<table>')
            .and.to.include('<tr>')
            .and.to.include('<td>')
            .and.to.include('<th>')
            .and.to.include('-5');
    });
});

const server1 = supertest.agent('http://localhost:3000');
const server2 = supertest.agent('http://localhost:4000');
const { x1, y1 } = require('../app1').test;
const { x2, y2 } = require('../app2').test;


describe('GET / app1', () => {
    it('respond with html', (done) => {
        server1
            .get('/')
            .expect('Content-Type', /html/)
            .expect(200)
            .end((_err, res) => {
                expect(res.text).to.include(`${x1} + ${y1} = ${x1 + y1}`);
                done();
            });
    });
});

describe('GET / app2', () => {
    it('respond with html', (done) => {
        server2
            .get('/')
            .expect('Content-Type', /html/)
            .expect(200)
            .end((_err, res) => {
                expect(res.text).to.include(`${x2} + ${y2} = ${x2 + y2}`);
                done();
            });
    });
});