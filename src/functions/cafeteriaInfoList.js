const cafeteriaInfoList = [
  {
    id: 0,
    name: "아슐랭",
    pictureName: "아슐랭.jpg",
    available: true,
    occupiedSeats: 80,
    totalSeats: 150,
    type: "collection",
    shops: [
      {
        id: 0,
        name: "감탄떡볶이",
        type: "shop",
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
        type: "shop",
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
        type: "shop",
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
        type: "shop",
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
        type: "shop",
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
    available: true,
    occupiedSeats: 70,
    totalSeats: 100,
    type: "random",
    price: 5500,
    cheapBreakfast: true,
    cheapBreakfastSold: 50,
    cheapBreakfastTotal: 200,
    menuofToday: [
      {
        id: 0,
        position: "breakfast",
        menu: ["매콤고추참치컵밥", "유부장국", "단무지", "배추김치"],
        ingredients: [
          "참치캔-가다랑어:베트남산",
          "밥/죽-쌀:국산",
          "배추김치:중국산",
        ],
      },
      {
        id: 1,
        position: "lunch",
        menu: ["가츠동", "우동국", "마카로니콘샐러드", "락교", "배추김치"],
        ingredients: ["돈가스-돈육:국산", "밥/죽-쌀:국산", "배추김치:중국산"],
      },
      {
        id: 2,
        position: "dinner",
        menu: [
          "고들빼기제육볶음",
          "근대된장국",
          "동부육무침",
          "오이장아찌",
          "흑미밥",
          "배추김치",
        ],
        ingredients: ["돈육:국산", "밥/죽-쌀:국산", "배추김치:중국산"],
      },
    ],
  },
  {
    id: 2,
    name: "교직원식당",
    pictureName: "교직원식당.jpg",
    available: true,
    occupiedSeats: 50,
    totalSeats: 130,
    type: "random",
    price: 6000,
    cheapBreakfast: false,
    menuofToday: [
      {
        id: 0,
        position: "lunch",
        menu: ["가츠동", "우동국", "마카로니콘샐러드", "락교", "배추김치"],
        ingredients: ["돈가스-돈육:국산", "밥/죽-쌀:국산", "배추김치:중국산"],
      },
      {
        id: 1,
        position: "dinner",
        menu: [
          "고들빼기제육볶음",
          "근대된장국",
          "동부육무침",
          "오이장아찌",
          "흑미밥",
          "배추김치",
        ],
        ingredients: ["돈육:국산", "밥/죽-쌀:국산", "배추김치:중국산"],
      },
    ],
  },
  {
    id: 3,
    name: "다산관매점",
    pictureName: "ajou.png",
    available: true,
    occupiedSeats: 40,
    totalSeats: 70,
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
    pictureName: "팔달관매점.jpg",
    available: true,
    occupiedSeats: 40,
    totalSeats: 70,
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
    available: false,
    occupiedSeats: 0,
    totalSeats: 50,
    type: "restaurant",
    menu: [
      {
        id: 0,
        name: "김치찌개",
        ingredients: ["김치", "두부", "고추장", "물", "돼지고기"],
        price: 9000,
      },
      {
        id: 1,
        name: "치즈불닭",
        ingredients: ["치즈", "닭고기", "물", "고추장"],
        price: 8000,
      },
    ],
  },
  {
    id: 6,
    name: "송재관식당",
    pictureName: "ajou.png",
    available: true,
    occupiedSeats: 40,
    totalSeats: 70,
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
