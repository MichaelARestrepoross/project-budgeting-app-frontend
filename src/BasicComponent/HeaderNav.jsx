import { useNavigate, Link } from "react-router-dom"
import "./HeaderNav.css"

function HeaderNav() {
  const navigate = useNavigate();

  return (
    <div className="Header"> 
      <h1 className="HeaderName" onClick={() => navigate('/')}>
        Bank Transactions 
      </h1>
      <button className="Header-create-button" onClick={() => navigate('/new')}>
        Create a new transaction
      </button>
    </div>
  );
}

export default HeaderNav;