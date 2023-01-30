export const CartWidget = ({cantidad})=>{
    return(
      
<a className="nav-link" href="#">
            <span className="badge badge-pill bg-danger">{cantidad}</span>
            <span><i className="fas fa-shopping-cart" /></span>
          </a>     
    )
}

