# Part 1
## Part 1a
1. "values added: 20"
2. "final result: 20"
3. "values added: 20"
4. error: result is not defined (out of scope)
5. error: cannot assign to a constant variable
6. error: cannot assign to a constant variable

## Part 1b
1. Prints 3 to console, because after looping i will have a value of 3 and var variables exist outside its declared scope
2. Prints 150 to console, because after looping discountedPrice will have a value of 150 (300 * 0.5) and var variables exist outside of its declared scope
3. Prints 150 to console, because after looping finalPrice will have a value of 150 (Math.round(300 * 0.5 * 100) / 100) and var variables exist outside of its declared scope
4. Returns \[50, 100, 150\]. It loops through and calculates the discounted and final price, then adds it to the list.
5. Prints 3. Let declares i in the same scope as console.log, and after looping i will have value of 3.
6. Will give an error, since let declares inside the for loop scope, so there will be a reference error.
7. Prints 150. Let was declared in the same scope as console.log and retains the last calculated value in the for loop
8. Returns \[50, 100, 150\]. Does the same thing as #4, since let only changes the scope and not the contents of the variable
9. Prints 3 to console for the same reason as #5
10. Prints 3 to console. length is set to 3 on line 4.
11. Returns \[50, 100, 150\]. Same reasoning as #4. Const only affects assignment and allows methods like push to be called.
12. 
    A. student.name
    B. student\["h b"\]
    C. student.greeting()
    D. student\["Favorite Teacher"\].name
    E. student.courseLoad\[0\]
13. 
    A. '32' : first arg is string, so + becomes string concatenation
    B. 1 : normal arithmetic since - needs integers so "3" becomes 3
    C. 3 : null maps to 0 so 3 + 0 = 3
    D. '3null' : + becomes string concat, and null maps to 'null'
    E. 4 : true maps to 1
    F. 0 : false and null both map to integer 0, and + is arithmetic +.
    G. '3undefined' : + becomes string concat, and undefined maps to 'undefined'
    H. NaN : undefined maps to NaN, so 3 - NaN becomes NaN
14. 
    A. true : '2' converts to integer 2, so 2 > 1 is true
    B. false : '2' lexigraphically comes after '12'
    C. true : '2' converts to 2, so 2 == 2 is true
    D. false : strict equality check sees that types are different and returns false immediately
    E. false : true converts to 1, so 1 == 2 is false
    F. true : Boolean(2) returns true since 2 > 0, so true === true is true
15. == is checks for equality and performs type conversions if necessary, while === returns false if types are different and checks for equality if they are the same.
17. \[2, 4, 6\]. modifyArray takes in array \[1,2,3\], then applies doSomething to each element, then adds the result (i.e. doubles the element passed in) to newArr. Then it returns newArr.
19. Prints '1', '3', '4', '2' to the console
