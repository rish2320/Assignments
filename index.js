orderData =
{ 'Below 500': 60,
'500-1000': 50, '1000-1500': 60, '1500-2000': 20, 'Above 2000': 60 };

let totalOrders = 0 ;

for(let type in orderData) {
    totalOrders += orderData[type];
}

console.log(totalOrders);

let countProportions = 0 ;

for(let type in orderData) {
    countProportions++;
}

console.log(countProportions);

let ans = [] ;
let id = 1 ;

for(let type in orderData) {
    let percent = (orderData[type] / totalOrders) * 100 ;
    ans.push({id : id , order : type , order_percentage : percent});
    id++;
}

console.log(ans);