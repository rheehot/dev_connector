import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  const addHttp = text =>
    !text || text.includes('https://', 0) || text.includes('http://', 0)
      ? text
      : `https://${text}`;

  const renderSocial = name =>
    social && (
      <a href={addHttp(social[name])} target="_blank" rel="noopener noreferrer">
        <i className={`fab fa-${name} fa-2x`} />
      </a>
    );

  return (
    <div className="profile-top bg-primary p-2">
      <img className="round-img my-1" src={avatar} alt="" />
      <h1 className="large">{name}</h1>
      <p className="lead">
        {status} {company && <span> at {company}</span>}
      </p>
      <p>{location && <span>{location}</span>}</p>
      <div className="icons my-1">
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe fa-2x" />
          </a>
        )}
        {social && renderSocial('youtube')}
        {social && renderSocial('twitter')}
        {social && renderSocial('facebook')}
        {social && renderSocial('linkedin')}
        {social && renderSocial('instagram')}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
