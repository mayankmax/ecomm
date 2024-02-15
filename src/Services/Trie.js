class TrieNode {
  constructor() {
    this.children = new Array(26);
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
      this.root = new TrieNode();
  }

  insert(key) {
      let node = this.root;
      for (let char of key) {
          let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
          if (!node.children[index]) {
              node.children[index] = new TrieNode();
          }
          node = node.children[index];
      }
      node.isEnd = true;
  }

  search(key) {
      let node = this.root;
      for (let char of key) {
          let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
          if (!node.children[index]) {
              return false;
          }
          node = node.children[index];
      }
      return node.isEnd;
  }
}

module.exports = Trie;
