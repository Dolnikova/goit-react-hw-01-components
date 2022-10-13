import { ContainerStatistics } from 'styles/Statistics.styled';
import { StatList } from 'styles/Statistics.styled';
export const Statistics = ({ statistics, title }) => {
  return (
    <ContainerStatistics>
      <section className="statistics" title={title}>
        <h2 className="title">UPLOAD STATS</h2>

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
