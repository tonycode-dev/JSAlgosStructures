/* Rules of Big-O Notation

--Coefficient Rule : If f(n) is O(g(n)), then kf(n) is O(g(n)), for any constant k>0

--Sum Rule : If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)+g(n) is O(h(n)+p(n))

--Product Rule : If f(n)is O(h(n)) and g(n) is O(p(n)), then f(n)g(n) is O(h(n)p(n))

--Transitive Rule : If f(n) is O(g(n)) and g(n) is O(h(n)), then f(n) is O(h(n))

--Polynomial Rule : If f(n) is a polynomial of degree k, then f(n) is O(n**k)

--Log of a power Rule : log(nk) is O(log(n)) for any constant k>0
*/ 
 
function function1(n){  //Due to PR this is O(function1) = O(n**2)
    for(var i=0;i<n*1000;i++){  //Coefficient Rule
        for(var j=0;j<n*20;j++){    //Coefficient Rule + Product Rule i*j
            console.log(i+j);
        }
    }
}

function function2(n) { //Due to PR this is O(function2) = O(n**3)
    for (var i=0;i<n;i++){  
        for (var j=0;j<n;j++){  //Product Rule i*j
            for (var k=0;k<n;k++){  //Product Rule i*j*k
                for (var l=0;l<10;l++){ //Product Rule i*j*k -- this loop not depend of "n"
                    console.log(i+j+k+l)
                }
            }
        }
    }
}

function function3(n) { // O(function3) = O(1) 
    for (var i=0;i<1000;i++){ //The loop does not depend of input value "n", its a constant loop of 1000 iterations each time
        console.log("hi");
    }
}

function function4(n) { //Due to CR this is O(function4) = O(n)
    for (var i=0;i<n*10;i++){   // Coefficient Rule
        console.log(n);
    }
}

function function5(n){  //Logarithmic complexity O(function5) = O(log(n))
    for (var i=0;i<n;i*2){  //This loop step is incremented by 2 on each iteration
        console.log(n);
    }
}

function function6(n) { //Infinite loop
    while (true){
        console.log(n);
    }
}