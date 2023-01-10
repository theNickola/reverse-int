module.exports = function reverse (n) {
    n=Math.abs(n);
    let num=n%10;
    n=Math.floor(n/10);
    while(n!=0)
        {
            num = num*10+n%10;
            n=Math.floor(n/10);
        }
    return num;
}
