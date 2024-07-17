/* Author: Nahum Maciel
   Date: July 3, 2024
   Description: App main module.
 */

let mainSection = document.getElementById("main-section");
let startButton = document.createElement("button");
let welcomePrompt = document.createElement("p");
let mainSectionHeader = document.createElement("header");
let index = 0;
let auditResults = [];
let stepTitle = document.createElement("h2");
let stepDescriptionButton = document.createElement("button");
let stepDescription = document.createElement("p");
let actionItemsHeader = document.createElement("header");
let actionItemsTitle = document.createElement("h3");
let addActionItemButton = document.createElement("button");
let actionItemsContainer = document.createElement("div");
let resultsIndicator = document.createElement("p");
let resultsControls = document.createElement("div");
let passResultButton = document.createElement("button");
let failResultButton = document.createElement("button");
let stepsToggleControls = document.createElement("div");
let previousToggleButton = document.createElement("button");
let nextToggleButton = document.createElement("button");
let progressIndicatorContainer = document.createElement("div");

mainSection.classList.add("no-result-background");
mainSectionHeader.classList.add("no-result-background");
startButton.id = "start-button";
startButton.innerText = "START";
welcomePrompt.innerText = "Press START to begin area audit";
welcomePrompt.id = "welcome-prompt";
mainSectionHeader.id = "main-section-header";
mainSectionHeader.classList.add("no-result-background");
stepTitle.id = "step-title";
stepDescriptionButton.id = "step-description-button";
stepDescriptionButton.innerText = "X";
stepDescription.id = "step-description";
actionItemsHeader.id = "action-items-header";
actionItemsHeader.classList.add("no-result-background");
actionItemsTitle.id = "action-items-title";
actionItemsTitle.innerText = "Action Items";
addActionItemButton.id = "add-action-item-button";
addActionItemButton.innerText = "+";
actionItemsContainer.id = "action-items-container";
resultsIndicator.id = "results-indicator";
resultsControls.id = "results-controls";
passResultButton.id = "pass-result-button";
failResultButton.id = "fail-result-button";
passResultButton.innerText = "PASS";
failResultButton.innerText = "FAIL";
stepsToggleControls.id = "steps-toggle-controls";
previousToggleButton.classList.add("step-toggle-button");
nextToggleButton.classList.add("step-toggle-button");
previousToggleButton.innerText = "<";
nextToggleButton.innerText = ">";
progressIndicatorContainer.id = "progress-indicator-container";

mainSection.appendChild(startButton);
mainSection.appendChild(welcomePrompt);
actionItemsHeader.appendChild(actionItemsTitle);
actionItemsHeader.appendChild(addActionItemButton);

auditResults.push(
    {
        "step": "Sort",
        "description": "Unnecessary tools and materials are identified and sorted out. This makes the workplace more organized and creates more space for needed work materials.",
        "result": null,
        "actionItems": []
    }
);
auditResults.push(
    {
        "step": "Set in order",
        "description": "A system is introduced for arranging the required work materials. Required tools and materials are arranged so that they can be accessed quickly and easily. The frequency of use as well as the order of use of the materials is taken into account.",
        "result": null,
        "actionItems": []
    }
);
auditResults.push(
    {
        "step": "Shine",
        "description": "The own workplace and work utensils are cleaned. The cleaning of the work equipment also serves to identify deficiencies as well as potential threads. Thus, a safe and hygienic working environment is created.",
        "result": null,
        "actionItems": []
    }
);
auditResults.push(
    {
        "step": "Standardize",
        "description": "All workplaces are standardized. For example, uniform markings and labels are used for work materials. The aim is to create standards that create an optimal working environment and make it easier to change workplaces.",
        "result": null,
        "actionItems": []
    }
);
auditResults.push(
    {
        "step": "Sustain",
        "description": "Compliance with the above rules is to become a habit. Likewise, the rules are to be constantly reviewed and improved in order to achieve the best possible benefits.",
        "result": null,
        "actionItems": []
    }
);
auditResults.push(
    {
        "step": "Safety",
        "description": "To ensure safety in the workplace, potential sources of danger are searched for. After identifying the sources of danger, potential measures are defined and implemented to minimize the danger and increase safety.",
        "result": null,
        "actionItems": []
    }
);

for (let item in auditResults) {
    let progressIndicator = document.createElement("div");
    progressIndicator.classList.add("progress-indicator");
    progressIndicatorContainer.appendChild(progressIndicator);
}

function toggleStepDescription(toggle = true) {
    if (toggle === true) {
        if (stepDescriptionButton.innerText === "X") {
            stepDescriptionButton.innerText = "i";

            stepDescription.remove();
        } else {
            stepDescriptionButton.innerText = "X";

            actionItemsHeader.remove();
            actionItemsContainer.remove();
            resultsIndicator.remove();
            resultsControls.remove();
            stepsToggleControls.remove();
            progressIndicatorContainer.remove();

            mainSection.appendChild(stepDescription);
            mainSection.appendChild(actionItemsHeader);
            mainSection.appendChild(actionItemsContainer);
            mainSection.appendChild(resultsIndicator);
            mainSection.appendChild(resultsControls);
            mainSection.appendChild(stepsToggleControls);
        }
    } else if (stepDescriptionButton.innerText === "X") {
        stepDescription.remove()
        mainSection.appendChild(stepDescription);
    }
}

function makeAuditStep(firstAudit = false) {
    stepTitle.innerText = `Step ${index + 1}: ${auditResults[index]["step"]}`;
    stepDescription.innerText = `${auditResults[index]["description"]}`;

    mainSectionHeader.appendChild(stepTitle);
    mainSectionHeader.appendChild(stepDescriptionButton);
    resultsControls.appendChild(passResultButton);
    resultsControls.appendChild(failResultButton);
    stepsToggleControls.appendChild(previousToggleButton);
    stepsToggleControls.appendChild(progressIndicatorContainer);
    stepsToggleControls.appendChild(nextToggleButton);

    mainSection.appendChild(mainSectionHeader);
    if (firstAudit === true) {
        mainSection.appendChild(stepDescription);
    } else {
        toggleStepDescription(false);
    }
    mainSection.appendChild(actionItemsHeader);
    mainSection.appendChild(actionItemsContainer);
    mainSection.appendChild(resultsIndicator);
    mainSection.appendChild(resultsControls);
    mainSection.appendChild(stepsToggleControls);
    toggleIndicator(index);
}

function appendActionItem() {
    (auditResults[index]["actionItems"]).push("");

    while (actionItemsContainer.lastChild) {
        actionItemsContainer.lastChild.remove();
    }

    let actionItems = auditResults[index]["actionItems"];
    for (let index in actionItems) {
        let actionItem = document.createElement("input");
        actionItem.type = "text";
        actionItem.value = actionItems[index];
        actionItem.classList.add("action-item");

        actionItemsContainer.appendChild(actionItem);
    }
}

function toggleResult(input) {
    if (input === true) {
        mainSection.classList.remove("failed-result-background");
        mainSection.classList.add("passed-result-background");

        mainSectionHeader.classList.remove("failed-result-background");
        mainSectionHeader.classList.add("passed-result-background");

        actionItemsHeader.classList.remove("failed-result-background");
        actionItemsHeader.classList.add("passed-result-background");

        resultsIndicator.classList.remove("failed-result-foreground");
        resultsIndicator.classList.add("passed-result-foreground");

        resultsIndicator.innerText = "Area PASSED step audit";

    } else if (input === false) {
        mainSection.classList.remove("passed-result-background");
        mainSection.classList.add("failed-result-background");

        mainSectionHeader.classList.remove("passed-result-background");
        mainSectionHeader.classList.add("failed-result-background");

        actionItemsHeader.classList.remove("passed-result-background");
        actionItemsHeader.classList.add("failed-result-background");

        resultsIndicator.classList.remove("passed-result-foreground");
        resultsIndicator.classList.add("failed-result-foreground");

        resultsIndicator.innerText = "Area FAILED step audit";
    }
    else {
        mainSection.classList.remove("passed-result-background");
        mainSection.classList.remove("failed-result-background");

        mainSectionHeader.classList.remove("passed-result-background");
        mainSectionHeader.classList.remove("failed-result-background");

        actionItemsHeader.classList.remove("passed-result-background");
        actionItemsHeader.classList.remove("failed-result-background");

        resultsIndicator.classList.remove("passed-result-background");
        resultsIndicator.classList.remove("failed-result-background");
        resultsIndicator.innerText = "";
    }

    auditResults[index]["result"] = input;
}

function toggleIndicator(index) {
    for (let index = 0; document.getElementsByClassName("progress-indicator").length > index; index++) {
        document.getElementsByClassName("progress-indicator")[index].classList.remove("selected-progress-indicator");
    }
    document.getElementsByClassName("progress-indicator")[index].classList.add("selected-progress-indicator");
}

startButton.addEventListener("click", () => {
    startButton.remove();
    welcomePrompt.remove();

    makeAuditStep();
})

stepDescriptionButton.addEventListener("click", () => {
    toggleStepDescription();
})

addActionItemButton.addEventListener("click", () => {
    appendActionItem();
})

passResultButton.addEventListener("click", () => {
    toggleResult(true);
})

failResultButton.addEventListener("click", () => {
    toggleResult(false);
})

nextToggleButton.addEventListener("click", () => {
    if (auditResults.length - 1 < index + 1) {
        index = 0;
    } else {
        index += 1;
    }

    makeAuditStep(index);
    toggleResult(auditResults[index]["result"]);
});

previousToggleButton.addEventListener("click", () => {
    if (index - 1 < 0) {
        index = auditResults.length - 1;
    } else {
        index -= 1;
    }

    makeAuditStep(index);
    toggleResult(auditResults[index]["result"]);
});