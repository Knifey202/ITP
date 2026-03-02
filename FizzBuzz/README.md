#FizzBuzz Documentation Notes

So far I have tested the different code along messages with varying integers to try and develop a better understanding of how I could use each set of code. So far I have figured out how to count up to 100:

for (let i = 1; i < 101; i += 1) { 
  console.log(`${i}`);
}

That combined with a few other pieces of code allowed me to count up to to 100 (with the exception of it being only odd numbers) with Fizz and Buzz interchanged where they should be:

let count = 0;
for (let count = 1; count < 101; count += 1) { 
  console.log(`${count}`); {
if (count % 3 === 0) {
  console.log("Fizz");
  } else if (count % 5 === 0) {
    console.log("Buzz")
  } else if (count % 3 === 0 && count % 5 === 0) {
    console.log("FizzBuzz")
  }
  count++; }
}

The main issues so far are the only odd numbers thing, Fizz/Buzz not being where they should be, and there being no FizzBuzz at all... Plan going forward is to try shifting variables and editing functions until I get closer to the final goal. I found that when changing all but the first 'count' to 'i'...

let count = 0;
for (let i = 1; i < 101; i += 1) { 
  console.log(`${i}`); {
if (i % 3 === 0) {
  console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz")
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
  }
  count++; }
}

... the code counts up to 100 correctly while also placing a Fizz and Buzz right after where they are supposed to be. This is almost correct with the exception of no FizzBuzz and the Fizz/Buzz being placed after where they are supposed to be rather than replacing the number. After talking to Rachel I discovered the issue with FizzBuzz not showing up had to do with the order of true and flase functions. When rearraging the code to this...

let count = 0;
for (let i = 1; i < 101; i += 1) { 
  console.log(`${i}`); {
if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
} else if (i % 3 === 0) {
  console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz")
  }
  count++; }
}

I was able to get all the FizzBuzz and Fizz/Buzz where they should be but after the integer instead of replacing it. Rachel said this had to do with me ending in a 'count++' statement rather than some sort of else statement. I am confused but will troubleshoot with different code endings. Switching to an 'else' statement at the end or even an 'else {console.log(i)}' changed nothing... I feel like this has to do with the order of the chain of functions because this is a similar issue to when FizzBuzz wasn't showing up. YES, the solution was moving the 'console.log(`$i`)' to the end within a 'else' function.
