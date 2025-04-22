class PriorityQueue {
    constructor() {
        this.elements = [];
    }

    isEmpty() {
        return this.elements.length == 0;
    }

    enqueue(priority, value) {
        this.elements.push({ priority, value });
        this.elements.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.elements.shift().value;
    }
}

function dijkstra(graph, sourceNode) {
    let dist = Array(graph.length).fill(Infinity);
    let visited = Array(graph.length).fill(false);
    let pq = new PriorityQueue();

    dist[sourceNode] = 0;
    pq.enqueue(0, sourceNode);

    while (!pq.isEmpty()) {
        let v = pq.dequeue();

        if (visited[v]) continue;
        visited[v] = true;

        for (let [w, weight] of graph[v]) {
            if (!visited[w]) {
                let newDist = dist[v] + weight;
                if (newDist < dist[w]) {
                    dist[w] = newDist;
                    pq.enqueue(newDist, w);
                }
            }
        }
    }
    return dist;
}
