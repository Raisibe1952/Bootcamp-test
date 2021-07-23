function transportFee(shift) {
    if (shift==='morning') {
      return 'R20';
    } else {
      if (shift==='afternoon') {
        return 'R10';
      } else {
        if (shift==='nightshift') {
          return 'free';
        }
      }
    }
  }
  describe('test the transportFee function', function() {
    it('transportFee', function () {
        assert.equal(transportFee('morning'), 'R20');

        assert.equal(transportFee('afternoon'), 'R10');
        
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
        
      
    });
});