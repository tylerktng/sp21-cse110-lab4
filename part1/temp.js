function printNums() {
    console.log(1);
    console.log(function(){console.log(2)}, 0);
    console.log(4);
}

printNums();