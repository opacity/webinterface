import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import { capitalize } from "lodash";

import { theme } from "../../config";

const Container = styled.div``;

const FolderLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  margin: 0 3px;
`;

const FolderTitle = styled.span`
  font-size: 20px;
  margin: 0 3px;
`;

const Breadcrumbs = ({ folder }) => {
  const levels = folder.split("/").slice(1);

  const subpaths = levels.map((l, i) => {
    const parentFolders = levels.filter((_l, idx) => idx < i);
    const parentPaths =
      "/file-manager/" +
      (parentFolders.length > 0 ? parentFolders.join("/") + "/" : "");

    return { text: capitalize(l), path: parentPaths + l };
  });

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {folder === "/" ? (
          <FolderTitle>Opacity</FolderTitle>
        ) : (
          <React.Fragment>
            <FolderLink to="/file-manager">Opacity</FolderLink>
            <FolderTitle>></FolderTitle>
          </React.Fragment>
        )}
        {subpaths.map(
          ({ text, path }, i) =>
            i === subpaths.length - 1 ? (
              <FolderTitle>{text}</FolderTitle>
            ) : (
              <React.Fragment>
                <FolderLink to={path}>{text}</FolderLink>
                <FolderTitle>></FolderTitle>
              </React.Fragment>
            )
        )}
      </Container>
    </ThemeProvider>
  );
};

export default Breadcrumbs;
