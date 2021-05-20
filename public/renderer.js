let { remote } = require("electron");
// console.log(process.versions.electron);

const { PosPrinter } = remote.require("electron-pos-printer");
const path = require("path");

let webContents = remote.getCurrentWebContents();
let printers = webContents.getPrinters(); //list the printers
console.log(printers);

let data = [
  {
    type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
    value: `<h1 style="color: blue" >Bottom drug</h1>`,
    style: `text-align:center`,
    css: { "font-size": "32px" },
  },
];

function print() {
  const options = {
    preview: true, // Preview in window or print
    width: "250px", //  width of content body
    margin: "0 0 0 0", // margin of content body
    copies: 1, // Number of copies to print
    printerName: "Fax", // printerName: string, check it at webContent.getPrinters()
    timeOutPerLine: 400,
    silent: true,
  };

  PosPrinter.print(data, options)
    .then(() => {})
    .catch((error) => {
      console.error(error);
    });
}
// eslint-disable-next-line no-restricted-globals
document.getElementById("checkout").addEventListener("click", () => {
  print();
});
