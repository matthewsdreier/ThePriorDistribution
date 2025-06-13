function makeGraph(box, sn, sp) {
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
        },
        hovertemplate: 'Pretest Probability: %{x:.1f}%<br>Posttest Probability: %{y:.1f}%'
    };
    
    var npv = {
        x: npv_x,
        y: npv_y,
        name: "Test (-)",
        line: {
            color: "rgb(1, 82, 73)",
            shape: "line"
        },
        hovertemplate: 'Pretest Probability: %{x:.1f}%<br>Posttest Probability: %{y:.1f}%'
    };

    var data = [ppv, npv];
    
    if (window.innerWidth < 750) {

        var config = {
        displayModeBar: false,
        staticPlot: true,
        toImageButtonOptions: {
            format: 'png',
            filename: 'leaf_plot',
            height: 600,
            width: 900,
            scale: 10
          }
        }
        
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
                l: 10,
                r: 5,
                pad: 4
            },
            legend: {
                x: 0.5,
                xanchor: "center",
                y: -0.2,
                "orientation": "h"
            }
        }

        Plotly.newPlot(box, data, layout, config);
    } else {
        var config = {
            modeBarButtonsToRemove: ["zoom2d", "pan2d", "zoomIn2d", "zoomOut2d", "autoscale"],
            toImageButtonOptions: {
                format: 'png',
                filename: 'leaf_plot',
                height: 600,
                width: 900,
                scale: 10
            }
        }

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

        Plotly.newPlot(box, data, layout, config);
    }
}