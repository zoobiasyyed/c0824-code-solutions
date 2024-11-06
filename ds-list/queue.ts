export type Node<T> = {
  data: T;
  priority: number;
};

export class PriorityQueue<T = unknown> {
  nodes: Node<T>[] = [];

  /**
   * Adds a value to the queue with given priority.
   * Higher priority values are dequeued first.
   * If priority already exists, last one in is dequeued first.
   */
  enqueue(item: T, priority: number): void {
    // Not implemented
    const node = { data: item, priority };

    const index = this.nodes.findIndex((n) => n.priority <= priority);
    if (index < 0) {
      this.nodes.push(node);
    } else {
      this.nodes.splice(index, 0, node);
    }
  }

  /**
   * Removes and returns highest priority value in the queue.
   * Returns `undefined` if queue is empty.
   */
  dequeue(): T | undefined {
    if (this.nodes.length === 0) {
      return undefined;
    } else {
      const node = this.nodes.shift();
      return node ? node.data : undefined;
    }
  }

  /**
   * Returns highest priority value in the queue without removing it.
   * Returns `undefined` if queue is empty.
   */
  peek(): T | undefined {
    return this.nodes[0]?.data;
  }
}
