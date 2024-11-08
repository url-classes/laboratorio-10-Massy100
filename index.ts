import { RBTree } from "./rbt";

const myRBTree: RBTree = new RBTree();
myRBTree.insert(7);
myRBTree.insert(15);
myRBTree.insert(11);
myRBTree.insert(20);
myRBTree.insert(30);
myRBTree.insert(50);
myRBTree.insert(45);

if (myRBTree.search(11) !== null) {
    console.log("Dato encontrado");
} else {
    console.log("Dato no encontrado");
}
if (myRBTree.search(10) !== null) {
    console.log("Dato encontrado");
} else {
    console.log("Dato no encontrado");
}
myRBTree.printAll();

console.log("Impresion en order ascendente:")
myRBTree.inOrderPrint();
