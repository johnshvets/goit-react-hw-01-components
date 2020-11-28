import PropTypes from "prop-types";
import StatisticsItem from "./StatisticsItem/StatisticsItem";

const Statistics = ({ title, stats } = {}) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
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
