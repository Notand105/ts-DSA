function bubble_sort(array : number[]) : number[]{
    for(let i = 0; i<array.length;i++){
        for(let j = 0; j<array.length;j++){
            if (array[j]>array[j+1]){
                [array[j],array[j+1]] = [array[j+1],array[j]]
            }
        }
    } 
    return array
}

let arr : number[] = [1,2,1,4,2,1,2,3,5,4,6,7,2,3,12,3,45,2,12,1]

console.log(bubble_sort(arr))