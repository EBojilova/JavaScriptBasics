function coinsCounter(arr){

/*
    for(var i=0; i<arr.length; i++){
       arr[i]= arr[i].replace(/\s/g,':');
    }
*/
    var arr1=[];
    var coin='coin';
    var numbers=[];
    for(var i=0; i<arr.length; i++){
        if(arr[i].indexOf(coin)>-1){
            arr1.push(arr[i]);
        }
    }
    for(var i=0; i<arr1.length; i++){
        arr1[i]=arr1[i].split(' ');
        arr1[i][1]=Number(arr1[i][1]);
        if(arr1[i][1]%1===0) {
            numbers.push(arr1[i][1]);
        }
    }
var sum=0;
for(var i=0; i<numbers.length; i++){
    sum+=numbers[i];
}
    var gold=0;
    var silver=0;
    var bronze=0;
    gold=Math.floor(sum/100);
    silver= Math.floor((sum-gold*100)/10);
    bronze=(sum-gold*100-silver*10);

    console.log('gold : '+gold+'\n'+'silver : '+silver+'\n'+'bronze : '+bronze);


}


coinsCounter(['coin 1','coin 2', 'coin 5', 'coin 10', 'coin 20', 'coin 50', 'coin 100', 'coin 200', 'coin 500','cigars 1']);
coinsCounter(['coin one', 'coin two', 'coin five', 'coin ten', 'coin twenty', 'coin fifty', 'coin hundred', 'cigars 1']);
coinsCounter(['coin 1', 'coin two', 'coin 5', 'coin 10.50', 'coin 20', 'coin 50', 'coin hundred', 'cigars 1']);