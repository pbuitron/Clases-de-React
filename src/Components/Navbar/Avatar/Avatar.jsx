import React from 'react';

export const Avatar = ({perfil}) => {
    return (
        <>
  <a className="nav-link  d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (32).webp" className="rounded-circle me-4" height={22} alt="Portrait of a Woman" loading="lazy" />
      {perfil}
  </a>
  
</>
    );
}

 
