class Random{
    static nextDouble(low,high){
        let res=Math.random()*(high-low)+low;
        return res.toFixed(2);
    }
    static nextInt(low,high){
        low=Math.ceil(low);
        high=Math.floor(high);
        return Math.floor(Math.random()*(high-low))+low;
    }
    static nextElement(array){
        return array[Math.floor(Math.random()*array.length)];
    }
}
let arr=[1,"c",5,"g"];
console.log(Random.nextDouble(1,10));
console.log(Random.nextInt(1,10));
console.log(Random.nextElement(arr))