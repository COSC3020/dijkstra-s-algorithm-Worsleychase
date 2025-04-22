# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

# Solution

First I initialize two arrays that are the size of the number of vertices (n), taking O(n). The enqueue method iterates over the elements and finds the correct index (according to its priority) to place the value, this means that it takes linear time, O(n). However, the total number of enqueue calls is O(m) where m is the number of edges. This means that our overall complexity is $\Theta(m \cdot n)$ which (assuming very large connected graph) simplifies to $\Theta(n^2)$.

# Disclaimer

~~I didn't know what to assume the complexity of the sort() method was, so I used [this](https://stackoverflow.com/questions/57763205/what-is-array-prototype-sort-time-complexity), and am just assuming it has complexity O(n logn).~~(Not used anymore, here just in case)

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
