const graph = document.querySelector(".graph");
const snsp = document.querySelector(".snsp");
const lr = document.querySelector(".lr");
const sn_input = document.querySelector("#sensitivity");
const sp_input = document.querySelector("#specificity");
const lrn_input = document.querySelector("#lrn");
const lrp_input = document.querySelector("#lrp");
var specificity = 80;
var sensitivity = 80;
var lrn = 0.25;
var lrp = 4;

function calculateSn(lrn, lrp) {

}

function calculateSp(lrn, lrp) {

}

function calculateLRP(sn, sp) {
    return Math.round((sn * 1000) / (1000 * (100 - sp)) * 1000) / 1000;
}

function calculateLRN(sn, sp) {
    return Math.round((1000 * (100 - sn)) / (sp * 1000) * 1000) / 1000;
}

function graySn() {
    
}

function grayLR() {
    lrn = calculateLRN(sensitivity, specificity);
    lrp = calculateLRP(sensitivity, specificity);
    lrn_input.value = lrn;
    lrp_input.value = lrp;
    if (!lr.classList.contains("gray")) {
        lr.classList.add("gray");
    }
    snsp.classList.remove("gray");
}

function reset() {
    snsp.classList.remove("gray");
    lr.classList.remove("gray");
    sn_input.value = "";
    sp_input.value = "";
    lrn_input.value = "";
    lrp_input.value = "";
}

sp_input.addEventListener("change", function() {
    if (!this.value) {
        specificity = 80;
        if (!sn_input.value) {
            reset();
        }
    } else {
        specificity = Number(this.value);
        grayLR();
    }
    makeGraph(box = graph, sn = sensitivity, sp = specificity);
})

sn_input.addEventListener("change", function() {
    if (!this.value) {
        sensitivity = 80;
        if (!sp_input.value) {
            reset();
        }
    } else {
        sensitivity = Number(this.value);
        grayLR();
    }
    makeGraph(box = graph, sn = sensitivity, sp = specificity);
})

makeGraph(box = graph, sn = sensitivity, sp = specificity);