export const montagat = [
  {
    id: 1,
    name: "Villa",
    price: "25",
    discription: "Re-establishing the villa, finishing and furnishings",
    locat: "جرين بلازا لااسكندرية",
    shop: "shop",
    masoulDegree: "component_creator_1",
    qesm: "Decoration",
  },
  {
    id: 2,
    name: " Villa",
    price: "25",
    discription: "super lux finishing",
    locat: "جرين بلازا لااسكندرية",
    shop: "shop",
    masoulDegree: "component_creator_2",
    qesm: "Decoration",
  },
  {
    id: 3,
    name: "apartment",
    price: "25",
    discription: "primary finishing",
    locat: "جرين بلازا لااسكندرية",
    shop: "shop",
    masoulDegree: "component_creator_2",
    qesm: "Decoration",
  },
  {
    id: 4,
    name: "مشكل",
    price: "25",
    discription: "محم مح م سمةن ىت ىتى هة ةم مو مو ةخ نة هة هة هه",
    locat: "جرين بلازا لااسكندرية",
    shop: "shop",
    masoulDegree: "component_creator_3",
    qesm: "Constructions",
  },
  {
    id: 5,
    name: " جلاش",
    price: "25",
    discription: "محم مح م سمةن ىت ىتى هة ةم مو مو ةخ نة هة هة هه",
    locat: "جرين بلازا لااسكندرية",
    shop: "shop",
    masoulDegree: "component_creator_1",
    qesm: "Constructions",
  },
  {
    id: 6,
    name: " مدينة نصر",
    price: "25",
    discription: "محم مح م سمةن ىت ىتى هة ةم مو مو ةخ نة هة هة هه",
    locat: "جرين بلازا لااسكندرية",
    shop: "shop",
    masoulDegree: "component_creator_2",
    qesm: "Constructions",
  },
  {
    id: 7,
    name: " بسبوسة",
    price: "25",
    discription: "محم مح م سمةن ىت ىتى هة ةم مو مو ةخ نة هة هة هه",
    locat: "جرين بلازا لااسكندرية",
    shop: "shop",
    masoulDegree: "component_creator_2",
    qesm: "Constructions",
  },
  {
    id: 8,
    name: " هريسة",
    price: "25",
    discription: "محم مح م سمةن ىت ىتى هة ةم مو مو ةخ نة هة هة هه",
    locat: "جرين بلازا لااسكندرية",
    shop: "shop",
    masoulDegree: "component_creator_1",
    qesm: "Constructions",
  },
];
// to get eaxact montag
export const GetExactMontag = (id) => {
  let mont = montagat.map((montag) => {
    return montag.id === id ? montag : null;
  });
  // console.log(mont);
  return mont[id - 1];
};
export const url = "http://192.168.1.104";
