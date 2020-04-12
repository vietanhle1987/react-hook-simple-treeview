import React, { Component } from "react";
import styled from "styled-components";
import Tree from "./Tree";

const StyledFileExplorer = styled.div`
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
`;

const TreeWrapper = styled.div`
  width: 250px;
`;

const FileExplorer = () => {

  onSelect = (file) => setState({ selectedFile: file });
  const { selectedFile } = state;

  return (
    <StyledFileExplorer>
      <TreeWrapper>
        <Tree onSelect={onSelect} />
      </TreeWrapper>
      <div>
        {selectedFile && selectedFile.type === "file" && selectedFile.content}
      </div>
    </StyledFileExplorer>
  );
};

export default FileExplorer;
