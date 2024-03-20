import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import Header from '../header_menu';
import styles from './operator.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchange, faUser, faUserTie, faUserNinja, faUniversity, faHryvnia, faFaceFrown, faFlaskVial, faDemocrat, faDesktop, faHouseChimneyMedical, faHouseLaptop, faLaptopHouse, faLaptopCode, faComputer, faLaptopFile, faLaptop } from '@fortawesome/free-solid-svg-icons';

const ChangeOperatorPage = () => {
  const operators = [
    { id: 1, name: 'Operator 1', icon: faLaptop },
    { id: 2, name: 'Operator 2', icon: faDesktop },
    { id: 3, name: 'Operator 3', icon: faHouseLaptop },
    { id: 4, name: 'Operator 4', icon: faLaptopCode },
    { id: 5, name: 'Operator 5', icon: faComputer },
    { id: 6, name: 'Operator 6', icon: faLaptopFile },
  
  ];

  const [selectedOperator, setSelectedOperator] = useState(null);
  const handleOperatorChange = (operator) => {
    setSelectedOperator(operator);
  };

  const handleChangeOperator = () => {
 
    if (selectedOperator) {

      const confirmed = window.confirm(`Are you sure you want to change to operator ${selectedOperator.name}?`);
      if (confirmed) {
        console.log("Changing operator to:", selectedOperator.name);

      } else {
        console.log("Operator change canceled.");
      }
    } else {
      console.log("No operator selected.");
    }
  };



  return (
    <div className={styles.loginBackground}>
      <Header />
      <div className={styles.content}>
        <h2 className={styles.pageTitle}>Change Operator</h2>
        <FontAwesomeIcon icon={faExchange} className={styles.operatorIcon} />
        <div className={styles.operatorList}>
          {operators.map((operator) => (
            <Card key={operator.id} className={styles.operatorCard} onClick={() => handleOperatorChange(operator)}>
              <Card.Body>
                <FontAwesomeIcon icon={operator.icon} className={styles.operatorIcon} />
                <Card.Title>{operator.name}</Card.Title>
              </Card.Body>
            </Card>
          ))}
        </div>
        {selectedOperator && (
          <div className={styles.changeButtonContainer}>
            <Button variant="primary" onClick={handleChangeOperator}>
              Change Operator to {selectedOperator.name}
            </Button>
            <Button variant="secondary" onClick={() => setSelectedOperator(null)} className={styles.cancelButton}>
              Cancel
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default ChangeOperatorPage;
