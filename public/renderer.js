/* eslint-disable no-restricted-globals */
const _ = require("lodash");
let { remote } = require("electron");

const { PosPrinter } = remote.require("electron-pos-printer");
// eslint-disable-next-line no-unused-vars
const path = require("path");

let webContents = remote.getCurrentWebContents();
let printers = webContents.getPrinters(); //list the printers

const listPrinters = (printers) => {
  let printersList = printers.map((printer) => {
    return ` <div
      style="
        display: flex;
        align-items: center;
        margin-bottom: 1.3rem;
        ";
      >
      <input type="radio" id="${printer.name}" name="printer" value="${printer.name}" style="margin-right: 1rem"  required />
      <label htmlFor="${printer.name}" style="font-size: 1.4rem">
      ${printer.name}
      </label>
      </div>`;
  });
  document
    .querySelector(".form-printers")
    .insertAdjacentHTML("beforeend", printersList);
};

const uxStuff = (order) => {
  let response = [];
  if (order.type === "A Table") {
    response[0] = ` 
      <h3 style="margin-bottom: 25px">Table: ${order.tableNumber}</h3>`;
    response[1] = `préparez-vous, votre commande est en cours de préparation`;
  } else if (order.type === "Livraison") {
    response[0] = `<h2 style="font-weight: 400">Address: ${order.address}</h2>
                   <h2 style="margin-bottom: 25px;font-weight: 400">Numero: ${order.phoneNumber}</h2>
                   `;
    response[1] = `Merci d'être franciscain. nous espérons que vous aimez la nourriture`;
  } else if (order.type === "Emporter") {
    response[0] = `<h2 style="font-weight: 400">Emporter</h2>`;
    response[1] = `Nous espérons que vous trouverez la nourriture délicieuse et chaude`;
  }
  return response;
};

const markupForChef = (order, printerItems) => {
  console.log(_.values(printerItems));

  let items = _.values(printerItems);
  const itemsMarkup = items
    .map((it) => {
      let suplumentsMarkup = _.values(it.supluments)
        .map((sup) => {
          console.log(_.values(it.supluments));
          return `<div
      style="
        width: 94%;
        display: flex;
        align-items: center;
        font-size: 12px;
        padding: 0 15px;
        margin: auto;
      "
    >
      <span
        style="margin-right: auto; margin-left: 10px; font-weight: 500; text-transform: capitalize"
        >${sup.name}</span
      >
    </div>`;
        })
        .join("");

      return `<div
    class="item"
    style="
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 10px;
    "
  >
    <div
      style="
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 14px;
        margin-bottom: 10px;">
      <span style="font-size: 12px; font-weight: 600">${it.quantity} ${it.size}</span>
      <span style="margin-right: auto; font-weight: 600; margin-left: 8px; text-transform: capitalize">${it.name}</span>
    </div>
    ${suplumentsMarkup}
  </div>`;
    })
    .join("");
  let retarder;
  if (order.retard) {
    retarder = `
              <h3 style="margin-bottom: 25px">Retard: ${order.retardTime}</h3>
     `;
  } else {
    retarder = "";
  }
  return `
  <div
    style="
    width: 302px;
    font-family: cursive;
    background-color: #fff;
    padding: 10px;
  "
  >
    <div
      class="header"
      style="
        height: 8%;
        padding: 0 3px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      "
    >
      <div
        style="
          width: 80px;
          height: 25px;
          max-height: 100%;
          background-color: rgb(104, 104, 104);
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          display: flex;
          border-radius: 5px;
          padding: 0 5px;
          align-items: center;
          justify-content: center;
        "
      >
        Francisco
      </div>
      <div
        style="
          width: 40px;
          height: 40px;
          background-color: rgb(104, 104, 104);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        "
      >
        ${order.number}
      </div>
      <div
        style="
          width: 90px;
          height: 100%;
          font-size: 10px;
          display: flex;
          flex-direction: column;
          font-weight: 600;
          align-items: flex-end;
          justify-content: space-around;
        "
      >
        <span style="width: 91px">${order.orderDate}</span>
        <span>${order.time}</span>
      </div>
    </div>
    
    <div class="info" style="text-align: center; font-size: 11px">
      ${retarder}
      ${uxStuff(order)[0]}
    </div>
  
    <div
      class="items"
      style="
        padding: 20px 10px 10px 10px;
        border-top: 4px solid rgb(104, 104, 104);
        border-bottom: 4px solid rgb(104, 104, 104);
      "
    >
     ${itemsMarkup}
    </div>
  </div>
`;
};

const mainMarkup = (order) => {
  const items = _.values(order.items);
  const itemsMarkup = items
    .map((it) => {
      let categpry = _.truncate(it.name.split("/")[0], {
        length: 4,
        omission: "",
      });
      let name =
        it.name.split("/")[1] > 10
          ? `${categpry} ${it.name.split("/")[0].split(" ")[1]} / ${
              it.name.split("/")[1].split(" ")[2]
            }...`
          : it.name;
      let suplumentsMarkup = _.values(it.supluments)
        .map((sup) => {
          let suplumentPrice;
          if (it.size === "L") suplumentPrice = sup.prices[0];
          if (it.size === "XL") suplumentPrice = sup.prices[1];
          if (it.size === "XXL") suplumentPrice = sup.prices[2];

          return `<div
      style="
        width: 94%;
        display: flex;
        align-items: center;
        font-size: 12px;
        padding: 0 15px;
        margin: auto;
      "
    >
      <span
        style="margin-right: auto; margin-left: 10px; font-weight: 500; text-transform: capitalize"
        >${sup.name}</span
      >
      <span>${suplumentPrice}.00 DA</span>
    </div>`;
        })
        .join("");

      return `  <div
    class="item"
    style="
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 10px;
    "
  >
    <div
      style="
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 14px;
        margin-bottom: 10px;">
      <span style="font-size: 12px; font-weight: 600">${it.quantity} ${
        it.size
      }</span>
      <span style="margin-right: auto; font-weight: 600; margin-left: 8px; text-transform: capitalize">${name}</span>
      <span>${it.price - it.suplumentsTotal}.00 DA</span>
    </div>
    ${suplumentsMarkup}
  </div>`;
    })
    .join("");

  let retarder;
  if (order.retard) {
    retarder = `
              <h3 style="margin-bottom: 25px">Retard: ${order.retardTime}</h3>
     `;
  } else {
    retarder = "";
  }

  return `
    <div
      style="
      width: 302px;
      font-family: cursive;
      background-color: #fff;
      padding: 10px;
    "
    >
    <div
      class="header"
      style="
        height: 8%;
        padding: 0 3px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      "
    >
      <div
        style="
          width: 80px;
          height: 25px;
          max-height: 100%;
          background-color: rgb(104, 104, 104);
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          display: flex;
          border-radius: 5px;
          padding: 0 5px;
          align-items: center;
          justify-content: center;
        "
      >
        Francisco
      </div>
      <div
        style="
          width: 40px;
          height: 40px;
          background-color: rgb(104, 104, 104);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        "
      >
        ${order.number}
      </div>
      <div
        style="
          width: 90px;
          height: 100%;
          font-size: 10px;
          display: flex;
          flex-direction: column;
          font-weight: 600;
          align-items: flex-end;
          justify-content: space-around;
        "
      >
        <span  style="width: 91px">${order.orderDate}</span>
        <span>${order.time}</span>
      </div>
    </div>
    <div
      class="ux"
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 13px;
      "
    >
      <div
        style="
          width: 100px;
          height: 100px;
          background-color: rgb(228, 228, 228);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 30px 0 5px 0;
          border-radius: 50%;
        "
      >
        <img src="./${order.type}.png" style="width: 60%" />
      </div>
      <h5 style="text-align: center; font-size: 13.5px; line-height: 1.8">
      ${uxStuff(order)[1]}
      </h5>
    </div>
    <div class="info" style="text-align: center; font-size: 11px">
      ${retarder}
      ${uxStuff(order)[0]}
    </div>
    <div
      class="total"
      style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 10px;
        border-top: 4px solid rgb(104, 104, 104);
      "
    >
      <span style="font-weight: 700; font-size: 15px;">Total</span>
      <span style="font-weight: 500; font-size: 15px;">${
        order.total
      }.00 DA</span>
    </div>
    <div
      class="items"
      style="
        padding: 20px 10px 10px 10px;
        border-top: 4px solid rgb(104, 104, 104);
        border-bottom: 4px solid rgb(104, 104, 104);
      "
    >
    ${itemsMarkup}
    </div>
    <h1 class="goodbye" style="text-align: center; font-size: 20px">
      Bon Appetite
    </h1>
    <h6
      class="copyright"
      style="text-align: center; font-size: 13px; font-weight: 500"
    >
      Made by
      <span style="font-style: italic; font-weight: 700"
        >Houdhaifa Lebbad</span
      >
    </h6>
    </div>
  `;
};

const print = () => {
  setTimeout(() => {
    let order = JSON.parse(localStorage.getItem("order"));

    let markup = mainMarkup(order);
    let data = [
      {
        type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: markup,
      },
    ];
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
      .then(() => {
        localStorage.setItem("order", undefined);
      })
      .catch((error) => {
        console.error(error);
      });
  }, 500);
};

const printForChef = (printer, items, order) => {
  setTimeout(() => {
    let markup = markupForChef(order, items);
    let data = [
      {
        type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: markup,
      },
    ];
    const options = {
      preview: true, // Preview in window or print
      width: "250px", //  width of content body
      margin: "0 0 0 0", // margin of content body
      copies: 1, // Number of copies to print
      printerName: printer, // printerName: string, check it at webContent.getPrinters()
      timeOutPerLine: 400,
      silent: true,
    };
    PosPrinter.print(data, options)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  }, 500);
};

window.addEventListener("popstate", () => {
  if (location.pathname === "/home") {
    setTimeout(() => {
      document.getElementById("checkout").addEventListener("click", () => {
        print();
        setTimeout(() => {
          let order = JSON.parse(localStorage.getItem("order"));

          const printers = _.groupBy(order.items, "printer");
          for (let printer in printers) {
            printForChef(printer, printers[printer], order);
          }
        }, 500);
      });
    }, 1000);
  } else if (location.pathname === "/new") {
    setTimeout(() => {
      if (document.querySelector(".form-printers") !== null) {
        listPrinters(printers);
      }
    }, 10);
  }
});
