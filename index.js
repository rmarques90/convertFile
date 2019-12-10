const fs = require('fs');

const fileNames = [
    "Account.csv", "Opportunity.csv", "Task.csv"
    , "Pricebook2.csv", "Product2.csv", "PricebookEntry.csv", "OpportunityLineItem.csv", "Contact.csv", "Lead.csv"
];

//argv 0 eh o node, argv 1 eh o nome do js, 2 em diante sao os argumentos
if (!process.argv[2]) {
    console.error("The src folder is not specified");
    process.exit(1);
}

let srcFolder = process.argv[2];
if (srcFolder.charAt(srcFolder.length - 1) !== '/') {
    srcFolder += '/';
}
console.log(`Selected src folder: ${srcFolder}`);

if (!process.argv[3]) {
    console.error("The dst folder is not specified");
    process.exit(1);
}

let dstFolder = process.argv[3];
if (dstFolder.charAt(dstFolder.length - 1) !== '/') {
    dstFolder += '/';
}
console.log(`Selected dst folder: ${dstFolder}`);

for (let i = 0; i < fileNames.length; i++) {

    try {
        //lendo arquivo de ISO para UTF-8
        let contents = fs.readFileSync(srcFolder + fileNames[i], 'binary');
        fs.writeFileSync(dstFolder + fileNames[i], contents);
    } catch (e) {
        console.error("Error reading/writing file", e);
    }
}
