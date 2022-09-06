import React from 'react'
import { multiStepContext } from '../../components/fund/createFund/NewFundContext';
import StepOne from '../../components/fund/createFund/StepOne';
import StepTwo from '../../components/fund/createFund/StepTwo';
import NavButton from '../../components/NavButton';
import SideNav from '../../components/organization/sideNav';

export default function NewFund() {
    const { currentStep } = React.useContext(multiStepContext);

    const toggleSidenav = (e) => {
        e.preventDefault();
        document.body.classList.remove("g-sidenav-pinned");
    };

    function showStep(step) {
        switch (step) {
            case 1:
                return <StepOne />
            case 2:
                return <StepTwo />
            default:
                return <StepOne />
        }
    }

    return (
        <div>
            <SideNav />
            <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
                <NavButton />
                <div className="container-fluid" onClick={toggleSidenav}>
                    <h3 className="font-weight-bolder mt-4 mb-3 text-center">Create a new fund</h3>
                    <div className="container my-auto">
                        <div className="row">
                            <div className="mx-auto">
                                <div className="card z-index-0 fadeIn3 fadeInBottom ">
                                    {showStep(currentStep)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
