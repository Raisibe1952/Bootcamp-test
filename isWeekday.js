function isWeekday(param) {
    var saturday = false;
    var Monday = true;
    
    return param.startsWith('M');
  }
  describe('test the isWeekday function', function() {
    it('isWeekday', function () {
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Monday'), true);
      
    });
});