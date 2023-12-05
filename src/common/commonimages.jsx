
import favicon from '../assets/img/brand/favicon.png';
import logo from '../assets/img/brand/logo.png';
import logowhite from '../assets/img/brand/logo-white.png';
import faviconwhite from '../assets/img/brand/favicon-white.png';
export const imagesData = (idx) => {
  const images  = {
    favicon,faviconwhite, logo, logowhite 

  };
  return images[idx];
};
