const graph = document.querySelector(".graph");
const sn_input = document.querySelector("#sensitivity");
const sp_input = document.querySelector("#specificity");
var sp = 80;
var sn = 80;

sp_input.addEventListener("blur", function() {
    if (!this.value) {
        sp = 80;
    } else {
        sp = Number(this.value);
    }
    makeGraph();
})

sn_input.addEventListener("blur", function() {
    if (!this.value) {
        sn = 80;
    } else {
        sn = Number(this.value);
    }
    makeGraph();
})

makeGraph();

function makeGraph() {
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
            color: "rgb(87, 188, 144)"
        }
    };
    
    var npv = {
        x: npv_x,
        y: npv_y,
        name: "Test (-)",
        line: {
            color: "rgb(1, 82, 73)"
        }
    };
    
    var layout = {
        xaxis: {
            title: {
                text: "Pre-Test Probability"
            }
        },
        yaxis: {
            title: {
                text: "Post-Test Probability"
            }
        },
        margin: { 
            t: 20,
            b: 45
        }
    }

    var config = {
        modeBarButtonsToRemove: ["zoom2d", "pan2d", "zoomIn2d", "zoomOut2d", "autoscale"]
    }

    var data = [ppv, npv];
    
    Plotly.newPlot(graph, data, layout, config);
}

