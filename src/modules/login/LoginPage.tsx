import './Login.css'
import Logo from '@assets/img/logo.png'
import { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { authCreators } from '@globals/state'

const LoginPage = () => {
  const dispatch = useDispatch()
  const { doLogIn } = bindActionCreators(authCreators, dispatch)

  const [user, setUser] = useState('USUFER')
  const [password, setPassword] = useState('USUFER')
  const [error, setError] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await doLogIn(user, password)
    } catch (error) {
      console.log(error)
      setError({ message: 'Credenciales Incorrectas' })
    }
    setLoading(false)
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
                    value={user}
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
                    value={password}
                  />
                </div>

                <div className="text-end mt-3">
                  {loading ? 'Cargando' : <input type="submit" value="Ingresar" className="btn btn-danger" />}
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
