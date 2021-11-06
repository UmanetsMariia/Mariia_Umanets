function pairs(arr, n, sum)
{
    let count = 0; 
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            if (arr[i] + arr[j] == sum)
                count++;
 
    return count;
}
 
    arr = [ 1, 2, 3, 4, 5];
    n = arr.length;
    sum = 6;
    console.log("Number of pairs is "
        + pairs(arr, n, sum));
    sum=4;
    console.log("Number of pairs is "
        + pairs(arr, n, sum));
