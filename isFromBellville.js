function isFromBellville(registrationNumber) {
    return registrationNumber.startsWith('CY');
  }

  describe('test the isFromBellville function', function() {
      it('isFromBellville', function () {
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);
        
      });
  });