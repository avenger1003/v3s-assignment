// Write a javascript code to check if sum of two numbers in a given array is zero.
// For example, if array is [3,2,6,-4,7,-6], this should return 1 (since sum of 6 and -6 is zero)
// If array is [2,4,-6], this should return 0(since sum of any two numbers is not zero)

/**
 * Function to check if sum of two numbers in a given array is zero
 * 
 * @param  [] Passing default array
 * @return {String}
 */
function countZeroSum(param=[3,2,6,-4,7,-6]) {
    let zeroCount = 0;
    let paramLength =  param.length;
    for(let i=0; i<param.length; i++) {
        for( let j=0; j<param.length; j++) {
            if(param[i] + param[j] === 0 & j+1 !== paramLength) {
                // console.log(j);
                zeroCount +=1;
            }
        }
    }
    return `Sum of two numbers zero count is: ${zeroCount}`; 
}