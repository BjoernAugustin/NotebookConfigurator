import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColordataService {

  constructor() { }

  colorlist = [
    {
      name_ger: "Schwarz",
      name_eng: "Black",
      hexcode: "rgba(0, 0, 0, 0.95)"
    },
    {
      name_ger: "Weiß",
      name_eng: "White",
      hexcode: "white"
    },
    {
      name_ger: "Sand",
      name_eng: "Sand",
      hexcode: "#C7BC8E",
      assortment: ["C"],
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Army",
      name_eng: "Army",
      hexcode: "#4B542D",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Anthrazit",
      name_eng: "Anthracite",
      hexcode: "#666D6E",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Marine",
      name_eng: "Navy",
      hexcode: "#0C2340",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Königsblau",
      name_eng: "Royal Blue",
      hexcode: "#0048AA",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Nordic Blue",
      name_eng: "Nordic Blue",
      hexcode: "#428CA8",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Ice Blue",
      name_eng: "Ice Blue",
      hexcode: "#6CC7E3",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Azur",
      name_eng: "Azure",
      hexcode: "#007EB1",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Pacific Green",
      name_eng: "Pacific Green",
      hexcode: "#00525F",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Smaragd",
      name_eng: "Emerald",
      hexcode: "#00A294",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Fresh Green",
      name_eng: "Fresh Green",
      hexcode: "#50AE30",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Limone",
      name_eng: "Lime",
      hexcode: "#FFE000",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Zitrone",
      name_eng: "Lemon",
      hexcode: "#C7BC8E",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Orange",
      name_eng: "Orange",
      hexcode: "#E94D11",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Rot",
      name_eng: "Red",
      hexcode: "#E3000E",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Beere",
      name_eng: "Berry",
      hexcode: "#B70059",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Port Red",
      name_eng: "Port Red",
      hexcode: "#6F0E38",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "New Pink",
      name_eng: "New Pink",
      hexcode: "#D54A90",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Violett",
      name_eng: "Purple",
      hexcode: "#3D2784",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Bellini",
      name_eng: "Bellini",
      hexcode: "#EF7968",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Denim",
      name_eng: "Denim",
      hexcode: "#456A98",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Salbei",
      name_eng: "Sage",
      hexcode: "#93B083",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Puder",
      name_eng: "Powder",
      hexcode: "#F0CACE",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Warm Earth",
      name_eng: "Warm Earth",
      hexcode: "#7C6559",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Stone Blue",
      name_eng: "Stone Blue",
      hexcode: "#417288",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Aquamarine",
      name_eng: "Aquamarine",
      hexcode: "#6FC5CD",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Rising Sun",
      name_eng: "Rising Sun",
      hexcode: "#F59D23",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Vanilla",
      name_eng: "Vanilla",
      hexcode: "#FFF8A6",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Lilac",
      name_eng: "Lilac",
      hexcode: "#D4C7E3",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Ocean",
      name_eng: "Ocean",
      hexcode: "#00849E",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Oliv",
      name_eng: "Olive",
      hexcode: "#6D806C",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Fox Red",
      name_eng: "Fox Red",
      hexcode: "#CA412C",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Light Grey",
      name_eng: "Light Grey",
      hexcode: "#CCCDC8",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Forest Green",
      name_eng: "Forest Green",
      hexcode: "#00392F",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Mint Green",
      name_eng: "Mint Green",
      hexcode: "#CCE7D3",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Gold",
      name_eng: "Gold",
      hexcode: "#C5A16D",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Silber",
      name_eng: "Silver",
      hexcode: "#A7A9AC",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Kupfer",
      name_eng: "Copper",
      hexcode: "#E08C5B",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Ink",
      name_eng: "Ink",
      hexcode: "#261F7D",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Sky",
      name_eng: "Sky",
      hexcode: "#0071D6",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Lobster",
      name_eng: "Lobster",
      hexcode: "#E63D2B",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    },
    {
      name_ger: "Apricot",
      name_eng: "Apricot",
      hexcode: "#FFB880",
      assortment: "",
      pantone: "",
      rgb: "",
      cmyk: ""
    }
  ]

}
