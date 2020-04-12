import React, { useState } from "react";
import values from "lodash/values";
import { Obj } from "prelude-ls";
import TreeNode from "./TreeNode";
const database = {
  "/root": {
    path: "/root",
    type: "folder",
    isRoot: true,
    children: ["/root/david", "/root/jslancer"],
    isOpen: false
  },
  "/root/david": {
    path: "/root/david",
    type: "folder",
    children: ["/root/david/readme.md"],
    isOpen: false
  },
  "/root/david/readme.md": {
    path: "/root/david/readme.md",
    type: "file",
    content: "Thanks for reading me me. But there is nothing here.",
  },
  "/root/jslancer": {
    path: "/root/jslancer",
    type: "folder",
    children: ["/root/jslancer/projects", "/root/jslancer/vblogs"],
    isOpen: false
  },
  "/root/jslancer/projects": {
    path: "/root/jslancer/projects",
    type: "folder",
    children: ["/root/jslancer/projects/treeview"],
    isOpen: false
  },
  "/root/jslancer/projects/treeview": {
    path: "/root/jslancer/projects/treeview",
    type: "folder",
    children: [],
    isOpen: false
  },
  "/root/jslancer/vblogs": {
    path: "/root/jslancer/vblogs",
    type: "folder",
    children: [],
    isOpen: false
  },
};
const Tree = () => {
  const [nodes, setNodes] = useState(database);

  const getRootNodes = () => {
    return values(nodes).filter((node) => node.isRoot === true);
  };

  const getChildNodes = (node) => {
    if (!node.children) return [];
    return node.children.map((path) => nodes[path]);
  };
  const onToggle = (node) =>{
    return values(nodes).map((node) => node.isOpen !== node.isOpen);
  }
  // const roodNodes = getRootNodes(nodes);

  // const onNodeSelect = node => {
  //   const { onSelect } = this.props;
  //   onSelect(node);
  // }
  const rootNodes = getRootNodes(nodes)
  console.log("OUTPUT: Tree -> rootNodes", rootNodes);
  console.log("OUTPUT: Tree -> getRootNodes(nodes)", getRootNodes(nodes));
  return (
    <>
      { rootNodes.map(node => (
          <TreeNode 
            node={node}
            getChildNodes={getChildNodes()}
            onToggle={onToggle()}
            // onNodeSelect={onNodeSelect()}
          />
        ))}
    </>
  )
  
};

export default Tree;
