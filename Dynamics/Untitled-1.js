class entrenador{
     constructor (nombre, region,medallas, )
     {
         this.nombre=nombre;
         this.region=region;
         this.medallas=medallas;

     }
}
class equipo1 extends entrenador{
    constructor(nombre, region,medallas){
        super(nombre,region,medallas)     
        this.pkaracteristicas=[this.pkaracteristicas1,this.pkaracteristicas2,this.pkaracteristicas3,this.pkaracteristicas4,this.pkaracteristicas5,this.pkaracteristicas6];
      this.pkaracteristicas1=[];
      this.pkaracteristicas2=[];
      this.pkaracteristicas3=[];
      this.pkaracteristicas4=[];
      this.pkaracteristicas5=[];
      this.pkaracteristicas6=[];
         this.pk=[];
    }
    entrada(){
        console.log(this.nombre+" entro al combate");
    }
    pkentrada(){
        console.log(this.nombre+ " saca a "+ this.pk[pk1])
    }
    golpe1(){
        console.log(this.pk[pk1]+ " ataco al adversario");
        }
    muerte(){
        console.log(this.pk[pk1]+ " se ha desmayado");
    }
    vicoria(){
        console.log(this.nombre+ " ha ganado el combate");
    }
    }
    

class equipo2 extends entrenador{
    constructor(nombre, region,medallas){
        super(nombre,region,medallas)     
       
      this.pkaracteristicas1=[];
      this.pkaracteristicas2=[];
      this.pkaracteristicas3=[];
      this.pkaracteristicas4=[];
      this.pkaracteristicas5=[];
      this.pkaracteristicas6=[];
      this.pkaracteristicas=[]
         this.pk=[];
    }
    entrada(){
        console.log(this.nombre+" entro al combate");
    }
    pkentrada(){
        console.log(this.nombre+ " saca a "+ this.pk[pk2])
    }
    golpe1(){
        console.log(this.pk[pk2]+ " ataco al adversario");
        }
    muerte(){
        console.log(this.pk[pk2]+ " se ha desmayado");
    }
    derrota(){
        console.log(this.nombre+ " se ha quedado sin pokemon y no puede continuar");
    }
    
    
}

class movimientos{
    constructor(mov1, mov2, mov3, mov4){

    }
}
let entrenador1=new equipo1("Steven Stone","Hoen","8");
let entrenador2=new equipo2("Nemona","Paldea","7");

entrenador1.pk.push('Skarmory','Claydol','Aggron','Cradily',  'Armaldo','Metagross' );
entrenador2.pk.push('Lycanroc','Pawmot','Dudusparce', 'Orthworm', 'Goodra', 'Quaquaval');

entrenador1.pkaracteristicas1.push(65,80,140,40,70,70, "Acero", "Volador", "Puas", "Ala de acero", "Golpe aéreo", "Toxico");
entrenador1.pkaracteristicas2.push(60,70,105,70,120,75, "Tierra", "Psíquico", "Pantalla luz", "Terremoto","Poder pasado", "Reflejo");
entrenador1.pkaracteristicas3.push(70,140,230,60,80,50,"Acero", "Roca", "Terremoto", "Trueno", "Garra Dragon","Rayo Solar");
entrenador1.pkaracteristicas4.push(88,81,97,81,107,43,"Roca", "Planta", "Rayo Confuso", "Poder pasado", "Bomba lodo", "Gigadrenado");
entrenador1.pkaracteristicas5.push(75,125,100,70,80,45,"Roca", "Bicho", "Hidropulso", "Poder pasado", "Cuchillada","Golpe aéreo");
entrenador1.pkaracteristicas6.push(80,145,150,105,110,110,"Acero", "Psíquico", "Terremoto", "Hiperrayo", "Puño meteoro");
entrenador1.pkaracteristicas.push(this.pkaracteristicas1,this.pkaracteristicas2,this.pkaracteristicas3,this.pkaracteristicas4,this.pkaracteristicas5,this.pkaracteristicas6);
entrenador2.pkaracteristicas1.push(75,115,65,55,65,112,"Roca","No tiene", "Roca Afilada","Roca Veloz","Taladradora","Trampa Rocas");
entrenador2.pkaracteristicas2.push(70,115,70,70,60,105,"Electrico","Lucha", "Electropalmas", "A bocajarro", "Puño hielo","Ataque rapido");
entrenador2.pkaracteristicas3.push(125,100,80,85,75,55,"Normal", "No tiene", "Hipertaladro", "Taladradora", "Carga dragón","Enrosque");
entrenador2.pkaracteristicas4.push(70,85,145,60,55,65,"Acero","No tiene","Cola férrea", "Plancha corporal", "Terremoto","Pedrada");
entrenador2.pkaracteristicas5.push(90,100,70,110,150,80,"Dragón","No tiene","Pulso dragón","Agua lodosa","Rayo hielo","Bomba lodo");
entrenador2.pkaracteristicas6.push(85,120,80,85,75,85,"Agua","Lucha","Danza acuatica","Demolición","Golpe aereo","Piruleta helada");



entrenador1.entrada();
entrenador2.entrada();
let pk1=0;
let pk2=0;
let move=10;
let move2=10;
let carac=0;
let carac2=0;

    entrenador1.pkentrada();
    console.log (entrenador1.pkaracteristicas1);
    entrenador2.pkentrada();
    console.log (entrenador2.pkaracteristicas1);
    entrenador1.golpe1();
    entrenador2.golpe1();
    entrenador1.muerte();
    pk1++
    entrenador1.pkentrada();
    console.log (entrenador1.pkaracteristicas2);
    entrenador1.golpe1();
    entrenador2.golpe1();
    entrenador2.muerte();
    pk2++
    entrenador2.pkentrada();
    console.log (entrenador2.pkaracteristicas2);
    entrenador1.golpe1();
    entrenador2.golpe1();
    entrenador1.muerte();
    pk1++
    entrenador1.pkentrada();
    console.log (entrenador1.pkaracteristicas3);
    entrenador1.golpe1();
    entrenador2.golpe1();
    entrenador1.muerte();
    pk1++
    entrenador1.pkentrada();
    console.log (entrenador2.pkaracteristicas3);
    entrenador1.golpe1();
    entrenador2.golpe1();
    entrenador2.muerte();
    pk2++
    entrenador2.pkentrada();
    console.log (entrenador1.pkaracteristicas3);
    
    entrenador1.golpe1();
    entrenador2.golpe1();
    entrenador2.muerte();
    pk2++
    entrenador2.pkentrada();
    console.log (entrenador2.pkaracteristicas4);
    entrenador1.golpe1();
    entrenador2.golpe1();
    entrenador1.muerte();
    pk1++
    entrenador1.pkentrada();
    console.log (entrenador1.pkaracteristicas4);
    entrenador1.golpe1();
    entrenador2.golpe1();
    entrenador2.muerte();
    pk2++
    entrenador2.pkentrada();
    console.log (entrenador2.pkaracteristicas4);
    entrenador1.golpe1();
    entrenador2.golpe1();
    entrenador1.muerte();
    pk1++
    entrenador1.pkentrada();
    console.log (entrenador1.pkaracteristicas5);
    entrenador1.golpe1();
    entrenador2.golpe1();
    entrenador2.muerte();
    pk2++
    entrenador2.pkentrada();
    console.log (entrenador2.pkaracteristicas5);
    entrenador1.golpe1();
    entrenador2.golpe1();
    entrenador2.muerte();
    entrenador2.derrota();
    entrenador1.vicoria();
    
    
    
    
    
    
    
