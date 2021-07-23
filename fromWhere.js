function fromWhere(route) {
    switch(route) {
      case 'CY':
        return 'Bellville';
      case 'CJ':
        return 'Paarl';
      case 'CA':
        return 'Cape Town';
      case 'CC':
        return 'Some other place!';
                }
  }
  
  describe('test the fromWhere function', function() {
    it('fromWhere', function () {
        assert.equal(fromWhere('CY'), 'Bellville');
        assert.equal(fromWhere('CJ'), 'Paarl');
        assert.equal(fromWhere('CA'), 'Cape Town');
        assert.equal(fromWhere('CC'), 'Some other place!'); 
      
    });
}); 