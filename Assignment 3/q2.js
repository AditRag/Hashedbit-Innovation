// Q2) let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.

let str = "I love my India";

let out_str;

for (let i = 0; i < str.length; i++) {
  console.log("1");

  if (str[i] === " ") {
    console.log("2");
    // out_str = out_str + " ";
    console.log("3");
    let j = i + 1;
    let word = " ";

    while (str.charAt(j) !== " " && j < str.length) {
      word = word + str[j];
      j++;
    }

    i = j - 1;
    console.log("5");

    out_str = word + " " + out_str;
    console.log("6");
    console.log(out_str);
  } else {
    out_str = str[i];
    console.log(out_str);
  }
  console.log("7");
}
