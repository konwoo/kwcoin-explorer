import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import sum from "lodash.sum";
import { makeDateSexy } from "../../utils";
import {
  Card,
  BlocksHeader,
  BlocksRow,
} from "Components/Shared";

const TableContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
`;

const BlocksPresenter = ({blocks}) => (
  <Fragment>
    <TableContainer>
      <h2>ALL Blocks</h2>
      <Card>
        <BlocksHeader/>
        {blocks.map((block, index) => (
          <BlocksRow
            index={block.index}
            hash={block.hash}
            timestamp={block.timestamp}
            difficulty={block.difficulty}
            key={index}
            />
        ))}
      </Card>
    </TableContainer>
  </Fragment>
)
export default BlocksPresenter;
