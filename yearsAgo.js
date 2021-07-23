function yearsAgo(currentYear) {
    var year = new Date();
    return year.getFullYear() - currentYear;
  }
  describe('test the yearsAgo function', function() {
    it('yearsAgo', function () {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
      
    });
});