import './Login.css'
import Logo from '@assets/img/logo.png'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthProvider'
import { useState } from 'react'
import { Alert } from 'react-bootstrap'

const LoginPage = () => {
  const { doLogIn } = useAuthContext()
  const navigate = useNavigate()

  const [user, setUser] = useState('USUFER')
  const [password, setPassword] = useState('USUFER')
  const [error, setError] = useState<any>(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    doLogIn(user, password).catch(() => setError({ message: 'Credenciales Incorrectas' }))
  }

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
              {error && <Alert variant="danger">{error.message}</Alert>}

              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group mt-1">
                  <label htmlFor="" className="fw-bold">
                    Usuario
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Usuario"
                    onChange={(e) => setUser(e.target.value)}
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="" className="fw-bold">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="text-end mt-3">
                  <input type="submit" value="Ingresar" className="btn btn-danger" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
