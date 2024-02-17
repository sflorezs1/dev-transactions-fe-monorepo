import styles from './FileTypes.module.scss';

/* eslint-disable-next-line */
export interface FileTypesProps { }

export interface File {
	filename: string;
	type: string;
	extension: string;
}

export const getIconClass =(extension: string): string => {
	switch(extension) {
	  case '.pdf': return 'bi-file-earmark-pdf-fill';
	  case '.json': return 'bi-file-earmark-code-fill';
	  case '.docx': return 'bi-file-earmark-word-fill';
	  case '.txt': return 'bi-file-earmark-text-fill';
	  case '.xlsx': return 'bi-file-earmark-excel-fill';
	  case '.pptx': return 'bi-file-earmark-ppt-fill';
	  case '.mp3': return 'bi-file-earmark-music-fill';
	  case '.mp4': return 'bi-file-earmark-play-fill';
	  case '.jpg': case '.png': return 'bi-file-earmark-image-fill';
	  default: return 'bi-file-earmark-fill'; // Generic file icon for other extensions
	}
  }

export const getSubIconClass = (documentType: string): string  => {
	switch (documentType) {
	  case 'Identification': return 'bi-person-badge-fill';
	  case 'Bank Statement': return 'bi-bank2';
	  case 'Utility Bill': return 'bi-lightbulb-fill';
	  case 'Insurance Policy': return 'bi-file-earmark-medical-fill';
	  case 'Employment Contract': return 'bi-file-earmark-text-fill';
	  case 'Rental Agreement': return 'bi-file-earmark-richtext-fill';
	  case 'Tax Return': return 'bi-calculator-fill';
	  default: return 'bi-file-earmark-fill'; // Generic icon for other types
	}
  }
  
