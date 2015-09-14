var chaine = "";
var  res;
var sep = ", ";
for (nb = 1; nb < 200; nb++) {
  res = nb;
  if (nb % 5 == 0) {
  	if (nb % 3 == 0) {
  		res = "FizzBuzz";
  	} else {
  		res = "Buzz";
  	}
  } else {
  	if (nb % 3 == 0) {
  		res = "Fizz";	
  	}
  }
  chaine = chaine + res + sep; 
  
};

console.log(chaine);
