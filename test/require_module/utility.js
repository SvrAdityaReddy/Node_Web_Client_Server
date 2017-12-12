console.log('This will be printed just once')

module.exports = function(numbers_to_sum) {
    let sum=0,
        i=0,
        l=numbers_to_sum.length;
    while (i<l) {
        sum=sum+numbers_to_sum[i]
        i=i+1
    }
    return sum
}