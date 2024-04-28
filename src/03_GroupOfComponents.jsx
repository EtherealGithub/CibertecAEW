
//Componentes del div navbar - Sector Menu de Redireccionamiento

import React from "react";

function MainList({text, isActive}) {
    const variantClass = (isActive) ? "redireccionGoogle" : 'navbar-link';
    const variantLink = (isActive) ? "https://www.google.com.pe/" : '#';

    return (
        <li>
            <a href={variantLink} className={variantClass}>{text}</a>
        </li>        
    );
}

function MainButtonsSession({text, link, isLogin}) {
    const login = (isLogin)?'login':'sign'

    return (
        <a href={link} className={login}>{text}</a>
    )
}

//Componentes del div banner-secction - Sector Banner / No se reajusta el CSS por qeu solo es una imagen y no se especifica en el word qeu agregue ni al final de clase

function SliderBanner({texto1,texto2,texto3,imgBanner,existButton, textButton, linkButton}) {
    return (
        <>
        <div className="frame-1">
            <p className="text-1">{texto1}<br/><span>{texto2}</span></p>
            <p className="text-2">{texto3}</p>
            {existButton && <button className="frame-1-button" link={linkButton}>{textButton}</button>}
        </div>
        <div className="frame-2">
            <img src={imgBanner} alt=""/>
        </div>
        </>
    )
}

//Componentes del div Clients - Sector Clientes

function ListImagesCarousel({arrayImages}){
    return(
        <>
        <div className="client-logos">
            {arrayImages.map((imageSrc) => (
                <img src={imageSrc} alt=""/>
            ))}
        </div>
        </>
    )
}

//Componentes del div Community - Sector Comunidad

function ListCard({image, title, description}) {
    return (
        <>
        <div className="box">
            <img src={image} alt=""/>
            <p className="frame-header">{title}</p>
            <p className="frame-text">{description}</p>
        </div>
        </>
    )
}

//Componentes del div community-updates - Sector Actualizaciones

function PanelUpdates({title, description, arrayimagesUpdates}) {
    return(
        <>
        <div className="update-details">
            <p className="update-header">{title}</p>
            <p className="update-text">{description}​</p>
        </div>
        <div className="update-frame">
            {arrayimagesUpdates.map((imageSrc) => (
                <>
                <div className="frame-box">
                    <img src={imageSrc} alt=""/>
                </div>
                </>
            ))}

        </div>
        </>
    )
}

export {MainList, MainButtonsSession, SliderBanner, ListImagesCarousel, ListCard,PanelUpdates}

