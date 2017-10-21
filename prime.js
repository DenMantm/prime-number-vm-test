

//set start point anywhere you want
var start = new Date(); 

console.log(isPrime(process.argv[2]));
//when done,
var end = new Date();

//to profile milliseconds, just do 
var duration = end - start;

console.log(duration);


function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}


function testPrime(num) {
        var isPrime = true;
        if (num >= 2) {
            if(num == 2 || num == 3){
               isPrime = true;
            }
            else if (num % 2 == 0) {
                isPrime = false;
            }
            else {
                for (i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
                    if (num % i == 0) {
                        isPrime = false;
                        break;
                    }
                }
            }
        }
        else {
            isPrime = false;
        }
        return isPrime;
    }