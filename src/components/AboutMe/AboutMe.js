import React from 'react';
import './AboutMe.css'

export default function AboutMe() {
    return (
        <div className="container-fluid p-0 blur-image">
            <div className="container-fluid background-images"></div>
            <div className="container-fluid row row-aboutme">
                <div className="col-sm-9 col-md-8 col-lg-6">
                    <div className="card card-aboutme w-75">
                            <div className="card-body">
                                <h5 className="card-title">FEDERICO PALMIERI</h5>
                                <h6 className="card-title">Desarrollador Backend</h6>
                                <p className="card-text">Muchas ganas de seguir creciendo y capacitandome en esto que tanto me gusta fgfdm nsdf sdwersdf wuewursd dsjfsdnfsdj sdfjsdnfsd yeyrwey sdf ds.</p>
                                <a href="/#" className="btn btn-primary">CV</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
