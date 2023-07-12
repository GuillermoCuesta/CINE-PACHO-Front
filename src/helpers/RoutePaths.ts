enum RoutesPathsEnum {
  HOME = "/home",
  LOGIN = "/auth/login",
  REGISTER = "/auth/register",
  RESETPASSWORD = "/auth/reset_password",

  CINEMA = "/home",
  PELICULAS = '/components/GridMovies/:idMultiplex',
  SILLAS = "/auth/cinema/:idMultiplex/:idFuncion",
  //Corregir esta ruta porque obvio no va una lista al final :v
  //Solo se coloca para que funcione el checkout
  CHECKOUT = '/components/Checkout/:idMultiplex/:idFuncion/:listPost',
  PAY = '/components/Pay',

  MULTIPLEX = "/home"

}


export {
  RoutesPathsEnum,

};
