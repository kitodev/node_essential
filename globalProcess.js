/*const [,,firstName, lastname] = process.argv;
console.log(`our name is  ${firstName} ${lastname}`);

console.log(process.pid);
console.log(process.version.node);

console.log(process.argv);
*/
const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
};

const greeting = grab("--greeting")
const user = grab("--user")

console.log(`${greeting} ${user} `);