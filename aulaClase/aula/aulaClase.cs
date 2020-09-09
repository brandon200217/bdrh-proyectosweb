using System;
using System.Collections.Generic;
using System.Text;

namespace aula
{
    class aulaClase
    {
        private int disponibilidad;
        private string materiaAula;
        private string numeroAula;


        //private int identificador; 

        public aulaClase(int disponibilidad, string materiaAula,string numeroAula)
        {
            this.disponibilidad = disponibilidad;
            this.materiaAula = materiaAula;
            this.numeroAula = numeroAula;

        }

        public int Disponibilidad
        {
            get
            {
                return this.disponibilidad;
            }
        }

        public void recibirPersonas(List<personaEscuela> profesoresEscuela, List<personaEscuela> estudiantesEscuela)
        {
            if (profesoresEscuela.Count == 0 )
            {
                Console.WriteLine("Datos de profesor sustituto:");
                fabricaAula fabrica = new fabricaAula();
                personaEscuela profesorColegio = fabrica.obtenerPersonaColegio("profesor");
                profesorColegio.inasistencia();
                profesoresEscuela.Add(profesorColegio);
            }
            else if (estudiantesEscuela.Count == 0)
            {
                Console.WriteLine("ningun alumno entro a la clase.");
               
            }

            if(estudiantesEscuela.Count > 0)
            {
                this.datosAula();
                Console.WriteLine("Comienza la clase");
                profesor profesorAula;
                for (int i = 0 ; i < profesoresEscuela.Count; i++)
                {
                    if(profesoresEscuela[i] is profesor)
                    {
                        Console.ReadLine();
                        profesorAula = (profesor) profesoresEscuela[i];
                        profesorAula.Presentarse();
                        Console.WriteLine(profesorAula.Presentarse());
                    }
                    alumno alumnoAula;

                    for (int j = 0; j < estudiantesEscuela.Count; j++)
                    {
                        if (estudiantesEscuela[j] is alumno)
                        {
                            Console.ReadLine();
                            alumnoAula = (alumno)estudiantesEscuela[j];
                            Console.WriteLine(alumnoAula.Presentarse());
                            //Console.WriteLine(estudiantesEscuela.Count);
                        }
                    }
                }
            }
        }

        public void datosAula() {
            Console.WriteLine("Aula"+" de: " + this.materiaAula);
            Console.WriteLine("Disponibilidad:"+this.disponibilidad+" alumnos");
            
        }

    }
}
