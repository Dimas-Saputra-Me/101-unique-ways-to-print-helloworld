import { readdirSync } from "fs";
import { join } from "path";
import { exec } from "child_process";

// TODO: Create a menu to choose programming language
// Choose random programming language
const languages = ["c", "c++", "go", "java", "javascript", "php", "python"];
let index = Math.round(Math.random() * (languages.length - 1 - 0) + 0);
const language = languages[index];
console.log(language)
let PATH = `./${language}/`;

// Make sure that the key corresponds to the file extension.
const METHODS = {
  c: "gcc",
  cpp: "g++",
  js: "node",
  go: "go run",
  java: "javac",
  php: "php",
  python: "python",
};

// Choose a random file inside programming language path
const dirs = readdirSync(join(process.cwd(), PATH));
index = Math.round(Math.random() * (dirs.length - 1 - 0) + 0);
let extension = dirs[index].split(".").pop();
PATH += dirs[index];

exec(`${METHODS[extension]} ${PATH}`, (error, stdout, stderr) => {
  if (error) {
    throw Error(error);
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(stdout);
});
