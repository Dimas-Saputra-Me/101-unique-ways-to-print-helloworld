import { readdirSync } from "fs";
import { join } from "path";
import { exec } from "child_process";

let PATH = `./code/`;

const dirs = readdirSync(join(process.cwd(),PATH))
let index = Math.round(Math.random() * (dirs.length-1 - 0) + 0);
PATH += dirs[index]

exec(`node ${PATH}`, (error, stdout, stderr) => {
    if (error) {
        throw Error(error)
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(stdout);
});