// https://www.educative.io/blog/data-structures-tutorial-advanced


// DELETE KEY
// 1. Key may not be there in trie. Delete operation should not modify trie.
// 2. Key present as unique key (no part of key contains another key (prefix), nor the key itself is prefix of another key in trie). Delete all the nodes.
// 3. Key is prefix key of another long key in trie. Unmark the leaf node.
// 4. Key present in trie, having atleast one other key as prefix key. Delete nodes from end of key until first leaf node of longest prefix key.