/* Author: Nahum Maciel
   Date: July 3, 2024
   Description: App main module.
 */

import { StartSection } from "./startSection.js";
import { StepAuditSection } from "./stepAuditSection.js";
import { ResultsControls } from "./resultsControls.js";
import { AuditControls } from "./auditControls.js";
import { ProgressIndicator } from "./progressIndicator.js";
import { auditResults } from "./auditResults.js";

let sectionEl = document.getElementsByTagName('section')[0];
let stepAuditSection = null;
let resultsControls = null;
let auditControls = null;
let progressIndicator = null;
let index = 0;

let startSection = new StartSection(sectionEl);
startSection.startButtonEl.addEventListener("click", () => {
    startSection.startButtonEl.remove();
    startSection.promptEl.remove();

    stepAuditSection = new StepAuditSection(sectionEl);
    stepAuditSection.makeStepAudit(0)

    resultsControls = new ResultsControls(sectionEl);
    resultsControls.passButtonEl.addEventListener("click", () => {
        resultsControls.setResults(true, index);
    });
    resultsControls.failButtonEl.addEventListener("click", () => {
        resultsControls.setResults(false, index);
    });

    auditControls = new AuditControls(sectionEl);
    progressIndicator = new ProgressIndicator(sectionEl);
});





// let index = 0;
// let auditResults = [];



// function startAreaAudit() {
//     startButtonEl.remove()
//     promptEl.remove()
//
//     makeStepAudit(index)
// }






// previousButtonEl.addEventListener("click", () => {
//     if (index - 1 < 0) {
//         index = auditResults.length - 1;
//     } else {
//         index -= 1;
//     }
//
//     for (let index = 0; progressIndicatorEls.length > index; index++) {
//         progressIndicatorEls[index].classList.remove("selected-progress-indicator");
//     }
//     progressIndicatorEls[index].classList.add("selected-progress-indicator");
//
//     makeStepAudit(index);
// });
// nextButtonEl.addEventListener("click", () => {
//     if (auditResults.length - 1 < index + 1) {
//         index = 0;
//     } else {
//         index += 1;
//     }
//
//     for (let index = 0; progressIndicatorEls.length > index; index++) {
//         progressIndicatorEls[index].classList.remove("selected-progress-indicator");
//     }
//     progressIndicatorEls[index].classList.add("selected-progress-indicator");
//
//     makeStepAudit(index);
// });



//
// let areaStepResultEl = document.createElement("h1");
// areaStepResultEl.id = "area-step-result";
//
// let progressIndicatorEls = [];




// progressIndicatorContainerEL.id = "progress-indicator-container";
//
// for (let index = 0; auditResults.length - 1 >= index; index++) {
//     let element = document.createElement("div");
//     element.className = "progress-indicator";
//     progressIndicatorContainerEL.appendChild(element);
//
//     progressIndicatorEls.push(element);
// }
//