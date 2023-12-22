### Pagina con Login y Register con MongoDB y AuthJS

Esta pagina simple la hice para aprender el framework de autorizacion AuthJS, utilizando el modulo de encriptacion bcryptjs, la base de datos en mongoDB y estilizado con Tailwind CSS.

Cuenta con una navegacion simple y un footer que cambia segun el estado del usuario: 

- "**autorizado**"
- "**no autorizado**"

La pagina principal explica brevemente la funcion de la pagina, y tiene un boton hacia una ruta "_/verified_" la cual esta protegida por _middleware_. Es decir, el usuario podra ingresar solo si esta _autorizado_.

![Screenshot_1](https://github.com/mateenunez/mongodb-authjs/assets/62401255/f332275c-251b-482b-8095-ecfcc6ad8300)

En caso de no estar autorizado te envia a una ruta"_/login_" para ingresar con una cuenta. 
De todas maneras, registremos una cuenta en la ruta "_/register_":

![Screenshot_2](https://github.com/mateenunez/mongodb-authjs/assets/62401255/795e2591-b41e-40cd-bbeb-0204ab782b05)

Los **errores** posibles que lista son los siguientes:

1. Contraseña de longitud menor a 6.
2. Email ya utilizado.
3. Email y contraseña requeridos.
4. El email no sigue con el formato de email establecido (****@gmail.com).
5. Otros errores 400.

En caso de exito, creamos nuestra cuenta! y el router nos direcciona hacia la ruta verificada de forma instantanea.
![Screenshot_4](https://github.com/mateenunez/mongodb-authjs/assets/62401255/a5eb0cbf-34e5-4a0f-9876-a886187e5480)

Otros detalles de la pagina es que, necesariamente, la navegacion cambia segun el estado del usuario (Deja de mostrar login y register para mostrar signout), y tambien la pagina principal:

![Screenshot_3](https://github.com/mateenunez/mongodb-authjs/assets/62401255/499dc6dd-3e99-4647-b8a1-7597f6571480)



