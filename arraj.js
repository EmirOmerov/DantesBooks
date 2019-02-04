var arr =[
    [19,22,32,43,45],
    [61,73,84,45,25],
    [95,10,28,13,67],
    [56,65,36,19,98],
    [76,60,48,17,62]
    ],razmak='';

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            razmak+=arr[i][j]+' ';
        }
        console.log(razmak);
        razmak='';
    }