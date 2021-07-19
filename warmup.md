Assume you have an array of X integers.
Write down all the possible solutions, you can think of, in order to find the minimum integer within the array, e.g. [22,4,7,12,19,3]

Algorithm 1.
1. Get the first number and store to minNo, minNo = 3
2. Go to the next number and 
	2.1. if next number >= minNo repeat 2
	2.2. if next number <= minNo store to minNo and repeat 2
    2.3 until no more elements

Algorithm 2.
1. Get the last number and store to minNo, minNo = 3
2. Go to the previous number and 
	2.1. if previous number >= minNo repeat 2
	2.2. if previous number <= minNo store to minNo and repeat 2
    2.3 until no more elements

Algorithm 3.
1. Sort the array ASC
2. The first element is the min

Algorithm 4.
1. Sort the array DESC
2. The last element is the min
