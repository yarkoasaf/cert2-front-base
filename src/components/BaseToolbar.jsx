import React from 'react'
import { Toolbar } from 'primereact/toolbar';
import { Image } from 'primereact/image';

function BaseToolbar() {
    return (
        <div className="row">
            <Toolbar 
                end={<h3>Base Cert2 front</h3>}>
            </Toolbar>
        </div>
    )
}

export default BaseToolbar