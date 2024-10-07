
import React, { useEffect } from 'react';
import './Map.css';

const Map = () => {


    return (
        <div>
            <h2 style={{textAlign:'center'}}>Nuestra Ubicación</h2>

            <iframe 
                style={{border:0, display:'flex', margin:'0 auto'}} 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63457.58699248003!2d-75.60972746624458!3d6.250659860509531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428ff2d7cb145%3A0xc94c155dc5c81c24!2sUniremington%20Medell%C3%ADn!5e0!3m2!1ses-419!2sco!4v1728266606871!5m2!1ses-419!2sco"
                width="80%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>

    );
};

export default Map;