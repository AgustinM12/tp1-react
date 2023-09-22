export const App = () => {

  return (
    <>
      <body>
        <main class="py-5">
          <form action="#" id="formLogin">
            <div class="d-flex justify-content-center align-items-center">
              <div class="bg-light p-3 rounded-5" style="border: 1px solid #000;">
                <div class="d-flex justify-content-center">
                  <img src="../../img/userIcon1.png" alt="login-icon" style="height: 5rem" />
                </div>
                <div class="text-center fs-3 fw-bold">Login</div>

                <div class="input-group mt-3">
                  <div class="input-group-text bg-primary">
                    <img src="../../img/user-solid.svg" alt="username-icon" style="height: 1rem" />
                  </div>
                  <input class="form-control" type="text" placeholder="Nombre de usuario o correo" id="nombreEmail"
                    name="nombreEmail" required />
                </div>

                <div class="input-group mt-1">

                  <div class="input-group">
                    <div class="input-group-text bg-primary">
                      <img src="../../img/lock-solid.svg" alt="password-icon" style="height: 1rem" />
                    </div>


                    <input class="form-control" type="password" placeholder="Contraseña" id="contraseña" name="contraseña" value="123456789aA"
                      required />

                    <button type="button" class="btn btn-outline-primary" onclick="ocultarContraseña(this)"><i
                      class="bi bi-eye"></i></button>
                  </div>

                </div>

                <div class="d-flex justify-content-around mt-2">

                  <div class="d-flex align-items-center gap-1">
                    <input class="form-check-input" type="checkbox" />
                    <div class="pt-1" style="font-size: 0.8rem">Recuerdame</div>
                  </div>

                  <a href="#" class="text-decoration-underline text-dark pt-1" style="font-size: 0.8rem ">¿Olvidó su
                    contraseña?</a>
                </div>

                <div class="pt-3 text-center">
                  <button type="submit" class="btn btn-primary text-center">Iniciar sesión</button>
                </div>

                <div class="mt-3 text-center">
                  <div>¿No tienes una cuenta?</div>
                  <a href="registro">Registrarse</a>
                </div>

                <div class="p-3">
                  <div class="border-bottom text-center" style="height: 0.9rem">
                    <span class="bg-light px-3">o</span>
                  </div>
                </div>

                <div class="btn d-flex gap-2 justify-content-center border mt-3">
                  <img src="../../img/logoGoogle.jpg" alt="google-icon" style="height: 1.6rem" />
                  <div class="fw-semibold text-secondary shadow-sm">Continuar con Google</div>
                </div>

              </div>
            </div>
          </form>
        </main>
      </body>
    </>
  )
}
