package main

import (
	"fmt"
)

func main() {
	list := &LinkedList{}
	list.InsertFirst(10)
	list.InsertFirst(5)
	list.InsertLast(4)
	list.InsertAt(15, 1)

	fmt.Println("Size: ", list.Size())
	list.ForEach(func(n *Node, i int) {
		fmt.Printf("Index %d: %d\n", i, n.Data)
	})

	fmt.Println("First:", list.GetFirst().Data)
	fmt.Println("Last:", list.GetLast().Data)

	list.RemoveAt(1)
	fmt.Println("After Remove(1)")
	list.ForEach(func(n *Node, i int) {
		fmt.Printf("Index %d: %d\n", i, n.Data)
	})
}
