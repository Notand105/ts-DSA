let array : number[] = [1,2,3,4,5,6,7,12,12,43,1234,12311]
function binary_search(arr:number[], target:number, left:number, right:number):number|null{

    if (!arr) return null
    if (left > right) return null

    const middle : number = Math.floor((left + right) / 2)

    if (arr[middle] > target) return binary_search(arr, target, left, middle-1)
    if (arr[middle] < target) return binary_search(arr, target, middle + 1, right)

    return middle 
}
function Search(arr:number[], target:number){
    let res : number | null = binary_search(arr, target,0, arr.length - 1)
    res != null ? console.log("index: "+ res) : console.log("doesnt exist in the array")
}

Search(array, 1)
Search(array, 12)
Search(array, 6)
Search(array, -90)