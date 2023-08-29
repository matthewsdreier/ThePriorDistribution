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

sp_input.addEventListener("change", function() {
    if (!this.value) {
        specificity = 80;
    } else {
        specificity = Number(this.value);
    }
    makeGraph(box = graph, sn = sensitivity, sp = specificity);
})

sn_input.addEventListener("change", function() {
    if (!this.value) {
        sensitivity = 80;
    } else {
        sensitivity = Number(this.value);
    }
    makeGraph(box = graph, sn = sensitivity, sp = specificity);
})

makeGraph(box = graph, sn = sensitivity, sp = specificity);