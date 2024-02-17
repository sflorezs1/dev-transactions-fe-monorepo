import styles from './FileTypes.module.scss';

/* eslint-disable-next-line */
export interface FileTypesProps { }

export interface File {
	filename: string;
	type: string;
	extension: string;
}
