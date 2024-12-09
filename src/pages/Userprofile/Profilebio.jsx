import React from 'react';

const Profilebio = ({ currentprofile }) => {
  if (!currentprofile) {
    return <p>Profile not found</p>;
  }

  const tags = currentprofile?.tags || [];
  const about = currentprofile?.about || 'No bio found';

  return (
    <div>
      <div>
        {tags.length > 0 ? (
          <>
            <h4>Tags Watched</h4>
            {tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </>
        ) : (
          <p>0 Tags Watched</p>
        )}
      </div>
      <div>
        <h4>About</h4>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default Profilebio;
