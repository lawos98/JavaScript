const body = document.querySelector("body");

function setStyle() {
    body.style.margin="0";
    body.style.fontSize="1.2em"
    
    let aside = document.querySelector("aside");
    aside.style.float = "right";

    let main = document.querySelector("main");
    main.style.clear = "left";

    let nav = document.querySelector("nav");
    nav.style.width = "18vw";
    nav.style.float = "left";
    nav.style.justifyContent="flex-end"
    
    let azure = document.querySelectorAll(".azure");
    for (i = 0; i < azure.length; i++) {
        azure[i].style.background = "#EFF";
        azure[i].style.padding = "0.5rem";
        azure[i].style.border = "1px solid #A8A8A8";
        azure[i].style.boxShadow = "black 0 0 5px";
        azure[i].style.margin = "1rem";
    }
}



function reformat(node) {
    node.style = "";
    for (let i = 0; i < node.children.length; i++) {
        node.children[i].style = "";

        if (node.children[i].children.length !== 0) {
            reformat(node.children[i]);
        }
    }
};

function deleteStyle() {
    reformat(body);
}