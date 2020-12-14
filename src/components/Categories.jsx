import React from 'react';

const Categories = ({children, title}) => (

    <div className="container">
        <div className="col-12 text-center mb-5 mt-4">
            <span className="titulo">{title}</span>
            <p className=" text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,.</p>
        </div>
        {children}
    </div>
)

export default Categories;