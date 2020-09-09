using System;
using System.Collections.Generic;
using System.Text;

namespace aula
{
    class profesor : personaEscuela
    {

        private string materia;
        private int DiasLaboralesMes;
        public profesor(string nombre, int edad, char sexo, string materia, int DiasLaboralesMes, int inasistencia)
            : base(nombre, edad, sexo, inasistencia)
        {
            this.materia = materia;
            this.DiasLaboralesMes = DiasLaboralesMes;
            this.materia = this.materiasDisponibles(this.materia);
        }

        private string materiasDisponibles(string MiMateria)
        {
            switch (MiMateria) {
                case "filosofia":

                    return MiMateria;

                case "matematicas":
                    return MiMateria;

                case "programacion":
                    return MiMateria;

                default:
                    return "auxiliar";
            }
        }

        public override string inasistencia()
        {
            Console.WriteLine("inasistencia " ,this.inasistencias);

            int DiasLaboralesAnio = this.DiasLaboralesMes * 9;
            int asistenciaProfesor = DiasLaboralesAnio - this.inasistencias;

            int asistenciaMinima = (80 * DiasLaboralesAnio) / 100;

            if (asistenciaMinima < asistenciaProfesor)
            {
                return "Cumplio con mas del 80 % la asistencia anual obligatoria." + asistenciaProfesor + " asistencias de " + asistenciaMinima + " asistencias minimas";
            }
            else
            {
                return "No cumplio con mas del 80% la asistencia anual obligatoria" + asistenciaProfesor + " asistencias de " + asistenciaMinima + " asistencias minimas";
            }
        }

        public override string Presentarse()
        {

            return "Comenzamos a dar clases de " + this.materia + " Mi nombre es " + this.nombre + " Por favor presentence ";
        }
    }
}
