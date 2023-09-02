"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergesort = void 0;
function mergesort(arr) {
    //Tamaño menor igual a 1 esta ordenado
    if (arr.length <= 1) {
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    //corremos de manera recursiva mergesort en cada lado de la aplicacion
    return merge(mergesort(arr.slice(0, middle)), mergesort(arr.slice(middle)));
}
exports.mergesort = mergesort;
function merge(left, right) {
    let merged_array = [];
    let i = 0;
    let j = 0;
    /*se sabe que cada uno de los lados izquierda y derecha estan ordenados
    se recorren ambos arreglos agregando los menores, una vez se acabe alguno de los 2 arreglos
    se agregan todos los que quedaron del otro
    */
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            merged_array.push(left[i++]);
        }
        else {
            merged_array.push(right[j++]);
        }
    }
    return merged_array.concat(left.slice(i)).concat(right.slice(j));
}
