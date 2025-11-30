package main

type Node struct {
	Data int
	Next *Node
}

type LinkedList struct {
	Head *Node
}

// InsertFirst adds a new node at the beginning of the list
func (l *LinkedList) InsertFirst(data int) {
	l.Head = &Node{Data: data, Next: l.Head}
}

// Size returns the number of nodes in the list
func (l *LinkedList) Size() int {
	counter := 0
	node := l.Head

	for node != nil {
		counter++
		node = node.Next
	}

	return counter
}

// GetFirst returns first node (head) on the list
func (l *LinkedList) GetFirst() *Node {
	return l.Head
}

// GetLast returns the last node (tail) of the list, or nil if the list is empty
func (l *LinkedList) GetLast() *Node {
	if l.Head == nil {
		return nil
	}

	node := l.Head
	for node.Next != nil {
		node = node.Next
	}

	return node
}

// Clear removes all nodes from the list
func (l *LinkedList) Clear() {
	l.Head = nil
}

// RemoveFirst removes first node from the list
func (l *LinkedList) RemoveFirst() {
	if l.Head == nil {
		return
	}

	l.Head = l.Head.Next
}

// RemoveLast removes last node from the list
func (l *LinkedList) RemoveLast() {
	if l.Head == nil {
		return
	}

	if l.Head.Next == nil {
		l.Head = nil
		return
	}

	prev := l.Head
	node := l.Head.Next

	for node.Next != nil {
		prev = node
		node = node.Next
	}

	prev.Next = nil
}

// InsertLast adds a new node at the end of the list (new tail)
func (l *LinkedList) InsertLast(data int) {
	last := l.GetLast()

	if last != nil {
		last.Next = &Node{Data: data}
	} else {
		l.Head = &Node{Data: data}
	}
}

// GetAt return the node at the given index (0-based), or nil if out of range
func (l *LinkedList) GetAt(index int) *Node {
	counter := 0
	node := l.Head

	for node != nil {
		if counter == index {
			return node
		}
		counter++
		node = node.Next
	}

	return nil
}

// RemoveAt removes the node at the given index
func (l *LinkedList) RemoveAt(index int) {
	if l.Head == nil {
		return
	}

	if index == 0 {
		l.Head = l.Head.Next
		return
	}

	prev := l.GetAt(index - 1)
	if prev == nil || prev.Next == nil {
		return
	}

	prev.Next = prev.Next.Next
}

// InsertAt inserts a node with given data at given index.
// If index is greater than the size, it inserts at the end of the list
func (l *LinkedList) InsertAt(data, index int) {
	if l.Head == nil {
		l.Head = &Node{Data: data}
		return
	}

	if index == 0 {
		l.Head = &Node{Data: data, Next: l.Head}
		return
	}

	prev := l.GetAt(index - 1)
	if prev == nil {
		//index is out of range, insert at the end
		last := l.GetLast()
		last.Next = &Node{Data: data}
		return
	}

	node := &Node{Data: data, Next: prev.Next}
	prev.Next = node

}

// ForEach calls a function for the each node in the list, passing the node and its index
func (l *LinkedList) ForEach(fn func(node *Node, index int)) {
	node := l.Head
	i := 0
	for node != nil {
		fn(node, i)
		node = node.Next
		i++
	}
}

// NOTE: func (l *LinkedList) InsertFirst => it is pointer receiver
