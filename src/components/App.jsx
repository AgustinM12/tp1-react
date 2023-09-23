import Header from "./Header"
import Footer from "./Footer"
import googleLogo from "../../public/img/logoGoogle.jpg"
import { useState } from "react"



export const App = () => {

  //OCULTAR LA CONTRASEÑA
  const [ocultarPassword, setOcultarPassword] = useState(false)

  const functionOcultarContraseña = () => {
    setOcultarPassword((passwordVisible) => !passwordVisible)
  }

  //SPAN DE LOGIN

  return (
    <>
      <Header />

      <main className="colorFondo">

        <form action="#" id="formLogin">

          <div className="bg-light p-4 rounded-5" >
            <h1 className="text-center fs-3 fw-bold">Login</h1>

            <div className="input-group mt-3">
              <div className="input-group-text bg-primary"></div>
              <input className="form-control" type="text" placeholder="Nombre de usuario o correo" id="nombreEmail"
                name="nombreEmail" required />
            </div>


            <div className="input-group mt-2">

              <div className="input-group">

                <div className="input-group-text bg-primary"></div>

                <input className="form-control" type={ocultarPassword ? "text" : "password"}
                  placeholder="Contraseña" id="contraseña" name="contraseña" required />

                <button type="button" className="btn btn-outline-primary" onClick={functionOcultarContraseña}>
                  <i className={ocultarPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                </button>
              </div>

            </div>

            <div className="d-flex justify-content-between mt-3">
              <div className="d-flex align-items-center">
                <input className="form-check-input" type="checkbox" />
                <span className="ms-2">Recuerdame</span>
              </div>
              <p className="mb-0 text-decoration-underline text-dark ms-2">¿Olvidó su contraseña?</p>
            </div>

            <div className="mt-3 text-center">
              <button type="submit" className="btn btn-primary text-center">Iniciar sesión</button>
            </div>

            <div className="mt-3 text-center">
              <div>¿No tienes una cuenta?</div>
              <a href="registro">Registrarse</a>
            </div>

            <div>
              <div className="border-bottom text-center">
                <span className="bg-light">o</span>
              </div>
            </div>

            <div className="btn d-flex align-items-center justify-content-center mt-2">
              <img src={googleLogo} alt="google-icon" width="30" height="20" />
              <div className="fw-semibold text-secondary shadow-sm">Continuar con Google</div>
            </div>


          </div>

        </form>


      </main >

      <Footer />
    </>
  )
}
