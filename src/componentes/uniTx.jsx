import React, { useState, useEffect } from 'react';

const UniTx = (dataTx) => {
    return (
        <>
            {dataTx ? (
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <p>Account id</p>
                            <p>{dataTx.Nissan.Nombre}</p>
                        </div>
                        <div class="col">
                            <p>Money</p>
                        </div>

                    </div>
                </div>
            ) : (
                <p>Loaging...</p>
            )}
        </>
    )
}

export default UniTx;