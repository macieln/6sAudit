/* Author: Nahum Maciel
   Date: July 9, 2024
   Description:
*/

import {auditResults} from "./auditResults.js";

export class ResultsControls {
    sectionEl = null;
    stepAuditHeaderEl = null;
    resultsControlsEl = document.createElement("div");
    passButtonEl = document.createElement("button");
    failButtonEl = document.createElement("button");
    areaStepResult = null;


    constructor(sectionEl) {
        this.sectionEl = sectionEl;
        this.stepAuditHeaderEl = document.getElementById("step-audit-header");

        this.resultsControlsEl.id = "results-controls-div";

        this.passButtonEl.innerText = "PASS";
        this.passButtonEl.id = "pass-button";
        this.failButtonEl.innerText = "FAIL";
        this.failButtonEl.id = "fail-button";

        this.sectionEl.appendChild(this.resultsControlsEl);
        this.resultsControlsEl.appendChild(this.passButtonEl);
        this.resultsControlsEl.appendChild(this.failButtonEl);

        this.areaStepResult = document.getElementById("area-step-result");
    }

    setResults(input, index) {
        switch (input) {
            case true:

                auditResults[index]["result"] = true;
                this.sectionEl.classList.remove("failed-step-audit");
                this.sectionEl.classList.add("passed-step-audit");

                this.stepAuditHeaderEl.classList.remove("failed-step-audit-header");
                this.stepAuditHeaderEl.classList.add("passed-step-audit-header");

                this.areaStepResult.classList.remove("failed-area-step-result");
                this.areaStepResult.classList.add("passed-area-step-result");

                this.areaStepResult.innerText = "PASS";

                break
            case false:

                auditResults[index]["result"] = false;
                this.sectionEl.classList.remove("passed-step-audit");
                this.sectionEl.classList.add("failed-step-audit");

                this.stepAuditHeaderEl.classList.remove("passed-step-audit-header");
                this.stepAuditHeaderEl.classList.add("failed-step-audit-header");

                this.areaStepResult.classList.remove("passed-area-step-result");
                this.areaStepResult.classList.add("failed-area-step-result");

                this.areaStepResult.innerText = "FAIL";

                break
            default:
                break
        }
    }
}


//     if (auditResults[index]["result"] === true) {
//         stepAuditEl.classList.remove("failed-step-audit");
//         stepAuditEl.classList.add("passed-step-audit");
//
//         areaStepResultEl.remove()
//         areaStepResultEl.innerText = `PASSED`;
//
//         areaStepResultEl.classList.add("passed-area-step-result");
//         areaStepResultEl.classList.remove("failed-area-step-result");
//
//         progressIndicatorEls[index].classList.add("passed-progress-indicator");
//         progressIndicatorEls[index].classList.remove("failed-progress-indicator");
//
//         stepAuditEl.appendChild(areaStepResultEl);
//     } else if (auditResults[index]["result"] === false) {
//         stepAuditEl.classList.remove("passed-step-audit");
//         stepAuditEl.classList.add("failed-step-audit");
//
//         areaStepResultEl.remove()
//         areaStepResultEl.innerText = `FAILED`;
//
//         areaStepResultEl.classList.add("failed-area-step-result");
//         areaStepResultEl.classList.remove("passed-area-step-result");
//
//         progressIndicatorEls[index].classList.remove("passed-progress-indicator");
//         progressIndicatorEls[index].classList.add("failed-progress-indicator");
//
//         stepAuditEl.appendChild(areaStepResultEl);
//     } else {
//         stepAuditEl.classList.remove("passed-step-audit");
//         stepAuditEl.classList.remove("failed-step-audit");
//
//         areaStepResultEl.classList.remove("passed-area-step-result");
//         areaStepResultEl.classList.remove("failed-area-step-result");
//
//         progressIndicatorEls[index].classList.remove("failed-progress-indicator");
//         progressIndicatorEls[index].classList.remove("passed-progress-indicator");
//
//         areaStepResultEl.innerText = `Select PASS or FAIL`;
//     }
// }
