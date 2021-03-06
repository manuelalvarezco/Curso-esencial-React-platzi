import React from 'react';
import PropTypes from 'prop-types';

const CarouselItem = ({title, description}) =>(
    <div className="col-md-4">
        <img src="https://picsum.photos/200/300" alt="perfil"/>
        <div className="feature-title d-flex align-items-center mb-2">
            <h5 className="subtitulo m-0">{title}</h5>
        </div>
        <p className="parrafo text-muted">{description}</p>
    </div>
)

CarouselItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default CarouselItem;