const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallBack){
  if(numsLeft > 0){
    reader.question('Please enter a number', (res) => {
      let ans = parseInt(res);
      sum += ans;
      console.log(`Current sum is ${sum}`);
      numsLeft -= 1;
      addNumbers(sum, numsLeft, completionCallBack);
    });
  } else {
    completionCallBack(sum);
    reader.close();
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
