/* Author: Nahum Maciel
   Date: July 8, 2024
   Description: App module to build each step audit.
*/

import { auditResults } from "./auditResults.js";

// export function stepAuditSection(index) {
//
// stepAuditEl.id = "step-audit";
//
//
//
//
//
// resultsControlsEl.id = "results-controls";
// }

export class StepAuditSection {
    sectionEl = null;

    stepAuditEl = document.createElement("div");
    stepEl = document.createElement("h2");
    descriptionEl = document.createElement("p");
    // resultsControlsEl = document.createElement("div");

    constructor(sectionEl) {
        this.sectionEl = sectionEl;
        this.stepAuditEl.id = "step-audit-div";
    }

    makeStepAudit(index) {
        this.stepAuditEl.remove();
        this.stepEl.innerText = `Step ${index + 1} ${auditResults[index]["step"]}`;
        this.descriptionEl.innerText = `${auditResults[index]["description"]}`;
        // this.resultsControlsEl.innerText = "Cheese";

        this.stepAuditEl.appendChild(this.stepEl);
        this.stepAuditEl.appendChild(this.descriptionEl);
        // this.stepAuditEl.appendChild(this.resultsControlsEl);

        this.sectionEl.appendChild(this.stepAuditEl);
    }
}