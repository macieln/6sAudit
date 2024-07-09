/* Author: Nahum Maciel
   Date: July 8, 2024
   Description: App module to build each step audit.
*/

import { auditResults } from "./auditResults.js";

export class StepAuditSection {
    sectionEl = null;
    stepAuditEl = document.createElement("div");
    stepAuditHeaderEl = document.createElement("header");
    stepEl = document.createElement("h2");
    stepAuditInfoButton = document.createElement("button");
    descriptionEl = document.createElement("p");

    // resultsControlsEl = document.createElement("div");

    constructor(sectionEl) {
        this.sectionEl = sectionEl;
        this.stepAuditEl.id = "step-audit-div";
        this.stepAuditInfoButton.innerText = "i";
        this.stepAuditInfoButton.id = "step-audit-info-button";
    }

    makeStepAudit(index) {
        this.stepAuditEl.remove();
        this.stepEl.innerText = `Step ${index + 1} ${auditResults[index]["step"]}`;
        this.descriptionEl.innerText = `${auditResults[index]["description"]}`;
        // this.resultsControlsEl.innerText = "Cheese";

        this.stepAuditEl.appendChild(this.stepAuditHeaderEl);
        this.stepAuditHeaderEl.appendChild(this.stepEl);
        this.stepAuditHeaderEl.appendChild(this.stepAuditInfoButton);
        this.stepAuditInfoButton.addEventListener("click", () => {
            if (this.stepAuditInfoButton.innerText === "i") {
                this.stepAuditInfoButton.innerText = "X";
                this.stepAuditEl.appendChild(this.descriptionEl);
            } else {
                this.stepAuditInfoButton.innerText = "i";
                this.descriptionEl.remove();
            }
        });


        // this.stepAuditEl.appendChild(this.resultsControlsEl);

        this.sectionEl.appendChild(this.stepAuditEl);
    }
}