const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addValue(this.rootNode, data);

    function addValue(node, value) {
      if(node === null) {
        return new Node(value);
      } else {
        if(value > node.data) {
          node.right = addValue(node.right, value);
        } else {
          node.left = addValue(node.left, value);
        }
      }
      return node;
    }
  }

  has(data) {
    return searchNode(this.rootNode, data);
  
    function searchNode(node, value) {
      if(node === null) return false;

      if(node.data === value) return true;

      if(node.data < value) {
        return searchNode(node.right, value);
      } else {
        return searchNode(node.left, value);
      }
    }
  }

  find(data) {
    return findNode(this.rootNode, data);
  
    function findNode(node, value) {
      if(node === null) return null;

      if(node.data === value) return node;

      if(node.data < value) {
        return findNode(node.right, value);
      } else {
        return findNode(node.left, value);
      }
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);
  
    function removeNode(node, value) {
      if(node === null) return null;

      if(node.data === value) {
        if(node.right === null && node.left === null) return null;
        if(node.right === null) return node.left;
        if(node.left === null) return node.right;

        let maxFromLeft = node.left;
        while(maxFromLeft.right !== null) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;
        node.left = removeNode(node.left, maxFromLeft.data);

        return node;

      } else if (node.data < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        node.left = removeNode(node.left, value);
        return node;
      }
    }
  }

  min() {
    let minFromLeft = this.rootNode;
    while(minFromLeft.left !== null) {
      minFromLeft = minFromLeft.left;
    }
    return minFromLeft.data;
  }

  max() {
    let maxFromRight = this.rootNode;
    while(maxFromRight.right !== null) {
      maxFromRight = maxFromRight.right;
    }
    return maxFromRight.data;
  }
}

module.exports = {
  BinarySearchTree
};