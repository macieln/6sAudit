/* Author: Nahum Maciel
   Date: July 8, 2024
   Description: App module to build the controls section to hold the cycle buttons.
*/

export class AuditControls {
    auditControlsEl = document.createElement("div");
    previousButtonEl = document.createElement("button");
    nextButtonEl = document.createElement("button");

    constructor(sectionEl) {
        this.auditControlsEl.id = "audit-controls-div";
        sectionEl.appendChild(this.auditControlsEl);

        this.previousButtonEl.id = "previous-button";
        this.previousButtonEl.className = "audit-control-button";
        this.previousButtonEl.innerText = "<";
        this.auditControlsEl.appendChild(this.previousButtonEl);

        this.nextButtonEl.id = "next-button";
        this.nextButtonEl.className = "audit-control-button";
        this.nextButtonEl.innerText = ">";
        this.auditControlsEl.appendChild(this.nextButtonEl);
    }
}