import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function randomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export function Statistics({ statistics }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>
      <ul className={s.list}>
        {statistics.map(({id, label, percentage}) => (
          <li key={id} className={s.item} style={{ backgroundColor: randomHexColor() }}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
    statistics: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }).isRequired
    )
};
