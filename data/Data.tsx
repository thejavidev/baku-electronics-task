import { Cardtype, Categories, MenuType, Producs, Types, darkModeType } from "@/type/Type";
import { FaCaretDown,FaDesktop } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

export const category: Categories = [
  {
    id: 1,
    name: "telefon və qatcetlər",
    icon: "/navbar/phone.svg",
    submenu: [
      {
        name: "brendlər",
        categoryname: [
          {
            id: 1,
            name: "apple",
          },
          {
            id: 2,
            name: "huawei",
          },
          {
            id: 3,
            name: "samsung",
          },
          {
            id: 4,
            name: "realme",
          },
          {
            id: 5,
            name: "xiaomi",
          },
          {
            id: 6,
            name: "apple",
          },
          {
            id: 7,
            name: "infinix",
          },
          {
            id: 8,
            name: "motorola",
          },
          {
            id: 9,
            name: "tecno",
          },
          {
            id: 10,
            name: "tcl",
          },
          {
            id: 11,
            name: "nokia",
          },
          {
            id: 12,
            name: "opeplus",
          },
          {
            id: 13,
            name: "google",
          },
        ],
      },
      {
        name: "apple",
        categoryname: [
          {
            id: 1,
            name: "iPhone 14 Pro Max",
          },
          {
            id: 2,
            name: "iPhone 13 Pro Max",
          },
          {
            id: 3,
            name: "iPhone 11 Pro",
          },
          {
            id: 4,
            name: "Apple watch SE",
          },
        ],
      },
      {
        name: "Qadjetlər",
        categoryname: [
          {
            id: 1,
            name: "apple smart watch",
          },
          {
            id: 2,
            name: "xiaomi smart watch",
          },
          {
            id: 3,
            name: "blackwiev band r5 pink",
          },
          {
            id: 4,
            name: "redmi smart band 2",
          },
        ],
      },
      {
        name: "samsung",
        categoryname: [
          {
            id: 1,
            name: "galaxy a03",
          },
          {
            id: 2,
            name: "galaxy s23",
          },
          {
            id: 3,
            name: "galaxy watch",
          },
          {
            id: 4,
            name: "galaxy a51",
          },
          {
            id: 5,
            name: "galaxy s22",
          },
        ],
      },
      {
        name: "smart saatlar",
        categoryname: [
          {
            id: 1,
            name: "apple watch",
          },
          {
            id: 2,
            name: "samsung watch",
          },
          {
            id: 3,
            name: "huawei",
          },
          {
            id: 4,
            name: "canyon",
          },
          {
            id: 5,
            name: "xiaomi",
          },
          {
            id: 6,
            name: "google",
          },
        ],
      },
      {
        name: "xiaomi",
        categoryname: [
          {
            id: 1,
            name: "xiaomi little series",
          },
          {
            id: 2,
            name: "xiaomi 12 series",
          },
          {
            id: 3,
            name: "redmi note series",
          },
          {
            id: 4,
            name: "redmi series",
          },
          {
            id: 5,
            name: "redmi note 12",
          },
          {
            id: 6,
            name: "redmi series 13",
          },
        ],
      },
      {
        name: "qulaqlıqlar",
        categoryname: [
          {
            id: 1,
            name: "apple airpods 2",
          },
          {
            id: 2,
            name: "xiaomi redmi airdots 2",
          },
          {
            id: 3,
            name: "jbl tune 500",
          },
          {
            id: 4,
            name: "borofone",
          },
          {
            id: 5,
            name: "aiwa",
          },
          {
            id: 6,
            name: "google",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "televizorlar,audio-video",
    icon: "/navbar/monitor.svg",
    submenu: [
      {
        name: "Televizorlar",
        categoryname: [
          {
            id: 1,
            name: "Samsung",
          },
          {
            id: 2,
            name: "YOSHIRO",
          },
          {
            id: 3,
            name: "Sony",
          },
          {
            id: 4,
            name: "Xiaomi",
          },
          {
            id: 5,
            name: "LG",
          },
          
        ],
      },
      {
        name: "Ev kinoteatrları və saundbarlar",
        categoryname: [
          {
            id: 1,
            name: "Sony HT-S700RF//CEA4",
          },
          {
            id: 2,
            name: "Ev kinoteatrı LG LHD657",
          },
          {
            id: 3,
            name: "Saundbar LG SH7Q.DARELLK",
          },
          {
            id: 4,
            name: "Saundbar LG SP7.DARELLK",
          },
        ],
      },
      {
        name: "Musiqi mərkəzləri",
        categoryname: [
          {
            id: 1,
            name: "LG XBOOM XL7S.DARELLK",
          },
          {
            id: 2,
            name: "LG RNC9.DARELLK",
          },
          {
            id: 3,
            name: "LG RNC7.DARELLK",
          },
          {
            id: 4,
            name: "LG XBOOM ON7",
          },
        ],
      },
      {
        name: "Portativ dinamiklər",
        categoryname: [
          {
            id: 1,
            name: "YISON SKY-3 BLACK",
          },
          {
            id: 2,
            name: "YISON WS-6 RED",
          },
          {
            id: 3,
            name: "YISON SP-8 GREEN",
          },
          {
            id: 4,
            name: "YISON SKY-3 RED WIRELESS",
          },
          {
            id: 5,
            name: "JBL Horizon 2 Hotel Black",
          },
        ],
      },
      {
        name: "TV bokslar",
        categoryname: [
          {
            id: 1,
            name: "Xiaomi Mi Box S",
          }
        ],
      },
      {
        name: "Proyektorlar",
        categoryname: [
          {
            id: 1,
            name: "Freestyle 2-ci nəsil SP-LFF3CLAXXRU",
          },
          {
            id: 2,
            name: "EpiqVision Flex CO-W01 ",
          },
         
        ],
      },
      {
        name: "Ekşn kameralar",
        categoryname: [
          {
            id: 1,
            name: "GoPro HERO12 Black",
          },
          {
            id: 2,
            name: "GoPro HERO10 Black",
          },
          {
            id: 3,
            name: "Insta360 X3 CINSAAQ/A",
          },
         
        ],
      },
    ],
  },
  {
    id: 3,
    name: "noutbuklar,kompüterlər",
    icon: "/navbar/laptop.svg",
  },
  {
    id: 4,
    name: "böyük məişət texnikası",
    icon: "/navbar/fridge.svg",
  },
  {
    id: 5,
    name: "kiçik məişət texnikası",
    icon: "/navbar/smoothing-iron.svg",
  },
  {
    id: 6,
    name: "iqlim texnikası",
    icon: "/navbar/air-conditioning.svg",
  },
  {
    id: 7,
    name: "gözəllik və sağlamlıq",
    icon: "/navbar/beautiful.svg",
  },
  {
    id: 8,
    name: "foto və video",
    icon: "/navbar/camera.svg",
  },
  {
    id: 9,
    name: "oyun konsolları,oyunlar",
    icon: "/navbar/game.svg",
  },
  {
    id: 10,
    name: "fərdi nəqliyyat",
    icon: "/navbar/bicycle.svg",
  },
  {
    id: 11,
    name: "mebel",
    icon: "/navbar/light.svg",
  },
  {
    id: 12,
    name: "qab-qacaq",
    icon: "/navbar/glass.svg",
  },
  {
    id: 13,
    name: "tava qazan",
    icon: "/navbar/pan.svg",
  },
];
export const menu: MenuType = [
  {
    id: 1,
    name: "Kampaniyalar",
  },
  {
    id: 2,
    name: "Xidmətlər",
  },
  {
    id: 3,
    name: "Digər",
    icon: <FaCaretDown />,
    submenu: [
      {
        id: 1,
        name: "Əlaqə",
      },
      {
        id: 2,
        name: "Bloq",
      },
    ],
  },
];

export const tags: Types = [
  {
    id: 1,
    name: "apple iphone",
  },
  {
    id: 2,
    name: "iphone 15",
  },
  {
    id: 3,
    name: "apple iphone 15 pro",
  },
  {
    id: 4,
    name: "apple iphone 15 pro max",
  },
  {
    id: 4,
    name: "macbook",
  },
];
export const searching: Types = [
  {
    id: 1,
    name: "Apple Iphone 11 pro, 128GB, Gold",
  },
  {
    id: 2,
    name: "Apple Iphone 11 pro, 256GB, Gold",
  },
  {
    id: 3,
    name: "Apple Macbook Air 15",
  },
  {
    id: 4,
    name: "Apple Macbook Pro 16 inch, 256 GB",
  },
];
export const categories: Types = [
  {
    id: 1,
    name: "Smartfonlar",
  },
  {
    id: 2,
    name: "Qulaqlıqlar",
  },
  {
    id: 3,
    name: "Kompyuterlər",
  },
];
export const products: Producs[] = [
  {
    id: 1,
    image: "/iphone.png",
    name: "Iphone 13 Pro Max 128GB Blue",
    categories: "Smartfonlar",
    oldPrice: 3699,
    newPrice: 3499,
  },
  {
    id: 2,
    image: "/iphone.png",
    name: "Iphone 14 Pro Max 256GB red",
    categories: "Smartfonlar",
    oldPrice: 3699,
    newPrice: 3499,
  },
  {
    id: 3,
    image: "/iphone.png",
    name: "Iphone 15 Pro Max 512GB Black",
    categories: "Smartfonlar",
    oldPrice: 3699,
    newPrice: 3499,
  },
];
export const cards:Cardtype[] = [
  {
    id: 1,
    src: "/man.png",
    title: "Təkliflər",
    text: "İkiqat zəmanət ilə münasib al!",
    btnText: "Ətraflı",
  },
  {
    id: 2,
    src: "/man2.png",
    title: "Təkliflər",
    text: "İkiqat zəmanət ilə münasib al!",
    btnText: "Ətraflı",
  },
  {
    id: 3,
    src: "/man3.png",
    title: "Təkliflər",
    text: "İkiqat zəmanət ilə münasib al!",
    btnText: "Ətraflı",
  },
];
export const darkMode:darkModeType[]=[

  {
    icon:<MdDarkMode  />,
    text:"dark"
  },
  {
    icon:<CiLight />,
    text:"light"
  },
  {
    icon:<FaDesktop  />,
    text:"system"
  }
]
