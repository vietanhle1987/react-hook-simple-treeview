import React, { useState } from "react";
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
  const [data, setData] = useState("");
  const onSelect = (file) => {
    return setData(file);
  };

  return (
    <StyledFileExplorer>
      <TreeWrapper>
        <Tree onSelect={onSelect} />
      </TreeWrapper>
      <div>{data && data.type === "file" && data.content}</div>
    </StyledFileExplorer>
  );
};

export default FileExplorer;
