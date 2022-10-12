import { Stats } from 'styles/Profile.styled';
import { ContainerProfile } from 'styles/Profile.styled';
import { Description } from 'styles/Profile.styled';
import { BlockStats } from 'styles/Profile.styled';
import { Imeg } from 'styles/Profile.styled';
export const Profile = ({ profile }) => {
  const { username, tag, location, avatar, stats } = profile;
  return (
    <ContainerProfile class="profile">
      <Description class="description">
        <Imeg src={avatar} alt="User avatar" class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </Description>
      <BlockStats>
        <ul class="stats">
          <Stats>
            <span class="label">Followers</span>
            <span class="quantity">{stats.followers}</span>
          </Stats>
          <Stats>
            <span class="label">Views</span>
            <span class="quantity">{stats.views}</span>
          </Stats>
          <Stats>
            <span class="label">Likes</span>
            <span class="quantity">{stats.likes}</span>
          </Stats>
        </ul>
      </BlockStats>
    </ContainerProfile>
  );
};
