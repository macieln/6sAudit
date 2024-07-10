/* Author: Nahum Maciel
   Date: July 8, 2024
   Description: App module to build the progress indicator icons and its container.
*/

export class ProgressIndicator {
    progressIndicatorEL = document.createElement("div");
    progressIndicators = []

    constructor(sectionEl) {
        this.progressIndicatorEL.id = "progress-indicator-div";
        sectionEl.appendChild(this.progressIndicatorEL);

        for (let i = 0; i < 6; i++) {
            let element = document.createElement("div");
            element.classList.add("progress-indicator");

            this.progressIndicatorEL.appendChild(element);
            this.progressIndicators.push(element);
        }

        sectionEl.appendChild(this.progressIndicatorEL);
    }

    complete(index) {
        this.progressIndicators[index].classList.add("completed-progress-indicator");
    }
}