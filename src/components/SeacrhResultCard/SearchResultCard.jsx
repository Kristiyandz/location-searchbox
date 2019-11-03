import React from 'react';
import cx from 'classnames';
import styles from './SearchResultStyles.module.scss';

const SeacrhResultCard = ({ location }) => {

  // Function that renders specific span based on the type of location
  const checkTypeOfLocation = locationName => {
    if(locationName.includes('Station')) return (<span className={cx(styles.CardType, styles.Station)}>Station</span>);
    if(locationName.includes('Airport')) return (<span className={cx(styles.CardType, styles.Airport)}>Airport</span>);
    return (<span className={cx(styles.CardType, styles.City)}>City</span>);
  };

  return (
    <div className={styles.SeacrhResultCard}>
     {checkTypeOfLocation(location.name)}
      <div className={styles.LocationInfo}>
        <h4>{`${location.name} ${location.iata ? `(${location.iata})`: ''}`}</h4>
        <p>{`${location.region ? `${location.region}, `: ''}${location.country ? `${location.country}`: ''}`}</p>
      </div>
    </div>
  )
};

export default SeacrhResultCard;