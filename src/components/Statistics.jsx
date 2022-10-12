import { ContainerStatistics } from 'styles/Statistics.styled';
import { StatList } from 'styles/Statistics.styled';
export const Statistics = ({ statistics }) => {
  const { title, stats } = statistics;
  return (
    <ContainerStatistics>
      <section class="statistics">
        <h2 class="title">UPLOAD STATS</h2>

        <ul class="stat-list">
          <StatList class="item">
            <span class="label">.docx</span>
            <span class="percentage">4%</span>
          </StatList>
          <StatList class="item">
            <span class="label">.mp3</span>
            <span class="percentage">14%</span>
          </StatList>
          <StatList class="item">
            <span class="label">.pdf</span>
            <span class="percentage">41%</span>
          </StatList>
          <StatList class="item">
            <span class="label">.mp4</span>
            <span class="percentage">12%</span>
          </StatList>
        </ul>
      </section>
    </ContainerStatistics>
  );
};
