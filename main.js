/* Author: Nahum Maciel
   Date: July 3, 2024
   Description: App main module.
 */

import { StartSection } from "./startSection.js";
import { AuditControls } from "./auditControls.js";
import { ProgressIndicator } from "./progressIndicator.js";
import { StepAuditSection } from "./stepAuditSection.js";

let sectionEl = document.getElementsByTagName('section')[0];
let auditControls = null;
let progressIndicator = null;
let index = 0;
let stepAuditSection = null;

let startSection = new StartSection(sectionEl);
startSection.startButtonEl.addEventListener("click", () => {
    startSection.startButtonEl.remove();
    startSection.promptEl.remove();

    auditControls = new AuditControls(sectionEl);
    progressIndicator = new ProgressIndicator(sectionEl);
    stepAuditSection = new StepAuditSection(sectionEl);
    stepAuditSection.makeStepAudit(0)
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


// let passButtonEl = document.createElement("button");
// passButtonEl.innerText = "PASS";
// passButtonEl.id = "pass-button";
// passButtonEl.addEventListener("click", () => {setResult(true)})
//
// let failButtonEl = document.createElement("button");
// failButtonEl.innerText = "FAIL";
// failButtonEl.id = "fail-button";
// failButtonEl.addEventListener("click", () => {setResult(false)})
//
// resultsControlsEl.appendChild(passButtonEl);
// resultsControlsEl.appendChild(failButtonEl);
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





//
// function setResult(input) {
//
//     switch (input) {
//         case true:
//             auditResults[index]["result"] = true;
//
//             break
//         case false:
//             auditResults[index]["result"] = false;
//
//             break
//         default:
//             break
//     }
//
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
