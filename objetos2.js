const alumno = {
    nombre: "Juan",
    calificaciones: {
      ingles: 9,
      programacion: 8,
      html: 7
    },
    calcularPromedio: function() {
      const calificaciones = Object.values(this.calificaciones);
      const suma = calificaciones.reduce((total, calificacion) => total + calificacion, 0);
      const promedio = suma / calificaciones.length;
      return promedio;
    }
  };
  
  console.log("Nombre del alumno:", alumno.nombre);
  console.log("Promedio de calificaciones:", alumno.calcularPromedio());
  