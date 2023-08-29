const graph = document.querySelector(".graph");
const lrn_input = document.querySelector("#lrn");
const lrp_input = document.querySelector("#lrp");
var lrn = 0.25;
var lrp = 4;
var sensitivity = calculateSn(lrn, lrp);
var specificity = calculateSp(lrn, lrp);

function calculateSn(lrn, lrp) {
    return (lrp * lrn - lrp) / (lrn - lrp) * 100;
}

function calculateSp(lrn, lrp) {
    return (1 - lrp) / (lrn - lrp) * 100;
}

lrp_input.addEventListener("change", function() {
    if (!this.value) {
        lrp = 4;
    } else {
        lrp = Number(this.value);
    }
    sensitivity = calculateSn(lrn, lrp);
    specificity = calculateSp(lrn, lrp);
    makeGraph(box = graph, sn = sensitivity, sp = specificity);
})

lrn_input.addEventListener("change", function() {
    if (!this.value) {
        lrn = 0.25;
    } else {
        lrn = Number(this.value);
    }
    sensitivity = calculateSn(lrn, lrp);
    specificity = calculateSp(lrn, lrp);
    makeGraph(box = graph, sn = sensitivity, sp = specificity);
})

makeGraph(box = graph, sn = sensitivity, sp = specificity);