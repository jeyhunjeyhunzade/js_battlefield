package main

import (
	"fmt"
)

func main() {
	fmt.Println("Binary Search implementation with Go!")
	nums := []int{1, 3, 4, 6, 7, 8, 9}
	target := 3

	index := BinarySearch(nums, target)

	if index != -1 {
		fmt.Printf("The target %d was found at index %d", target, index)
	} else {
		fmt.Printf("The target %d was not found in array", target)
	}
}

func BinarySearch(numArr []int, target int) int {
	l := 0
	r := len(numArr) - 1

	for l <= r {
		m := (l + r) / 2

		if numArr[m] == target {
			return m
		}

		if numArr[m] > target {
			r = m - 1
		} else {
			l = m + 1
		}
	}
	return -1
}
