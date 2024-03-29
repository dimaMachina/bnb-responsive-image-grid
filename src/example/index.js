import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { createGlobalStyle} from 'styled-components'
import ResponsiveImageGrid from '../components/ResponsiveImageGrid'

const photos = [
  {
    photo: "https://source.unsplash.com/aZjw7xI3QAA/1144x763",
    caption: "Viñales, Pinar del Río, Cuba",
    subcaption: "Photo by Simon Matzinger on Unsplash",
    thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: "https://source.unsplash.com/c77MgFOt7e0/1144x763",
    caption: "La Habana, Cuba",
    subcaption: "Photo by Gerardo Sanchez on Unsplash",
    thumbnail: "https://source.unsplash.com/c77MgFOt7e0/100x67",
  },
  {
    photo: "https://source.unsplash.com/QdBHnkBdu4g/1144x763",
    caption: "Woman smoking a tobacco",
    subcaption: "Photo by Hannah Cauhepe on Unsplash",
    thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
  },
  {
    photo: "https://source.unsplash.com/YIHRJrdgJqw/1144x763",
    caption: "Malecon, La Habana, Cuba",
    subcaption: "Photo by Emanuel Haas on Unsplash",
    thumbnail: "https://source.unsplash.com/YIHRJrdgJqw/100x67",
  },
  {
    photo: "https://source.unsplash.com/tC_SbXEhS5Y/1144x763",
    caption: "Yellow car parked near painted concrete houses",
    subcaption: "Photo by James Garman on Unsplash",
    thumbnail: "https://source.unsplash.com/tC_SbXEhS5Y/100x67",
  },
  {
    photo: "https://source.unsplash.com/h9Iq22JJlGk/1144x763",
    caption: "Cuban brown coffee beans beside white ceramic mug",
    subcaption: "Photo by Janko Ferlič on Unsplash",
    thumbnail: "https://source.unsplash.com/h9Iq22JJlGk/100x67",
  },
  {
    photo: "https://source.unsplash.com/6NT7jy6OU9I/1144x763",
    caption: "Orange car on asphalt road",
    subcaption: "Photo by Stéphan Valentin on Unsplash",
    thumbnail: "https://source.unsplash.com/6NT7jy6OU9I/100x67",
  },
  {
    photo: "https://source.unsplash.com/-vWmir7fGRM/1144x763",
    caption: "Three assorted-colored vintage car on road in Havana",
    subcaption: "Photo by Persnickety Prints on Unsplash",
    thumbnail: "https://source.unsplash.com/-vWmir7fGRM/100x67",
  },
  {
    photo: "https://source.unsplash.com/PubtV8UJxB8/1144x763",
    caption: "Man walking on walkway while holding his bicycle",
    subcaption: "Photo by Melanie Dretvic on Unsplash",
    thumbnail: "https://source.unsplash.com/PubtV8UJxB8/100x67",
  },
  {
    photo: "https://source.unsplash.com/fwtXC2sP7Tg/1144x763",
    caption: "Blue \"Lada\" parked beside pink and green house",
    subcaption: "Photo by Arno Smit on Unsplash",
    thumbnail: "https://source.unsplash.com/fwtXC2sP7Tg/100x67",
  },
  {
    photo: "https://source.unsplash.com/8AJN9q9Rxqw/1144x763",
    caption: "Girl with a parrot",
    subcaption: "Photo by Ricardo IV Tamayo on Unsplash",
    thumbnail: "https://source.unsplash.com/8AJN9q9Rxqw/100x67",
  },
  {
    photo: "https://source.unsplash.com/Q6LO0SCx3n0/1144x763",
    caption: "Classic yellow car",
    subcaption: "Photo by Flo P on Unsplash",
    thumbnail: "https://source.unsplash.com/Q6LO0SCx3n0/100x67",
  },
  {
    photo: "https://source.unsplash.com/kfxPVP_7P7U/1144x763",
    caption: "Cuban boy pointing his finger",
    subcaption: "Photo by Craig Philbrick on Unsplash",
    thumbnail: "https://source.unsplash.com/kfxPVP_7P7U/100x67",
  },
  {
    photo: "https://source.unsplash.com/kI00pEcN4bg/1144x763",
    caption: "Man on a horse in Viñales, Cuba",
    subcaption: "Photo by Flo P on Unsplash",
    thumbnail: "https://source.unsplash.com/kI00pEcN4bg/100x67",
  }
];

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
`

render(
  <StrictMode>
    <GlobalStyle />
    <ResponsiveImageGrid photos={photos} />
  </StrictMode>,
  document.getElementById('root')
);
