function reverse(str){
    // add whatever parameters you deem necessary - good luck!\
    str = 'awesome'.split("");
    let i = str.length-1;
    let arr = [];

    while(i >= 0) {
        arr.push(str[i]);
        i--;
    }
    str = arr.join("");
    console.log(str);

  }


function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

console.log(reverse('awesome'));

  
  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'