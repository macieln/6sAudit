/* Author: Nahum Maciel
   Date: July 8, 2024
   Description: App module to build the home interface section.
*/

export class StartSection {
    startButtonEl = document.createElement("button");
    promptEl = document.createElement("p");

    constructor(sectionEl) {
        this.startButtonEl.id = "start-button";
        this.startButtonEl.innerText = "START";

        this.promptEl.id = "start-prompt";
        this.promptEl.innerText = "Press START to be begin area audit";

        sectionEl.appendChild(this.startButtonEl);
        sectionEl.appendChild(this.promptEl);
    }
}