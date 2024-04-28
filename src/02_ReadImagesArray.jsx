import ImgCommunity1 from './img/ImgCommunity/ImgCommunity1.svg';
import ImgCommunity2 from './img/ImgCommunity/ImgCommunity2.svg';
import ImgCommunity3 from './img/ImgCommunity/ImgCommunity3.svg';

function readImagesCommunity() {
  const imagesCommunity = [
    ImgCommunity1,
    ImgCommunity2,
    ImgCommunity3
  ];
  return imagesCommunity;
}

import LogoClient1 from './img/LogoClients/LogoClients1.svg';
import LogoClient2 from './img/LogoClients/LogoClients2.svg';
import LogoClient3 from './img/LogoClients/LogoClients3.svg';
import LogoClient4 from './img/LogoClients/LogoClients4.svg';
import LogoClient5 from './img/LogoClients/LogoClients5.svg';
import LogoClient6 from './img/LogoClients/LogoClients6.svg';
import LogoClient7 from './img/LogoClients/LogoClients7.svg';


function readImagesClients() {
  const imagesclient = [
    LogoClient1,
    LogoClient2,
    LogoClient3,
    LogoClient4,
    LogoClient5,
    LogoClient6,
    LogoClient7
  ];
  return imagesclient;
}

import ImgUpdates1 from './img/ImgUpdates/ImgUpdate1.png';
import ImgUpdates2 from './img/ImgUpdates/ImgUpdate2.png';
import ImgUpdates3 from './img/ImgUpdates/ImgUpdate3.png';


function readImagesUpdates() {
  const imagesUpdate = [
    ImgUpdates1,
    ImgUpdates2,
    ImgUpdates3
  ];
  return imagesUpdate;
}

const imagesCommunityArray = readImagesCommunity();
const imagesClientsArray = readImagesClients();
const imagesUpdatesArray = readImagesUpdates();


export { imagesCommunityArray, imagesClientsArray,imagesUpdatesArray };