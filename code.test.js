const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js') + '');

const test = jsc.forall("array (pair nat nat)", function(edges) {
    let max = edges.reduce((a, b) => Math.max(a, Math.max(b[0], b[1])), 0);

    let graph = Array.from({ length: max + 1 }, () => []);
    for (let i = 0; i < edges.length; i++) {
        let [u, v] = edges[i];
        let weight = Math.floor(Math.random() * 10) + 1;
        graph[u].push([v, weight]);
    }

    let source = 0;
    let distances = dijkstra(graph, source);

    for (let u = 0; u <= max; u++) {
        for (let [v, weight] of graph[u]) {
            if (distances[u] !== Infinity) {
                if (distances[v] > distances[u] + weight) {
                    return false;
                }
            }
        }
    }

    return true;
});

jsc.assert(test, { tests: 1000 });