const cafeteriaInfoList = [
  {
    id: 0,
    name: "아슐랭",
    pictureName: "아슐랭.jpg",
    crowded: 3,
    type: "collection",
    cafeterias: [
      {
        id: 0,
        name: "감탄떡볶이",
        menu: [
          {
            id: 0,
            name: "국물떡볶이",
            ingredients: ["떡", "어묵", "고추장", "물"],
            price: 3000,
          },
        ],
      },
      {
        id: 1,
        name: "옥미관",
        menu: [
          {
            id: 0,
            name: "김치찌개",
            ingredients: ["김치", "두부", "고추장", "물"],
            price: 6000,
          },
        ],
      },
      {
        id: 2,
        name: "만권화밥",
        menu: [
          {
            id: 0,
            name: "직화소고기덮밥",
            ingredients: ["소고기", "밥", "양파", "간장"],
            price: 8000,
          },
        ],
      },
      {
        id: 3,
        name: "바겟버거",
        menu: [
          {
            id: 0,
            name: "아메리카노",
            ingredients: ["커피", "물"],
            price: 3000,
          },
        ],
      },
      {
        id: 4,
        name: "행복돈가스",
        menu: [
          {
            id: 0,
            name: "돈까스",
            ingredients: ["돼지고기", "빵가루", "계란"],
            price: 6000,
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "기숙사식당",
    pictureName: "기숙사식당.jpg",
    crowded: 3,
    type: "random",
    price: 5500,
    menuofToday: {
      id: 0,
      nameList: ["김치찌개", "밥", "김치"],
      ingredients: ["김치", "두부", "고추장", "물", "돼지고기"],
    },
  },
  {
    id: 2,
    name: "교직원식당",
    pictureName: "교직원식당.jpg",
    crowded: 2,
    type: "random",
    price: 6000,
    menuofToday: {
      id: 0,
      nameList: ["돈까스", "밥", "김치"],
      ingredients: ["김치", "물", "돼지고기"],
    },
  },
  {
    id: 3,
    name: "다산관매점",
    pictureName: "다산관매점.jpg",
    crowded: 1,
    type: "restaurant",
    menu: [
      {
        id: 0,
        name: "김치찌개",
        ingredients: ["김치", "두부", "고추장", "물", "돼지고기"],
        price: 3000,
      },
      {
        id: 1,
        name: "치즈불닭",
        ingredients: ["치즈", "닭고기", "물", "고추장"],
        price: 4000,
      },
    ],
  },
  {
    id: 4,
    name: "팔달관매점",
    pictureName: "ajou.png",
    crowded: 2,
    type: "restaurant",
    menu: [
      {
        id: 0,
        name: "김치찌개",
        ingredients: ["김치", "두부", "고추장", "물", "돼지고기"],
        price: 3000,
      },
      {
        id: 1,
        name: "치즈불닭",
        ingredients: ["치즈", "닭고기", "물", "고추장"],
        price: 4000,
      },
    ],
  },
  {
    id: 5,
    name: "연암관식당",
    pictureName: "연암관식당.png",
    crowded: 0,
    type: "restaurant",
    menu: [
      {
        id: 0,
        name: "김치찌개",
        ingredients: ["김치", "두부", "고추장", "물", "돼지고기"],
        price: 3000,
      },
      {
        id: 1,
        name: "치즈불닭",
        ingredients: ["치즈", "닭고기", "물", "고추장"],
        price: 4000,
      },
    ],
  },
  {
    id: 6,
    name: "송재관식당",
    pictureName: "ajou.png",
    crowded: 1,
    type: "restaurant",
    menu: [
      {
        id: 0,
        name: "김치찌개",
        ingredients: ["김치", "두부", "고추장", "물", "돼지고기"],
        price: 3000,
      },
      {
        id: 1,
        name: "치즈불닭",
        ingredients: ["치즈", "닭고기", "물", "고추장"],
        price: 4000,
      },
    ],
  },
];

export default cafeteriaInfoList;
