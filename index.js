import { readdirSync } from "fs";
import { join } from "path";
import { exec } from "child_process";

let PATH = `./code/`;

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

const dirs = readdirSync(join(process.cwd(), PATH));
let index = Math.round(Math.random() * (dirs.length - 1 - 0) + 0);
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
