// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import FilesDisplaySwitcher from '../file-display-switcher/FileDisplaySwitcher';
import _ from 'lodash';
import Chance from 'chance';
import { File } from '@eafit/FileTypes';

const chance = new Chance();

// Example files arra
const files: File[] = _.times(10, () =>
  ({ filename: chance.name(), type: chance.pickone([
    'Identification',
    'Bank Statement',
    'Utility Bill',
    'Insurance Policy',
    'Employment Contract',
    'Rental Agreement',
    'Tax Return'
  ]) , extension: chance.pickone(['.pdf', '.json', '.docx', '.txt', '.xlsx', '.pptx', '.mp3', '.mp4', '.jpg', '.png']) })
);

export function App() {
  return (
    <Container>
        <FilesDisplaySwitcher files={files}/>
    </Container>
  );
}

export default App;
