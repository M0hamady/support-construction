import img1 from "assets/img/bootstrap.jpg";
import img2 from "assets/img/angular.jpg";
import img3 from "assets/img/bootstrap.jpg";
export const ordersData2 = [
  {
    id: 1,
    pic: img1,
    price: 35,
    order: "num 1",
    date: "2022:15:10 - 12:00",
    component: [
      { id: 1, name: "compo1", isready: true,count:1 },
      { id: 2, name: "compo2", isready: true,count:1 },
      { id: 3, name: "compo3", isready: true,count:1 },
      { id: 4, name: "compo4", isready: true,count:1 },
    ],
    description:
      "دة عبارة عن وصف بسيط لاوردر موجود فية شوية مكونات والتسعيرة ومكان التسليم  وطبعا لكل واحد فيهم وصف خاص بيه",
  },
  {
    id: 2,
    pic: img2,
    price: 35,
    order: "num 2",
    date: "2022:15:10 - 12:00",
    component: [
      { id: 1, name: "compo1", isready: true,count:1 },
      { id: 2, name: "compo2", isready: false ,count:1 },
      { id: 3, name: "compo2", isready: false ,count:1},
      { id: 4, name: "compo2", isready: false ,count:1},
      { id: 5, name: "compo3", isready: false ,count:1},
    ],
    description:
      "دة عبارة عن وصف بسيط لاوردر موجود فية شوية مكونات والتسعيرة ومكان التسليم  وطبعا لكل واحد فيهم وصف خاص بيه",
  },
  {
    id: 3,
    pic: img3,
    price: 35,
    order: "num 3",
    date: "2022:15:10 - 12:00",
    component: [
      { id: 1, name: "compo1", isready: true ,count:1},
      { id: 2, name: "compo2", isready: true ,count:1},
      { id: 3, name: "compo2", isready: true ,count:1},
      { id: 4, name: "compo3", isready: true ,count:1},
      { id: 5, name: "compo3", isready: true ,count:1},
      { id: 5, name: "compo3", isready: true ,count:1},
      { id: 5, name: "compo3", isready: false,count:1 },
      { id: 5, name: "compo3", isready: true ,count:1},
    ],
    description:
      "دة عبارة عن وصف بسيط لاوردر موجود فية شوية مكونات والتسعيرة ومكان التسليم  وطبعا لكل واحد فيهم وصف خاص بيه",
  },
  {
    id: 4,
    pic: "",
    order: "num 4",
    date: "2022:15:10 - 12:00",
    component: [
      { id: 1, name: "compo1", isready: true, count :1 },
      { id: 2, name: "compo2", isready: true, count :1 },
      { id: 3, name: "compo3", isready: true, count :1 },
    ],
    description:
      "دة عبارة عن وصف بسيط لاوردر موجود فية شوية مكونات والتسعيرة ومكان التسليم  وطبعا لكل واحد فيهم وصف خاص بيه",
  },
  {
    id: 5,
    pic: "",
    order: "num 5",
    date: "2022:15:10 - 12:00",
    component: [
      { id: 1, name: "compo1", isready: true, count :1 },
      { id: 2, name: "compo2", isready: true, count :1 },
      { id: 3, name: "compo3", isready: true, count :1 },
    ],
    description:
      "دة عبارة عن وصف بسيط لاوردر موجود فية شوية مكونات والتسعيرة ومكان التسليم  وطبعا لكل واحد فيهم وصف خاص بيه",
  },
  {
    id: 6,
    pic: "",
    order: "num 6",
    date: "2022:15:10 - 12:00",
    component: [
      { id: 1, name: "compo1", isready: true, count :1 },
      { id: 2, name: "compo2", isready: true, count :1 },
      { id: 3, name: "compo3", isready: true, count :1 },
    ],
    description:
      "دة عبارة عن وصف بسيط لاوردر موجود فية شوية مكونات والتسعيرة ومكان التسليم  وطبعا لكل واحد فيهم وصف خاص بيه",
  },
  {
    id: 7,
    pic: "",
    order: "num 7",
    date: "2022:15:10 - 12:00",
    component: [
      { id: 2, name: "compo2", isready: true ,count:1},
      { id: 1, name: "compo1", isready: true ,count:1},
      { id: 3, name: "compo3", isready: false,count:1 },
    ],
    description:
      "دة عبارة عن وصف بسيط لاوردر موجود فية شوية مكونات والتسعيرة ومكان التسليم  وطبعا لكل واحد فيهم وصف خاص بيه",
  },
  {
    id: 8,
    pic: "",
    order: "num 8",
    date: "2022:15:10 - 12:00",
    component: [
      { id: 1, name: "compo1", isready: false,count:1 },
      { id: 2, name: "compo2", isready: true ,count:1},
      { id: 3, name: "compo3", isready: true ,count:1},
    ],
    description:
      "دة عبارة عن وصف بسيط لاوردر موجود فية شوية مكونات والتسعيرة ومكان التسليم  وطبعا لكل واحد فيهم وصف خاص بيه",
  },
];

function finished_orders() {
  let arr = [];
  ordersData2.map((order) => {
    const x = order.component.filter((comp) => comp.isready === true);
    x.length == order.component.length ? arr.push(order) : null;
  });
  return arr;
}
export const ordersData = finished_orders();

function unfinished_orders() {
  let arr = [];
  ordersData2.map((order) => {
    const x = order.component.filter((comp) => comp.isready === true);
    x.length == order.component.length ? null : arr.push(order);
  });
  return arr;
}
export const ordersData3 = unfinished_orders();
let order_out = {};
export const Oreder_detail = (id) => {
  ordersData2.map((order) => {
    order.id == id ? (order_out = order) : null;
  });
  return order_out;
};
export const is_order_ready = (components) => {
  let all_work = 0;
  let isEqual = "pending";
  components.map((comp) => {
    comp.isready ? (all_work = all_work + 1) : null;
  });
  components.length == all_work ? (isEqual = "Done") : null;
  console.log(all_work,6666);
  return isEqual;
};
