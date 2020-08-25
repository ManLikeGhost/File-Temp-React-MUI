import React from "react";
import PropertyImage1 from "../img/houses/5.png";
import PropertyImage2 from "../img/houses/6.png";
import PropertyImage3 from "../img/houses/7.png";
import FavoriteIcon from "@material-ui/icons/Favorite";

const iconSize = { fontSize: 90 };
const iconColor = "primary";

export const detailsProperties = [
  {
    id: 0,

    imagePath: PropertyImage1,
    title: `3 Bedroom flat for rent`,
    address: `2c Close, Admiralty Way Lekkki`,
    price: `N3 million p.a`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. `,
    // details: <FavoriteIcon style={iconSize} color={iconColor} />,
    type: `flatRent`,
  },
  {
    id: 1,
    title: `3 Bedroom flat for rent`,
    imagePath: PropertyImage2,
    // saleText: `4 Bedroom Duplex with BQ for sale`,
    address: `10A Fola Osibo, Lekki`,
    price: `N4 million p.a`,
    // details: <FavoriteIcon style={iconSize} color={iconColor} />,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. `,
    type: `flatRent`,
  },
  {
    id: 2,
    title: `3 Bedroom flat for rent`,
    imagePath: PropertyImage3,
    // saleText: `Office spaces for sale`,
    address: `Skyline Towers, Adeola Odeku Street, V.I.`,
    price: `N5 million p.a`,
    // details: <FavoriteIcon style={iconSize} color={iconColor} />,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. `,
    type: `flatRent`,
  },
];

// export const flatRent =[];
// export const flatSale =[];
// export const flatShortlet =[];
// export const houseRent =[];
// export const houseSale =[];
// export const houseShortlet =[];
// export const commercialProjectsRent =[];
// export const commercialProjectsSale =[];
// export const commercialProjectsShortlet =[];
// export const landsRent =[];
// export const landsSale =[];
// export const landsShortlet =[];
// export const propertyRent =[];
// export const propertySale =[];
// export const propertyShortlet =[];
