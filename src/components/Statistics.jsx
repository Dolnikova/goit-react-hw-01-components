import { default as PropTypes } from 'prop-types';
import {
  ContainerStatistics,
  StatList,
  SectionTitle,
} from 'styles/Statistics.styled';
export const Statistics = ({ statistics, title }) => {
  return (
    <ContainerStatistics>
      <section className="statistics" title={title}>
        <h2 className="title">UPLOAD STATS</h2>
        {title ? <SectionTitle>{title}</SectionTitle> : ''}
        <ul className="stat-list">
          {statistics.map(({ id, label, percentage }) => {
            return (
              <StatList className="item" key={id}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage}</span>
              </StatList>
            );
          })}
        </ul>
      </section>
    </ContainerStatistics>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
