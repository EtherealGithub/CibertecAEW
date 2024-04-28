import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import readImagesUnique from './01_ReadImagesUnique.jsx'
import {imagesClientsArray, imagesCommunityArray, imagesUpdatesArray} from './02_ReadImagesArray.jsx'
import {MainList, MainButtonsSession, SliderBanner,ListImagesCarousel,ListCard, PanelUpdates} from './03_GroupOfComponents.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.Fragment>
    <header>
        <div className="navbar">
            <div className="navbar-logo">
                <img src={readImagesUnique[0]} alt="Logo"/>
                <h1 className="navbar-logo-head">Nexcent</h1>
            </div>
            <div className="navbar-links">
                <MainList text="Home"/>
                <MainList text="Service" />
                <MainList text="Feature" />
                <MainList text="Product" />
                <MainList text="Testimonial" />
                <MainList text="FAQ" />
                <MainList text="Ir a Google" isActive/>
            </div>
            <div className="navbar-buttons">
                <MainButtonsSession text="Login" link="#" isLogin />
                <MainButtonsSession text="Sing Up" link="#" />
            </div>
        </div>
    </header>

    <main>
        <div className="banner-section">
            <SliderBanner 
            texto1="Lessons and insights" 
            texto2="from 8 years" 
            texto3="Where to grow your business as a photographer: site or social media?" 
            imgBanner={readImagesUnique[1]}
            existButton
            textButton="Register"
            linkButton="#"
            />
        </div>

        <div className="Clients">
            <div className="client-details">
            <h1 className="client-header">Our Clients</h1>
            <p className="client-text">We have been working with some Fortune 500+ clients</p>
            </div>
            <ListImagesCarousel arrayImages={imagesClientsArray} />
        </div>

        <div className="Community">
            <div className="community-details">
                <p className="community-header">Manage your entire community in a single system</p>
                <p className="community-text">Who is Nextcent suitable for?</p>
            </div>
            <div className="frame-4">
                <ListCard
                image={imagesCommunityArray[0]}
                title="Membership Organisations"
                description="Our membership management software provides full automation of membership renewals and payments"
                />
                <ListCard
                image={imagesCommunityArray[1]}
                title="National Associations"
                description="Our membership management software provides full automation of membership renewals and payments"
                />
                <ListCard
                image={imagesCommunityArray[2]}
                title="Clubs And Groups"
                description="Our membership management software provides full automation of membership renewals and payments"
                />
            </div>
        </div>

    </main>

    <div className="community-updates">
        <PanelUpdates 
        title="Caring is the new marketing" 
        description="The Nexcent blog is the best place to read about the latest membership insights, trends and more. 
                See who's joining the community, read about how our community are increasing their membership income and lot's more."         
        arrayimagesUpdates={imagesUpdatesArray}
        />
        <br />
    </div>

    <footer><br /></footer>

  </React.Fragment>

)