const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums){
    if(x ==5) { 
        break // não age sobre um bloco IF
    }
    console.log(`${x} = ${nums[x]}`) // até o número '5'
}
/* 
0 = 1
1 = 2
2 = 3
3 = 4
4 = 5
*/



for(y in nums){
    if(y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`) // até o número '10', pula o índice '5'
} 
/*
0 = 1
1 = 2
2 = 3
3 = 4
4 = 5
6 = 7
7 = 8
8 = 9
9 = 10
*/

externo: for(a in nums){
    for(b in nums){
        if(a == 2 && b== 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
} 

console.log("Fim!")