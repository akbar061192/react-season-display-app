import './SeasonDisplay.css';

const SeasonDisplay = props => {
  const lat = props.latitude;

  const season = lat <= 10 ? 'winter' : 'summer';

  return (
    <div className='container'>
      {/* <h1>Laititude: {props.latitude}</h1>
      <h2>{season === 'winter' ? 'Burr, its chilly!' : 'Lets hit the beach!'}</h2>
      {season === 'winter' ? <i className='massive snowflake icon'></i> : <i className='massive sun icon'></i>} */}

      <i className={`top-icon massive ${season === 'winter' ? 'snowflake' : 'sun'} icon`}></i>
      <h2>{season === 'winter' ? 'Burr, its chilly!' : 'Lets hit the beach!'}</h2>
      <i className={`bottom-icon massive ${season === 'winter' ? 'snowflake' : 'sun'} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
