import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FileCard from '../file-card/FileCard';
import { File } from '@dev-transactions-fe-monorepo/libs/files';

const FilesGrid = (props: { files: File[] }) => {
  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4} xl={5}>
        {props.files.map((file, index) => (
          <Col key={index} className="mb-4">
            <FileCard file={file} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FilesGrid;
