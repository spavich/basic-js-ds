const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
	constructor(){
		this.rootNode = null;
	}

  root() {
    return this.rootNode;
  }

  add(data) {
		this.rootNode = addEl(this.rootNode, data);

    function addEl(node, data) {
      if (!node) return new Node(data);

      (data > node.data) ? node.right = addEl(node.right, data) : node.left = addEl(node.left, data);

      return node;
    }
  }

  has(data) {
		return (this.find(data) === null) ? false : true;
  }

  find(data) {
    return findEl(this.rootNode, data);

    function findEl(node, data) {
      if (!node) return null;
      if (node.data === data) return node;
      return (data > node.data) ? findEl(node.right, data) : findEl(node.left, data);
    }
  }

  remove(data) {
  }

  min() {
    if (!this.rootNode) return null;

		while(this.rootNode.left) {
      this.rootNode = this.rootNode.left;
    }

    return this.rootNode.data;
  }

  max() {
    if (!this.rootNode) return null;

    while(this.rootNode.right) {
      this.rootNode = this.rootNode.right;
    }

    return this.rootNode.data;
  }
}

module.exports = {
  BinarySearchTree
};