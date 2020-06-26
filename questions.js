/*process.stdin
process.stdout.write("Hello ")
process.stdout.write("World \n\n\ ");*/

const quest = [
    "What your name",
    "What would you rather be doing?",
    "What is your preffered programming language?"


]
const ask = (i=0) => {
    process.stdout.write(`\n\n\ ${quest[i]}`);
    process.stdout.write(` > `);
};


ask();
const answers = [];

process.stdin.on('data', data => {
    answers.push(data.toString().trim());

    if (answers.length < quest.length) {
        ask(answers.length)
    }
    else {
        process.exit();
    }
});

process.on('exit', () => {
    const [name, activity, lang] = answers;
    console.log(`
        Thank you for your answers.

        Go ${activity} ${name} you can write ${lang} later.
    
    `);
});