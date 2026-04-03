"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function textInFrame(stringArr) {
    let frameWidth = 0;
    // get max width of frame
    stringArr.forEach((word) => {
        if (word.length > frameWidth) {
            frameWidth = word.length;
        }
    });
    frameWidth = frameWidth + 4; // includes a space and asterix on each side of the word for total length
    // print content to console
    console.log("*".repeat(frameWidth));
    stringArr.forEach(word => {
        let diff = frameWidth - 4 - word.length;
        console.log("* " + word + " ".repeat(diff) + " *");
    });
    console.log("*".repeat(frameWidth));
}
let inputArray = ['this', 'text', 'should', 'be', 'in', 'frame'];
textInFrame(inputArray);
//# sourceMappingURL=practice.js.map