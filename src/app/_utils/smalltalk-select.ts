"use strict";

require("smalltalk/css/smalltalk.css");

const currify = require("currify");
const store = require("fullstore");
const createElement = require("@cloudcmd/create-element");

const keyDown = currify(keyDown_);

const BUTTON_OK_CANCEL = {
    ok: "OK",
    // tslint:disable-next-line: object-literal-sort-keys
    cancel: "Cancel",
};

const zIndex = store(100);

function select(title, msg, choosableOptions, options) {
    let optionsHTML = "";
    choosableOptions.forEach((option) => {
        optionsHTML += `<div class="card selectcard" data-value='${JSON.stringify(option.value)}'>
          <h5 class="card-header">${option.name}</h5>
          <div class="card-body">
            ${option.description}
          </div>
        </div>`;
      });
    const valueStr = `<input style="display: none !important;" value="" data-name="js-input">${optionsHTML}`;
    const buttons = BUTTON_OK_CANCEL;

    return showDialog(title, msg, valueStr, buttons, options);
}

export { select };

function getTemplate(title, msg, value, buttons) {
    const encodedMsg = msg.replace(/\n/g, "<br>");

    return `<div class="page">
        <div data-name="js-close" class="close-button"></div>
        <header>${ title }</header>
        <div class="content-area">${ encodedMsg }
        <div>${ value }</div></div>
        <div class="action-area">
            <div class="button-strip">
                ${parseButtons(buttons)}
            </div>
        </div>
    </div>`;
}

function parseButtons(buttons) {
    const names = Object.keys(buttons);
    const parse = currify((btns, name, i) => `<button
            tabindex=${i}
            data-name="js-${name.toLowerCase()}">
            ${btns[name]}
        </button>`);

    return names
        .map(parse(buttons))
        .join("");
}

function showDialog(title, msg, value, buttons, options) {
    const ok = store();
    const cancel = store();

    const closeButtons = [
        "cancel",
        "close",
        "ok",
    ];

    const promise = new Promise((resolve, reject) => {
        const noCancel = options && options.cancel === false;
        // tslint:disable-next-line: no-empty
        const empty = () => {};
        const rejectError = () => reject(Error());

        ok(resolve);
        cancel(noCancel ? empty : rejectError);
    });

    const innerHTML = getTemplate(title, msg, value, buttons);

    const dialog = createElement("div", {
        className: "smalltalk",
        innerHTML,
        style: `z-index: ${zIndex(zIndex() + 1)}`,
    });

    for (const el of find(dialog, ["ok", "input"])) {
        el.focus();
    }

    for (const el of find(dialog, ["input"])) {
        el.setSelectionRange(0, value.length);
    }

    addListenerAll("click", dialog, closeButtons, (event) => {
        closeDialog(event.target, dialog, ok(), cancel());
    });

    document.querySelectorAll(".selectcard").forEach((el) => {
        el.addEventListener("click", (e) => {
            // @ts-ignore
            const elem = e.target.closest(".selectcard");
            if (elem.classList.contains("selected")) {
                elem.classList.remove("selected");
                for (const element of find(dialog, ["input"])) {
                    element.value = "";
                }
            } else {
                const val = elem.getAttribute("data-value");
                for (const element of find(dialog, ["input"])) {
                    element.value = val;
                }
                document.querySelectorAll(".selectcard.selected").forEach((element) => {
                    element.classList.remove("selected");
                });
                elem.classList.add("selected");
            }
        });
    });

    for (const event of ["click", "contextmenu"]) {
        dialog.addEventListener(event, (e) => {
            e.stopPropagation();
            for (const el of find(dialog, ["ok", "input"])) {
                el.focus();
            }
        });
    }

    dialog.addEventListener("keydown", keyDown(dialog, ok(), cancel()));

    return Object.assign(promise, {
        dialog,
        ok,
    });
}

function keyDown_(dialog, ok, cancel, event) {
    const KEY = {
        DOWN  : 40,
        ENTER : 13,
        ESC   : 27,
        LEFT  : 37,
        RIGHT : 39,
        TAB   : 9,
        UP    : 38,
    };

    const {keyCode} = event;
    const el = event.target;

    const namesAll = ["ok", "cancel", "input"];
    const names = find(dialog, namesAll)
        .map(getDataName);

    switch (keyCode) {
    case KEY.ENTER:
        closeDialog(el, dialog, ok, cancel);
        event.preventDefault();
        break;

    case KEY.ESC:
        remove(dialog);
        cancel();
        break;

    case KEY.TAB:
        if (event.shiftKey) {
            tab(dialog, names);
        }

        tab(dialog, names);
        event.preventDefault();
        break;

    default:
        ["left", "right", "up", "down"].filter((name) => {
            return keyCode === KEY[name.toUpperCase()];
        }).forEach(() => {
            changeButtonFocus(dialog, names);
        });

        break;
    }

    event.stopPropagation();
}

function getDataName(el) {
    return el
        .getAttribute("data-name")
        .replace("js-", "");
}

function changeButtonFocus(dialog, names) {
    const active = document.activeElement;
    const activeName = getDataName(active);
    const isButton = /ok|cancel/.test(activeName);
    const count = names.length - 1;
    const getName = (activNm) => {
        if (activNm === "cancel") {
            return "ok";
        }

        return "cancel";
    };

    if (activeName === "input" || !count || !isButton) {
        return;
    }

    const name = getName(activeName);

    for (const el of find(dialog, [name])) {
        el.focus();
    }
}

const getIndex = (count, index) => {
    if (index === count) {
        return 0;
    }

    return index + 1;
};

function tab(dialog, names) {
    const active = document.activeElement;
    const activeName = getDataName(active);
    const count = names.length - 1;

    const activeIndex = names.indexOf(activeName);
    const index = getIndex(count, activeIndex);

    const name = names[index];

    for (const el of find(dialog, [name])) {
        el.focus();
    }
}

function closeDialog(el, dialog, ok, cancel) {
    const name = el
        .getAttribute("data-name")
        .replace("js-", "");

    if (/close|cancel/.test(name)) {
        cancel();
        remove(dialog);
        return;
    }

    const value = find(dialog, ["input"])
        .reduce((v, elem) => elem.value, null);
    ok(JSON.parse(value));
    remove(dialog);
}

function find(element, names) {
    const elements = names.map((name) => element.querySelector(`[data-name="js-${ name }"]`)).filter(Boolean);

    return elements;
}

function addListenerAll(event, parent, elements, fn) {
    for (const el of find(parent, elements)) {
        el.addEventListener(event, fn);
    }
}

function remove(dialog) {
    const {parentElement} = dialog;

    if (parentElement) {
        parentElement.removeChild(dialog);
    }
}
