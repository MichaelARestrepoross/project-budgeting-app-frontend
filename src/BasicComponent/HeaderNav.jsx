import { useNavigate, Link } from "react-router-dom"

function HeaderNav() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 onClick={() => navigate('/')}>
        HeaderNav
      </h1>
      <button onClick={() => navigate('/new')}>
        Create a new transaction
      </button>
    </div>
  );
}

export default HeaderNav;