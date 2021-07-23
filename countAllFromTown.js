function countAllFromTown (regNum,regS){
    var reg=regNum.split(',').map(item=>item.trim());;
    var count=0;
    for(var i=0;i<reg.length;i++){
      
      if(reg[i].startsWith(regS)) count++;{
       
            }
    }  
     return count; 
   
  }
  describe('test the countAllFromTown function', function() {
    it('countAllFromTown', function () {
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
//fromStellies should contains
assert.equal(fromStellies, 3)

var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
//fromStellies should contains
assert.equal(fromKuilsriver, 1)
      
    });
});  