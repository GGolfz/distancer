const splitter = (sentence) => {
    let temp = sentence.trim().split('')
    let spaced_sentence = temp.join(' ')
    const special = [
        'ิ',
        'ี',
        'ึ',
        'ื',
        '็',
        'ั',
        'ุ',
        'ู',
        '์',
        'ํ',
        '่',
        '้',
        '๊',
        '๋',
        ' ',
    ]
    for (let i of special) {
        const regex = new RegExp(' ' + i,'g')
        spaced_sentence = spaced_sentence.replace(regex, i)
    }
    return spaced_sentence
}
exports.splitter = (sentence)=>{
    return splitter(sentence)
}
