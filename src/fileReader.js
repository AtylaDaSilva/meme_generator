export function readFileContents(file) {
    const fr = new FileReader();

    fr.onload = () => { 
        return fr.result;
    }

    if (file) { 
        fr.readAsText(file);
    }
}

export function saveFileContents(file) { //========== TO BE CONTINUED...
    const contents = readFileContents(file);
    var blob = new Blob([file], { type: "image/png" });

    console.log(blob);

    var FileSaver = require("file-saver");
    FileSaver.saveAs(blob, "file002.png");
}