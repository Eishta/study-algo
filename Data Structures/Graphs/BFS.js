function BFS(start, graph){
    let visited = {}, queue = [start];
     visited[start] = true;
    while(queue.length){
        let node = queue.shift();
        for(let neighbour of graph[node].neighbours){
            if(!visited[neighbour]){
                visited[neighbour]=true;
                queue.push(neighbour)
            }
        }
    }
}