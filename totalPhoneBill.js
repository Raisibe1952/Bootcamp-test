function totalPhoneBill(phone){
 let sms = 0.65;
 let call = 2.75;
 let total = 0;
 var divide = phone.split(',').map(str=>str.trim());
 
 for(let i=0;i<divide.length;i++){
   if(divide[i]=='call') total+=call;
   else if (divide[i]=='sms') total+=sms;
 }
 return "R"+total.toFixed(2).toString();
}



describe('test the totalPhoneBill function', function() {
    it('totalPhoneBill', function () {
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        assert.equal('R3.40', totalPhoneBill('call, sms'));
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
        
      
    });
});