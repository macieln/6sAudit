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
let stepInformationButton = document.createElement("button");
let stepDescription = document.createElement("p");
let actionItemsHeader = document.createElement("header");
let actionItemsTitle = document.createElement("h3");
let addActionItemButton = document.createElement("button");
let actionItemsContainer = document.createElement("div");

startButton.id = "start-button";
startButton.innerText = "START";
welcomePrompt.innerText = "Press START to begin area audit";
welcomePrompt.id = "welcome-prompt";
mainSectionHeader.id = "main-section-header";
mainSectionHeader.classList.add("no-validation-background");
stepTitle.id = "step-title";
stepInformationButton.id = "step-information-button";
stepInformationButton.innerText = "X";
stepDescription.id = "step-description";
actionItemsHeader.id = "action-items-header";
actionItemsHeader.classList.add("no-validation-background");
actionItemsTitle.id = "action-items-title";
actionItemsTitle.innerText = "Action Items";
addActionItemButton.id = "add-action-item-button";
addActionItemButton.innerText = "+";
actionItemsContainer.id = "action-items-container";

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

startButton.addEventListener("click", () => {
    startButton.remove();
    welcomePrompt.remove();

    makeAuditStep();

//     mainSectionContent.remove();
//
//     mainSection.appendChild(mainSectionHeader);
//     mainSectionHeader.classList.add("no-validation-background");
//
//     mainSection.appendChild(actionItemsHeader);
//     mainSection.appendChild(mainSectionContent);
//
//     mainSectionContent.appendChild(actionItems);
//     actionItemsHeader.classList.add("no-validation-background");
//
//     mainSection.appendChild(resultsIndicator);
//     mainSection.appendChild(resultsValidationControls);
//     mainSection.appendChild(stepsToggleControls);
//
//     toggleStepInformation();
//     toggleIndicator(index);
})

function toggleStepInformation() {
    if (stepInformationButton.innerText === "X") {
        stepInformationButton.innerText = "i";

        stepDescription.remove();
        // actionItemsHeader.remove();
        // actionItems.remove();
//
//         stepDescription.innerText = `${auditResults[index]["description"]}`;
//
//         mainSection.appendChild(stepDescription);
//         mainSection.appendChild(actionItemsHeader);
//         mainSectionContent.appendChild(actionItems);
    } else {
        stepInformationButton.innerText = "X";

        actionItemsHeader.remove();
        actionItemsContainer.remove();

        mainSection.appendChild(stepDescription);
        mainSection.appendChild(actionItemsHeader);
        mainSection.appendChild(actionItemsContainer);

//         stepDescription.remove();
//         actionItemsHeader.remove();
//         actionItems.remove();
//
//         mainSectionContent.appendChild(actionItemsHeader);
//         mainSectionContent.appendChild(actionItems);
//
//         stepDescription.innerText = ``;
    }
//     // if (toggle) {
//     //     if (stepInformationButton.innerText === "X";)
//     //
//     //
//     //     stepInformationButton.innerText = "X";
//     //     // mainSectionContent.appendChild(stepDescription);
//     //
//     //
//     //     console.log(`${toggle} CHEESE`);
//     //
//     // } else {
//     //     // mainSectionContent.appendChild(stepDescription);
//     //     stepInformationButton.innerText = "i";
//     //     stepDescription.innerText = "";
//     //     // stepDescription.innerText = `${auditResults[index]["description"]}`;
//     //
//     //     console.log(`${toggle} CHEESE`);
//     // }
}

function makeAuditStep() {
    stepTitle.innerText = `Step ${index + 1}: ${auditResults[index]["step"]}`;
    stepDescription.innerText = `${auditResults[index]["description"]}`;

    mainSectionHeader.appendChild(stepTitle);
    mainSectionHeader.appendChild(stepInformationButton);

    mainSection.appendChild(mainSectionHeader);
    mainSection.appendChild(stepDescription);
    mainSection.appendChild(actionItemsHeader);
    mainSection.appendChild(actionItemsContainer);

//     mainSectionTitle.remove();
//     stepInformationButton.remove();
//     stepDescription.innerText = "";
//
//     mainSectionTitle.innerText = `Step ${index + 1}: ${auditResults[index]["step"]}`;
//
//     let indicator = document.getElementsByClassName("progress-indicator")[index]
//     // indicator.classList.remove("completed-progress-indicator");
//     // indicator.classList.add("completed-progress-indicator");
//
//     mainSectionHeader.appendChild(mainSectionTitle);
//     mainSectionHeader.appendChild(stepInformationButton);
//
//     mainSectionContent.appendChild(stepDescription);
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

stepInformationButton.addEventListener("click", () => {
    toggleStepInformation();
})

addActionItemButton.addEventListener("click", () => {
    appendActionItem();
})

//
// let mainSectionContent = document.getElementById("main-section-content");

// let welcomePrompt = document.getElementById("welcome-prompt");
//

//
// let actionItems = document.createElement("div");
// actionItems.id = "action-items";
//
// let actionItemsHeader = document.createElement("header");
// actionItemsHeader.id = "action-items-header";
//
// let actionItemsTitle = document.createElement("h3");
// actionItemsTitle.id = "action-items-title";
// actionItemsTitle.innerText = "Action Items";

// let resultsIndicator = document.getElementById("results-indicator");
//
// let resultsValidationControls = document.getElementById("results-validation-controls");
// let passValidationButton = document.getElementById("pass-validation-button");
// let failValidationButton = document.getElementById("fail-validation-button");
//
// let stepsToggleControls = document.getElementById("steps-toggle-controls");
// let previousToggleButton = document.getElementById("previous-toggle-button");
// let nextToggleButton = document.getElementById("next-toggle-button");
// let progressIndicators = document.getElementById("progress-indicators");
//
// mainSectionHeader.remove();
// resultsIndicator.remove();
// resultsValidationControls.remove();
// stepsToggleControls.remove();

//
// function toggleResult(input) {
//     if (input === true) {
//         auditResults[index]["result"] = input;
//
//         mainSectionHeader.classList.remove("failed-validation-background");
//         mainSectionHeader.classList.add("passed-validation-background");
//
//         actionItemsHeader.classList.remove("failed-validation-background");
//         actionItemsHeader.classList.add("passed-validation-background");
//
//         resultsIndicator.classList.remove("failed-validation-foreground");
//         resultsIndicator.classList.add("passed-validation-foreground");
//         resultsIndicator.innerText = "Area PASSED step audit";
//
//         mainSection.classList.remove("failed-validation-background");
//         mainSection.classList.add("passed-validation-background");
//
//     } else if (input === false) {
//         auditResults[index]["result"] = input;
//
//         mainSectionHeader.classList.remove("failed-validation-background");
//         mainSectionHeader.classList.add("failed-validation-background");
//
//         actionItemsHeader.classList.remove("passed-validation-background");
//         actionItemsHeader.classList.add("failed-validation-background");
//
//         resultsIndicator.classList.remove("no-validation-foreground");
//         resultsIndicator.classList.remove("passed-validation-foreground");
//         resultsIndicator.classList.add("failed-validation-foreground");
//         resultsIndicator.innerText = "Area FAILED step audit";
//
//         mainSection.classList.remove("passed-validation-background");
//         mainSection.classList.add("failed-validation-background");
//
//     } else {
//         mainSectionHeader.classList.remove("failed-validation-background");
//         mainSectionHeader.classList.remove("passed-validation-background");
//
//         actionItemsHeader.classList.remove("passed-validation-background");
//         actionItemsHeader.classList.remove("failed-validation-background");
//
//         resultsIndicator.classList.remove("passed-validation-foreground");
//         resultsIndicator.classList.remove("failed-validation-foreground");
//         resultsIndicator.innerText = "";
//
//         mainSection.classList.remove("passed-validation-background");
//         mainSection.classList.remove("failed-validation-background");
//     }
// }
//

//
// function toggleIndicator(index) {
//     for (let index = 0; document.getElementsByClassName("progress-indicator").length > index; index++) {
//         document.getElementsByClassName("progress-indicator")[index].classList.remove("selected-progress-indicator");
//     }
//     document.getElementsByClassName("progress-indicator")[index].classList.add("selected-progress-indicator");
// }

// passValidationButton.addEventListener("click", () => {
//     toggleResult(true);
//     // setTimeout(() => {
//     //     nextToggleButton.click();
//     // }, 1500)
// })
//
// failValidationButton.addEventListener("click", () => {
//     toggleResult(false);
//     // setTimeout(() => {
//     //     nextToggleButton.click();
//     // }, 1500)
// })
//
// nextToggleButton.addEventListener("click", () => {
//     if (auditResults.length - 1 < index + 1) {
//         index = 0;
//     } else {
//         index += 1;
//     }
//
//     makeAuditStep(index);
//     toggleStepInformation();
//     toggleResult(auditResults[index]["result"]);
//     toggleIndicator(index);
// });
//
// previousToggleButton.addEventListener("click", () => {
//     if (index - 1 < 0) {
//         index = auditResults.length - 1;
//     } else {
//         index -= 1;
//     }
//
//     makeAuditStep(index);
//     toggleStepInformation();
//     toggleResult(auditResults[index]["result"]);
//     toggleIndicator(index);
// });

// // progressIndicatorContainerEL.id = "progress-indicator-container";
// //
// // for (let index = 0; auditResults.length - 1 >= index; index++) {
// //     let element = document.createElement("div");
// //     element.className = "progress-indicator";
// //     progressIndicatorContainerEL.appendChild(element);
// //
// //     progressIndicatorEls.push(element);
// // }