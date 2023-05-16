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
    makeGraph(sn = sensitivity, sp = specificity);
})

sn_input.addEventListener("blur", function() {
    if (!this.value) {
        sensitivity = 80;
    } else {
        sensitivity = Number(this.value);
    }
    makeGraph(sn = sensitivity, sp = specificity);
})

makeGraph(sn = sensitivity, sp = specificity);

function makeGraph(sn, sp) {
    var ppv_x = [];
    var npv_x = [];
    var ppv_y = [];
    var npv_y = [];
    
    for (let i = 0; i <= 100; i++) {
        ppv_x.push(i);
        npv_x.push(i);
        ppv_y.push((100 * (sn * i) / (sn * i + (100 - sp) * (100 - i))));
        npv_y.push(100 * (1 - (sp * (100 - i)) / (sp * (100 - i) + (100 - sn) * i)));
    }
    
    var ppv = {
        x: ppv_x,
        y: ppv_y,
        name: "Test (+)",
        line: {
            color: "rgb(87, 188, 144)",
            shape: "line"
        }
    };
    
    var npv = {
        x: npv_x,
        y: npv_y,
        name: "Test (-)",
        line: {
            color: "rgb(1, 82, 73)",
            shape: "line"
        }
    };
    
    var layout = {
        xaxis: {
            title: {
                text: "Pre-Test Probability"
            },
            range: [-5, 105]
        },
        yaxis: {
            title: {
                text: "Post-Test Probability"
            },
            range: [-5, 105]
        },
        margin: { 
            t: 20,
            b: 50,
            pad: 4
        }
    }

    var config = {
        modeBarButtonsToRemove: ["zoom2d", "pan2d", "zoomIn2d", "zoomOut2d", "autoscale"]
    }

    var data = [ppv, npv];
    
    Plotly.newPlot(graph, data, layout, config);
}

