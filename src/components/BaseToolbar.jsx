import React from 'react'
import { Toolbar } from 'primereact/toolbar';
import { Image } from 'primereact/image';

function BaseToolbar() {
    return (
        <div className="row">
            <Toolbar 
                start={<h1> Sansamark </h1>}>
            </Toolbar>
        </div>
    )
}

export default BaseToolbar