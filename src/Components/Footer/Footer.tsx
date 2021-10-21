import React from 'react'
import './Footer.scss';
import fb from './facebook@72x.png';

export const Footer = () => {
    return (
        <div className="Footer-wrapper">
            <div className="Footer-child">
                <p><strong>Kvika banki hf.</strong></p>
                <a href="https://www.google.com/maps/place/Kvika+banki+hf./@64.1450695,-21.9095001,17z/data=!3m1!4b1!4m5!3m4!1s0x48d6754edbf0b379:0x437ce8420e51a204!8m2!3d64.1450672!4d-21.9073114">Katrínartúni 2, 105 Reykjavík</a>
                <p>Kt. 540502-2930</p>
                <p><a href="tel:5403200" className="info">5403200</a></p>
                <p><a href="mailto:thjonusta@kvika.is" className="info">thjonusta@kvika.is</a></p>
                <p className="info">Opið virka daga: 09:00 - 16:00</p>
            </div>
            <div className="Footer-child">
                <p><strong>Kvika Securities Ltd.</strong></p>
                <a href="https://www.google.com/maps/place/25+Upper+Brook+St,+Mayfair,+London+W1K+7QD,+Bretland/@51.5113972,-0.1586653,17z/data=!3m1!4b1!4m5!3m4!1s0x48760533ba72d76f:0xeb6a6d4c7c5f7791!8m2!3d51.5113972!4d-0.1564766">25 Upper Brook Street</a>
                <p>London W1K 7QD</p>
                <p><a href="https://www.kvika.co.uk/">www.kvika.co.uk</a></p>
            </div>
            <div className="Footer-child" >
                <p>SWIFT: MPBAISRE</p>
                <p>Bloomberg: KVIK</p>
                <p>Reuters: KVIK</p>
                <a href="https://www.facebook.com/Kvika.is/"><img src={fb} alt="Finndu okkur á Facebook"></img></a>
            </div>
        </div>
    )
}



