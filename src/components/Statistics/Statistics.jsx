import PropTypes from "prop-types";
import StatisticsItem from "./StatisticsItem/StatisticsItem";
import s from "./StatisticsItem/StatisticsItem.module.css";

const Statistics = ({ title, stats } = {}) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default Statistics;
