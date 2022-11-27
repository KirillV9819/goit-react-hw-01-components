import PropTypes from 'prop-types';
import s from './Section.module.css';

export function Section({ title, children }) {
  return (
    <section className={s.main}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
