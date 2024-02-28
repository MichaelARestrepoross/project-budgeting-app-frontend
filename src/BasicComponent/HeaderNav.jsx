import { useNavigate, Link } from "react-router-dom"

function HeaderNav() {
  const navigate = useNavigate();

  return (
    <div className="Header"> 
      <h1 className="HeaderName" onClick={() => navigate('/')}>
        HeaderNav
      </h1>
      <button className="Header-create-button" onClick={() => navigate('/new')}>
        Create a new transaction
      </button>
    </div>
  );
}

export default HeaderNav;