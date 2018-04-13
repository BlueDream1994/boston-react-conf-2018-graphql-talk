import React from 'react';
import gql from 'graphql-tag';
import Language, {LANGUAGE_FRAGMENT} from './Language';
import ToggleStarButton, {TOGGLE_STAR_FRAGMENT} from './ToggleStarButton';

const Repo = ({repo}) => (
  <li>
    <h4>
      <a href={repo.url}>{repo.name}</a>
    </h4>
    <ToggleStarButton repo={repo} />
    <p>{repo.description}</p>
    <div>
      <Language language={repo.primaryLanguage} />
      <span> - {repo.forkCount}</span>
      <span> - {repo.stargazers.totalCount}</span>
    </div>
  </li>
);

export const REPO_FRAGMENT = gql`
  fragment Repo on Repository {
    id
    url
    name
    description
    forkCount
    ...ToggleStar
    stargazers {
      totalCount
    }
    primaryLanguage {
      ...Language
    }
  }

  ${LANGUAGE_FRAGMENT}
  ${TOGGLE_STAR_FRAGMENT}
`;

export default Repo;
