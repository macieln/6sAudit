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
    areaStepResultEl = document.createElement("p");

    constructor(sectionEl) {
        this.sectionEl = sectionEl;
        this.stepAuditEl.id = "step-audit-div";

        this.stepAuditHeaderEl.id = "step-audit-header";
        this.stepAuditHeaderEl.classList.add("null-step-audit-header");

        this.stepAuditInfoButton.innerText = "i";
        this.stepAuditInfoButton.id = "step-audit-info-button";

        this.areaStepResultEl.id = "area-step-result";
        // this.areaStepResultEl.innerHTML = `Validate if area PASS or FAIL step audit`;

    }

    makeStepAudit(index) {
        this.stepAuditEl.remove();
        this.stepEl.innerText = `Step ${index + 1} ${auditResults[index]["step"]}`;
        this.descriptionEl.innerText = `${auditResults[index]["description"]}`;

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

        this.sectionEl.appendChild(this.stepAuditEl);
        this.sectionEl.appendChild(this.areaStepResultEl);
    }
}