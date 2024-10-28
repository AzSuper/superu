// bg-zinc-950 border-zinc-950
// bg-cyan-600 border-cyan-600
// bg-purple-800 border-purple-800
// bg-red-800 border-red-800
// bg-yellow-500 border-yellow-500

import { PRODUCT_PRICES } from "@/config/products"

export const COLORS=[
    {label:"Black",value:"black",tw:"zinc-950"},
    {label:"Blue",value:"blue",tw:"cyan-600"},
    {label:"Violet",value:"purple",tw:"purple-800"},
    {label:"Red",value:"red",tw:"red-800"},
    {label:"Gold",value:"yellow",tw:"yellow-500"}
] as const


export const MODELS={
    name:"models",
    options:[{
        label:"iphone X",
        value:"iphonex",
    },
    {
        label:"iphone 11",
        value:"iphone11",
    },
    {
        label:"iphone 12",
        value:"iphone12",
    },
    {
        label:"iphone 12 pro",
        value:"iphone12pro",
    },
    {
        label:"iphone 13",
        value:"iphone13",
    },
    {
        label:"iphone 14",
        value:"iphone14",
    },
    {
        label:"iphone 15",
        value:"iphone15",
    },]

} as const

export const METERIALS  ={
    name:"meterial",
    options:[
        {
            label:"Silicone",
            value:"silicone",
            description:undefined,
            price:PRODUCT_PRICES.meterial.silicone,
        },
        {
            label:"Titanuim",
            value:"titanuim",
            description:"keep your phone stone solid !",
            price:PRODUCT_PRICES.meterial.titanum,
        },
        {
            label:"Carbonfiber",
            value:"carbonfiber",
            description:"Modern Cool and Secure",
            price:PRODUCT_PRICES.meterial.carbonfiber,
        },
        {
            label:"Armor",
            value:"armor",
            description:"unleash The power of our Armor",
            price:PRODUCT_PRICES.meterial.armor
        }
    ]
} as const

export const FINISHIES  ={
    name:"finish",
    options:[
        {
            label:"Smooth Finish",
            value:"smooth",
            description:undefined,
            price:PRODUCT_PRICES.finish.Smooth,
        },
        {
            label:"Textured Finish",
            value:"textured",
            description:"Feel The Lexure grippy texture of Your Custome Cover",
            price:PRODUCT_PRICES.finish.textured,
        },
       ]
}as const