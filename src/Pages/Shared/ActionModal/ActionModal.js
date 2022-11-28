import React from 'react';


const ActionModal = ({ title, modalData, successButtonName, closeModal, successAction }) => {

    return (
        <div>
            <input type="checkbox" id="action-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <div className="modal-action">
                        <label
                            onClick={() => successAction(modalData)}
                            htmlFor="action-modal"
                            className="btn btn-sm gradient-color">{successButtonName}</label>
                        <button onClick={closeModal} className='btn btn-sm '>cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActionModal;