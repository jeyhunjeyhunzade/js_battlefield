//What's the running time?
function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }

    return sum;
}

// growth is with respect to the input
// Constants are dropped
// O(2N) -> O(N) and this makes sense. That is because Big O is meant to describe the upper bound of the algorithm 
// (the growth of the algorithm). The constant eventually becomes irrelevant.



function sum_char_codes2(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        const charCode = n.charCodeAt(i);
        // Capital E
        if (charCode === 69) {
            return sum;
        }

        sum += charCode;
    }

    return sum;
}

// In BigO we often consider the worst case
// Especially in interviews (i have never been asked for best, average, and worst case, just worst case).

// E = 69

// Therefore any string with E in it will terminate early (unless E is the last item in the list).

// ITS STILL O(N)




//Getting at specific index
// Insertion at specific index    
// Deletion at specific index
    // => they're all O(1), because we dont walt to that position, we know witdh of our type, we know the offset, multiply them
    // together, get to that position and read it out! (same for inserting and deleting)