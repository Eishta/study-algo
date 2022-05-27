* Selection Sort
        Ω(n^2)	θ(n^2)	O(n^2)	 
* Bubble Sort
	Ω(n)	θ(n^2)	O(n^2)	 
* Insertion Sort
	Ω(n)	θ(n^2)	O(n^2)	 
* Heap Sort
	Ω(n log(n))	θ(n log(n))	O(n log(n))	 
* Quick Sort
	Ω(n log(n))	θ(n log(n))	O(n^2)	 
* Merge Sort
	Ω(n log(n))	θ(n log(n))	O(n log(n))	 
* Bucket Sort
	Ω(n+k)	θ(n+k)	O(n^2)	 
* Radix Sort
	Ω(nk)	θ(nk)	O(nk)	 
* Count Sort
	Ω(n+k)	θ(n+k)	O(n+k)	 


<h5>Tail Recusion and Tail call elimination</h5>
<pre> a recursive function is tail recursive if the recursive call is the last thing executed by the function. 
function print(n)
{
    if (n < 0) 
       return;
    document.write( " " + n);
 
    // The last executed statement is recursive call
    <b> print(n-1);</b>
    }
    </pre>

