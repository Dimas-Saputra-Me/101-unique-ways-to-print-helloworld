import { readdir } from "fs";
import { join } from "path";
import { exec } from "child_process";

let PATH = `./code/`;

readdir(join(process.cwd(), PATH), (err, files) => {
    if (err) {
        console.log(`ERR: ${err}`);
        return;
    }

    let max = files.length - 1;
    let min = 0;

    let index = Math.round(Math.random() * (max - min) + min);
    let file = files[index];

    PATH += file;

    exec(`node ${PATH}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }

        console.log(stdout);
    });
});
