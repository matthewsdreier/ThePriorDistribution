const graph = document.querySelector(".graph");
const sn_input = document.querySelector("#sensitivity");
const sp_input = document.querySelector("#specificity");
var specificity = 80;
var sensitivity = 80;

sp_input.addEventListener("blur", function() {
    if (!this.value) {
        specificity = 80;
    } else {
        specificity = Number(this.value);
    }
    makeGraph(box = graph, sn = sensitivity, sp = specificity);
})

sn_input.addEventListener("blur", function() {
    if (!this.value) {
        sensitivity = 80;
    } else {
        sensitivity = Number(this.value);
    }
    makeGraph(box = graph, sn = sensitivity, sp = specificity);
})

makeGraph(box = graph, sn = sensitivity, sp = specificity);
