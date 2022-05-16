import './Login.css'
import Logo from '@assets/img/logo.png'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="text-center topbar">
        <img src={Logo} alt="Logo" className="img-responsive m-auto" />
      </div>

      <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
        <div className="col-12 col-md-3">
          <div className="card login-card">
            <div className="card-header">Ingrese los siguientes datos</div>

            <div className="card-body">
              <div className="form">
                <div className="form-group mt-1">
                  <label htmlFor="" className="font-weight-bold">
                    Usuario
                  </label>
                  <input type="text" className="form-control" placeholder="Usuario" />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="" className="font-weight-bold">
                    Contraseña
                  </label>
                  <input type="text" className="form-control" placeholder="Contraseña" />
                </div>

                <div className="text-right mt-3">
                  <input type="submit" value="Ingresar" className="btn btn-danger" onClick={() => navigate('/')} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
