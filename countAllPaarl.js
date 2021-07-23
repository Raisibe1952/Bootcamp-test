function countAllPaarl(regNum){
    var reg=regNum.split(',').map(item=>item.trim());
    var list=0;
    for(var i=0;i<reg.length;i++){
      
      if(reg[i].includes('CJ')) list++;{
            }
    }                              
        return list;
    
   
  }
  
  describe('test the countAllPaarl function', function() {
    it('countAllPaarl', function () {
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));

        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
      
    });
});