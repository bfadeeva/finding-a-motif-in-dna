const s = 'CACTTATGACTTTATGACTTATGACGTTATGACGCGTTTATGACTTTATGACAGATTATGACATCTTATGACTTATGACAAAATTATGACTTTATGACATTATGACCCTGTTATGACGGTTATGACTTTATGACATTATGACCTTTATGACAGCTTATGACAGTAAAGTTATGACGGCCCCCTCCGACGTTTATGACTTATGACTTATGACATTATGACTATTATGACTTATGACATGATTATGACTTTTATGACGCTTCACGCTCCTTATGACGGTTATGACCTATTATGACCGTTGGTTATGACTTATGACGAGTTATGACTGTTATGACAGTTATGACTTATGACCTTAGGGTTTATGACTTATGACATCTTTATGACTTATGACAATTTATGACCTCTTATGACTTATGACCGGATTATGACTTTATGACTTTATGACTTATATTTATGACATTATGACTTATGACTTATGACTTATGACTTATGACTTATGACCGTTATGACGTTATGACAGCTTTTATGACGATTATGACGTTATGACGTTTATGACTTATGACTTATGACTTTTATGACCGTCGTTCTTATGACCCAGATTATGACAACTTATGACCGTTTTATGACACCAAAAGATCCTTATGACCGTTATGACTTATGACTGTTATGACGTTATGACTCTACTCTTTATGACTTATGACTATTATGACCATTATGACTTATTATGACTTTTATGACCGGAGGTTATGACTTATGACTCTTATGACTTATGACATTATGACGGAGATCTTATGACTTATGACGTTATGACTGTTATGACCCCCCCTCTTATGACTGGCTCTCAATTTATGACAGGTATTATGACATTATGACGTTATGACTTATGACTATTTATGACGTTATGAC';
const t = 'TTATGACTT';

function allIndexOf(s, t) {
    let indices = [];
    for(let i = s.indexOf(t); i !== -1; i = s.indexOf(t, i + 1)) {
        indices.push(i);
    }
    return indices.toString().replaceAll(',', ' ');
}

console.log(allIndexOf(s, t));

/* 
let i = s.indexOf(t);: This initializes the variable i to the index of the first occurrence of t in s, 
using the indexOf method of the string s. If t is not found in s, indexOf returns -1. 
If there are multiple occurrences of t in s, this will find the leftmost (i.e., first) one.

i !== -1;: This is the condition for continuing the loop. 
If i is -1, it means that t was not found in s, 
so there's no point in continuing the loop. Otherwise, the loop will continue to find the next occurrence of t.

i = s.indexOf(t, i + 1): This is the update statement for the loop. 
It updates the value of i to the index of the next occurrence of t in s, 
starting from the position immediately after the previous occurrence. 
This is done by calling indexOf on s with two arguments: the first is the substring t to search for, 
and the second is the starting index for the search, which is i + 1. 
By starting the search from the index immediately after the previous occurrence of t, 
we can find the next occurrence in s.

So the loop starts by finding the first occurrence of t in s, 
then continues to find the next occurrence until there are no more. T
he indices of all occurrences are pushed to the locations array, 
which is returned by the function at the end. */