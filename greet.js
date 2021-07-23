function greet(Name) {
    return 'Hello, ' + Name;
}

describe('test the greet function', function() {
    it('greet', function() {
        assert.equal(greet('Bob'), 'Hello, Bob');
        assert.equal(greet('Sam'), 'Hello, Sam');
    });
});