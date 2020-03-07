import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

import { theme } from "../../config";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const FolderLink = styled(Link)`
  text-decoration: none;
  font-size: 22px;
  margin: 0 3px;
  color: ${props => props.theme.link.color};
`;

const FolderTitle = styled.span`
  font-size: 22px;
  margin: 0 3px;
  color: #1B2733;
`;

const Separator = styled(FaAngleRight).attrs({
  size: "15px"
})`
  margin: 0 3px;
  color: #687892;
`;

const Breadcrumbs = ({ folder }) => {
  const levels = folder.split("/").slice(1);

  const subpaths = levels.map((l, i) => {
    const parentFolders = levels.filter((_l, idx) => idx < i);
    const parentPaths =
      "/file-manager/" +
      (parentFolders.length > 0 ? parentFolders.join("/") + "/" : "");

    return { text: l, path: parentPaths + l };
  });

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {folder === "/" ? (
          <FolderTitle>All Files</FolderTitle>
        ) : (
          <React.Fragment>
            <FolderLink to="/file-manager">All Files</FolderLink>
            <Separator />
          </React.Fragment>
        )}
        {subpaths.map(
          ({ text, path }, i) =>
            i === subpaths.length - 1 ? (
              <FolderTitle key={i}>{text}</FolderTitle>
            ) : (
              <React.Fragment key={i}>
                <FolderLink to={path}>{text}</FolderLink>
                <Separator />
              </React.Fragment>
            )
        )}
      </Container>
    </ThemeProvider>
  );
};

export default Breadcrumbs;
