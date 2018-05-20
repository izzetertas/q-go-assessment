export const formatNumber = (num) => {

   let temp = String(num).split(''),
      result = [];

   for(let i=temp.length-1, i2=0; i>=0; i--, i2++) {
      if(i2> 2 && i2 % 3 === 0) {
         result.push(',');
      }

      result.push( temp[i] );
   }

   return result.reverse().join('');
}