import React from 'react';

const Confirm = () => {


    return (
        <>
            <div className="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">Confirm</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h5 className='alert alert-warning'>Are you sure to submit ?</h5>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary button" data-bs-dismiss="modal">No</button>
                            <button type="button" onClick={() => window.location.href = "/thanks"} className="btn btn-dark button">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Confirm;