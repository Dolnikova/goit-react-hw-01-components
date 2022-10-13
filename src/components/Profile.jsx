import { Stats } from 'styles/Profile.styled';
import { ContainerProfile } from 'styles/Profile.styled';
import { Description } from 'styles/Profile.styled';
import { BlockStats } from 'styles/Profile.styled';
import { Imeg } from 'styles/Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ContainerProfile className="profile">
      <Description className="description">
        <Imeg src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </Description>
      <BlockStats>
        <ul className="stats">
          <Stats>
            <span className="label">Followers</span>
            <span className="quantity">{stats.followers}</span>
          </Stats>
          <Stats>
            <span className="label">Views</span>
            <span className="quantity">{stats.views}</span>
          </Stats>
          <Stats>
            <span className="label">Likes</span>
            <span className="quantity">{stats.likes}</span>
          </Stats>
        </ul>
      </BlockStats>
    </ContainerProfile>
  );
};
