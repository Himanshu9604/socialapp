import React from 'react'
import FollowersCard from './FollowersCard/FollowersCard.jsx'
import LogoSearch from './LogoSearch'
import ProfileCard from './ProfileCard.jsx/ProfileCard'

import "./ProfileSide.css"

const ProfileSide= () => {
  return (
 <div className="ProfileSide">
    <LogoSearch />
    <ProfileCard />
    <FollowersCard />
 </div>
  )
}

export default ProfileSide
