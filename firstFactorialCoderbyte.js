/*This version was done by Herve
Share yours too*/


function FirstFactorial(num) {

    /* TO DO LIST
    1. Check condition for all scenarios where it is not advised
    2. If condition to iterate through the formula
    3. 
    */

    if (num === 1) {
        return "1";
    }

    if (num < 1) {
        return "Sorry only values greater than " + pivot + " are accepted";
    }

    if (num > 1 && num < 19) {
        return (num * FirstFactorial(num - 1));
    }
    else {
        return "Only digits between 1 and 19 are accepted! Please try using as advised";
    }


    return num;




}

// keep this function call here 
FirstFactorial(readline());





