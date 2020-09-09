using System;
using System.Collections.Generic;
using System.Text;

namespace aula
{
    abstract class personaEscuela
    {
        protected string nombre;
        protected int edad;
        protected char sexo;
        protected int inasistencias;

        public personaEscuela(string nombre, int edad, char sexo, int inasistencia)
        {
            this.nombre = nombre;
            this.edad = edad;
            this.sexo = sexo;
            this.inasistencias = inasistencia;
        }

        public abstract string inasistencia();

        public abstract string Presentarse();



    }
}
