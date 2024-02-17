// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import Container from 'react-bootstrap/Container';
import FilesGrid from '../files-grid/files-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilesDisplaySwitcher from '../file-display-switcher/FileDisplaySwitcher';
import _ from 'lodash';
import Chance from 'chance';
import { File } from '@eafit/FileTypes';

const chance = new Chance();

// Example files array
const files: File[] = _.times(10, () =>
  ({ filename: chance.name(), type: chance.animal() , extension: chance.country() })
);

export function App() {
  return (
    <Container>
      <FilesDisplaySwitcher files={files}/>
    </Container>
  );
}

export default App;
