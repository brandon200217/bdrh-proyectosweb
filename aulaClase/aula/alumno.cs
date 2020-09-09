using System;
using System.Collections.Generic;
using System.Text;

namespace aula
{
    class alumno : personaEscuela
    {
        private double calificacion;
 
        public alumno(string nombre, int edad, char sexo, double calificacionActual, int inasistencias)
            :base(nombre, edad, sexo, inasistencias)
        {
            this.calificacion = calificacionActual;
            this.inasistencias = inasistencias;
            this.calificacion = this.calificacionValida(this.calificacion);
        }


        private double calificacionValida(double MiCalificacion)
        {
            if (MiCalificacion <= 30)
            {
                return MiCalificacion;

            }
            else
            {
                return 0;
            }
        }

        public override string inasistencia()
        {

            int DiasClase = 190 ;
            int asistenciasAlumno = DiasClase - this.inasistencias;
            int asistenciaMinima = (60 * DiasClase) / 100;

            if (asistenciaMinima < asistenciasAlumno)
            {
                return "Cumplio con mas del 60% la asistencia anual obligatoria. "+ asistenciasAlumno+" asistencias de "+ asistenciaMinima+ " asistencias minimas";
            }
            else
            {
                return "No cumplio con mas del 60% la asistencia anual obligatoria" + asistenciasAlumno + " asistencias de " + asistenciaMinima + " asistencias minimas";
            }
        }

        public override string Presentarse()
        {

            return " Mi nombre es " + this.nombre;
        }

        public double CalificacionTotal() {

            if (this.calificacion !=  0)
            {
                double promedio = this.calificacion / 3;
                return promedio;
            }
            else
            {
                Console.WriteLine("El monto introducido es inequivoco");
                return 0;
            }

            
        
        }
    }
}
