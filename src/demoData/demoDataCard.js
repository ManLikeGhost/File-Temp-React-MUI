import React from 'react';
import PropertyImage1 from '../img/houses/5.png';
import PropertyImage2 from '../img/houses/6.png';
import PropertyImage3 from '../img/houses/7.png';
import FavoriteIcon from "@material-ui/icons/Favorite";

const iconSize = { fontSize: 90 };
const iconColor = "primary";


export const detailsProperties = [
    {
      id: 0,
      imagePath:  PropertyImage1,
      saleText:`4 Bedroom Flat with BQ for sale`,
      address:`2c Close, Admiralty Way Lekkki`,
      price: `N3 million p.a`,
      description: `Some text 0 Some text 0 Some text 0 Some text 0 Some text 0 Some text 0 `,
      details: <FavoriteIcon style={iconSize} color={iconColor} />,
    },
    {
      id: 1,
      imagePath: PropertyImage2,
      saleText:`4 Bedroom Duplex with BQ for sale`,
      address:`10A Fola Osibo, Lekki`,
      price: `N4 million p.a`,
      details: <FavoriteIcon style={iconSize} color={iconColor} />,
      description: `Some text  1 Some text  1 Some text  1 Some text 1 Some text 1 Some text 1 `,

      
    },
    {
      id: 2,
      imagePath: PropertyImage3,
      saleText:`Office spaces for sale`,
      address:`Skyline Towers, Adeola Odeku Street, V.I.`,
      price: `N5 million p.a`,
      details: <FavoriteIcon style={iconSize} color={iconColor} />,
      description: `Some text 2 Some text 2 Some text 2 Some text 2 Some text 2 Some text 2 `,

    },
  ];