import React from 'react'
import './style.css'
import Navbar from '../Navbar/Navbar'
import MoreBtn from '../../Components/MoreBtn/MoreBtn'

function FirstPage() {
    return (
        <div className="main">
            <div className="main-background">
                <div className="main-navbar">
                    <Navbar/>
                </div>
                <div className="main-text">
                    <h3>Allvitto Saytiga Xush Kelibsiz</h3>
                    <p>If there are medicine take-back programs in your country, you should contact the respective
                        authority to arrange for the disposal of the medicine. For example, in the USA, the Drug
                        Enforcement Administration regularly hosts National Prescription Drug Take-Back events.</p>
                    <MoreBtn linkPath="/" color='secondary' classes={'btn-secondary'} linkName="Batafsil"/>
                </div>
            </div>
        </div>
  );
}

export default FirstPage
