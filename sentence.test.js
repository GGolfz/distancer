const {splitter} = require('./app');
const testListEN = [
{
    sentence: "Hello World!",
    expect: "H e l l o  W o r l d !"
},
{
    sentence: "Computer Science",
    expect: "C o m p u t e r  S c i e n c e"
},
{
    sentence: "GGolfz",
    expect: "G G o l f z"
},
]
const testListTH = [
    {
        sentence: "สวัสดีวันจันทร์",
        expect: "ส วั ส ดี วั น จั น ท ร์"
    },
    {
        sentence: "ที่นี่ประเทศไทย",
        expect: "ที่ นี่ ป ร ะ เ ท ศ ไ ท ย"
    },
    {
        sentence: "ทำไมฉันต้องทำงานหนัก",
        expect: "ท ำ ไ ม ฉั น ต้ อ ง ท ำ ง า น ห นั ก"
    },
    ]
describe('English Sentence', () => {
    for(let test of testListEN){
        it(test.sentence, () => {
          expect(splitter(test.sentence)).toEqual(test.expect);
        });
    }
});
describe('Thai Sentence', () => {
    for(let test of testListTH){
        it(test.sentence, () => {
          expect(splitter(test.sentence)).toEqual(test.expect);
        });
    }
});