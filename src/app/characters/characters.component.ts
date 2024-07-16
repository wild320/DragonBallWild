import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatIconModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];
  charactersZ: any[] = [];
  ngOnInit(): void {
    this.characters = [{
      "id": "666808ce2a01878ca18a9f6d",
      "name": "Son Goku",
      "genre": "Masculino",
      "race": "Shayayin",
      "image": "https://apidragonball.vercel.app/static/images/GokuPeque.png",
      "planet": "Vegeta, (criado en la tierra)",
      "description": "Son Goku (孫そん悟ご空くう Son Gokū¿?) es el protagonista principal del manga y anime de Dragon Ball creado por Akira Toriyama. Su nombre real y de nacimiento es Kakarotto (カカロット¿?) y es uno de los pocos saiyanos que lograron sobrevivir a la destrucción total del Planeta Vegeta del Universo 7. Es el segundo hijo de Bardock y Gine, hermano menor de Raditz, nieto adoptivo de Son Gohan, esposo de Chi-Chi, padre de Son Gohan y Son Goten, a su vez también es el abuelo de Pan y ancestro de Son Goku Jr. Originalmente enviado a la Tierra como un infante volador con la misión de conquistarla. Sin embargo, el caer por un barranco le proporcionó un brutal golpe que si bien casi lo mata, este alteró su memoria y anuló todos los instintos violentos de su especie, lo que lo hizo crecer con un corazón puro y bondadoso, pero conservando todos los poderes de su raza.",
      "biography": "El nombre de ¨Goku¨ significa ¨despertado del vacío¨; la sílaba ¨Go¨ significa ¨Ilustración¨, y la sílaba ¨Ku¨ significa ¨cielo¨ o ¨vacío¨. Su nombre completo ¨Son Goku¨, es una derivación al japonés del nombre ¨Sun Wukong¨, el protagonista principal en la leyenda china Viaje al Oeste, en la que se basa vagamente Goku."
    },
    {
      "id": "6666cc9b1a4827579e4b4657",
      "name": "Anuciador",
      "genre": "Masculino",
      "race": "Humano",
      "image": "https://apidragonball.vercel.app/static/images/Anunciador_Dokkan.png",
      "planet": "Tierra",
      "description": "El Anunciador (アナウンサー Anaunsā¿?, Announcer) es quien presenta cada edición del Torneo Mundial de las Artes Marciales en Isla Papaya como locutor desde el comienzo del manga y anime de Dragon Ball hasta Dragon Ball GT, siendo principalmente el comentarista en todas las peleas de la competición. Aunque no lo aparente con su traje negro, sus gafas de sol y su cabello rubio peinado hacia atrás, el Anunciador también es uno de los monjes que resguarda el templo sagrado que alberga el torneo.",
      "biography": "El Anunciador presentando la batalla entre Krilin y Bacterian. En cada torneo, aparte de el 21, se produce un suceso desafortunado que realiza su papel, como en la saga del Rey Piccolo cuando fue testigo del asesinato de Krilin a manos de Tambourine. Más tarde, se vuelve muy importante como testigo de Goku en la lucha contra Piccolo desde la barrera, junto con los amigos de Goku. El Anunciador Mundial de Artes Marciales es el único que no es de los Guerreros Z en no abandonar el torneo cuando Piccolo dice que masacrará a todos. Finalmente, cuando Goku es declarado el Ganador del Torneo porque Piccolo se cae fuera de la arena, haciendo de él uno de los pocos civiles en acordarse de esto (este suceso se hace referencia más adelante en la saga de Majin Buu cuando Piccolo compite en el torneo, en el que en tono de broma le pide no destruir el Tatami otra vez, a lo que Piccolo respondió de forma amistosa que lo intentará)."
    },
    {
      "id": "6666d7e0531ead11b9d643a0",
      "name": "Bora",
      "genre": "Masculino",
      "race": "Humano",
      "image": "https://apidragonball.vercel.app/static/images/Bora.png",
      "planet": "Tierra",
      "description": "Bora es un indígena, padre de Upa, el amigo de Goku, y ambos viven en la tierra sagrada, Bora es el guerrero protector de la Torre de Karin. Tiene una fuerza increíble pero aún así no se puede comparar ni lo mas mínimo con la fuerza de Tao Pai Pai, que lo mata sin ningún problema, humillandolo cuando lo mata con su propia lanza. Luego cuando Goku entrena con el duende Karin obtiene un poder superior a el de Tao Pai Pai y junto con Upa resucitan a Bora con las esferas del dragon. Durante la saga de Piccolo Daimaoh Goku y Yajirobe van a la torre sagrada para ser entrenado por Karin de nuevo, Yajirobe subiría la torre cargando a Goku, y Bora demostrando su fuerza sobrehumana lanza fuertemente a ambos para que les sea más fácil subir la torre subiendo cientos de metros. No se le vuelve a ver hasta el Arco de Majin Buu donde el participa en dar su energía a Goku para derrotar a Pequeño Buu con la Super Genkidama. También aparece en la película Aventura Mística donde su pueblo en la tierra sagrada, es esclavizado por el ejercito de Master Shen, para encontrar la esfera del dragon que él tenía, pero sabía que si se la daba los matarían a todos, por ello decide participar en el torneo de artes marciales, ya que el que ganara podría pedirle cualquier cosa a el emperador (Chaoz), donde ganaría a Yamcha por muy poco, para luego ser brutalmente asesinado por Tao Pai Pai, pero como en la serie sería resucitado gracias a las esferas del dragon. Otra aparición es cuando todos tienen que evacuar la tierra en la saga de Dragon Ball GT.",
      "biography": "Sin Biografia"
    },
    {
      "id": "6666d9be61c73f8976537ee2",
      "name": "Bulma",
      "genre": "Femenino",
      "race": "Humana",
      "image": "https://apidragonball.vercel.app/static/images/Bulma.png",
      "planet": "Tierra",
      "description": "Bulma es la segunda hija de Panchy y el  Dr. Brief, siendo la hija del dueño de Corporación Cápsula y la hermana menor de Tights, ella desde muy pequeña demostró dotes de inteligencia logrando crear una Pistola Láser la cual todos creían que era un juguete y lograr volar la nave de Jaco, impresionando a este y a Tights, un día tras encontrar una esfera del dragón, después de investigar sobre su leyenda construye el Radar del Dragón y se embarca en la búsqueda para cumplir su deseo. Encuentra la esfera del dragón en el valle del norte y continúa su viaje siguiendo la pista de la siguiente esfera del dragón. Buscando las Esferas del Dragón se encuentra con Goku, quien está convencido de que el espíritu de su fallecido abuelo moraba en ella. Bulma intenta convencer a Goku para que le entregara la Esfera del dragón, pero él no acepta, por lo tanto, lo convence de que se le una y emprenden un viaje para lograr el objetivo de reunir las 7 esferas del dragón. En el viaje viven variantes aventuras, peligros u emociones, y a partir de este momento se crea una gran amistad entre Bulma y Goku. Durante todo el trayecto también conocerán a los más diversos personajes, como Oolong, Yamcha y su inseparable amigo Puar, que al principio es un ladrón del desierto y lucha contra Goku. Como Yamcha también buscaba las Esferas del Dragón para pedir como deseo Curarse de ese grave pánico hacia la mujeres, se une al grupo. Tras pedir el deseo de Oolong a Shen Long, Bulma comienza un noviazgo con Yamcha, el cual deja de ser tímido a lo largo del tiempo. En el Torneos de las Artes Marciales aparecería alentando a Goku, Yamcha y Krilin. Luego, en la Saga de la Red Ribbon, ayudaría a Goku a combatir contra la Red Ribbon. Después, no hace apariciones tan importantes a lo largo de la serie.",
      "biography": "Sin Biografia"
    },
    {
      "id": "6666dc6ee29e9670e0613d11",
      "name": "Capitan Dock",
      "genre": "Masculino",
      "race": "Humano",
      "image": "https://apidragonball.vercel.app/static/images/Captain_Dock.png",
      "planet": "Tierra",
      "description": "Dock (ドック Dokku[1]¿?) es un soldado del Ejército del Listón Rojo que trabaja en la Brigada Azul bajo el cargo de capitán para el General Blue en el manga y anime de Dragon Ball.",
      "biography": "Dock es enviado por el General Blue a la Casa Kame para robar el Radar del Dragón y secuestrar a Muten Roshi ya que piensan que es un científico y que él creó el radar. Cuándo llega a Kame House inmediatamente le pide a Muten Roshi el radar del dragón, luego lo amenaza con que si no le entrega también las Esferas del Dragón matará a Lunch. Pero Muten Roshi se niega y golpea fuertemente en el estómago a Dock, derrotando de paso a todos sus soldados, a excepción de dos, uno el cual fue asesinado por Lunch y otro que intenta escapar pero es visto y le ordena limpiar la isla que esta llena de todos los soldados derrotados, incluido Dock. Dock vuelve a aparecer en Dragon Ball GT escapando del Infierno, pero volvería al lugar luego de que Androide Número 17 del Infierno fuese derrotado por Son Goku."
    },
    {
      "id": "66680086d53ba640f7136e01",
      "name": "Chaos",
      "genre": "Masculino",
      "race": "Desconocido",
      "image": "https://apidragonball.vercel.app/static/images/Chaoz.png",
      "planet": "Tierra",
      "description": "Chaoz junto a Tenshinhan, van a participar a la 22º edición del Torneo de las Artes Marciales ya que su maestro se había enterado que en la anterior edición los discípulos de el Maestro Roshi habían quedado finalistas y para ellos eso era inaceptable. Consiguió superar las eliminatorias con facilidad, para luego en los cuartos de final enfrentarse a Krilin. Este combate estaba muy igualado, solo que Chaoz tenía la ventaja de saber volar, pero aunque Chaoz ganaba ventaja por sus poderes psiquícos, para ello tenía que mantener las manos hacía Krilin. Después Krilin le hace una pregunta sobre matemáticas y Chaoz se ve obligado a utilizar las manos para contar, y por ello pierde, el baja la defensa y pierde el combate, pero por muy poco.",
      "biography": "Sin Biografia"
    },
    {
      "id": "666801912a01878ca18a9f63",
      "name": "Chichi",
      "genre": "Femenino",
      "race": "Humana",
      "image": "https://apidragonball.vercel.app/static/images/Chichi.png",
      "planet": "Tierra",
      "description": "Chi-Chi (チチ Chi-Chi¿?) es la princesa del Monte Fry-pan siendo la hija de la fallecida reina de esta montaña y el Rey Gyuma, ella terminaría conociendo a Son Goku cuando era tan solo una niña para años más tarde durante su adolescencia ser su esposa y convertirse en la estricta pero amorosa madre de Gohan y Goten. Ella es un personaje secundario dentro de la historia de Dragon Ball. Pese a ser una princesa recibió un duro y estricto entrenamiento de su padre por muchos años logrando así desarrollar una fuerza, velocidad y agilidad superior a los Terrícolas aunque al casarse deja a un lado los combates para encargarse de su familia sin embargo usa su poderosa fuerza cuando sea lo suficientemente necesario o este enojada. Tiene como nuera a Videl y es abuela de Pan. Chi-Chi es la princesa del Monte Flypan que nació el Año 737 como la hija del Rey Gyuma, donde trágicamente falleció su madre un año más tarde. Posteriormente, cuando tenía dos años, ella y su padre debieron permanecer fuera de su castillo cuando el espíritu de fuego desató su poder en el lugar e incendió todo. A medida que Chi-Chi fue creciendo, el Rey Gyuma se encargó de entrenarla en artes marciales para que la princesa se convierta en una guerrera en un futuro.",
      "biography": "Sin Biografia"
    },
    {
      "id": "666802612a01878ca18a9f64",
      "name": "Coronel Silver",
      "genre": "Masculino",
      "race": "Humano",
      "image": "https://apidragonball.vercel.app/static/images/General_Silver_Trans.png",
      "planet": "Tierra",
      "description": "El Coronel Silver (シルバー大佐 Shirubā Taisa¿?) es un personaje que aparece en el manga y anime de Dragon Ball. Fue el primero de los oficiales del Ejército del Listón Rojo en aparecer. Mantuvo el cargo de Coronel, y fue el encargado de dirigir la Brigada Plateada.",
      "biography": "Artículo principal: Arco del Ejército del Listón Rojo. Principalmente en el anime, el Coronel Silver comienza su búsqueda de las Esferas del Dragón asaltando casas, encontrándose al dueño de una tienda de antigüedades que le ofrece una esfera falsa. Sin embargo, el coronel no es engañado, y procede a asesinar al propietario antes de que este pudiera defenderse. Tras esto, recibe una llamada del cuartel general en la cual se le informa que la esfera del dragón se está moviendo del lugar de su ubicación. El Coronel Silver y sus soldados llegan a una aldea donde el Radar del Dragón Global habia detectado la esfera y la atacan creyendo que es una base. El Rey Gyuma opone resistencia, pero enseguida es atrapado en una gran red por los hombres de Silver. Pilaf aprovecha el caos para tomar la Esfera de Dragón y es visto por dos soldados, pero logra llegar a su fortaleza voladora y escapar. El Coronel Silver y sus hombres le persiguen, pero la Banda de Pilaf derrota a varios de sus pilotos y le dan esquinazo. El Coronel Silver busca a Pilaf, quien ha escondido su fortaleza bajo las arenas del desierto y atrapa en ella a varios soladados y a Goku. Silver encuentra la fortaleza y la ataca desde fuera, Pilaf intenta escapar y pone su fortaleza en movimiento, pero los cazas del Ejército del Listón Rojo destruyen la fortaleza. Pilaf, Shu y Mai sobreviven y este celebra que siguen con vida y que aún tienen la esfera, pero no por mucho tiempo porque Silver y el resto de sus soldados les esperan abajo y le obligan a entregarle la esfera. Más tarde, se muestra a Silver haciendo ejercicio levantando pesas, golpeando un saco de boxeo lleno de arena hasta que se derrama y luego peleando contra cuatro boxeadores profesionales, derrotándolos fácilmente. Entonces es convocado por el Comandante Red a su oficina, donde su mascota le ataca pero logra esquivarla y Red le felicita por tener los reflejos para esquivar al gato, señalando que el soldado anterior convocado a su oficina perdió el ojo cuando intentó esquivar su gato y que luego fue ejecutado. A continuación, el Comandante Red ordena a Silver que encuentre una esfera ubicada en la jungla. Luego, tanto en el anime como en el manga, el Coronel Silver ordena a sus soldados buscar la esfera que se encontraba en los alrededores de su campamento, afirmando que otro equipo del Ejército del Listón Rojo ya había encontrado una esfera, y que si no cumplían con la misión, él se encargaría de castigarlos. Después de 20 días de búsqueda recibe la noticia de que sus soldados habían sido atacados, y que el agresor había encontrado la esfera, por lo que sale en búsqueda de este, resultando ser Son Goku, que se encontraba volando en el aire. El Coronel Silver ataca con un lanzacohetes a Goku, que rápidamente se baja de su Nube Kinton, tras lo cual procede a interrogarlo, aunque esto resulta en vano. El joven decide marcharse sin dar explicaciones, por lo que Silver aprovecha el momento para intentar robarle el saco donde llevaba las Esferas del Dragón, aunque Goku lo recupera rápidamente. El coronel resuelve entonces pelear con el muchacho, pero es derrotado de una patada y dejado insconciente por un ataque de cola. Tiempo después, es contactado desde el cuartel general, admitiendo su derrota y siendo advertido por el Comandante Red de su destino: la ejecución. En el anime, el coronel acude hasta el cuartel general y es seguido por unos soldados hacia las afueras de este, presumiblemente para ejecutarlo, aunque se desconoce si lograron su cometido."
    },
    {
      "id": "666803222a01878ca18a9f65",
      "name": "Coronel Violet",
      "genre": "Femenino",
      "race": "Humana",
      "image": "https://apidragonball.vercel.app/static/images/Coronel_Violet.png",
      "planet": "Tierra",
      "description": "La Coronel Violet (バイオレット大差 Baioretto Taisa¿?) es la única integrante femenina del Ejército del Listón Rojo, desempeñándose como coronel, uno de los principales rangos del ejército.",
      "biography": "Sin Biografia"
    },
    {
      "id": "666803b62a01878ca18a9f66",
      "name": "Coronel Yellow",
      "genre": "Masculino",
      "race": "Desconocido",
      "image": "https://apidragonball.vercel.app/static/images/Capitan_Yellow_Trans.png",
      "planet": "Tierra",
      "description": "El Coronel Yellow (イエロー 大佐 Ierō Taisa¿?) es un tigre antropomórfico y uno de los coroneles mayores del Ejército del Listón Rojo",
      "biography": "Sin Biografia"
    },
    {
      "id": "666804582a01878ca18a9f67",
      "name": "Cymbal",
      "genre": "Desconocido",
      "race": "Desconocido",
      "image": "https://apidragonball.vercel.app/static/images/Cymbal_Artwork.png",
      "planet": "Desconocido",
      "description": "Sin Descripcion",
      "biography": "Cymbal es el tercer hijo del Rey Piccolo desde su regreso y el primero al que se le vió ser engrendado. Recibió la misión de encontrar las Esferas del Dragón y empezó por buscar una que el radar detectó en las Praderas de Yajirobei. No tuvo mucha suerte, porque su primer encuentro fue con Goku y Yajirobei. Cymbal estaba muy confiado, ya que creía que su poder era superior a cualquier humano, se enfrentó a Yajirobei, pero incluso luchando en serio no pudo con él para que finalmente fuera cortado en dos por la Katana de Yajirobei, mientras esquivaba sus ataques de Ki, para acabar finalmente asado y comido por este."
    },
    {
      "id": "666804ea2a01878ca18a9f68",
      "name": "Dr. Frappé",
      "genre": "Masculino",
      "race": "Humano",
      "image": "https://apidragonball.vercel.app/static/images/Dr._Frappe.png",
      "planet": "Tierra",
      "description": "El Dr. Frappé (フラッペ博士 Furappe Hakase¿?) es un personaje del relleno del anime, y creador del Androide Número 8, que tiene su aparición en el episodio 42",
      "biography": "Sin Biografia"
    },
    {
      "id": "666805702a01878ca18a9f69",
      "name": "Drum",
      "genre": "Desconocido",
      "race": "Desconocido",
      "image": "https://apidragonball.vercel.app/static/images/Drum.png",
      "planet": "Tierra",
      "description": "Sin Descripcion",
      "biography": "Drum pelea con Ten Shinhan siendo más poderoso que él. Entonces Ten Shinhan utiliza el Mafuba contra el Gran Rey Demonio Piccolo para dejarlo encerrado para siempre pero Drum intervino y fue arrastrado por esa técnica pero el Gran Rey Demonio Piccolo evitó la técnica para que Drum no quedara encerrado por el Mafuba. Entonces, Drum intenta aniquilar a Ten Shinhan pero en ese momento llega Son Goku con un poder similar al de Piccolo. Drum intenta darle una lección a Goku mientras Ten Shinhan dice que era muy fuerte, entonces Drum iba atacar a Goku pero él responde con una patada tan fuerte que a Drum se le sale un ojo, posteriormente agoniza poco a poco mientras Goku y el Gran Rey Demonio Piccolo se enfrentaban. Poco después Drum muere y su cuerpo fue destruido accidentalmente por Piccolo cuando intentaba atacar a Goku."
    },
    {
      "id": "6668062c2a01878ca18a9f6a",
      "name": "Ermitaño Grulla",
      "genre": "Masculino",
      "race": "Humano",
      "image": "https://apidragonball.vercel.app/static/images/Ermitano_Grulla.png",
      "planet": "Tierra",
      "description": "Ermitaño Grulla (鶴仙人 Tsuru Sennin¿?) fue un alumno de Mutaito, junto con Ermitaño Tortuga, y el maestro de la Escuela de la Grulla. Fue el primer y antiguo maestro de Ten Shinhan y Chaoz. Los llevó a participar en la edición número 22 del Torneo Mundial de las Artes Marciales, ya que escuchó que los alumnos de su rival, Ermitaño Tortuga, hicieron muy buen papel en el anterior torneo y quiere probar que su estilo es mejor. Más adelante acompaña a su hermano Tao Pai Pai en la edición número 23 del Torneo Mundial de Artes Marciales para vengarse de Ten Shinhan.",
      "biography": "Sin Biografia"
    },
    {
      "id": "666806bb2a01878ca18a9f6b",
      "name": "General Blue",
      "genre": "Masculino",
      "race": "Humano",
      "image": "https://apidragonball.vercel.app/static/images/General_Blue_Artwork.png",
      "planet": "Tierra",
      "description": "El General Blue (ブルー将軍しょうぐん Burū Shōgun¿?) es un personaje que aparece en el manga y anime de Dragon Ball y posteriormente como un personaje de relleno en Dragon Ball GT. Fue el mejor soldado del Ejército del Listón Rojo y el encargado de dirigir la Brigada Azul.",
      "biography": "El General Blue aparece cuando Son Goku se encuentra cerca de su campamento. Él se encarga de perseguir a Goku para robarle las Esferas del Dragón. Cuando Goku y sus amigos entraron a la cueva pirata fueron perseguidos por el General Blue sin que ellos se dieran cuenta. Cuando finalmente se encontraron, Krilin desafío al General Blue, pero es derrotado fácilmente. Krilin logra darle un golpe en la nariz la cual le sangra, y esto lo frustra y lo obliga a utilizar sus poderes de Telequinesis para congelar a Krilin y casi matarlo, durante la batalla, Bulma trato de detenerlo mediante provocaciones, pero no lo distrajo en lo más mínimo, esto pudo dar a entender que su interés no son las mujeres o que el no tiene tiempo para esas cosas. Goku llego al lugar justo a tiempo para salvar la vida de Krilin. Goku comienza a luchar contra el General Blue. Después de que el General Blue se dio cuenta de que Goku es demasiado fuerte, lo paralizo con su mirada de telequinesia y amenazo con matarlo con su arma. Afortunadamente para Goku, justo antes de apretar el gatillo, el General Blue vio a un ratón, y perdió su concentración cuando fue sorprendido por el roedor. Goku rompió la telekinesis del General Blue y lo lanza sobre una pared de la cueva, lo que le deja inconsciente. Después cuando recupera la consciencia descarta las posibilidades de obtener el tesoro de los piratas para la Armada de la Patrulla Roja por lo que decide salir del lugar antes de que este se derrumbara. De alguna manera sobrevive a la caída de la cueva de los piratas."
    },
    {
      "id": "666807652a01878ca18a9f6c",
      "name": "General White",
      "genre": "Masculino",
      "race": "Humano",
      "image": "https://apidragonball.vercel.app/static/images/MasterGeneralWhite.png",
      "planet": "Tierra",
      "description": "El General White (ホワイト将軍 Howaito Shōgun¿?) es un personaje que aparece en el manga y anime de Dragon Ball. Fue un soldado del Ejército del Listón Rojo que mantuvo el puesto de General y era el encargado de dirigir a a Brigada Blanca. Se encontraba oculto dentro de la Torre Músculo, lugar desde el cual daba ordenes a sus soldados.",
      "biography": "El General White fue designado para recuperar las esferas del dragón luego de que fuera informado sobre la derrota del Coronel Silver y la llegada de Goku a su ubicación. El General White se encontraba en el último piso de la Torre Músculo (una sede del Ejército del Listón Rojo), lugar desde el cual el General White se encontraba protegido por todos sus soldados y además desde ese lugar ejecutaba sus órdenes sobre los habitantes de la aldea Jingle y los atemorizaba ya que tenía secuestrado al alcalde de la aldea. Luego de que Goku se adentrara en la Torre Músculo, el General White junto a su mejor ayudante el Sargento Mayor Murasaki observo como el niño derrotaba a sus soldados. Se puso furioso al ver como Goku derroto al Sargento Metallic (un androide encargado de proteger el tercer piso) luego de que se acabaran sus baterías cuando estaba a punto de derrotar a Goku. El General White ordeno al Sargento Mayor Murasaki dirigirse a su piso correspondiente para impedir que Goku entrase hasta el ultimo piso. Entonces, el General White miro la lucha entre el Sargento Mayor Murasaki y el niño y se enfadaba cada vez que su soldado fallaba en sus intentos de matar a Goku. Después vio como el Sargento Mayor Murasaki libero al androide 8 (un androide creado específicamente para seguir ordenes) para poder derrotar a Goku, sin embargo, el androide 8 no quiso hacer daño alguno desobedeciendo las órdenes del Sargento Mayor Murasaki. Cuando el Sargento Mayor Murasaki amenazo con destruir al androide, Goku interfirió salvando la vida del androide y derrotando al Sargento Mayor Murasaki. Después en compañía del androide 8, Goku llego hasta el último piso a pesar de los intentos del General White por impedirlo, lamentablemente Goku y el androide 8 cayeron en una trampa que el General White les tenia preparada, ambos cayeron en otro piso que estaba custodiado por Buyon (un monstruo enorme), el General White planteo la victoria pero más adelante contemplo como Goku se las ingenió para derrotar a Buyon y volvieron al ultimo piso."
    },

    {
      "id": "66695fba029c68c6fbeb6c2b",
      "name": "Granjero",
      "genre": "Masculino",
      "race": "Humano",
      "image": "https://apidragonball.vercel.app/static/images/Granjero.png",
      "planet": "Tierra",
      "description": "El Granjero es un hombre de baja estatura (y fuerza) con cierta importancia ya que es el primer personaje de la serie de Dragon Ball Z en aparecer y también el primero en morir.",
      "biography": "Un día cualquiera estaba colocando heno en su Chevrolet azul mientras se fumaba un cigarro, se detuvo para tener un descanso y de repente ve como algo se acerca a la Tierra y crea una explosión. El Granjero se preguntaba si era un meteorito o un ovni, y decide ir en su furgoneta. Cuando llega va con su escopeta, pero se da cuenta que no es un meteorito, sino una nave de la cual sale el Saiyan Raditz, quien mide su fuerza con el Rastreador que solo llega a cinco (5). Raditz le dice que es una basura, en ese momento se acerca al Granjero quien asustado dispara, pero Raditz para la bala con su mano, para luego devolverla contra él, matándolo."
    },
    {
      "id": "66696092ccf06878e07ec641",
      "name": "Hatchan",
      "genre": "Masculino",
      "race": "Androide nº 8",
      "image": "https://apidragonball.vercel.app/static/images/Hatchan.png",
      "planet": "Tierra",
      "description": "El Androide Número 8 (人造人間８号 Jinzōningen Hachi-Go¿?), es un androide creado por el Dr. Gero y el Dr. Frappé como una de las armas secretas del Ejército del Listón Rojo, siendo el encargado de la seguridad de la Torre Músculo en sus últimos niveles. Tiene una fuerza muy superior a la de un humano corriente así como un tamaño y físico aterrador.",
      "biography": "Sin Biografia"
    },
    {
      "id": "66696136ccf06878e07ec642",
      "name": "Karin",
      "genre": "Masculino",
      "race": "Gato",
      "image": "https://apidragonball.vercel.app/static/images/Karin.png",
      "planet": "Tierra",
      "description": "Karin (カリン¿?) es un gato blanco, genio de las artes marciales, mundialmente famoso que vive en la tierra sagrada. Hace su aparición en el anime de Dragon Ball en el Episodio 61. Solo entrenaría a el que lograse subir a la Torre y llegar a él. Cuando Goku fue derrotado por Tao Pai Pai subió a la torre en la cual consiguió superar la supuesta prueba de quitarle a Karin la jarra con el agua que ¨daba más poder¨, pero realmente lo que le dio mas poder fue los tres días que tardó en conseguirlo, ya que el agua era normal y corriente. El Maestro Karin también entrenó al Maestro Roshi, pero el no tardó 3 días sino 3 años. Karin después de la muerte de Piccolo también entrena a Tenshinhan, Krilin, Yamcha y Chaoz.",
      "biography": "Karin es un senbyō (仙猫, gato inmortal) y este por lo menos tiene 800 años de edad aproximadamente. Él es una deidad que vive en la parte superior de su torre. La torre está situada justo debajo de la Atalaya de Kami. El joven Roshi fue el primero de muchos en subir a la alta Torre de Karin y tener un entrenamiento legendario. Le tomó tres años para poder tomarse el Agua Sagrada de Karin, que se rumoreaba que era para aumentar enormemente la propia fuerza y velocidad. Karin se ha mostrado como un gato perezoso y holgazán aunque su entrenamiento puede mejorar la fuerza de los Guerreros. Karin juega un papel muy importante en Dragon Ball, cuando entrena a Son Goku durante el Arco del Ejército del Listón Rojo. En Dragon Ball Z, Dragon Ball Super y Dragon Ball GT, Karin no tiene mucha relevancia en la trama principal ya que presta su asistencia periódica a Goku y los Guerreros Z por préstamos de Semillas del Ermitaño para las batallas."
    },
    {
      "id": "666961ebccf06878e07ec643",
      "name": "Krilin",
      "genre": "Masculino",
      "race": "Humano",
      "image": "https://apidragonball.vercel.app/static/images/Krilin.png",
      "planet": "Tierra",
      "description": "Tiene seis puntos en la frente y se rasura la cabeza cuando ejerce las artes marciales. Desde el Arco del Monstruo Boo como civil, suele llevar un cabello de color negro y corto, con algunos mechones que ocultan parte de sus puntos en la frente. Como Artista Marcial, Kame-Sen'nin le dio el Uniforme de la Escuela de la Tortuga, de color naranja con cinta azul oscuro (originalmente el traje era de color rojo y cinta negra), el cual usa siempre excepto en el Arco del Monstruo Boo y con el fondo de la insignia tortuga de color blanco (amarillo en Dragon Ball). Llevaba unas zapatillas chinas de color negro y ocasionalmente la Ropa de Combate Pesada que vestía Son Goku con Kami. En el Torneo del Arco del Monstruo Boo, utiliza usa un polo rojo y pantalones deportivos color beige. En La Batalla de los Dioses usa un changshan verde con bordados grises y el kanji de la Escuela Tortuga. En La Resurrección de 'F' y en Dragon Ball Super usa un uniforme de policía y un casco y durante su enfrentamiento con el Ejército de Freeza y en Arco de la Supervivencia Universal utiliza un dogi color naranja claro con muñequeras y correa color azul añil y zapatillas chinas. En sus momentos libres, utiliza una camiseta color escarlata con la palabra ¨Tacos¨ y bermudas color beige con zapatos azules.",
      "biography": "Sin Biografia"
    },
    {
      "id": "66696e78bd2cdb0d0af8e501",
      "name": "Lunch",
      "genre": "Femenino",
      "race": "Humana",
      "image": "https://apidragonball.vercel.app/static/images/Lunch_traje_de_sirvienta_en_el_manga.png",
      "planet": "Tierra",
      "description": "Lunch (ランチ Ranchi¿?) es uno de los personajes principales del manga Dragon Ball y su anime homónimo; Lunch es una chica que sufre de un trastorno de personalidad doble que a raíz de sus reacciones alérgicas provoca que ella cambie entre dos personalidades diferentes, ninguna de las personalidades recuerda lo que la otra hizo o dijo.",
      "biography": "Sin Biografia"
    },
    {
      "id": "66696e8bbd2cdb0d0af8e502",
      "name": "Mai",
      "genre": "Femenino",
      "race": "Humana",
      "image": "https://apidragonball.vercel.app/static/images/mai-dragon-ball.png.png",
      "planet": "Tierra",
      "description": "Mai (マイ Mai¿?) es una humana que forma parte del grupo del emperador Pilaf. Siempre trabaja con Shu y aunque ella es muy inteligente, ellos dos siempre se las arreglan para fallar en sus objetivos pero a diferencia de otros villanos (aparte de no tener fuerza física) nunca se rendían. Su poder no supera al de ningún humano común, sin embargo, siempre posee una gran cantidad de armas.",
      "biography": "Hace una aparición menor buscando nuevamente las Esferas del Dragón para Pilaf. Ella le acompaña a la Tienda de antigüedades del pueblo para comprar una esfera y despues huye de Goku, durante la huida la esfera se rompe y se dan cuenta de que es falsa. Mai finge ser amiga de Goku mientras Shu se disfraza de este en la boda organizada por el Rey Gyuma hasta que llega el Ejército del Listón Rojo. Mai es derrotada y el grupo entrega su esfera al Coronel Silver."
    },
    {
      "id": "66696ea9bd2cdb0d0af8e503",
      "name": "Mr. Popo",
      "genre": "Masculino",
      "race": "Genio",
      "image": "https://apidragonball.vercel.app/static/images/Mr._Popo_Artwork.png",
      "planet": "Tierra",
      "description": "Mr. Popo (ミスター・ポポ Misutā Popo¿?), es el ayudante de Kami. Lo acompaña durante todo Dragon Ball y es el encargado de atender a los visitantes que llegan al Templo Sagrado.",
      "biography": "Mr. Popo tiene una personalidad calmada y bondadosa. Cuando Goku lo conoce, este le está dando de comer a unas aves que lo rodeaban. Es hospitalario cocinando para los invitados y lavando la ropa de buena voluntad. Tiene habilidades para la artesanía, ya que es quien creó la escultura del dragón usada para la creación de las Esferas del Dragón."
    },
    {
      "id": "66696ee4bd2cdb0d0af8e504",
      "name": "Mutaito",
      "genre": "Masculino",
      "race": "Humano",
      "image": "https://apidragonball.vercel.app/static/images/Mutaito.png",
      "planet": "Tierra",
      "description": "Mutaito (武泰斗 Mutaito¿?) vivió en la Tierra 300 años antes de la historia de Dragon Ball y durante su época fue considerado como el mejor maestro de artes marciales y el hombre más fuerte de la Tierra.",
      "biography": "Durante mucho tiempo tuvo una escuela de las artes marciales donde enseñaba Kenpo, un arte marcial actual, por lo que se entiende que Goku practica el Kenpo y luego lo perfecciona. Sus mejores alumnos eran Tsuru-Sen'nin (el número uno en ese momento) y Kame-Sen'nin. Un día Kami después de un duro entrenamiento separó su pequeño sentimiento de maldad para poder ser el sucesor de Dios, y del cual apareció el Rey Demonio Piccolo, que con sus demonios aterrorizaban el mundo. Los dos discípulos de Mutaito en ese momento no sabían utilizar el Kamehameha ni el Dodonpa, aunque ambos tenían un poder superior al que tienen en la serie ya que en esta época eran jóvenes y fuertes, tanto como para vencer a un demonio de Piccolo, claramente eran menos fuertes que su maestro, por otro lado Mutaito tenía un montón de técnicas, pero eso no era suficiente para derrotar al Rey Demonio Piccolo, por eso se fue a entrenar por unos años e ideó una técnica (el Mafuba) con la cual podía encerrar a un guerrero en un Contenedor Electrónico, pero perdiendo la vida en ello y salvando la Tierra durante 300 largos años hasta que Piccolo vuelva."
    },
    {
      "id": "66696ef8bd2cdb0d0af8e505",
      "name": "Mutenroy",
      "genre": "Masculino",
      "race": "Humano",
      "image": "https://apidragonball.vercel.app/static/images/Mutenroy.png",
      "planet": "Tierra",
      "description": "Muten Roshi (武む天てん老ろう師し Muten Rōshi¿?), quien se da a conocer como el Ermitaño Tortuga (亀かめ仙せん人にん Kame Sennin¿?), fue en su momento el terrícola más fuerte de la Tierra, y mucha gente lo recuerda como el «Dios de las Artes Marciales», pero antes de poder ostentar dicho título tuvo que trabajar y estudiar las artes marciales con su maestro Mutaito y su eterno rival Ermitaño Grulla. Es el maestro y fundador del Estilo Tortuga (亀かめ仙せん流りゅう Kame-Sen'ryū¿?), siendo el primer maestro tanto de Son Goku como de Krilin.",
      "biography": "Desde su juventud, Roshi entrenó muy duro y tuvo que enfrentarse a Piccolo Daimaō y sus Demonios guerreros, junto a su maestro Mutaito, quien murió cuando utilizó el Mafuba, técnica que Roshi aprendería. Luego entrenaría con el Maestro Karin, donde tardaría tres años en conseguir el Agua Sagrada y la Nube Voladora. También crearía la famosa técnica KameHameHa, la cual demoraría cincuenta años en aprenderla, pero el tiempo no le importaría ya que su hermana, Uranai Baba, le dio el elixir de la vida, lo cual le dio al Maestro Roshi la vida eterna. Desde temprana edad fue un pervertido, demostrándolo con cualquier chica guapa, la primera chica fue Fan Fan."
    },
    {
      "id": "66696f07bd2cdb0d0af8e506",
      "name": "Oficial del Estado Mayor Black",
      "genre": "Masculino",
      "race": "Humano",
      "image": "https://apidragonball.vercel.app/static/images/General_Black_Artwork.png",
      "planet": "Tierra",
      "description": "El Oficial del Estado Mayor Black (ブラック参さん謀ぼう Burakku Sanbō¿?) es el Oficial del Estado Mayor y ayudante del jefe del Ejército del Listón Rojo. Lleva a cabo las órdenes del Comandante Red Rybon y le informa de la situación actual de los demás funcionarios del ejército, hasta que posteriormente asciende al rango de Comandante luego de asesinar a su antiguo superior.",
      "biography": "Al revelar su ambición, Black quedó consternado, y dijo que su loca ambición ha costado muy caro al Ejército, como se mostró en la invasión de Goku, y que eventualmente puede conducir a su derrota. Red responde que no importa cuántos soldados mueran, correrá el riesgo, siempre y cuando alcanza su meta, y deja claro que él es sólo un lacayo, y que el resto del Ejército del Listón Rojo también. Enfadado, asesina a Red y le ofrece un puesto a Goku en el nuevo Ejército del Listón Negro, a lo que Goku se niega. Empieza una nueva batalla, pero Goku es demasiado poderoso para él. Entonces se mete en un traje conocido como «Robot de Batalla». La lucha continúa afuera y Black arroja a Goku en el suelo. Él parece acabar con Goku, pero el se recupera rápidamente. A continuación, Black dispara un cohete para destruir a Goku, amenazando incluso a sus soldados y el personal, pero Goku desvía el cohete. Después de darse cuenta que el muchacho es demasiado poderoso, este intenta escapar de Goku, pero el joven guerrero lo alcanza y acaba con su robot de combate y consigo."
    },
    {
      "id": "66696f27bd2cdb0d0af8e507",
      "name": "Piano",
      "genre": "Masculino",
      "race": "Desconocido",
      "image": "https://apidragonball.vercel.app/static/images/Piano_Dokkan.png",
      "planet": "Tierra",
      "description": "Piano (ピアノ¿?) fue el primer ¨hijo¨ del Gran Rey Demonio Piccolo después de su liberación de la técnica Mafuba a manos de Pilaf. Es un ser bastante inteligente, posee forma de pterodáctilo, y a pesar de ser el retoño más longevo del Rey Demonio, este lo trata como una especie de sirviente.",
      "biography": "Sin Biografia"
    },
    {
      "id": "66696f33bd2cdb0d0af8e508",
      "name": "Picolo dios",
      "genre": "Masculino",
      "race": "Namekiano",
      "image": "https://apidragonball.vercel.app/static/images/Picolo_dios.png",
      "planet": "Namek",
      "description": "Dios (神かみ Kami¿?) es un personaje secundario del manga y anime de Dragon Ball. Fue la parte bondadosa de Piccolo Original al realizar la fisión. De esta manera obtuvo el papel de Guardián de la Tierra y lo fue durante un largo periodo de tiempo. Fue quien se encargó de crear las Esferas del Dragón dando vida de esta manera a Shen Long. Anteriormente, él era un habitante del Planeta Namek, aunque durante mucho tiempo lo ignoró completamente.",
      "biography": "Sin Biografia"
    },
    {
      "id": "66696f48bd2cdb0d0af8e509",
      "name": "Pilaf",
      "genre": "Masculino",
      "race": "Desconocido",
      "image": "https://apidragonball.vercel.app/static/images/Pilaf.png",
      "planet": "Tierra",
      "description": "Pilaf (ピラフ Pirafu¿?), autoproclamado y conocido por sus secuaces como el Gran Rey Pilaf (ピラフ大だい王おう Pirafu Daiō¿?), es el primer villano principal de la serie de manga y anime de Dragon Ball, así como un personaje secundario en Dragon Ball Super y Dragon Ball GT. Antiguamente fue el orgulloso príncipe del pueblo meshikiyano, quienes una vez gobernaron una región entera de la Tierra conocida como el Reino de Meshikiya. No obstante, el reinado de su etnia acabó hace mucho tiempo y actualmente él es únicamente el líder de una pequeña pandilla que busca conquistar el mundo y ganar riquezas, casi nunca se le han visto más de dos colaboradores: Shu, un perro ninja, y Mai, una peligrosa mujer.",
      "biography": "Sin Biografia"
    },
    {
      "id": "66696f5cbd2cdb0d0af8e50a",
      "name": "Puar",
      "genre": "Desconocido",
      "race": "Desconocido",
      "image": "https://apidragonball.vercel.app/static/images/Puar.png",
      "planet": "Tierra",
      "description": "Pu'er (プーアル Pūaru¿?) es el compañero inseparable de Yamcha. Aunque al principio era un enemigo, pasa a formar parte del grupo que acompaña a Son Goku, Bulma y Woolong en la primera búsqueda de las Esferas del Dragón en la serie de manga y anime de Dragon Ball.",
      "biography": "Sin Biografia"
    },
    {
      "id": "66696f71bd2cdb0d0af8e50b",
      "name": "Red Rybon",
      "genre": "Masculino",
      "race": "Humano",
      "image": "https://apidragonball.vercel.app/static/images/Red_Rybon.png",
      "planet": "Tierra",
      "description": "Red Rybon[1] (レッド・ライボン Reddo Raibon¿?) es un personaje que aparece en el manga y anime de Dragon Ball. Fue el fundador y líder supremo del Ejército del Listón Rojo, mantuvo su liderazgo durante mucho tiempo hasta que Goku se encargo de derrotar y desmantelar su base y fuese asesinado por el Oficial del Estado Mayor Black.",
      "biography": "Red dirige el organizado regimiento desde el Cuartel General con mano de hierro y sancionando la incompetencia con la ejecución. Acompañado de un leal gato, el objetivo de Red es poseer las Esferas del Dragón, por lo que distribuye a sus hombres por las diversas regiones donde su radar, el cual no es tan exacto como el radar construido por Bulma. El Comandante Red también poseía mucho poder y mucho dinero, pero uno de sus problemas era su altura. Por este complejo intento reunir las Esferas del Dragón para que le cumpliese su deseo de ser mas alto."
    },
    {
      "id": "66696f7cbd2cdb0d0af8e50c",
      "name": "Rey Gyuma",
      "genre": "Masculino",
      "race": "Humano",
      "image": "https://apidragonball.vercel.app/static/images/Rey_Gyuma_DB_Dokkan.png",
      "planet": "Tierra",
      "description": "El Rey Gyuma (牛ぎゅう魔王まおう Gyūmaō¿?) es el rey del Monte Fry-pan. Fue esposo de la fallecida reina de esta montaña con quien tuvo a su hija, Chi-Chi. Años después, se convertiría en el suegro de Son Goku y el abuelo de Son Gohan y Son Goten.",
      "biography": "En su juventud estudió artes marciales con Kame-Sen'nin, siendo su alumno más poderoso en ese tiempo, aparte de Son Gohan. Logró reunir un gran tesoro en su castillo, pero la codicia le incitó a asesinar a todo el que se acercaba a él, creyendo que todos tenían intención de robarle su fortuna."
    },
    {
      "id": "666aaea6f7bff6e5aa6bb029",
      "name": "Rey Demonio Picolo",
      "genre": "Masculino",
      "race": "Namekiano",
      "image": "https://apidragonball.vercel.app/static/images/Rey_Demonio_Piccolo_rejuvenecido_Artwork.png",
      "planet": "Namek",
      "description": "El Gran Rey Demonio Piccolo (ピッコロ大だい魔王まおう Pikkoro Daimaō¿?) es un personaje antagónico de Dragon Ball. Su aparición en la historia marca un antes y un después en Dragon Ball al ser el padre de Piccolo Jr. Debido a su aparición en la trama, la historia pierde gran parte del humor que la caracterizaba al principio y adquiere una mayor seriedad y más drama, concentrándose más en los combates y menos en las aventuras, prácticamente inexistentes en el arco que protagoniza.",
      "biography": "Piccolo tiene dos significados, el primero en el idioma namekiano y el segundo en japonés: En namekiano, significa «Rey Maligno de Otro Mundo» y en japonés se podría traducir como «Gran Rey Demonio Piccolo» como referencia a que su otra parte es Dios, «Piccolo» es una especie de flauta de origen italiano, haciendo juego con los instrumentos musicales, al igual que sus hijos. Piccolo en namekiano significa 'de otro mundo' o 'abierto'."
    },
    {
      "id": "666aaeb7f7bff6e5aa6bb02a",
      "name": "Sargento Mayor Murasaki",
      "genre": "Masculino",
      "race": "Humano",
      "image": "https://apidragonball.vercel.app/static/images/Ninja_Murasaki_Artwork.png",
      "planet": "Tierra",
      "description": "El Sargento Mayor Murasaki (ムラサキ曹そう長ちょう Murasaki Sōchō¿?, Sargento Mayor Púrpura) es, como su nombre lo indica, un sargento mayor del Ejército del Listón Rojo, siendo el encargado de la seguridad personal del General White, así como el segundo al mando de la Torre Músculo, protegiendo el penúltimo de los pisos. Tenía un gran poder y muchas técnicas (algunas algo ridículas) y su jefe lo nombraba como alguien invencible.",
      "biography": "El Sargento Mayor Murasaki era un suboficial del Ejército del Listón Rojo, encargado de la seguridad general de la Torre Músculo y guardián de uno de los pisos que preceden al escondrijo del General White. Es un ninja, en teoría de una gran fuerza y destreza, que el General White asume como invencible. En realidad, aunque es relativamente diestro, su enfrentamiento con Son Goku se convierte en algo parecido a un número de circo, en el que Murasaki le propone realizar diversas pruebas, como por ejemplo ser capaz de encontrarle cuando utiliza camuflaje o ver quién es más rápido en una carrera de velocidad."
    },
    {
      "id": "666aaec1deb8240906c73c1d",
      "name": "Sargento Metallic",
      "genre": "Masculino",
      "race": "Cyber",
      "image": "https://apidragonball.vercel.app/static/images/Metallic.png",
      "planet": "Tierra",
      "description": "El Sargento Metallic (メタリック軍ぐん曹そう Metarikku Gunsō¿?) es un personaje que aparece en el manga y anime de Dragon Ball. Fue un que formaba parte del Ejército del Listón Rojo, manteniendo el puesto de sargento. Su misión era proteger el tercer piso de la Torre Músculo cuando Goku se infiltró en dicha base militar.",
      "biography": "El Sargento Metallic tiene una breve aparición en Dragon Ball GT durante el Arco del Androide Definitivo después de que él y otros miembros del Ejército del Listón Rojo escaparan del infierno. Durante su breve estancia en la tierra fue capaz de activar sus puños y causar importantes daños a un edificio, pero es asesinado nuevamente, pero en esta ocasión por Pan (la nieta de Goku) con un simple ataque de Ki."
    },
    {
      "id": "666aaed3f7bff6e5aa6bb02b",
      "name": "Shu",
      "genre": "Masculino",
      "race": "Canina",
      "image": "https://apidragonball.vercel.app/static/images/Shu_Render.png",
      "planet": "Tierra",
      "description": "Shu (シュウ Shū¿?), inicialmente conocido en el manga como Soba (ソバ Soba¿?), es un perro humanoide. Forma parte del grupo de Pilaf y desde el principio de Dragon Ball hasta Dragon Ball GT estuvo intentando junto a su amo Pilaf conquistar el mundo.",
      "biography": "Anteriormente Shu era un experto entrenador de perros, probablemente porque él es uno. Se revela que él, junto con Mai, fueron reclutados por el emperador Pilaf mediante un anuncio."
    },
    {
      "id": "666aaee9f7bff6e5aa6bb02c",
      "name": "Son Gohan (Abuelo)",
      "genre": "Masculino",
      "race": "Humano",
      "image": "https://apidragonball.vercel.app/static/images/Abuelo_Gohan_Artwork.png",
      "planet": "Tierra",
      "description": "Son Gohan (孫悟飯 Son Gohan¿?), mejor conocido como el Abuelo Son Gohan (孫悟飯（じいちゃん） Son Gohan (Jiichan)¿?), es el abuelo adoptivo de Son Goku, al cual encontró siendo apenas un bebé y se ocupó de educarlo como a un nuevo miembro de la raza humana. Son Goku le puso ¨Son Gohan¨ de nombre a su primer hijo biológico en su honor.",
      "biography": "Son Gohan era el discípulo aventajado de Kame-Sen'nin, conocedor por tanto del Kamehameha y todas las técnicas de la Escuela Tortuga, seguido del Rey Gyuma, siempre un paso por detrás del anciano Son Gohan. Son Gohan encontró a un pequeño niño en la montañas cerca de su casa, en una cápsula espacial, lo nombro con el nombre de Son Goku. Aunque tenia toda la disposición para criar a Goku, tuvo que lidiar con un niño muy inquieto y muy agresivo como consecuencia de su origen Saiyan. Un día, Gohan salió de su casa junto con Goku, y este accidentalmente cayó por un barranco recibiendo un gran golpe en la cabeza del cual milagrosamente sobrevivió. Si bien, Goku perdió el conocimiento y al despertar no recordaba nada. A partir de ese momento fue mucho más dócil, llenando de alegría la vida del anciano, quien le instruyó en artes marciales, ya que él era el alumno predilecto de Kame-Sen'nin y por tanto un experto en diversas técnicas."
    },
    {
      "id": "666aaef5f7bff6e5aa6bb02d",
      "name": "Tambourine",
      "genre": "Masculino",
      "race": "Desconocido",
      "image": "https://apidragonball.vercel.app/static/images/Tambourine_Oficial_Art.png",
      "planet": "Tierra",
      "description": "Tambourine (タンバリン Tanbarin¿?) es el segundo hijo del Gran Rey Demonio Piccolo. Su pasatiempo favorito es matar seres humanos, ya que los considera inferiores a los de su especie y su familia.",
      "biography": "Tambourine nació poco tiempo después de que el Gran Rey Demonio Piccolo fuera liberado por Pilaf. El Rey Piccolo le ordena que asesine a los diez finalistas del Torneo Mundial de las Artes Marciales y que recoja la Esferas del Dragón que se encuentre en ese lugar. Su primera víctima fue Krilin, a quien enfrenta poco después de la final del 22ª Torneo Mundial de las Artes Marciales, cuando Krilin va a recoger el Báculo Sagrado de Goku. Krilin batalla con todo lo que tiene, pero no puede superar a Tambourine, quien lo mata con una patada en la cabeza, partiéndole el cuello. Luego roba la Esfera del Dragón de Cuatro Estrellas y la lista de los participantes del torneo de los últimos diez años. Siguiendo su camino, se enfrenta con Goku, quien está decidido a vengar la muerte de Krilin. Tambourine se burla de la muerte de Krilin, haciendo enojar mucho más a Goku, por lo que tienen una batalla, pero Goku estaba muy cansado por las batallas del Torneo Mundial de las Artes Marciales por lo que no tuvo muchas fuerzas y fue vencido por Tambourine, quien además destruye la Nube Kinton y se marcha pensando que Goku está muerto. Luego ataca y asesina al Rey Chapa, Bacterian, Giran, Pamputt, el Lobo Hombre y otros guerreros sin problemas. Luego se enfrentaría contra Yamcha, pero antes de que lo mate, Piccolo le ordena buscar y matar al responsable de la muerte de su hermano, Cymbal. Cumpliendo su misión, Tambourine se encuentra con Yajirobe, pero se distrae cuando Goku llega. Tambourine comienza la revancha contra Goku, muy seguro de que iba a ganar, pero la batalla fue totalmente diferente ya que Goku dominaba la pelea. Cuando se dio cuenta que no podía vencerlo, Tambourine trata desesperadamente de escapar, pero Goku lo mata con un KameHameHa. Antes de morir, Tambourine le da la ubicación de Goku al Rey Demonio Piccolo, por lo que este lleva sus Esferas del Dragón y le pide a Shen Long la eterna juventud, siendo más poderoso."
    },
    {
      "id": "666aaf01f7bff6e5aa6bb02e",
      "name": "Tao Pai Pai",
      "genre": "Masculino",
      "race": "Humano",
      "image": "https://apidragonball.vercel.app/static/images/Tao_Pai_Pai_Trans.png",
      "planet": "Tierra",
      "description": "Tao Pai Pai (桃白白 Tao Pai Pai¿?) es un personaje del manga y anime de Dragon Ball y posteriormente un personaje de relleno en Dragon Ball Z. Fue conocido como el asesino más famoso del mundo, y temido por muchas personas, sus servicios solo los podían solicitar muy pocas personas. Fue el hermano menor de Tsuru Sen'nin, así como el mejor discípulo en su escuela, por encima de Ten Shinhan y Chaoz ganando de esta manera la admiración de Ten Shinhan.",
      "biography": "Tao Pai Pai nació en el año 459, sólo dos años antes de la batalla contra el Gran Rey Demonio Piccolo. Entreno en la Escuela de la Grulla donde su maestro fue Tsuru-Sen'nin que también era su hermano mayor. A pesar de que él era más joven, Tao Pai Pai fue siempre un paso por delante de su hermano mayor y una rivalidad empezó a crecer entre ellos. Además se decía a si mismo que era una gran influencia para la Escuela de la Grulla. En ocasiones se encargaba del entrenamiento de Ten Shinhan, pero sus métodos eran bastante crueles. Los dos hermanos comenzaron a pelear por cosas muy pequeñas y con el tiempo, un simple plato de arroz fue demasiado para separarlos. Fue un empleado de oficina hasta el año 730, luego se salió y fue entonces cuando comenzó su carrera como asesino."
    },
    {
      "id": "666aaf0ef7bff6e5aa6bb02f",
      "name": "Tenshinhan",
      "genre": "Masculino",
      "race": "Humano Triclope",
      "image": "https://apidragonball.vercel.app/static/images/Tenshinhan.png",
      "planet": "Tierra",
      "description": "Ten Shinhan (天てん 津しん飯はん Ten Shinhan¿?) es un personaje que aparece en el manga y en el anime de Dragon Ball, Dragon Ball Z, Dragon Ball GT y posteriormente en Dragon Ball Super. Ten Shinhan es un luchador terrícola humano de artes marciales descendiente de un clan alienígena, que tras realizar un largo entrenamiento mental, obtuvo un tercer ojo. Es considerado uno de los individuos más poderosos provenientes de la Tierra dentro del universo de Dragon Ball.",
      "biography": "Ten Shinhan nació en el año 733, durante su niñez fue entrenado por el Maestro Tsuru y en ocasiones por Tao Pai Pai, aunque sus métodos eran bastante crueles. No se sabe nada con certeza acerca de sus padres, solo se sabe que es descendiente de la raza conocida como tríclope (tres ojos), pero es nacido en la Tierra. Según el anime fue adiestrado con dureza desde la niñez por el Maestro Tsuru y su hermano Tao Pai Pai, especialmente este último que tenía tendencia a mal tratarlo y despreciarlo. Esto explica el porqué del odio de Ten Shinhan a todo el mundo y su deseo de seguir la carrera de asesino profesional como sustituto de Tao Pai Pai."
    },
    {
      "id": "666aaf19f7bff6e5aa6bb030",
      "name": "Umigame",
      "genre": "Desconocido",
      "race": "Tortuga",
      "image": "https://apidragonball.vercel.app/static/images/Umigame_Artwork.png",
      "planet": "Tierra",
      "description": "Tortuga Marina (ウミガメ Umigame¿?), conocido como Urigame en Hispanoamérica, es la tortuga que ha acompañado a Kame-Sen'nin durante un largo tiempo; tiene más de mil años de edad y hace cientos de años que aprendió a hablar.",
      "biography": "Aparece en los primeros capítulos de Dragon Ball, cuando Goku había prácticamente conocido a Bulma y empezado su viaje. Cuando lo encuentran, Tortuga Marina les explica porque está en las montañas y no cerca de la costa. Al principio Bulma quería dejarla allí porque para llevarlo a la playa tendrían que desviarse de su camino, pero Goku la convence y la llevan a la playa. Él agradecido, les dice que esperen, ya que haberle ayudado les traería un obsequio. Tortuga Marina trajo con él al maestro de las artes marciales Kame-Sen'nin, con quien vive en la Casa Kame. Tortuga Marina tiene cientos de años y durante Dragon Ball apoya desde la Casa Kame a los Guerreros Z."
    },
    {
      "id": "666aaf2af7bff6e5aa6bb031",
      "name": "Upa",
      "genre": "Masculino",
      "race": "Humana",
      "image": "https://apidragonball.vercel.app/static/images/Upa.png",
      "planet": "Tierra",
      "description": "Upa (ウパ¿?) es el hijo de Bora, el guerrero que protegía la Tierra Sagrada de Karin Cuando Tao Pai Pai mató a su padre, le intentó atacar con un hacha, pero Tao Pai Pai lo esquivó, y agarró del cuello, hasta que Goku bajó y lo salvó venciendo al enemigo. Durante la pelea Goku demostró ser superior a Tao Pai Pai, aunque este sacó una espada y logró algo de ventaja, Upa al ver la desventaja le alcanzó a Goku su Báculo Sagrado con el que finalmente ganaría la batalla.",
      "biography": "Sin Biografia"
    },
    {
      "id": "666aaf51f7bff6e5aa6bb032",
      "name": "Uranai Baba",
      "genre": "Femenino",
      "race": "Humana",
      "image": "https://apidragonball.vercel.app/static/images/Uranai_Baba_Artwork.png",
      "planet": "Tierra",
      "description": "Uranai Baba (占いババ Uranai Baba¿?, literalmente: Vieja Adivina) es un personaje del manga y anime de Dragon Ball, es una bruja adivina y la hermana mayor de Kame-Sen'nin. Cobra cantidades exorbitantes por sus servicios, aunque existe la alternativa de vencer a sus cinco ayudantes. Es conocida por Goku como la ¨Uraña Baba¨ o ¨Araña Baba¨, lo que claro, a ella le molesta. Ella misma ha declarado que ¨Uranai Baba¨ no es su verdadero nombre, sino un apodo.",
      "biography": "Sin Biografia."
    },
    {
      "id": "666aaf5cf7bff6e5aa6bb033",
      "name": "Woolong",
      "genre": "Masculino",
      "race": "Semi Humano",
      "image": "https://apidragonball.vercel.app/static/images/Woolong.png",
      "planet": "Tierra",
      "description": "Su nombre proviene del té oolong (烏龍, pinyin: wūlóng), una variedad de té chino conocido como té del dragón. Literalmente, Woolong significa «dragón negro» en chino mandarín.",
      "biography": "Nació en el Año 743. Estudió, junto con Pu'er en el instituto Nanbu Henshin Yōchien (南部変身幼稚園 Parvulario de Transformación del Sur) donde aprendió sus habilidades. Sin embargo, no consiguió terminar el curso debido a que le expulsaron de la escuela por tocarle las bragas a su maestra y molestar a sus compañeros, eso explica porque sólo dura 5 minutos transformado. Tras eso, viajó a una aldea cercana donde aprovechó sus transformaciones para exigir dinero a los aldeanos y raptar a todas las niñas para casarse con ellas. Sin embargo, un día llegaron a la aldea, Bulma y Son Goku en busca de una de las bolas de dragón. Woolong trató de hacer creer a Goku que era un ser imposible de vencer, pero el saiyano no le creyó y el cerdo se convirtió en murciélago. Como Goku le perseguía en la Nube Kinton, decidió transformarse en misil, pero se le acabó el tiempo, y terminó rindiéndose para no caer al vacío. Tras ello, Bulma decidió que fuera con ellos a la búsqueda de las bolas de dragón. Durante esa búsqueda de las bolas de dragón no tuvo mayor papel que el de conductor del autobús. Sin embargo, cuando Pilaf les robó las Esferas del Dragón y estaba a punto de desear ser el rey del mundo, Woolong se lo impidió deseando unas bragas blancas."
    },
    {
      "id": "666aaf6cf7bff6e5aa6bb034",
      "name": "Yajirobei",
      "genre": "Masculino",
      "race": "Humano",
      "image": "https://apidragonball.vercel.app/static/images/Yajirobe.png",
      "planet": "Tierra",
      "description": "Yajirobei (ヤジロベー Yajirobē¿?) es un personaje secundario en Dragon Ball y Dragon Ball Z, y también toma un aspecto de menor importancia en Dragon Ball Super[2] y Dragon Ball GT.",
      "biography": "Sin Biografia"
    },
    {
      "id": "666aaf79f7bff6e5aa6bb035",
      "name": "Yamcha",
      "genre": "Masculino",
      "race": "Humano",
      "image": "https://apidragonball.vercel.app/static/images/Yamcha.png",
      "planet": "Tierra",
      "description": "Yamcha (ヤムチャ Yamucha¿?), es uno de los protagonistas principales del manga y anime de Dragon Ball que aparece en Dragon Ball Z, Dragon Ball Super y Dragon Ball GT como personaje secundario. Al principio de la historia, apareció como un bandido del desierto que una vez fue el primer enemigo de Goku, pero con el tiempo cambió su forma de ser, volviéndose un amigo y miembro de los Guerreros Z. Tiene un inseparable compañero llamado Pu'er, el cual lo acompañaba en todas sus aventuras de ladrón, como Guerrero Z y vida de civil y por toda su vida.",
      "biography": "Yamcha es el primer enemigo peligroso con el que Goku se encuentra. Junto a Puar, eran bandidos del desierto, pero en cuanto se entera del poder de las esferas del dragón, se interesa en obtenerlas para pedirle a Shen Long que le quite el miedo que siente por las mujeres, que llega incluso a terror cuando ve a Bulma por primera vez. Cuando Goku se convierte en Ozaru en el castillo de Pilaf, es Yamcha quien logra atraparlo de la cola para debilitarlo. Luego de la primera reunión de las esferas, inicia un noviazgo con Bulma. Se entrena duramente para participar en el primer torneo de la serie, donde cae derrotado en octavos de final ante Jackie Chun. Los constantes celos y malhumor de Bulma hacían terminar constantemente su noviazgo, pero siempre volvían a estar juntos. Siempre tuvo mala suerte, en los torneos, por ejemplo, siempre es vencido en la primera lucha de las finales por un oponente muy superior (Jackie Chun en el primer torneo, Tenshinhan en el segundo con mucha crueldad y Shen (Kami) en el tercero). El contrincante más poderoso a quien pudo derrotar en la primera parte de la serie fue al Hombre Invisible, aunque sólo gracias a una idea de Krilin."
    }
    ]

    this.charactersZ = [

      {
        "id": "666d48593ee26fcdf9930396",
        "name": "Son Goku",
        "genre": "Masculino",
        "race": "Saiyano",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Goku_DBZ_Base.png",
        "planet": "Vegeta",
        "description": "También comparado con la mayoría de los humanos, incluidos aquellos entrenados en las artes del ki, Son Goku posee una gran cantidad de fuerza, velocidad y resistencia. Por ejemplo, cuando era un niño, podía levantar un auto sobre su cabeza y tirarlo con facilidad, y durante su entrenamiento con Kame-Sen'nin Goku podía empujar formaciones rocosas masivas que al menos pesarían más de 100 toneladas. En el punto más alto de su fuerza, mostró la capacidad de destruir montañas, islas e incluso dañar en gran medida planetas enteros con solo la fuerza física. Para la velocidad, mostró velocidades supersónicas incluso más rápidas que la luz cuando llegó al Arco de los Saiyanos. Para cuando se convirtió en Supersaiyano Dios, su velocidad había alcanzado velocidades masivas que la velocidad de la luz y su fuerza física era suficiente para que una de las ondas de choque de sus golpes se sintiera en todo el universo, dañando incalculablemente y destruyendo muchos planetas y estrellas, hasta este punto, solo cuatro golpes entre Beerus y Goku son suficientes para destruir completamente el universo.",
        "biography": "Es un experto en artes marciales, bajo el estilo de la Escuela Tortuga, es conocido por ser cercano a un prodigio, logrando aprender técnicas y niveles de fuerza que a otros individuos le tomaría tiempo aprender, incluso supo cómo utilizar habilidades como leer la mente sin siquiera saber cómo hacerlo. Goku ha demostrado utilizar distintas partes de su cuerpo para ayudarlo en un combate, tales como disparar un Kamehameha con los pies, utilizar sus ojos para lanzar un rayo láser de ki en el Arco de Namek y Freeza entre otros ejemplos.",
        "transformations": [
          {
            "id": "0",
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/Ozaru/Ozaru.png",
            "description": "En primer lugar, tenemos al grandioso Ozaru, la forma más bestial de un Saiyan y también la primera que Goku mostró en pantalla cuando tan solo era un niño. Esta transformación hizo su aparición en el episodio 12 de Dragon Ball y lo que la desató fue la luna llena, lo cual hizo que Goku obtuviera su fuerza x10 y un descontrol absoluto de todo lo que hacía en este momento. La única manera de detenerlo fue cortándole la cola."
          },
          {
            "id": "1",
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/SuperSaiyan1.png",
            "description": "Cuando Freezer alcanza su última forma y ha devastado todo a su paso, Goku se ve obligado a superarse así mismo, alcanzando el conocido Super Saiyan 1. Esta transformación hace que el cabello de Goku se torne de color rubio y se levante, mientras que sus ojos se vuelven azules y su aura amarilla. En este estado, la fuerza, velocidad, reacción y resistencia aumentan x50, además, el usuario se vuelve más agresivo porque el detonante es la ira. Por ejemplo, lo que hizo que Goku se convirtiera en Super Saiyan fue que Freezer eliminara a Krilin frente a él."
          },
          {
            "id": "2",
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/SuperSaiyan2.png",
            "description": "En la fase Super Saiyan 2 el cabello de Goku se eriza mucho más y su aura obtiene rayos azules, mientras que también hay un pequeño cambio en sus cejas, las cuales son un poco más delgadas y rectas de lo normal. Esta transformación obtiene el poder x2 de Super Saiyan 1."
          },
          {
            "id": "3",
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/SuperSaiyan3.png",
            "description": "Tras los siete años de entrenamiento en el Otro Mundo, Goku se convierte en el primero de su raza en alcanzar la fase Super Saiyan 3. Esta forma obtiene el poder x4 de Super Saiyan 2 y hace que Goku actúe mucho más serio y apático en comparación de cuando usa las anteriores transformaciones. Esta fase altera drásticamente el cambio físico del personaje, ya que su melena crece considerablemente y sus cejas son eliminadas por completo, además, parece que su voz se engruesa un poco más."
          },
          {
            "id": "4",
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/KaioKen.png",
            "description": "Cuando Goku crece empieza a tomar más disciplina ante las artes marciales, lo cual lo lleva a entrenar una técnica muy poderosa, el Kaio-Ken. Este poder le permite al usuario multiplicar su fuerza, velocidad y mejora considerablemente los sentidos. Goku la aprendió para hacerle frente a la llegada de los saiyanos Nappa y Vegeta. Su forma muestra la misma apariencia de Goku, pero con un aura energética de color rojo que enana alrededor de su cuerpo mientras el Kaio-Ken se mantiene activo."
          }
        ]
      },
      {
        "id": "666d46b93ee26fcdf9930385",
        "name": "Androide Número 16",
        "genre": "Masculino",
        "race": "Cybor",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Androide16.png",
        "planet": "Tierra",
        "description": "Número 16 fue creado por Gero al tomar como referencia a Gebo o «Gold» entre el Alto Mando del Listón Rojo para conmemorar a su hijo biológico que cayó en combate tras impactarle una bala enemiga.",
        "biography": "El androide número 16 apareció por primera vez dentro de su cápsula contenedora en el Laboratorio del Dr. Gero. Desde un principio, los androides número 17 y 18 trataron de convencer al Dr. Gero de liberarlo, pero este se rehusaba, causando como consecuencia su muerte. Una vez eliminado el Dr. Gero, el androide número 17 procedió a despertar al androide número 16, pero son interrumpidos por Trunks, quien utiliza todas sus fuerzas para evitar que este sea reactivado. Sin embargo, los androides logran despertarlo fácilmente. Al despertar, el androide número 16 causó un gran miedo a todos debido a su inmenso tamaño, así como fuerza física. Sus compañeros androides intentaron persuadirlo para que eliminara a los Guerreros Z, pero el androide se rehúsa al decir que su único objetivo era Son Goku. Impresionados, los androides número 17 y 18 se marchan resignados junto a Número 16.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "666d46d13ee26fcdf9930386",
        "name": "Androide Número 17",
        "genre": "Masculino",
        "race": "Cybor",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Androide17.png",
        "planet": "Tierra",
        "description": "Androide Número 17 (人造人間１７号 Jinzōningen Jū Nana-Gō¿?) conocido como Lapis (ラピス Rapisu¿?) antes de ser secuestrado, es el hermano mellizo de la Androide Número 18, quien al igual que ella antes de ser Androide era un humano normal hasta que fueron secuestrados por el Dr. Gero, y es por eso que lo odian. Tras su cambio de humano a Androide, le insertaron un chip con el objetivo de destruir a Son Goku, quien en su juventud extermino al Ejército del Listón Rojo. Al considerarse defectuoso porque no quería ser 'esclavo de nadie', el Dr. Gero les había colocado a ambos hermanos, un dispositivo de apagado para detenerlos en cualquier momento de desobediencia, pero cuando el científico los despierta, el rencor y rebeldía de 17 eran tal que se encargó de destruir el control que lo volvería a encerrar y acto seguido mató sin piedad a su propio creador. Su situación se le iría en contra, ya que Cell tenía como misión absorber a 17 y 18 para completar su desarrollo y convertirse en Cell Perfecto.",
        "biography": "Nacido como Lapis, el androide Número 17 fue un huerfano que se crío en las calles, cometiendo actos delictivos junto a su hermana melliza Lázuli. Cuando era joven, Gero, un doctor del Ejército del Listón Rojo lo secuestra junto a su hermana para convertirlos en humanos modificados a nivel celular junto a componentes biorgánicos, cuyas únicas partes mecánicas son el mecanismo para autodesactivarse y una bomba de autodestrucción, convirtiéndose en un androide de energía infinita.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "666d46ee3ee26fcdf9930387",
        "name": "Androide Número 18",
        "genre": "Femenino",
        "race": "Cybor",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Androide18.png",
        "planet": "Tierra",
        "description": "Número 18, junto a su hermano y otra creación más del Dr. Gero, se encontraban desactivados y encerrados en una cápsula dentro del Laboratorio del Dr. Gero. Luego de la derrota del Androide Número 19, y de haberse sorprendido por el poder de los Guerreros Z, el Dr. Gero decide activar a los androides como último recurso. Junto a su hermano, Número 18 despierta y asesinan a su creador antes de que éste pudiera activar la bomba que tenían en su interior. Una vez librados y sin órdenes, el dúo despierta a Número 16, un androide defectuoso pero con una gran fuerza en su interior. Como primer objetivo, los androides comienzan su búsqueda para asesinar a Goku, no por seguir los deseos de su creador, sino simplemente para pasar el rato. Sin embargo, en el trayecto, Vegeta aparece confiado de su poder y desafía a Número 18 a un combate. Con una gran habilidad, la mujer derrota a su oponente y luego ayuda a su hermano contra los demás. El último guerrero en quedar en pie es un atemorizado Krilin, a quien 18 no golpea y simplemente se marcha despidiéndose con un beso en la mejilla.",
        "biography": "Originalmente conocida como Lázuli, la que futuramente sería conocida como la Androide Número 18 fue una delincuente juvenil junto a su hermano gemelo, Lapis. Cuando era joven, Gero, el doctor de la Red Ribbon la secuestra junto a su hermano para convertirlos en humanos modificados a nivel celular junto a componentes bioorgánicos, cuyas únicas partes mecánicas son el mecanismo para autodesactivarse y una bomba de autodestrucción, convirtiéndose en una androide de energía infinita. Gero presumiblemente borró todas sus memorias menos algunas conductas de sus carácteres.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "666d47083ee26fcdf9930388",
        "name": "Bobbidi",
        "genre": "Masculino",
        "race": "Madoshi",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Bobbidi.png",
        "planet": "Desconocido",
        "description": "Bobbidi, hijo de Bibbidi, es heredero de los poderes así como de las intenciones de su padre Bibbidi. Es un mago que viaja a la tierra para recolectar energía y de este modo despertar el letargo de Majin-Boo. Aunque se desconoce la edad de este poderoso mago, su aspecto unido al hecho de que su padre ya existiera hace unos 5 millones de años nos garantizan que ha poseído una existencia muy longeva. Este malvado mago viajo hasta el planeta Tierra con la intención de liberar a Boo, un terrible ser creado por su padre y que destruyo cientos de mundos en la antigüedad hasta que el Kaio-shin del este acabo con Bibbidi y el monstruo quedo encerrado en una esfera.",
        "biography": "Junto con Bobbidi llegaron a la tierra una serie de seres extraterrestres a los que había poseído entre los cuales destacaba Darbra, al que utilizaría como guardaespaldas personal. Majin-Boo estaba encerrado en la esfera y era necesaria una gran energía para liberarle y la Tierra gracias a los saiyajin como Goku y Vegeta se había convertido en el lugar idóneo para llevar a cabo el ritual de resurrección. Bobbidi consigue que Spopovich y Yamu, sean sometidos bajo sus poderes y hace que participen en el gran torneo mundial de artes marciales para robar energía de las otros y consiguen la energía de los participantes del gran torneo mundial de artes marciales, solo robaran el Ki de Son Gohan y escaparon del torneo para entregar el Ki de Son Gohan al mago Bobbidi, siendo estos perseguidos por, Kaio-shin del Este, Kibito, Krilin, Piccolo, Vegeta, Son Goku, Son Gohan (recuperado gracias a los poderes de Kibito) y Videl (aunque Videl al final abandona la persecución). Mientras Videl volvía de la persecución se encontró por el camino a Son Goten y a Trunks, ya que Goten y Trunks querían ver a un mago. Cuando Bobbidi obtiene la energía Ki de Son Gohan, asesina a Spopovich y Yamu, vertiendo la energía conseguida por ellos en la esfera que contiene a Majin-Boo. Bobbidi entonces se da cuenta de que lo han descubierto Gokū, Gohan, Vegeta, Piccolo, Krilin, Kibito y el Kaio Shin del Este, el asesino de su padre. Decidido a vengarse de su padre, Bobbidi envía sus subordinados Darbra, Pui Pui y Yakon. Bobbidi luego envía a Darbra de nuevo quien pelea contra Gohan y mientras pelean, Darbra se da cuanta de la maldad en el corazón de Vegeta. Darbra huye informándole a Bobbidi de su hallazgo, que entonces pone un encanto en Vegeta, transformándolo en el Majin Vegeta. Para sorpresa de Bobbidi, Majin Vegeta demuestra ser completamente desobediente, indicando que solo luchará contra Goku y no escucha a Bobbidi. Bobbidi accede, puesto que las lesiones provocadas por Majin Vegeta proveerán a Majin-Boo de energía suficiente para despertarlo. Eventualmente Bobbidi y Darbra son enfrentados por Gohan y el Kaio-shin del Este, cuando el sello de la esfera de Majin-Boo se rompe y Majin-Boo. finalmente aparece bajo la forma de monstruo obeso, más bien infantil que como demonio temible. Después de ver a Majin-Boo exhibir su energía sometiendo a Darbra, elogiando a Majin-Boo, decide no necesitar más a Darbra. Bobbidi entonces decide que Majin-Boo pelee contra Gohan y el Kaio-shin del Este, cuando están cerca de la muerte Darbra se recupera y vuelve a luchar contra Majin-Boo mientras recuperan sus energías Gohan y el Kaio-shin del Este. Darbra advierte a Bobbidi que selle a Majin-Boo de nuevo en la esfera antes de que sea demasiado tarde, pero Bobbidi no escucha, continuando la lucha de Majin-Boo contra Darbra. Majin-Boo vence fácilmente a Darbra convirtiéndole en galleta y venciendo a Gohan(dejándolo en las puertas de la muerte) y al Kaio-shin del Este, después es enfrentado por Majin Vegeta. Durante su duelo, Bobbidi es enfrentado por Piccolo, quien promete matarlo. Bobbidi y Piccolo entonces tienen una lucha pequeña en la cual Bobbidi pide a Piccolo de que se ahorre su esfuerzo puesto que Bobbidi controla a Majin-Boo. Sus súplicas no son escuchadas y Piccolo lo rebana por la mitad. Apenas vivo, Bobbidi mira la lucha entre Majin-Boo y Majin Vegeta, mientras Majin Vegeta intenta un ataque kamikaze para matar a Majin-Boo que solo lo envía al cielo. Luego Majin-Boo se recupera y Bobbidi intenta chantajear al monstruo para que lo cure. Saltando en Majin-Boo detrás, Bobbidi entonces comienza un alboroto global, puesto que no puede dejar la tierra debido a Majin Vegeta que destruye su nave espacial. Después de usar a Majin-Boo para destruir numerosas ciudades y vidas incontables, Bobbidi se comunica telepática mente con la población entera de la tierra y exige que Goten, Piccolo y Trunks se entreguen. Bobbidi decide partir a la ciudad del oeste, donde Bobbidi y Majin-Boo son enfrentados por Goku, que ha venido a detenerlos mientras Trunks recupera el radar de las Esferas del Dragón. Bobbidi entonces envía a Majin-Boo contra Goku, quien exhibe su nueva transformación de Supersaiyano 3. La lucha es pareja hasta que disminuye la energía de Goku debido a la técnica empleada, entonces Goku le dice que en dos días aparecerá un nuevo combatiente para luchar contra Majin-Boo. Goku incluso lo regaña diciendo que como un ser tan fuerte se deja manipular por un gusano cobarde como Bobbidi.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "666d472c3ee26fcdf9930389",
        "name": "Broly",
        "genre": "Masculino",
        "race": "Saiyano",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Broly.png",
        "planet": "Vegeta",
        "description": "Sin Descripcion",
        "biography": "Sin Biografia",
        "transformations": [
          {
            "id": "0",
            "title": "Super Saiyajin tipo A",
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/Super_Saiyan_A.png",
            "description": "La primera ocasión en que Broly se transforma en Super Saiyajin tipo A es luego de que su padre, Paragus, le colocara una corona para controlar su ira y evitar que afectara sus planes. Cuando Broly se percata de eso, intenta asesinar a Paragus, pero la corona se activa e impide que lo logre. En esta transformación el pelo de Broly cambia a color azul oscuro. En general, el estado de Super Saiyajin Tipo A es incompleto y no natural; además, Broly es el único que puede tenerlo. Cuando Broly se encuentra con Goku, los recuerdos del día en que nació regresan a él y se transforma en Super Saiyajin Tipo A, al intentar la transformación en Super Saiyajin Tipo C. La ira es tal que los ataques de los guerreros z no logran hacerle ningún daño, a pesar de que la corona no le permite demostrar todo su poder."
          },
          {
            "id": "1",
            "title": "Super Saiyajin Tipo C",
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/Broly_SS_Tipo_C.png",
            "description": "Broly siempre tuvo la posibilidad de transformarse en Super Saiyajin desde pequeño, puesto que poseía un gran poder; además, era bastante agresivo. Por eso, Paragus le colocó un artefacto capaz de controlar su ira. Cuando Broly vio y escuchó a Goku, su ira se elevó al máximo. Ante la amenaza, Goku y Vegeta lo golpearon sin saber que estaban debilitando la corona que lo controlaba. El nivel de poder de Broly creció de tal manera que rompió la diadema y se transformó en Super Saiyajin Tipo C. En esta transformación Broly controla completamente su poder, pero no lo muestra al máximo, ya que es un estado previo al Super Saiyajin Legendario. La apariencia física de Broly es la del Super Saiyajin ordinario. Eso quiere decir que sus cejas y pelo se vuelven dorados, además de que su musculatura aumenta. Sin embargo, en Dragon Ball Z: Estalla el Duelo, la primera vez que adquiere este estado, su pelo es de color verde y no presenta pupilas, como consecuencia de la corona."
          },
          {
            "id": "2",
            "title": "Super Saiyajin Legendario",
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/Broly_Supersaiyano_Legendario.png",
            "description": "También conocida como Super Saiyajin Tipo B, es la transformación que más representa a Broly y apareció por primera vez en la película Dragon Ball Z: Estalla el Duelo. También aparece en Dragon Ball Z: El Regreso de Broly. Broly alcanza esta transformación luego de experimentar un nivel de ira bastante alto, que se suele dar cuando escucha el llanto de Goku o también al verlo; aunque con Goten le sucede lo mismo, debido al gran parentesco con su padre, Goku.Luego de transformarse en Super Saiyajin Legendario, Broly alcanza un nivel de poder demasiado alto. Además, es un ser capaz de destruir todo a su alrededor y asesinar de manera despiadada. Durante la transformación de Super Saiyajin Legendario, el cuerpo de Broly sufre algunos cambios, como la estatura o la masa corporal, que aumentan de forma descomunal. Asimismo, su pelo se torna de un color verde claro y sus pupilas e iris pasan a ser de color completamente blanco."
          },
          {
            "id": "3",
            "title": "Super Saiyajin 2",
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/SuperSaiyajin2.png",
            "description": "La transformación de Super Saiyajin 2 es única de Dragon Ball Heroes. La apariencia de Broly es la del Super Saiyajin Legendario, pero su aura es más intensa. El poder de Broly es el doble de la anterior fase y no presenta rayos en su aura, característica que sí presentan los demás Super Saiyajin 2."
          },
          {
            "id": "4",
            "title": "Super Saiyajin 3 Legendario",
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/Super_Saiyan_3.png",
            "description": "Oficialmente Broly Super Saiyajin 3 Legendario no hace parte del canon oficial de Dragon Ball. Sin embargo, aparece en juegos como Dragon Ball Z: Dragon Battlers, Dragon Ball Z: Raging Blast 1 y Dragon Ball Heroes.El aspecto de Broly es similar al de Super Saiyajin Legendario, solo que su pelo es mucho más largo y no posee cejas, tal como el resto de los Super Saiyajin 3. El poder de Broly Super Saiyajin 3 es superior al de su anterior fase, Super Saiyajin Legendario, e incluso es más fuerte que un Super Saiyajin 3 normal, como Goku."
          }
        ]
      },
      {
        "id": "666d474e3ee26fcdf993038a",
        "name": "Bulma",
        "genre": "Femenino",
        "race": "Humana",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/bulma.png",
        "planet": "Tierra",
        "description": "Bulma (ブルマ Buruma¿?), también conocida como la científica genio Dra. Bulma (ブルマ 博士【はかせ】 Buruma Hakase[2]¿?) es la protagonista femenina de la serie manga Dragon Ball y sus adaptaciones al anime Dragon Ball, Dragon Ball Z, Dragon Ball Super y Dragon Ball GT. Es hija del Dr. Brief y su esposa Panchy, hermana menor de Tights y una gran amiga de Son Goku con quien inicia la búsqueda de las Esferas del Dragón. En Dragon Ball Z tuvo a Trunks, primogénito de quien sería su esposo Vegeta, a su hija Bra[3] y su hijo adulto del tiempo alterno Trunks del Futuro Alternativo. Bulma es el personaje femenino más importante de la serie. Aparte de Goku, Bulma es el personaje de mayor duración única en toda la serie, que se introdujo en el primer capítulo y episodio de Dragon Ball, y mantiene un papel destacado hasta el último capítulo del manga, en Dragon Ball Super y el episodio final de Dragon Ball GT. Es la representación del personaje Xuanzang de la historia china Viaje al Oeste y fue el segundo personaje después de Goku en aparecer en la serie.",
        "biography": "Aquí Bulma observa la pelea de Goku y Piccolo contra Raditz. Al morir Goku, ella ayuda a buscar las esferas para poder revivirlo para que pudiera luchar contra los siguientes Saiyan. Después vuelve a observar como matan a Yamcha, Piccolo, Chaoz y Tenshinhan, por lo que se pone muy triste. Luego decide ir a buscar las Esferas del Dragón del planeta Namek junto con Gohan y Krilin para revivir a Piccolo y así revivir a los demás. Bulma, acompañada por Krilin y Gohan, emprende un viaje al espacio para llegar a Namek. Antes de esto llegan a un misterioso planeta donde dos alienígenas crean la ilusión de ser Namekianos para irse de ahí, pero finalmente, los vencen y logran escapar para continuar el viaje. Después de un intenso viaje por el espacio, al fin llegan a Namek donde Bulma espera en la nave mientras Krilin y Gohan van por las Esferas, pero para su mayor sorpresa, Freezer se encuentra aquí también buscando las Esferas. Bulma se queda refugiada en una cueva, en la cual instaló con ayuda de sus capsulas, una casa con todas las comodidades necesarias. Tiempo después Bulma se enamora del soldado Zarbon con solo verlo, cuando fue a enfrentar a Vegeta. Sin embargo su encanto se perdió al verlo transformado en su forma mas fuerte y presenció junto a Krilin, la batalla entre Zarbon y Vegeta. Bulma vive variantes aventuras refugiada en las montañas, ya que ella poseía una de las Esferas. En un momento, la Esfera del Dragón gira hasta llegar al río, y Bulma tiene que aventurarse en un robot extraído de las capsulas, para así recuperarla. A pesar de todos los tropiezos ella queda ilesa y recupera la Esfera, sin embargo es secuestrada por el ejercito de Freezer tiempo después. Cuando Ginyu se convirtió en rana, cambia forzosamente de cuerpo con Bulma porque Bulma construyo un collar que le permitía hablar ,se toca los pechos y Bulma responde con sonidos de rana,luego se propone buscar alguien para cambiar de cuerpo que sea mas fuerte, para así lograr sus objetivos, sin embargo esto se vuelve un intento inútil y Bulma lo vuelve a recuperar su cuerpo antes que Ginyu cambie de cuerpo con Piccolo. Después de revivir a Piccolo y derrotar a Freezer, todos vuelven a la Tierra y reviven a todos los muertos del planeta Namek, ya que que este había sido destruido. Tras la llegada a la tierra, Bulma comienza a acercarse un poco a Vegeta y le hace unos cuantos coqueteos. Mientras Vegeta se queda hospedado en la casa de Bulma, ocurren variantes cosas entre ellos, una de ellas fue cuando Bulma lo regaña por estar sucio y en otra ocasión lo cuida mientras el se recupera del accidente que ocurrió en la maquina de gravedad.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "666d47613ee26fcdf993038b",
        "name": "Butta",
        "genre": "Masculino",
        "race": "Butta",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Burter.png",
        "planet": "Desconocido",
        "description": "Como todos los integrantes de las Fuerzas Especiales Ginew, los poderes de Butta se originaron en su infancia. Su Madre era muy estricta, ella lo enviaba a realizar todas las tareas de la casa y le daba palmas si llegaba tarde a la cena. Debido a esto, según sus palabras, se convirtió en el más rápido del Universo. Pronto se uniría a las Fuerzas Especiales Ginew donde se apodó el (Huracán Azul).",
        "biography": "Sin Biografia",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "666d47833ee26fcdf993038c",
        "name": "Cell",
        "genre": "Intersexuado",
        "race": "Bioandroide",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/cell.png",
        "planet": "Tierra",
        "description": "Cell (セル Seru¿?), conocido como Célula en España, es un bioandroide creado por la computadora del Dr. Gero, quien vino del futuro de la línea 3 con la intención de vengarse de Goku por haber acabado con el Ejército del Listón Rojo, y con ello el sueño de todo villano: dominar el mundo. Es el antagonista principal del Arco de los Androides y Cell. Varios insectos sirvieron de modelo para el diseño de Cell. Además de su diseño, la forma en la que eclosiona de un huevo y arroja su piel a medida que crece se basó también en los insectos. Por lo tanto, Cell se asemeja mucho a un insecto, en tanto en las apariencias y en la forma en que va a través de las diferentes etapas de metamorfosis. Cell en su primera forma tiene una apariencia similar a una mantis religiosa humanoide, posee una coraza en su cabeza con dos cuernos horizontales, y una larga cola. En el manga solo posee tres dedos, mientras que en el anime aparece con cinco dedos en las manos y tres en los pies. Cuando éste absorbe al Androide Número 17, su tamaño y masa muscular crece y posee una forma más humana, sus pies toman forma de zapato y al absorber a la Androide Número 18, su tamaño disminuye y su apariencia es mucho más humana. Además, su larga cola se contrae hasta sólo ser visible la punta de un aguijón. Cell, en su forma imperfecta, se demostraba completamente enfocado en alcanzar su forma perfecta, y se nota muy ansioso por saber lo poderoso que se volvería. Es muy cauteloso, astuto y calculador y también despiadado y sádico. Fue en esta forma en donde asesinó y absorbió a gran cantidad de gente sin remordimiento alguno, disfrutando incluso de ello. En su forma Semi-Perfecta, se enfoca aún más en alcanzar su forma perfecta, y también se vuelve más arrogante e impaciente. Cuando llega a su forma perfecta, Cell es muy arrogante debido a su nuevo poder. Además, se nota muchos gestos de Freeza y el sadismo, la astucia y la auto confianza de Vegeta y Piccolo, y su relajación y amor por la lucha de Goku. En su forma super perfecta, Cell es muy egocéntrico, y se vuelve más desquiciado.",
        "biography": "Cell era un proyecto del Dr. Gero, que decidió rendirse y abandonar porque iba a tomar demasiado tiempo. Pero cuando este murió su computadora continuó trabajando, lo tomó y completó su formación, pero todavía faltaba la pieza clave: perfeccionar su cuerpo. Poco después de salir del huevo, Cell vio que estaba en un mundo con muy pocos humanos a los que absorber, en el que los androides con los que debería completar su cuerpo ya habían sido destruidos. Se enteró de que quién los destruyó (Trunks) iba a viajar al pasado, así que le atacó y lo asesinó, entró en la máquina del tiempo y fue al pasado, un año antes de la llegada de Freezer y su padre. Así fue como la historia cambió completamente, ya que su llegada hizo que otro individuo llegara al pasado que al parecer es el futuro hijo de Vegeta y Bulma que es Trunks, el cual fue el que derrotó a Freezer y no Goku (estaría 4 años incubando, hasta el despertar de los Androides que necesitaba para fusionarse) y dominar el mundo.",
        "transformations": [
          {
            "id": 0,
            "title": "Forma de Larva de Cell",
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/larbacell.png",
            "description": "La primera forma de Cell que se introdujo en el anime de Dragon Ball fue su estado de larva. Esta es una transformación que se ve obligado a adoptar tras asesinar a Trunks de su línea temporal, de manera que pudiera caber en la máquina del tiempo de este y regresar al pasado para cumplir con su misión de absorber a los androides. Cell fue creado como un bio-androide y su primer estado era el de una larva. Después tuvo su primera transformación, que veremos a continuación, con la que fue capaz de eliminar a Trunks. Sin embargo, debió entrar en un estado de hibernación, encogiendo su tamaño en lo que parece ser una larva en crecimiento."
          },
          {
            "id": 1,
            "title": "Forma imperfecta de Cell",
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/Cell_Imperfecto.png",
            "description": "La forma imperfecta de Cell fue la que todos conocimos por primera vez en el anime, cuando se encontraba absorbiendo la vida de los habitantes de la ciudad. En este estado, su poder no es tan considerable, pero cuenta con las habilidades de muchos Guerreros Z, como el Kamehameha. Aunque en esta transformación, Cell no cuenta con todo su poder, ha sido capaz de incrementar su fuerza tras absorber la vida de los ciudadanos, por lo que podría convertirse en una amenaza y representar peligro. Sin contar que domina ciertas técnicas avanzadas de Goku, Piccolo, entre otros."
          },
          {
            "id": 2,
            "title": "Forma semi-perfecta de Cell",
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/Cell_Segunda_Forma_Artwork.png",
            "description": "La segunda transformación de Cell es la forma semi-perfecta. Esta la consiguió tras haber absorbido al androide 17. No solo su apariencia ha cambiado un poco, ganando más masa muscular, sino que también es capaz de derrotar a muchos personajes. Sin embargo, aunque esta forma semi-perfecta de Cell es mucho más poderosa que la anterior, lo cierto es que no fue rival para Vegeta, quien se había vuelto más fuerte. De hecho, todo el drama posterior se pudo haber evitado si el Saiyan acababa con este bio-androide. Pero, en su lugar, el Príncipe de los Saiyan le permitió absorber al androide 18 y alcanzar su nueva transformación. Esta forma también tiene una variante, que es cuando Gohan lo golpea tan fuerte que le hace expulsar a androide 18, regresando a su estado semi-perfecto. Pero al verse superado en poder, recurre a una táctica de autodestrucción, inflando considerablemente su cuerpo para estallar."
          },
          {
            "id": 3,
            "title": "Forma perfecta de Cell",
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/Cell_Perfecto.png",
            "description": "Después de haber absorbido al androide 18, Cell había cumplido con su misión. Entonces, había adquirido una nueva transformación, llamada su forma perfecta. Evidentemente, no solo podemos destacar un gran cambio físico, sino que su nivel de poder también creció considerablemente. De hecho, una vez alcanzó su forma perfecta, ni Vegeta ni Trunks en su modo Super Saiyan fueron rivales para el bio-androide. En este punto de la historia, ni siquiera Goku consideraba que estuviera a su nivel. La forma perfecta de Cell luce mucho más intimidante que las anteriores. Además de que también manifiesta que su interés es pelear contra gente poderosa. Por este motivo, decide crear una especie de Torneo de Artes Marciales donde los guerreros más fuertes participen y luchen contra él. ambién debemos señalar que, en esta forma perfecta, Cell cuenta con un gran poder destructivo. Este domina muchas técnicas insignia de los Guerreros Z, así como la regeneración avanzada de Piccolo. Este es un adversario sumamente poderoso y que hizo sufrir a los protagonistas. Goku luchó contra Cell en su forma perfecta, pero incluso con sus transformaciones de Super Saiyan, este no fue rival para el bio-androide, así que se rindió para dar turno a Gohan. Y, en un principio, Cell también era superior al joven. Podríamos mencionar también que, en su forma perfecta, Cell mostró algunas variantes que se centraban en distintas características. Por ejemplo, adquirió una forma de poder puro, la cual cambió su apariencia mientras reducía su velocidad de movimiento. También está su forma perfecta de tercer grado, la cual es parecida a las variantes de Trunks y Vegeta en la que se incrementa su masa muscular. Sin embargo, esta forma perfecta de tercer grado reduce mucho su velocidad para poder ganar más poder destructivo, por lo que el villano no la utilizó. Simplemente la mostró para que los presentes conocieran más de su arsenal de fuerza y transformación."
          }
        ]
      },
      {
        "id": "666d47933ee26fcdf993038d",
        "name": "Chi-Chi",
        "genre": "Femenino",
        "race": "Humana",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/chichi.png",
        "planet": "Tierra",
        "description": "Pese a ser una princesa recibió un duro y estricto entrenamiento de su padre por muchos años logrando así desarrollar una fuerza, velocidad y agilidad superior a los Terrícolas aunque al casarse deja a un lado los combates para encargarse de su familia sin embargo usa su poderosa fuerza cuando sea lo suficientemente necesario o este enojada. Tiene como nuera a Videl y es abuela de Pan.",
        "biography": "Luego de haberse casado con Goku,la Princesa Chi-Chi decide vivir como las personas comunes y da a luz a su primer hijo, Son Gohan, a la edad de 18 años. Chi-Chi se convierte en el estereotipo práctico de una madre asiática y cuatro años más tarde, Goku decide llevarse a Gohan a la Kame House para que conozca a sus antiguos amigos, mientras Chi-Chi decide quedarse en su hogar. Sin embargo, al ver que tardaban demasiado, la mujer viaja a la casa de Kame-Sen'nin junto al Rey Gyuma para saber el motivo de la tardanza. Muy alterada, Chi-Chi descubre que su esposo había muerto y su hijo había sido raptado por Piccolo y estaba siendo entrenado en las montañas para un futuro ataque Saiyan. Pese a todo el problema, la mujer no interviene en los sucesos del entrenamiento de su familia, y sólo se limita a esperar pacientemente un año para la llegada de los Saiyan junto al Rey Gyuma. Un año más tarde, Chi-Chi volvió a la Kame House y fue testigo de la batalla contra los Saiyan en la bola de cristal de Uranai Baba. En varias ocasiones, la mujer exclama sus disgustos por el peligro que estaba pasando su hijo, e incluso intenta marcharse para ayudarlo, pero los demás la detienen debido a que sería inútil el intento. Luego de la batalla y el retiro de Vegeta, Chi-Chi viajó junto a los demás hacia el escenario del combate, donde encuentra a Goku muy herido y a Gohan inconsciente. Ignorando por completo a su marido, ella cuidó de su hijo e intentó que se levantara, mientras insulta a Goku por dejar que luche contra los Saiyan. Luego del combate, todos se marchan hacia un hospital cercano, en donde curan a Krilin, Gohan y Yajirobe. Sin embargo, Goku todavía no se recuperó por completo, por lo que Chi-Chi decidió permanecer junto a él hasta que vuelva a estar en forma. Además, la mujer intentó rechazar vehemente el intento de Gohan por ir a Namek, pero el niño lanza un potente discurso que la hace entrar en razón y permitirle que haga el viaje. La mujer permaneció un buen tiempo esperando a que su esposo sanara, pero un día Yajirobe entra repentinamente por la ventana y le otorga unas Senzu a su amigo, causando que se recupere y parta hacia Namek, dejando a Chi-Chi sola nuevamente; al sentir el peligro en el que su familia se encontraba, Chi-Chi, Kame-Sen'nin, Oolong, Puar, y Yajirobe se reunieron para formar un equipo de rescate y salvar a sus amigos. En un desesperado intento, el equipo de rescate intentó utilizar una nave espacial que construyó el Dr. Brief para viajar a Namek, pero el transporte no funcionaba, por lo que Chi-Chi y los demás deciden regresar a la Tierra y esperar pacientemente la llegada de todos. Tiempo más tarde, cuando todos los habitantes del Planeta Namek fueron transportados a la Tierra excepto Goku y Freezer, Chi-Chi se reunió muy emocionada con Gohan, y luego presenció junto a los demás como Polunga revivía a los fallecidos Guerreros Z y escuchó cuando el dragón declaró que Goku seguía con vida ademas de amenazar a Kame-Sen'nin con una filosa espada por decir que Goku le temia a ella.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "666d47aa3ee26fcdf993038e",
        "name": "Coola",
        "genre": "Masculino",
        "race": "Clan de Freeza",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Cooler.png",
        "planet": "Desconocido",
        "description": "En el año 737, mientras que Freeza había destruido el Planeta Vegeta, un Kakarotto recién nacido fue enviado para que atacara la Tierra. Viendo que había escapado de la explosión, los secuaces de Coola hicieron planes para derribar la Cápsula de ataque. Coola inesperadamente retrasó la orden, lamentando que su hermano era aún demasiado suave para permitir la fuga de un niño y presunción de que Freeza podría retrasar la aniquilación de la raza saiyana y poner en peligro su familia absoluto sobre la galaxia (y también el hecho de que tenía siete planetas para conquistar o destruir al final del día, lo que lo dejó demasiado ocupado para efectuar la solicitud). También, como era sólo un bebé en aquel momento, él no creía que fuera de cualquier tipo de amenaza inmediata.",
        "biography": "Aproximadamente veintisiete años más tarde, descubrió que su hermano había sido asesinado por un saiyano. Inicialmente escéptico, pronto llega a la Tierra para vengar la muerte de Freeza; sin embargo, él no tiene ninguna compasión por su hermano y sólo desea hacerlo para restaurar su honor familiar. Al llegar, mandó a sus secuaces a encontrar un saiyano, que por supuesto era Goku. Él consigue escapar herido al bloquear un disparo destinado a Gohan, pero pierde de vista a los saiyanos cuando caen por una cascada. No contento con volar el planeta siendo demasiado orgulloso y deseoso de matar a quien hirió su apellido, va a perseguirlos durante un largo trecho. Con los tres de sus secuaces derrotados por Piccolo, él finalmente entra en la batalla y derrota fácilmente a Piccolo antes de enfrentarse contra Goku, recuperado por comer una de las Semillas Senzu, comienza su batalla con Coola. Al principio, él y Goku están bastante igualados, incluso coinciden (demasiado incluso para los gustos de Goku), pero lo honra mostrando su transformación final. Él aumenta significativamente en tamaño, velocidad y fuerza; le crecen cuatro protuberancias para formar una corona sobre su cabeza, con espigas en sus antebrazos, y con una mascarilla blanca, ocultando todos los rasgos faciales excepto sus ojos, que ahora son rojos sin pupilas. Coola es capaz de dominar a Goku fácilmente en esta forma, hasta acabar cansado de luchar y siente que Freeza había avergonzado aún más a su familia muriendo en manos de Goku. Al hacer planes para destruir el planeta, Goku muestra su rabia y se transforma en un Supersaiyano. Fuera de guardia y arrogante, se encuentra en desventaja descubriendo finalmente cómo perdió Freeza, reuniendo suficiente energía para formar una Supernova con la intención de destruir finalmente a su oponente, pero aterriza junto a él. Goku, con un potente Kamehameha, es capaz de contraatacar y enviarlo directamente al Sol. Fue entonces que se dio cuenta de que era el saiyano que había permitido escapar hace casi tres décadas, por el que regañó a su hermano quien no quiso mover un dedo, cometiendo el mismo error que él. Después de esto, se incinera en el Sol.",
        "transformations": [
          {
            "id": 0,
            "title": "Primera transformación",
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/Coola.png",
            "description": "El temible Cooler, y con ello, una nueva transformación de la raza más fría del universo. Se trataría de un estado superior a la forma final de Freezer, resultando sobrecogedora por su apariencia y poder. Además, también se genera una mascarilla metálica que le recubre la boca. Pese a todo, Goku Super Saiyan pudo rivalizar con él, aunque se vio obligado a catapultarle hasta el sol con su Kamehameha."
          },
          {
            "id": 1,
            "title": "Segunda transformación",
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/Metal_Coora.png",
            "description": "En la secuela de aquel largometraje, con Guerreros de fuerza ilimitada, disfrutamos del regreso de Cooler, esta vez, en su forma metálica gracias al Big Gete Star. De hecho, no solo aumentó con creces su poder, sino que pudimos contemplar un auténtico ejército de Metal Cooler, los cuales supusieron todo un desafío para Goku y Vegeta en Super Saiyan (por cierto, esta fue la primera película en la que debutó el príncipe de los saiyans)."
          },
          {
            "id": 2,
            "title": "Tercera transformación",
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/Golden_Cooler.png",
            "description": "Han tenido que pasar décadas para ver la tercera transformación de Cooler, ¡pero por fin ha llegado! La pudimos contemplar en Super Dragon Ball Heroes, la serie anime promocional del arcade homónimo nipón, y no dejó indiferente a nadie. Una vez más, se mantiene la forma base de la primera transformación, añadiéndose los detalles dorados característicos del estado Golden. Como no podía ser de otra manera, su poder sufre un boost importante, siendo capaz de luchar contra Cumber o Goku Berserker. "
          },
          {
            "id": 3,
            "title": "Cuarta transformación",
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/golden_metal_cooler",
            "description": "La última transformación de esta gélida familia la contemplamos hace tan solo unos días, con el estreno del episodio 12 de Super Dragon Ball Heroes. Durante el capítulo, observamos cómo Metal Cooler alcanzaba su forma Golden, para sorpresa de Cumber, desatando un poder que dejó totalmente inconsciente al saiyan maléfico. ¿Estaremos ante la transformación definitiva de Cooler? Una cosa es segura: ahora es el ser más poderoso de la familia. "
          }
        ]
      },
      {
        "id": "666d47c03ee26fcdf993038f",
        "name": "Dabra",
        "genre": "Masculino",
        "race": "Demonio",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Dabura.png",
        "planet": "Reino Demoníaco Oscuro",
        "description": "Darbra (ダーブラ Dābura¿?), también conocido como Dabra en España o Dábura en Hispanoamérica, es un gobernante del reino de los demonios. Existente desde hace miles de años, Darbra se coloca bajo el control de Bobbidi por un hechizo y se convierte rápidamente en su mano derecha, además de ser su sirviente.",
        "biography": "Es visto por primera vez cuando Goku, Gohan, Vegeta, Piccolo y Krilin son llevados a la Nave espacial de Bobbidi por Shin y Kibito, que les ayuda en la prevención de que Darbra y Bobbidi no despertaran a Majin-Boo. Bobbidi y Darbra eran conscientes de que ya tenían una enorme cantidad de energía para despertar a Majin-Boo, pero Bobbidi decide que debería deshacerse de todos y le dio la orden a Darbra de matar a todos. Darbra le obedece y se encarga con rapidez del grupo. Con un solo ataque mata a Kibito. Luego, escupe a Piccolo y a Krilin, convirtiéndolos en piedra. Darbra se une a Bobbidi en la sala de monitores y relojes y ve como Vegeta derrota fácilmente a Pui Pui y luego ve como Yakon explota a causa de la gran cantidad de Ki absorbido de Goku. Luego sale y se hace frente a Son Gohan. Cuando este se encontró por primera vez con Gohan, Goku menciona que el poder de Darbra es comparable con el de Cell. Aunque en un principio parece que Gohan y Darbra tienen el mismo nivel de Ki, Goku se corrige a sí mismo y afirma que Darbra podría ser más poderoso de lo que pensaban, con su uso de trucos y magia entre otros trucos. Después de una larga pelea, Darbra escapa con Bobbidi para ver el despertar de Majin-Boo Inocente, con quien terminaría perdiendo la vida convertido en galleta. Después fue mandado al Infierno, pero se sentiría tan a gusto ahí que Gran Rey Enma le quitó toda su maldad y lo mandó al Paraíso.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "666d47d43ee26fcdf9930390",
        "name": "Dende",
        "genre": "Asexuado",
        "race": "Namekiano",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Dende.png",
        "planet": "Namek",
        "description": "Dendé (デンデ Dende¿?) es un pequeño namekiano, que vivía en el poblado de Moori, junto a su hermano Scargo y otros tantos de su especie. Es el hijo 108 del Gran Patriarca y posteriormente Dios de la Tierra, sustituyendo a Dios. Dendé (デンデ Dende¿?) es un pequeño namekiano, que vivía en el poblado de Moori, junto a su hermano Scargo y otros tantos de su especie. Es el hijo 108 del Gran Patriarca y posteriormente Dios de la Tierra, sustituyendo a Dios.",
        "biography": "Dendé aparece por primera vez durante la Saga de Freezer en el pueblo de Moori donde es atacado por Freezer y sus secuaces, Zarbon y Dodoria, que estaban en busca de las Bolas del Dragón. Luego de que sus hermanos fueran asesinados y de que los soldados de Freezer se adueñaran de la ciudad,es rescatado por Gohan y Krilin,del cual se hace amigos de estos posteriormente. Freezer se enoja con Dodoria por espantar a Dendé. Dendé ayuda a Krilin a buscar la casa de el gran patriarca, donde recibe una esfera del dragón en ese caso de Porunga (dragon namekusei). Poco después Dendé muere a manos del tirano Freezer en su ultima forma, con un Rayo Bang. Fue testigo de la llegada a su aldea, de Freezer y sus soldados en busca de las Esferas del Dragón de Namekusei, y de como su líder Moori, y su hermano Cargo eran cruelmente asesinados por estos.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "666d47f03ee26fcdf9930391",
        "name": "Dodoria",
        "genre": "Raza de Dodoria",
        "race": "Namekiano",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Dodoria.png",
        "planet": "Desconocido",
        "description": "Dodoria acompañaría a Freeza, junto con Zarbon y todo un ejército, a Namek en busca de las Esferas del Dragón del planeta, para así Freeza lograría tener la Inmortalidad, para mantener su posición del ser más poderoso del universo por toda la eternidad. Dodoria ayudó a obtener la mayoría de las Esferas del Dragón matando a los Namekianos para obtener información de ellas. Cuando Vegeta llega a Namek y mata a Kewi, el Rastreador de Dodoria tiene la lectura de un nivel de pelea de 24.000 unidades, Dodoria dice que debería ser un error ya que Vegeta sería más fuerte que él. Luego Dodoria se enfrentaría a tres guerreros Namekianos, quien trataban de ayudar a los sobrevivientes de la aldea del ataque de Freeza. Luego que el trío de Namekianos acabase con soldados de bajo rango, Dodoria mataría a los jóvenes guerreros por orden de Freeza. Para evitar más muerte de sus hermanos, Moori entrega la esfera del dragón, pero Freeza también le pide la ubicación de la siguen aldea como pago de la destrucción de los Scouter por parte de Moori. Moori se niega y le dice a Cargo y a Dende que escapen, pero Freeza le ordena a Dodoria que mate a los niños, este le hace caso y mata a Cargo, luego mataría a Moori y antes de que pueda matar a Dende interviene Krilin y Gohan y salvan al joven namekiano. Dodoria persigue muy enfurecido a los jóvenes guerreros, pero es detenido gracias a que Krilin usa el Taiyoken, desorientando temporalmente a Dodoria. Una vez que Dodoria recupera su vista desata un feroz ataque hacia todo el lugar, causando un gran desastre. Luego de destruir todo el lugar, queda convencido de que eliminó a Dende, Krilin y a Gohan, para luego regresar donde se encuentra el Lord Freeza, pero Dodoria no había que los guerreros estaban arriba de él. Cuando estaba regresando con Freeza, Dodoria es atacado por alguien y es enviado al agua, cuando sale a la superficie se encuentra con su agresor, Vegeta, quien decidió traicionar a Freeza para conseguir la inmortalidad. Dodoria le dice a Vegeta que trate de huir, pero Vegeta muy confiado lo desafía. Dodoria trata de eliminarlo con un ráfaga de onda de Ki, pero Vegeta esquiva a todos los ataque y agarra por la espalda a Dodoria, dejándolo inmovilizado. En un intento de salvarse, Dodoria le dice a Vegeta que si lo deja huir le contará toda la verdad sobre el Planeta Vegeta y los Saiyanos. Vegeta acepta la oferta y libera a Dodoria, este le informa que el que eliminó a la mayoría de los Saiyanos y al Planeta Vegeta fue Freeza ya que este le tenía miedo a la raza, mientras le cuenta lo sucedido a Vegeta trata de huir volando. Sin embargo, Vegeta no está en un estado de ánimo indulgente y elimina despiadadamente a Dodoria con una simple Onda de Ki.",
        "biography": "Sin Biografia",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "666d47fe3ee26fcdf9930392",
        "name": "Jeice",
        "genre": "Masculino",
        "race": "Brench",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Jeice.png",
        "planet": "Planeta Coola Nº 98",
        "description": "Sin Descripcion",
        "biography": "Jheese es un brenchiano que nació en un planeta localizado en el mismo sistema solar que el Planeta Coora Nº 98. Al igual que los otros miembros de la Fuerzas Especiales Ginyu, sus poderes especiales se originaron durante su infancia: Jeice era lanzador en la Pequeña Liga Galáctica  de baseball, fue allí donde desarrollo su técnica característica Bola aplastadora. Pronto se unió a las Fuerzas de Combate Especiales Ginyu. Tenía una rivalidad con Thouser, donde ambos discutían sobre quién era el más fuerte y el de mejor aspecto.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "666d48133ee26fcdf9930393",
        "name": "Majin Boo",
        "genre": "Masculino",
        "race": "Majin",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/MajinBoo.png",
        "planet": "Desconocido",
        "description": "El Boo conocido como Super-Boo (超ブー Chō Bū¿?), cuyo nombre original y real es Majin Boo Malvado (魔人ブウ悪 Majin Bū Aku¿?), es el resultado de la unión entre Majin-Boo Maldad Pura y Boo Gordo, causando un ser más alto que sus formas anteriores y con mayor musculatura Este nuevo Boo tiene tremendamente más potencia y más inteligencia que la encarnación anterior. No obstante, su inteligencia podía verse nublada dada su poca paciencia y sus ataques de ira extremadamente peligrosos así como una capacidad de absorber mejorada.",
        "biography": "A pesar de su inmenso poder, Super Boo puede aumentar su poder aún más mediante el uso de su capacidad de absorción, convirtiendo a su víctima en alimento antes de comerlos o puede separar una pieza de sí mismo y absorber a la víctima envolviéndola en una masa viscosa a la que puede ajustar su tamaño, esa masa viscosa es su propio cuerpo después de recibir algún ataque del rival. Con cada absorción, cambia siempre de apariencia física, creando una réplica exacta de la ropa absorbida de su víctima, así como las características faciales/cuerpo y otras características, tales como la inteligencia (de Piccolo) y las técnicas, cada vez que absorbe a un oponente su poder aumenta drásticamente (Dependiendo del poder de su rival).",
        "transformations": [
          {
            "id": "0",
            "title": "Majin Boo",
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/BuuGordo.png",
            "description": "Históricamente se sabe que Boo se enfrentó a diversos Kaio-shin en una gran batalla, en la que absorbió a varios de estos personajes, incluso también al Kaio-shin del Sur. Con esto, ganó un gran aumento de poder. Sin embargo, no sería hasta que absorbió al Dai Kaio-shin que este sufriría una transformación física, dando como resultado el diseño de Majin Boo gordo que todos conocemos y que tiene una personalidad bastante infantil y, dentro de lo que cabe, bondadosa. Esta entidad amable coexistiría junto a otra de maldad."
          },
          {
            "id": "1",
            "title": "Kid Boo",
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/Kid_Buu.png",
            "description": "Después de que Goku y Vegeta, tras ser absorbidos en su forma fusión por Super Boo, recuperaran los cuerpos de Goten, Trunks, Piccolo y Gohan, este individuo perdió todas estas transformaciones. Sin embargo, no fue sino hasta que extrajeron el cuerpo de Majin Boo gordo que ocurrió algo inesperado. Y es que después de que los Saiyan recuperaran el cuerpo de Majin Boo gordo del interior de Super Boo, este también perdió esta transformación, por lo que volvió a su forma original, Kid Boo o Boo puro. La principal característica de esta transformación es que tiene baja estatura, su piel sigue siendo rosada y conserva rasgos parecidos a los de Kid Boo. Sin embargo, esta entidad es maldad pura. Tanto así que, sin dudarlo, destruyó el planeta Tierra de un solo ataque. Esta no solo es la forma original de Boo, sino también la última transformación que sufrió como tal el personaje tras perder a todos los que había absorbido. Sin embargo, pese a eso, es extremadamente poderoso, siendo capaz de luchar contra Goku y Vegeta en sus máximas formas."
          },
          {
            "id": "2",
            "title": "Buu Maldad Pura",
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/Der_boo_pure_evil.png",
            "description": "Tras una serie de desafortunados sucesos, Majin Boo expulsa de su cuerpo a una versión que concentra toda la maldad del personaje. Este es todo lo opuesto de la forma que conocimos, pues es alto, delgado y de color gris. Esta es una transformación de Majin Boo bastante poderosa, aunque no lo parezca. De hecho, se las ingenió para absorber a la versión de Majin Boo gordo, ganando un increíble aumento de poder y, también, una nueva transformación poderosa."
          }
        ]
      },
      {
        "id": "666d48263ee26fcdf9930394",
        "name": "Raditz",
        "genre": "Masculino",
        "race": "Saiyano",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/raditz.png",
        "planet": "Vegeta",
        "description": "Raditz (ラディッツ Radittsu¿?) es el hijo de Bardock y Gine, y hermano mayor de Son Goku. Él es uno de los pocos saiyanos que sobrevivieron a la destrucción del Planeta Vegeta, y formaba parte del equipo de Vegeta. Es el primer antagonista de Dragon Ball Z.",
        "biography": "Raditz llega a la Tierra con su Cápsula de ataque, buscando a un hombre llamado Kacarrot. En su llegada, es atacado por un Granjero con un arma de fuego, pero Raditz detiene la bala y se la devuelve. Luego de matar al Granjero, recibe una lectura de un nivel de pelea bastante fuerte de su Scouter y cree que es de su hermano, Kacarrot. Pensando que es su hermano, sigue el rastro de la lectura, pero se encuentra cara a cara con Piccolo, por lo que se desilusiona y le pregunta a Piccolo donde podía encontrar a Kacarrot. Piccolo se niega decirle y le dice que abandone la Tierra, pero Raditz se ríe, por lo que Piccolo le lanza un poderoso ataque, pero Raditz sale ileso, sorprendiendo a Piccolo. El saiyano estaba pronto para destruir a Piccolo, pero de repente lee otro nivel de pelea alto, sabiendo esta vez que es de su hermano.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "666d483e3ee26fcdf9930395",
        "name": "Recoome",
        "genre": "Masculino",
        "race": "Raza de Reacoom",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Recoome.png",
        "planet": "Desconocido",
        "description": "Al igual que los otros miembros de la Fuerzas Especiales Ginyu, sus poderes especiales se originaron durante su infancia: Recoome practicaba la danza, de esa manera obtuvo la agilidad para crear varias poses de combate. Posteriormente sería reclutado para las Fuerzas Especiales Ginyu.",
        "biography": "Luego de ser llamado por Freezer, Recoome llegaría al Planeta Namek junto al resto de las Fuerzas Especiales Ginyu. Vería la batalla de Guldo y como este fue asesinado. Luego sería su turno de luchar. Él siente una gran confianza ante Vegeta, sin embargo este le demuestra que ha mejorado mucho y consigue acertarle varios golpes, sorprendiéndose y no pudiendo ni siquiera defenderse. Recoome se queda tumbado en el suelo, pero se levanta, ya con su armadura destrozada y algunos rasguños, sorprendiendo a Vegeta, Gohan y Krilin. Recoome ataca a Vegeta, este apenas se logra defender y mantenerse en pié, Recoome jugaba con Vegeta al principio, pero le provocó grande daños con un ataque desde una gran altura. Luego va y lo sujeta de una pierna, levantándolo y exigiendo que la pelea continúe, el Saiyan aprovecha y le lanza una onda de ki en el rostro, derribándolo pero rápidamente se pone en pie. Recoome decide utilizar su técnica favorita, la Pistola Borradora de Recoome, para acabar con el Saiyan, ya que sabe que este está muy débil como para esquivarla. Pero no tendría éxito, ya que Gohan ayuda a Vegeta y Krilin lo golpea en la mandíbula mientras realizaba la técnica. Producto de esto, Recoome pierde un par de dientes, enfadándose, por lo que se levanta y pretende jugar un poco con Gohan y Krilin, pero primero le pregunta a sus compañeros, Jeice y Butta, si lo puede hacer, prometiendo que si lo dejan pagaría el próxima helado, por lo que sus compañeros aceptan. Recoome le pega una fuerte patada a Krilin, dejándolo inmovilizado, reconociendo que le tuvo que haber usado menos poder jugar un poco más. Gohan sería el único combatiente en pié, Recoome lo ataca y se nota la clara ventaja que posee, pero Gohan igualmente consigue acertarle varios golpes. Luego de un breve combate, finalmente Recoome derrotaría a Gohan con un rodillazo en el cuello, estando a punto de morir según las palabras de Butta y Jeice. Pero justo aparece Goku para ayudarlos. Recoome y sus compañeros se ríen por el bajo nivel de poder que tenía, de solo 5.000 unidades, pero el Saiyan demuestra su velocidad y le da una semilla senzu a Gohan, Krilin e inclusive a Vegeta. Recoome se impacienta y decide utilizar su mejor técnica, Lucha de Bombardero Recoome, pero antes de que la finalice es atacado por Goku y queda inconsciente. Más tarde, luego de que Butta fue derrotado y Jeice escapase, Vegeta aprovecha que está inconsciente y lo mata a sangre fría. Luego de su muerte, él y sus compañeros van al planeta del Kaio del Norte. Allí se enfrentan a Yamcha, Tenshinhan y Chaoz, quienes estaban en medio de su entrenamiento. Recoome luchó contra Yamcha, al principio fue un combate duro para ambos, pero luego Yamcha demuestra ser mucho más fuerte y es nuevamente derrotado, además fue enviado al Infierno. Allí caen en un estanque de sangre, del cual es difícil de salir, permaneciendo en el Infierno por la eternidad.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "666d486c3ee26fcdf9930397",
        "name": "Spopovich",
        "genre": "Masculino",
        "race": "Humano",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Spopovich.png",
        "planet": "Tierra",
        "description": "Tiempo después de haber participado en el anterior torneo, Spopovich participa en la 25º edición del Torneo de Artes Marciales donde se enfrenta a Videl (la hija de Mr. Satán), donde demostró una nueva fuerza y resistencia resistiendo los ataques de Videl (considerada una chica muy fuerte). A pesar de que esta le rompió el cuello, con un poderoso contraataque la golpeó sin piedad y la habría asesinado de no ser detenido por su compañero Yamu, que le ordenó detener su ataque y permanecer enfocados en su misión. Spopovich finalmente saca a Videl fuera de la plataforma. Poco después de haber ganado el primer combate, durante el combate de Kibito contra Gohan, Spopovich y su compañero atacan a Gohan cuando este se convierte en Super Saiyajin 2 y le extraen la energía para llevarla a Babidi. Cuando llegan hasta la localización de Babidi, este último le agradece su ayuda, pero les dice que sus servicios ya no son requeridos y lo hace explotar acabando con su vida y la de su compañero, que intentaba huir pero no le fue posible.",
        "biography": "Spopovich antes era un luchador que participaba en los Torneos de Artes Marciales, pero siempre era derrotado. En años pasados participó en la 24º edición del Torneo de Artes Marciales donde se enfrentó a Mr. Satán pero fue fácilmente derrotado. Hasta que apareció Bobbidi y al encontrar algo de maldad en él, lo volvió uno de sus sirvientes para reunir energía y así despertar a Majin Boo.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "667af97bf45fc2c137a595ab",
        "name": "Bubble",
        "genre": "Masculino",
        "race": "Mono",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Bubble.png",
        "planet": "Kaio",
        "description": "El nombre de Bubbles da su origen del chimpancé mascota del popularmente conocido como el Rey del Pop, Michael Jackson, un famoso cantante, compositor y bailarín estadounidense que falleció en 2009, siendo reconocido como la estrella de música pop más exitosa en el mundo. Su chimpancé curiosamente se llamaba Bubbles; cuyo nombre se traduce como Burbujas al español.",
        "biography": "Una vez que Goku llega al Planeta Kaio se encuentra primero con Bubbles, lo que lo hace pensar rápidamente que él es Kaio del Norte. Bubbles empieza a caminar y hacer tontería por varios lugares, esto hace que Goku piense que es parte del entrenamiento y lo siga. Luego de ver al verdadero Kaio del Norte, Goku tiene que atrapar a Bubbles, como primera parte de su entrenamiento. Luego de pasar un largo tiempo entrenando, Goku vuelve a la vida y derrota a Nappa y Vegeta. Piccolo, Tenshinhan, Chaoz y Yamcha mueren en su batalla contra los Saiyans, por lo que también van a entrenar con el Kaio del Norte, también teniendo que atrapar a Bubbles, excepto Piccolo ya que el Kaio del Norte sabía que no era necesario que él lo haga. Bubbles moriría cuando Goku se teletransporta al Planeta Kaio junto con Cell y este explota.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "667af988f45fc2c137a595ac",
        "name": "Dr. Gero",
        "genre": "Masculino",
        "race": "Cybor",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Dr_Gero_Artwork.png",
        "planet": "Tierra",
        "description": "Reconocido por su ingenio y mal carácter, Gero fue un famoso genio en la comunidad científica, especializándose en la ingeniería robótica. Fue el científico principal del Ejército del Listón Rojo, creando maquinaria militar y diversos humanos artificiales. Tuvo como esposa a una científica del ejército llamada Vomi, con quien tuvo dos hijos, uno de ellos llamado Gevo quien sirvió en el ejército hasta su muerte.",
        "biography": "Con la llegada de Trunks del futuro, Son Goku y compañía estaban alertados de la existencia de los Androide Numero 17 y Androide Número 18 y del Dr. Gero. Aunque avisados, apareció el Androide Número 20 (Dr. Gero) junto al Androide Número 19, a quienes Trunks no conocía, los cuales aparecen en la metrópolis de Ciudad Papaya en la Isla Amenbo, lugar donde Trunks del Futuro dijo que aparecerían los androides, tomando por sorpresa a Yamcha con el Sumidero de Vida 20. El androide absorbió la energía de Yamcha y atravesó su pecho, dejándolo moribundo. Pero Son Goku y compañía se percataron del ataque hacía Yamcha, presentándose los dos androides a los demás. Dr. Gero permite al Androide Número 19 combatir contra Son Goku, contra el cual sale victorioso gracias a que Son Goku sufrió un ataque de su enfermedad. Pero su alegría no duró mucho, ya que Vegeta llegó y convirtiéndose en Super Saiyan, derrota a 19 arrancándole primero sus dos manos y lanzando el ataque que bautizó como (Ataque Big Bang)",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "667af9baf45fc2c137a595ad",
        "name": "Freezer",
        "genre": "Masculino",
        "race": "Clan de Freeza",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Freezer.png",
        "planet": "Desconocido",
        "description": "No se sabe en qué año nació Freeza, pero su existencia data al menos del Año 731. Freeza había nacido como hijo del Rey Cold. Freeza entrenó en ocasiones con su padre, lo que le parecía divertido. Eventualmente, Freeza se convirtió en líder de un Imperio Galáctico, aunque su verdadero líder fuese Cold, quedó en secreto la presencia de su padre.",
        "biography": "En el año de 737, Freeza contaba con sus esbirros Zarbon y Dodoria, que le sirvieron de guardaespaldas. Un día, Freeza y Zarbon estaban hablando sobre los Saiyan, que se estaban convirtiendo en una unidad de élite del ejército de la organización; Zarbon sugirió al emperador que hiciese algo para remediarlo, cosa que Freeza aceptó, mandando exterminar a todos los Saiyan que se encontrasen fuera del Planeta Vegeta. Freeza envió a Dodoria y su escuadrón de élite al Planeta Meat, con la misión de matar a uno de los escuadrones de Saiyans más poderosos, el escuadrón de Bardock, que sufría de la ausencia de su líder. No obstante, Bardock llegó tarde, justo cuando murió su compañero y amigo Toma, Dodoria y sus secuaces reaparecieron. Aparentemente, el único superviviente de la lucha fue Dodoria, pero Bardock sobrevivió, volviendo al Planeta Vegeta, y contó a otros Saiyans de la traición de Freeza, aunque no le creyeron. Furioso, Bardock salió a la órbita del Planeta Vegeta, y luchó con varios de los soldados de la OIC en su camino hacia la nave espacial del emperador; mientras tanto, otros Saiyan liderados por el Rey Vegeta estaban luchando contra los soldados de Freeza. Después de haber asesinado a muchos integrantes de las tropas de la organización, Freeza salió en persona y mató al Rey Vegeta de un simple puñetazo (la confrontación solo tiene lugar en el anime. Este hecho fue omitido en el manga). Después de matarlo, Freeza mandó a Zarbon abrir la compuerta exterior— Diciendo indirectamente a sus secuaces con eso que se enfrentaría al Saiyan rebelde— el emperador se montó en su silla flotante y salió al encuentro. Bardock dijo que cambiaría su destino y el de su pueblo, e intentó matar a Freeza con su mejor técnica, pero esto no supuso ningún problema para él, que disolvió el ataque en una Supernova y la lanzó sobre el Planeta Vegeta. La Supernova desintegró a Bardock (en el especial Episodio de Bardock, es transportado al pasado y da lugar a la leyenda del Super Saiyan), y a centenas de soldados de la organización, y el Planeta Vegeta con casi toda la raza Saiyan. Freeza rió maniáticamente al ver la explosión, para después huir en su nave de la onda expansiva disfrutando de sus fuegos artificiales. Los únicos supervivientes al genocidio que siguieron trabajando para Freeza fueron Raditz, Nappa, y los hijos del rey, Tarble y Vegeta. Freeza creó una historia que escondiese la verdad sobre los sucesos en el Planeta Vegeta, esa versión consistía en que un meteorito destruyó el planeta, y los Saiyan murieron por el desastre. Freeza es introducido por primera vez en la historia veinticuatro años más tarde, cuando espía en el scouter de Vegeta durante su llegada a la tierra y al hacerlo, se entera de la existencia de las Esferas del Dragón en el planeta Namek. Planificando la obtención de un deseo de inmortalidad, Freeza llega a Namek con sus camaradas desde hace mucho tiempo y sus dos más altos poderosos secuaces, Zarbon y Dodoria, a fin de obtener las bolas de dragón de los Namekianos. Después de que Kewi, Dodoria y Zarbon sean asesinados a manos de Vegeta, quien había traicionado a Freeza para recopilar los legendarios elementos para sus propios fines, la fuerza Ginyu es convocada por Freeza para recuperar las bolas de dragón y neutralizar al renegado Saiyan, por lo que él se aseguraría la victoria, pero no lo hace cuando Goku llega al planeta Namek y lucha contra ellos, hasta finalmente derrotarlos a todos.",
        "transformations": [
          {
            "id": 0,
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/Freeza2.png",
            "description": "Esta es la segunda forma de freezer, que es doblemente mas fuerte que el primero,tambien tienen la cadi la misma apariencia,solo que en esta transformacion ,los cuernos son mas grande ,y es mas alto ,y la diferencia de poder es grande,freezer forma 2 ,apareceria en el planeta namek ,al pelear con gohan,krillin y vegeta."
          },
          {
            "id": 1,
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/Freeza3.png",
            "description": "Esta es la tercera transfotmacion de freezer,su apariencia es algo extraña y horripilante,su poder es gigantesco,donde superaba por mucho a todos los guerreros presente en la batalla contra el,donde peleaban en el planeta namek,con piccolo,vegeta,gohan y estaba dende ,pero solo pr curar a los guerreros."
          },
          {
            "id": 2,
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/Freeza4.png",
            "description": "Esta seria la cuarta transformacion de freezer,la cual su poder es inmenso ,donde nadie era rival contra ,ni si quiera son goku ,cuando llego al planeta namek,este seri derrotado,o mejor dicho lastimado cuando ,son goku le lanza su genkidama,donde freezer la soportaria ,aqui estaria peleando con son goku y gohan. Tras matar a dende,vegeta y krillin."
          }
        ]
      },
      {
        "id": "667af9c7f45fc2c137a595ae",
        "name": "Garlick Jr",
        "genre": "Masculino",
        "race": "Desconocido",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Garlick_Jr._SDBHWM.png",
        "planet": "Makyo",
        "description": "Garlic Jr. (ガーリックジュニア Gārikku Jr.¿?) era un malévolo que ansiaba conquistar la Tierra y vengar la derrota de su padre ante Piccolo Original cuando éstos competían por el puesto del guardián, siglos atrás. Podía transformarse en un guerrero musculoso portador de gran poder. Aparece como el antagonista principal del primer largometraje homónimo de Dragon Ball Z, y posteriormente como el antagonista principal del Arco de Garlic Jr. del dicho anime",
        "biography": "Hace mucho tiempo Garlick fue encarcelado por Kami en el reino de la oscuridad, dejando a su hijo Garlic Jr., con un profundo sentimiento de resentimiento y deseo de venganza. El es el único personaje en la serie de Dragon Ball que consigue la vida eterna con las Esferas del dragón, gracias a los Cuatro Reyes Celestiales del Clan Demonio, quienes lo ayudan a recogerlas por todo el mundo. En el proceso derrotan a Piccolo quien entrenaba para vengarse de Goku, secuestraron a Gohan para conseguir la esfera de cuatro estrellas cosida en la gorra y dañaron a Chi-Chi y Rey Gyuma, lo que hizo enfadar a Goku.",
        "transformations": [
          {
            "trans": 0,
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/Super_Garlic_Jr.png",
            "description": "Al utilizar el 100% de Poder, pasa a convertirse en un Super Makyano. Como tal, el tamaño, la fuerza, la velocidad y la potencia del usuairo aumentan en gran medida. La tonalidad de su piel también cambia, volviéndose de un verde cerceta y distinguiéndolo de su forma base. Es capaz de causar mucho más daño a sus oponentes que en su forma anterior. Esta forma fue utilizado por primera vez en la película contra Goku y Piccolo, y apareció de nuevo en el Arco de Garlic Jr."
          }
        ]
      },
      {
        "id": "667af9d0f45fc2c137a595af",
        "name": "Ghurd",
        "genre": "Masculino",
        "race": "Bas",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Ghurd.png",
        "planet": "Desconocido",
        "description": "Ghurd (グルド Gurudo¿?), también conocido como Gurdo o Guldo, es un extraterrestre pequeño y verde que pertenecía a las Fuerzas Especiales Ginew. Aunque no es muy fuerte, tiene grandes poderes psíquicos, entre los que destaca una capacidad limitada de controlar el tiempo.",
        "biography": "A su llegada a Namekusei bajo las órdenes de Freeza, Ghurd y los demás miembros de la Fuerza Ginew encontraron a Vegeta, Krilin y Gohan tratando de pedir un deseo con las esferas del dragón, pero sin embargo, cuando Vegeta trata de arrojar una esfera a gran velocidad, Butta muestra su tremenda velocidad y agarra la esfera, mientras Ghurd detiene el tiempo para sacar una esfera del dragón de las manos de Krilin. Ellos juegan un juego de piedra papel o tijeras, con el fin de decidir quién se queda para luchar contra Vegeta y quien se queda con la basura, quienes eran Gohan y Krilin. Reacoom salió victorioso en el juego, y Ghurd en el segundo lugar, por lo que le toca luchar contra Gohan y Krilin. Sin embargo, la velocidad y fuerza de los niños sorprenden a Ghurd, lo que le obligó a recurrir a sus ataques psíquicos más poderosos. Usando sus capacidades mentales, Ghurd usa la congelación del tiempo con el fin de paralizar físicamente los cuerpos de Gohan y Krilin, dejándolos indefensos. Ghurd corta un árbol que se encontraba cerca, y lo afila para que pudiera aniquilar a Gohan y Krilin. Ghurd decide que este último debe morir primero, sin embargo, Vegeta inesperadamente interviene y los salva cortando brutalmente la cabeza de Ghurd (en el manga, Vegeta hace esto con un golpe de costado, mientras que en el anime, utiliza un rayo de energía). Ghurd queda agonizando en el suelo, usando sus últimas palabras para maldecir a Vegeta por interferir, pero el Príncipe Saiyan lo acaba.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "667af9dff45fc2c137a595b0",
        "name": "Ginyu",
        "genre": "Masculino",
        "race": "Ginew",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Ginyu.png",
        "planet": "Desconocido",
        "description": "Su nombre es un juego de palabras con gyūnyū (牛乳), la palabra japonesa para la leche de vaca. Ginew se muestra como una persona muy dura cuando su equipo pierde una batalla, pero también demuestra sentir una preocupación profunda cuando sus compañeros fueron asesinados. Muestra una alta lealtad hacia Freeza, dicha lealtad es tan grande hasta cuando estuvo con el cuerpo de rana intentó detener a los Guerreros Z para que no usen las Esferas del Dragón Namekianas. También muestra ser muy orgulloso, ya que no quiso que Jheese lo ayude en su batalla. En batalla demuestra en un principio ser calmado y analítico de la situación, utilizando estrategias en batalla como aprovechar la distracción del enemigo, o incluso herirse a si mismo para luego cambiar de cuerpo y dejar al oponente con su cuerpo malherido. Tiene confianza en su propio poder, creyendo ser el segundo mas poderoso del universo siendo solo superado por Freeza, pero perdió su compostura al ver que Goku tenía un poder de pelea mayor al suyo, aunque no tardó en calmarse e idear un plan.",
        "biography": "Al igual que todos los miembros de las Fuerzas Especiales Ginew, Ginew desarrolló su habilidad especial, la de cambiar de cuerpos, durante su infancia. En su niñez, Ginew cambió de cuerpo con el chico más rico de su clase, haciéndose así más popular con las chicas, pero pronto se dio cuenta que los hombres debían competir por su fuerza y no por su dinero [1]. Coola posteriormente integró a Ginew en sus Fuerzas Acorazadas. Pocas personas conocieron la apariencia real de Ginew, entre ellos está Thouser, quien luchó contra Ginew para convertirse en el líder de las Fuerzas Acorazadas de Coola[2], no obstante, Freeza lo integró a su ejército no muy poco después. Ginew eventualmente se encontró con un extremadamente poderoso alienígena violeta miembro de una especie alienígena con cuernos mientras estaba en una misión con Butta y Jheese y cambió de cuerpos con este, ganando así su apariencia más conocida por la mayoría de las personas que lo conocen[3]. No obstante, el extraterrestre con el que cambió de cuerpos sigue teniendo el cuerpo original de Ginew.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "667af9ebf45fc2c137a595b1",
        "name": "Son Goten",
        "genre": "Masculino",
        "race": "Mestizo (Humano, Saiyajin)",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Goten.png",
        "planet": "Tierra",
        "description": "Son Goten (孫そん悟ご天てん Son Goten¿?) es el segundo hijo de Chi-Chi y Son Goku, y hermano menor de Son Gohan, que nació al poco tiempo de la segunda muerte de su padre. Su nombre es un juego de palabras que se puede interpretar en japonés como región baja (Ten) del cielo (Go). En su niñez, Goten es muy parecido a su padre, con el mismo estilo de peinado que Son Goku, un rostro risueño y piel de tez rosada heredada directamente de su madre. En sus primeras apariciones, llevaba un changshan azul con bordes verdes con unas mangas largas y pantalón morado, además de su pantalón sale una tela blanca. Durante su entrenamiento con Gohan para el Torneo Mundial de las Artes Marciales (edición infantil), Chi-Chi le daría un traje similar al gi de su padre, de color naranja con una camiseta azul marino de mangas largas y protectores de similar color. Como niño, mide 123 cm y pesa 26 kg. Apenas crece unos pocos centímetros hasta Dragon Ball Super, notándose su diferencia de menor tamaño comparado a la altura de Trunks. En Dragon Ball Super, como civil utiliza su changshan del Arco de Boo, aunque ahora la tela que sobresale de su pantalón es roja en lugar de blanca. Durante el Arco del Dios de la Destrucción Beerus, él lleva una camisa estilo hawaiana de color azul con el dibujo de una flor cayena, bermudas azules y zapatos marrones con media blancas. En algunas apariciones, utiliza un nuevo Gi de entrenamiento, el cual es más parecido al de Kurilín, con camiseta de manga corta y brazaletes color azul océano, y su uniforme no emplea escritura kanji alguna. En el final de Dragon Ball Z, o sea diez años luego de la derrota de Pequeño Boo, aparece con una camiseta amarilla y verde con su nombre estampado en centro, un pantalón azul y unas botas, más tarde utilizaría un Gi del mismo color del de Dragon Ball Super, solo que el bordado del mismo se asemeja más al Gi utilizado por Goku en su entrenamiento con Whis. En esta etapa de su vida, el cabello de Goten es más parecido al de Gohan cuando era pequeño. En Dragon Ball GT, su cabello se vuelve más corto e inclinado, comenzando a parecerse más a su hermano que a su padre. Durante el Arco de las Esferas del Dragón Definitivas, viste una camisa amarilla por encima lleva otra pero de manga larga y de color verde, usa pantalones morados y unas botas. En el Arco del Demonio Vengador Baby cambiaría a tener una camisa blanca de manga larga. En su infancia, Goten es un niño bondadoso, amante de la diversión y un tanto ingenuo como su padre. También es un poco revoltoso, debido a la influencia de su mejor amigo Trunks y uniéndose a él en muchas de sus travesuras. Entre Trunks y él, es sorprendentemente la voz de la razón, aunque por lo general sigue las ideas del primero. Goten también es muy educado, ya que siempre hace una reverencia antes de enfrentarse a alguien en una pelea. Él admira mucho a su hermano mayor Gohan (además de ser la única persona que en su momento no encontraba vergonzoso el traje de El Gran Saiyaman, pensando que este es Genial), aunque tiempo más tarde éste le rechaza a Gohan el traje de El Gran Saiyaman reconociendo que es un traje ridículo. A Goten le encanta luchar y capturar insectos, además muestra un gran amor por los animales salvajes, un rasgo obviamente heredado de Goku, ya que a menudo se distrae del entrenamiento para jugar con ellos en más de una ocasión. Goten también comparte el típico apetito de Saiyan, como su padre y su hermano. En un episodio después de que Trunks y Goten despertaran en la Atalaya de Kami después de ser dejados inconscientes por Vegeta, Trunks despierta a Goten diciéndole que era hora de comer; Esto es similar a lo que Bulma solía decir para despertar a Goku cuando se enfrentaba a Jackie Chun. Como un adolescente y adulto, Goten sigue siendo amable y considerado con las demás personas, pero se ve que se ha vuelto más maduro. Estableciéndose para vivir más o menos como un típico adolescente normal, preocupándose más por salir con chicas que por las luchas.",
        "biography": "Goten nació en el Año 767, su madre lo crió como madre soltera y cuando creció esta notó que era increíblemente fuerte, como un niño, es mucho más fuerte que Goku o Gohan en su infancia. Más tarde sería es más débil que Gohan cuando éste era joven, pero más fuerte que Goku en la época de Dragon Ball. Chi-Chi fue la primera persona en verlo transformarse en Super Saiyajin, siendo así el Saiyajin más joven en logra la transformación con tan solo siete años. Más tarde le revelaría a Gohan que logró la transformación cuando estaba entrenando con su madre, pero que ella le dijo que nunca se transformara de nuevo ya que ella lo consideraba un rebelde. Luego de contarle esto, Gohan le pide a Goten ayuda para entrenar para el Torneo Mundial de las Artes Marciales, y viendo que su hermano menor era muy fuerte pero que no sabía Volar, le enseñó a hacerlo. La facilidad que controló la transformación es un tema de controversia, ya que le tomó años a Goku y Vegeta dominarla. Cualquiera sea la razón, Goten muestra una potencia excepcional a una edad temprana. Durante la infancia Goten es el mejor amigo de Trunks, hijo de Bulma y Vegeta. Gracias a las continuas peleas que mantienen Goten y Trunks, han podido llegar a un nivel increíblemente poderoso.",
        "transformations": [
          {
            "id": 0,
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/Goten_Super_Saiyan",
            "description": "Sin Descripcion"
          },
          {
            "id": 1,
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/Goten_Super_Saiyan2",
            "description": "Sin Descripcion"
          },
          {
            "id": 2,
            "image": "https://apidragonball.vercel.app/static/images/sagaz/transformations/Goten_Super_Saiyan3",
            "description": "Sin Descripcion"
          }
        ]
      },
      {
        "id": "667af9f4f45fc2c137a595b2",
        "name": "Gran Gurú",
        "genre": "Asexuado",
        "race": "Namekiano",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Gran_Patriarca_Dokkan.png",
        "planet": "Namenk",
        "description": "El Gran Patriarca (最さい長ちょう老ろう Saichōrō¿?) es el líder de todos los namekianos, además de uno de los pocos supervivientes de la Catástrofe Climática en Namek",
        "biography": "El Gran Patriarca sería uno de los pocos supervivientes de la catástrofe climática producida en Namek. Posteriormente, se volvió el encargado de las esferas del dragón y de la repoblación del planeta.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "667afa01f45fc2c137a595b3",
        "name": "Gregory",
        "genre": "Masculino",
        "race": "Sprite",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Gregory.png",
        "planet": "Kaio",
        "description": "Gregory (グレゴリー Guregorī¿?) es un Sprite macho (confundido con un grillo a veces) con la capacidad de hablar, también es el mayordomo y asistente del Kaio del Norte. Gregory no apareció en el manga original convirtiéndose en un personaje exclusivo del anime, sin embargo tras la llegada de Dragon Ball Z Kai y Dragon Ball Super, Gregory paso a formar parte de la historia principal de la serie. Gregory originalmente era un personaje exclusivo del anime que no aparecía en el manga, pero tuvo que ser incluido en la remasterización llamada Dragon Ball Kai como un personaje original ya que solo la serie da resúmenes de toda la serie sin rellenos, pero no se pudo editar escenas en donde este personaje salía, por lo cual pasó a ser un personaje de la historia principal. El nombre de Gregory proviene del nombre del personaje principal de la novela escrita por Franz Kafka llamada La Metamorfosis en la cual el personaje principal se llama Gregory y este se transforma en un grillo o cucaracha. Gregory es muy respetuoso y educado sin embargo puede convertirse en alguien molesto e irritante cuando trata de defender al Kaio del Norte, mostrando todo su respeto a este último e incluso es capaz de defenderlo aunque no sea de mucha ayuda, cabe destacar que Gregory tiende a ser muy exagerado a la hora de hablar del Kaio del Norte demostrando ser arrogante.",
        "biography": "Los guerreros que consigan llegar al Planeta Kaio y quieran entrenar con éste, deben intentar golpear a Gregory con un martillo, luego de lograr atrapar a Bubbles. Se lleva mal con Goku por como lo trata, y el Kaio del Norte le dice que por muy duro que se crea es muy débil. Murió junto al Kaio del Norte y Bubbles cuando Son Goku llevó a Cell al planeta, y el Bio-Androide explotó.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "667afa0cf45fc2c137a595b4",
        "name": "Kaio del Norte",
        "genre": "Asexuado",
        "race": "Nucleico benigno",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Kaio_del_Norte.png",
        "planet": "Kaio",
        "description": "El Kaio del Norte (北の界王 Kita no Kaiō¿?); conocido en España como Kaíto e inicialmente como Kaiō-sama, es un personaje de Dragon Ball. Se trata del dios encargado de administrar las Galaxias del Norte, el cuadrante boreal del Universo 7 y supervisar a los dioses de los planetas de dicho sector (como es el caso de Kami en la Tierra). Más tarde se descubre que existen otros tres Kaio, cada uno encargado de su propio punto cardinal de la galaxia, pero por encima de él, en rango, se encuentra el Gran Kaio, que se encarga de supervisar a los cuatro Kaiō",
        "biography": "Kaiō tiene su propio planeta, que es en realidad un minúsculo astro, aunque antes era enorme, hasta que Beerus, enfadado por perder en las escondidas, lo destruyó. Está situado al final del Camino de la Serpiente, en El Otro Mundo, y en el que apenas cabe una casa, un coche, un árbol y una pequeña carretera que lo rodea. Allí vive junto a su mono Bubbles y Gregory. Son Goku le conoce tras morir por primera vez, en el combate con su hermano Raditz, al encargarle Kami cruzar el camino de la serpiente y entrenarse con Kaiō-sama para prepararse a la llegada de los saiyajin. Tras un largo viaje de más de 100 días, en el que tuvo que recorrer un millón de kilómetros y hacer una visita al infierno, Son Goku consigue llegar a casa de Kaiō y le pide que le entrene. Pero dado que el joven no especifica en qué disciplina, Kaiō del Norte le hace pasar una prueba en la que tiene que conseguir hacerle reír con un chiste, para demostrar ser merecedor de ello. Una vez superados la prueba y el malentendido, Kaiō del Norte decide entrenar a Son Goku en el tiempo que les queda. Su planeta tiene una fuerza de gravedad aproximadamente 10 veces superior a la de la Tierra, por lo que su entrenamiento es muy eficaz. Las primeras pruebas que hace pasar a sus discípulos, y por supuesto a Son Goku, son las de conseguir atrapar a Bubbles y golpear a Gregory con un pesado mazo, para conseguir que se acostumbren a la fuerza de gravedad y ganen velocidad y resistencia. Cuando Son Goku supera estas pruebas, Kaiō-sama decide entrenarle en técnicas de combate, logrando enseñarle con eficacia el Kaiō Ken y la Genki-dama, dos técnicas de su invención, pero que ni él mismo había conseguido llevar a cabo. En el combate entre Son Gohan contra Cell, Son Goku se vio obligado a usar la Teletransportación para alejar al monstruo de la Tierra, llevándolo al planeta de Kaio, donde sin más tiempo, el monstruo estalló, destruyendo el planeta y acabando con la vida de Kaio del Norte, Bubbles, Gregory y Son Goku. A pesar de su totalmente comprensible enfado inicial, Kaio-sama siguió apreciando y entrenando a Son Goku durante los siete años que éste pasó en El Más Allá en su segundo paso por allí, ayudándole además a alcanzar el nivel 3 de Super Saiyan. Por si no fuera poco, se celebró un torneo de Artes Marciales en El Más Allá, al que asistieron guerreros de todas las zonas de la galaxia, lo que permitió a Son Goku, no sólo enfrentarse a grandes adversarios como Paikuhan, sino también conocer a los Kaio de los otros puntos cardinales, y al Gran Kaio. Cabe destacar el gran sentido del humor de Kaio, ya que las primeras exigencias para Goku fueron que se riera de sus chistes y si Goku no lograba hacerlo reír no lo entrenaría. aio del Norte, junto con Bubbles y Gregory, se ven unos años más tarde en la Tierra durante la fiesta de Mr. Satán que celebra la derrota de Buu. Luego, en La Batalla de los Dioses, se ve en su planeta cuando el Kaio-shin Anciano y Kibito-shin están discutiendo telepáticamente al saber el despertar del dios de la destrucción Beerus. Goku se da cuenta de que el Kaio del Norte está discutiendo algo interesante y entonces, Kaio le dice acerca de Beerus. El Kaio del Norte regaña a Goku cuando éste dice que quiere luchar con Beerus. Pronto, Beerus y Whis llegan al Planeta Kaio para preguntar a Goku sobre el Super Saiyan Dios. Cuando llega al planeta, Beerus se queja de que el planeta es muy pequeño, pero Whis le recuerda que la razón por la que es tan pequeño es porque lo destruyó cuando perdió en las escondidas. Cuando Goku, emocionado con el nuevo desafío, no le hace caso a Kaio del Norte y pelea con Beerus, el Kaio del Norte y Bubbles se esconden en la casa del Kaio del Norte y son testigos de la fácil derrota del Super Saiyan 3 mientras ven la batalla a través de una ventana. A continuación, contacta a Vegeta en la Tierra y le advierte sobre Beerus, que puede destruir la Tierra si algo le molesta.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "667afa18f45fc2c137a595b5",
        "name": "Krilin",
        "genre": "Masculino",
        "race": "Humano",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/KrilinZ.png",
        "planet": "Tierra",
        "description": "Tiene seis puntos en la frente y se rasura la cabeza cuando ejerce las artes marciales. Desde el Arco del Monstruo Boo como civil, suele llevar un cabello de color negro y corto, con algunos mechones que ocultan parte de sus puntos en la frente. Como Artista Marcial, Kame-Sen'nin le dio el Uniforme de la Escuela de la Tortuga, de color naranja con cinta azul oscuro (originalmente el traje era de color rojo y cinta negra), el cual usa siempre excepto en el Arco del Monstruo Boo y con el fondo de la insignia tortuga de color blanco (amarillo en Dragon Ball). Llevaba unas zapatillas chinas de color negro y ocasionalmente la Ropa de Combate Pesada que vestía Son Goku con Kami. En el Torneo del Arco del Monstruo Boo, utiliza usa un polo rojo y pantalones deportivos color beige. En La Batalla de los Dioses usa un changshan verde con bordados grises y el kanji de la Escuela Tortuga. En La Resurrección de 'F' y en Dragon Ball Super usa un uniforme de policía y un casco y durante su enfrentamiento con el Ejército de Freeza y en Arco de la Supervivencia Universal utiliza un dogi color naranja claro con muñequeras y correa color azul añil y zapatillas chinas. En sus momentos libres, utiliza una camiseta color escarlata con la palabra Tacos y bermudas color beige con zapatos azules. Krilin es un hombre terrícola de 153 cm. de estatura y que pesa 48 kg[3]. En la mayoría de medios, la esclerótica de sus ojos es de color carne exceptuando el manga y el largometraje de Dragon Ball Super: Superhéroe, donde esta es de color blanco al igual que el resto de personajes.",
        "biography": "Aparece un nuevo enemigo Pasaron 5 años de paz en los que Krilin se estuvo entrenando (no mucho) y un día vería como Son Goku les presentaría a su hijo, Son Gohan, quien quedó asombrado junto a Kame-Sen'nin, Bulma y Turtle, mientras está ahí llega un ser desconocido quien resulta ser Raditz y decía que era hermano de Goku revelando que eran Saiyan y se lleva a Gohan con él, Krilin y Kame-Sen'nin se ofrecen para ayudar a Goku a derrotar a Raditz pero Piccolo entra en escena y habla con Goku para que se unan y así poder derrotar a Raditz y luego tomar caminos separados. Tras la muerte de Raditz y Goku, Yajirobe iría a la Kame House para avisar a Krilin de que Kami quiere entrenarlo junto a los demás. Éste se lo diría a Yamcha en medio de un partido de Béisbol y a Tenshinhan y Chaoz que estaban entrenando duramente. Finalmente junto con Tenshinhan, Yamcha, Chaoz y Yajirobe entrenarían con Kami y Mr. Popo durante 6 meses (los próximos 6 meses lo pasaron perfeccionando su técnica). Se sentía muy confiado y junto a los demás (excepto Yajirobe) utilizarían el Mundo donde el Pasado, Presente y el Futuro se reúnen donde uno a uno morirían (en esta ilusión y no en verdad) por los saiyajin Panpukin y Brocco que eran muy superiores a él. Krilin junto a Chaoz fueron los primeros en morir sin tan siquiera poder defenderse. Después con la llegada de los saiyajin sería el primero en llegar junto a dos grandes energías (al principio no sabía si eran Piccolo y Son Gohan o Tenshinhan y Chaoz). Después llegarían los demás para hacer frente a los Saiyan y los Saibaiman. Este vería el combate entre Tenshinhan y Saibaiman, al cual uno de los saiyajin, Vegeta lo mata con dos dedos, ya que el poder de Tenshinhan era muy superior y sería una pérdida de tiempo, el próximo Saibaiman empezaría a lucha con todas sus fuerzas. Krilin se ofrece a ser el siguiente, pero Yamcha se lo impide y pelea él que también es algo superior a el Saibaiman, pero el plan de Vegeta era que el Saibaiman se auto destruyese y así lo hizo provocando la muerte de Yamcha. Krilin se siente culpable y por ello desata todo su poder usando su Dispersión de Bala llegando a impresionar a Piccolo que decía que tenía mucha energía pero poca velocidad el ataque y aunque todos los enemigos esquivan el ataque luego la energía se separa y mata a todos excepto a uno de los saibaman, sin embargo los saiyajin están intactos. Después del sacrificio de Chaoz y Tenshinhan solo queda él, Piccolo y Son Gohan quienes combaten a Nappa como pueden y Krilin no para de nombrar que espera la llegada de Son Goku, entonces Vegeta le pregunta si Son Goku es Kakarrot y Krilin le dice que si y que no tardará en llegar, gracias a esto Vegeta da tres horas de tregüa para los guerreros Z restantes. Piccolo les dice a Krilin y Son Gohan que la única forma de derrotar a Nappa es esta: Krilin atacaría a Nappa de frente haciendo que éste prestara toda su atención en él, luego Piccolo a gran velocidad le agarraría la cola y cuando estuviese debilitado Son Gohan le atacará con todas sus fuerzas. La tregua a pasado y Son Goku sigue sin venir, por lo tanto empiezan a pelear contra Nappa, pero el plan de Piccolo no funciona y éste queda inconsciente, ya solo quedaban en pie Gohan y Krilin. Nappa provoca a Gohan para que le ataque, sin embargo llega un momento en el que Nappa está decidido a matarlo y Krilin interviene moviéndose con gran habilidad, hubo un momento en el que casi mata a Nappa con su Disco Destructor pero Vegeta le dice que lo esquive y luego quedaría gravemente herido por el ataque de Nappa. Después vería la muerte de Piccolo al proteger la vida de Son Gohan. Finalmente llega Son Goku y le da media semilla senzu a Krilin y la otra mitad a Gohan y frente a ellos derrota con facilidad a Nappa. Después Son Goku le pide a Son Gohan y Krilin que se vayan, estos lo comprenden ya que ellos resultarían un estorbo. Mientras Krilin y Son Gohan se alejan sienten como la energía de Vegeta aumenta y la de Son Goku disminuye, el saiyajin se ha transformado en Ozaru y está torturando a Son Goku. Éste le dice a Son Gohan que distraiga a Vegeta mientras él se coloca tras el saiyajin para cortarle la cola con el Kienzan, pero el plan no resulta, sin embargo Yajirobe si consigue cortarle la cola a el saiyajin. Krilin y Son Gohan tienen una dura batalla contra el saiyajin, aunque Krilin es derrotado con facilidad igual que Yajirobe. Durante un momento de la batalla Son Goku le pide que se acerque a él para pasarle la Genkidama que antes había creado aunque realmente solo quedaba la mitad de la energía, después el Supremo Kaio habla a través del corazón a Krilin para decirle como debe lanzarle la Genkidama a Vegeta. Este consigue sobrevivir y tumbar de nuevo a Krilin sin prácticamente fuerza. Cuando llega el final de la batalla, Vegeta intenta escapar en su nave, pero Krilin consigue levantarse del suelo y coger la espada de Yajirobe con la cual hubiese matado a Vegeta, de no ser porque Son Goku le pide que no lo haga.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "667afa27f45fc2c137a595b6",
        "name": "Maron",
        "genre": "Femenino",
        "race": "Humana",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/maron.png",
        "planet": "Tierra",
        "description": "Aparece en la serie como la primera novia de Krilin justo antes de la vuelta de Garlic Jr. Maron fue junto a Krilin a Kame House donde tuvo el valor de insultar a Bulma y Chi-Chi y luego Kame-Sen'nin hizo uno de sus (comentarios) donde le pedía a Maron lo mismo que a Bulma. Luego en Kame House se dio un baño junto a Krilin y gracias a eso no fue convertida en demonio como el resto de Guerreros Z. Cuando Krilin fue a el palacio de Kami, antes dejo a Maron en lo alto de la Torre de Karin. En la Torre de Karin trataba al maestro Karin como un simple gato. Después Krilin la dejo pensando que él no sería suficiente para ella, quien se iría con otro hombre en la playa, demostrando que realmente no sentía nada por él.",
        "biography": "3 años después, cuando Krilin y los demás están peleando con los androides, Maron va a visitar a Kame-Sen'nin, en el cual coquetea con su tortuga, este le insiste en que ella ama a Krilin, pero dice que no le hable de Krilin, ella pregunta donde esta Krilin, y Kame-Sen'nin le cuenta la historia de como sucedió todo y lo que están haciendo ahora, a Maron no parece importarle y lo malinterpreta diciendo cualquier cosa, de repente todos los novios de Maron pasan a buscarla, le explica a Kame que todos son muy lindos y no sabe a quien elegir y se va de la casa. Kame-Sen'nin se da cuenta de que Maron era una enamoradiza por lo que se alegra mucho de que se haya ido y desea que Maron no vuelva nunca mas, que ella no era la novia indicada para Krilin, y le pide a su Tortuga que no le diga nada a Krilin, que es mejor que el no se entere de esto, ya que seria muy doloroso para el. Luego de este suceso, no volvió a ser mencionada, ni apareció más en la serie.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "667afa38f45fc2c137a595b7",
        "name": "Mr. Satán",
        "genre": "Masculino",
        "race": "Humano",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Mr_Satan.png",
        "planet": "Tierra",
        "description": "Cuando era joven, asistía a un dojo de lucha llamado Castillo Satán. Mediante la combinación de su poder y buena suerte se convirtió rápidamente en el Campeón del Mundo. Tenía la fortuna de enfrentarse a rivales envenenados por la comida. Un día, en un bar de la Capital del Sur (donde estaban de viaje), Satán y su maestro cometieron el error de reírse del cabello de Tao Pai Pai, su maestro fue asesinado y Satán fue seriamente herido. A partir de ahí juró no enfrentarse a nadie sin conocer su identidad, o que pareciera realmente fuerte. El 24° Tenkaichi Budōkai tuvo lugar unos días antes de la llegada de los androides 19 y 20, por lo que los Guerreros Z no participaron. Mr. Satán fue el campeón de esa edición, el cual ganó sin hacer trampa.",
        "biography": "La Tierra puso sus esperanzas en él cuando Cell anunció que pondría en marcha el Cell Game. Por televisión había dicho que el bio-androide no era tan fuerte, y que todo el poder que parecía tener no eran más que trucos, solo una farsa. Así que decide participar ya que para el no existen humanos más fuertes que él, llegado el día de los Cell Game va con sus dos discípulos más fuertes según el, tras participar sus discípulos Caroni y Piroshki y al ver que fueron derrotados muy fácilmente, aun así se empeñó en ser el siguiente que luchara contra el bio-androide, a pesar de las advertencias de Son Goku. Comenzó con su típica demostración de romper ladrillos para impresionarlo lo cual Cell no le tomo importancia, después le lanzó una lluvia de ataques, entre el que destacó la Dinamyte Kick, pero no sirvió de nada ya que el bio-androide lo hizo volar de allí de un solo manotazo, sin tener ni un rasguño. Cuando el Saiyan es decir Goku abandonó el torneo con la intención de dejar el turno a su hijo, sus discípulos le preguntaron si volvería a pelear porque según Mr. Satan, él se había resbalado, Mr. Satán en ese momento adujo sentir un gran dolor de estómago, así que no pudo salir a pelear. Pero su papel fue determinante: cuando Cell destruyó al Androide 16 y la cabeza de éste cayó cerca del Campeón de Artes Marciales, éste se la lanzó a Son Gohan para animarle a luchar, y lo consiguió: Cell destruyó la cabeza del robot, y Gohan consiguió alcanzar, por primera vez en la serie, el Nivel 2 de Super Saiyan. Tras la destrucción total del bio androide, Mr. Satán dijo al único reportero que había por la zona que él mismo había acabado con Cell. Desde entonces, Satán sería considerado un héroe en todo el mundo. Se presentó el 25ª ° Tenkaichi Budōkai, en la que también participaba su hija, Videl. Primero le tocó luchar contra el Campeón del Torneo Infantil, Trunks, contra el que se dejó ganar, o eso hizo creer a sus fans, en realidad no tenía oportunidad frente al pequeño saiyajin (incluso llegó a decirle que le pegara quedito, Trunks aceptó sin saber que tanto significaba quedito). Satán no se dejo ganar, simplemente quería que le pegara flojo, pero Trunks se paso y le rompió la mandíbula. Y luego luchó en el Torneo absoluto, donde debido al inexplicable abandono de varios participantes, y al abandono de Mighty Mask, acabó luchando contra #18. Ésta le hizo una llave y le ofreció en voz baja dejarse ganar si Satán prometía darle el doble del premio al acabar el campeonato. El campeón aceptó para salvar su prestigio, así que le lanzó su famoso Satán Miracle Special Ultra Súper Megaton Punch, es decir, un puñetazo con el que la sacó del torneo, pero que a la androide no le hizo ni cosquillas pero se dejo ganar. Tras la llegada de Majin Buu y la rápida destrucción de la humanidad, que en pocas horas quedó reducida a una pequeña parte, se convirtió en la esperanza del planeta Tierra para acabar con el monstruo. Trató de aniquilarlo con bombones envenenados y un Game Boy - bomba, pero no lo consiguió, pero a éste le hizo gracia y le convirtió en esclavo. Poco después adoptaron a un perro herido, al que Buu llamaría Bee y que Buu curó, y el Campeón convenció al monstruo que dejase de matar a la gente. Sin embargo, unos asesinos dispararon a Satán y al perro, que se curaron gracias al propio Buu, y a partir de ahí la ira interior del monstruo surgió su parte mala, la cual absorbió a la buena. Aunque sus intenciones eran sólo destructivas, no quiso atacar a Satán ya que le recordaba como amigo. También fue de los pocos que se salvaron del temible Jinrui Zetsumetsu Kōgeki, el ataque más poderoso de Súper Buu. Poco después, vagando junto a Bee, fue encontrado junto con Dende, Son Gohan, Piccolo, Trunks y Son Goten. Poco a poco, fue viendo como todos, incluidos unos reaparecidos Son Goku y Vegeta fusionados, eran absorbidos. Hasta que éstos salieron del cuerpo de Buu, y éste lanzó un ataque con el que destruir la Tierra, momento en que Goku salvó a Vegeta, Mr. Satán y Dende, siendo teletransportados por Kibitoshin al Planeta del Supremo Kaio del Norte. En el Planeta Kaiō Shin, tuvo un papel determinante en 3 hechos fundamentales: Sacar a Buu Gordo del cuerpo de Pequeño Buu. Él era amigo del Buu Gordo por eso lo ayudo, el Buu Gordo se puso a luchar contra Pequeño Buu, para ganar tiempo y que Goku lograse completar su Chō Genkidama. Convencer a los habitantes de la Tierra de que prestasen a Goku su energía para salvar la Tierra. En éste punto, Satán se acababa de convencer de que lo que vivía no era un sueño. Salvo la vida de Vegeta, ya que este último esta tendido a lado de Pequeño Buu y Goku no podía lanzar su ataque sin darle a Vegeta. Así que, con un ataque conjunto entre Buu Gordo y Satán, consiguieron sacarlo de allí, y Goku pudo lanzar la Genkidama sin ningún problema. En el manga, Satán salva a Vegeta sin ayuda de Buu Gordo, ya que Pequeño Buu se había distraido por la Genkidama. Con estos papeles tan importantes, Mr. Satan irónicamente terminó siendo uno de los salvadores del universo.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "667afa41f45fc2c137a595b8",
        "name": "Nail",
        "genre": "Asexuado",
        "race": "Namekiano",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Nail.png",
        "planet": "Nameck",
        "description": "Nail es un orgulloso guerrero namekiano. Tiene un gran respeto hacia su padre, el Gran Patriarca, y siente una gran furia cuando este se encuentra en peligro. Aunque su orgullo no lo permita, si es para proteger su planeta es capaz de fusionarse con alguien para aumentar su poder y vencer las adversidades. Nail es puro de corazón y siempre protegerá a las personas indefensas.",
        "biography": "Nail aparece cuando Krilin es llevado ante el Gran Patriarca por parte de Dende. El Gran Patriarca desbloquea el potencial y le otorga la Esfera del Dragón a Krilin, aunque Nail desconfíe de Krilin. Más tarde, Nail saldría de la casa del Gran Patriarca para enfrentarse a Vegeta, puesto que la presencia de Vegeta ponía en riesgo la vida del Gran Patriarca. Sin embargo, la llegada de las Fuerzas Especiales Ginyu no le deja otra opción a Vegeta que retirarse del lugar. No obstante, más tarde, el Gran Patriarca le ordena a Nail que vaya a ayudar a Vegeta, Krilin y Gohan en la lucha contra Ginyu y sus hombres. Nail se dirige al campo de batalla, pero a mitad de camino decide desobedecer las órdenes que le fueron dadas, ya que presentía que un gran peligro se le acercaba al Gran Patriarca. Una vez que vuelve, es reprendido por el Gran Patriarca, al haber desobedecido sus órdenes y Dende ocupa su lugar para ayudar a Gohan y Krilin a utilizar las Esferas del Dragón namekianas. Pero al poco tiempo, los presentimientos de Nail se confirman, Freeza se dirigía hacia su ubicación con la intención de obligarlos a decirle cómo funcionan las Esferas del Dragón namekianas. Nail provoca a Freeza a combatir, y luego se lo lleva lejos de allí para ganar tiempo. Luego de un rato, Freeza decide detenerse y empezar el combate, diciendo que sólo utilizará un brazo para luchar. Nail demuestra todo su poder, sorprendiendo a Freeza ya que tenía un poder de 42.000 unidades, por lo que le dice que le gustaría tenerlo en las Fuerzas Especiales Ginyu. Sin embargo, el poder de Freeza era superior, demostrando su poder amputándole un brazo a Nail, casi dejándolo sin fuerzas. Sin que Freeza lo supiera, Nail cumple su objetivo y le hace perder tiempo al tirano, así Dende encontrara Krilin y Gohan e invocaron a Polunga. Freeza explota de furia al enterarse y abandona el campo de batalla, dejando a Nail moribundo. Luego de que Piccolo fuera revivido y enviado a Namek, se encuentra con Nail, quien revela que siendo ambos Namekianos de raza guerrera pueden fusionarse, de modo que las fuerzas de ambos se combinen en un solo cuerpo, del que la base será Piccolo. Piccolo acepta fusionarse, logrando aumentar su fuerza, logrando hacerle pelea al tirano en su primera transformación, pero luego es inferior cuando este se transforma.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "667afa49f45fc2c137a595b9",
        "name": "Nappa",
        "genre": "Masculino",
        "race": "sayana",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/nappa.png",
        "planet": "Vegeta",
        "description": "Nappa es un saiyano musculoso y muy alto. Aparenta ser un hombre joven cuando llega a la Tierra, pero en realidad tiene aproximadamente 50 años[1][2]. Cuando era joven tenía pelo y su peinado era una cabellera corta de color negro y su bigote en su juventud era más corto, pero decidió quedarse calvo y dejó crecer su barba. Como la mayoría de los saiyanos, Nappa viste una Armadura de combate y lleva un Rastreador de color Morado, vestimenta típica del Imperio de Freeza.",
        "biography": "Nappa nació en una distinguida familia de la nobleza y tuvo un poder de pelea muy alto, considerándose como un (guerrero saiyano de élite de nivel superior), estando en la clase alta. Luego se convirtió en un subordinado directo del Príncipe Vegeta[8], quien fue asignado más tarde a dicho grupo. Nappa, junto a Raditz, Vegeta y otros dos camaradas, estaba conquistando un planeta en el año 739, misma fecha en la que el Planeta Vegeta fue destruido a manos de Freeza. Nappa y Vegeta llegarían a la Tierra, luego Nappa para demostrar su poder destruye gran parte de la Capital del Este. Vegeta le dice que piense antes de hacer eso, ya que si las Esferas del Dragón estaban en el lugar y las destruyó con su (saludo) lo matará, ya que no podrían concederle su deseo. Luego usa su Rastreador para ubicar los dos poderes más grandes del planeta, dirigiéndose hacia donde se encontraba Gohan y Piccolo, pero luego en el lugar llegarían Krilin, Ten Shinhan, Yamcha y Chaoz. Nappa hace una lectura de los poderes de sus oponentes y se burla ya que son muy bajos, pero Vegeta se saca su rastreador y dice que ellos tienen la habilidad de esconder su verdadero poder, por lo que los Rastreadores son inútiles en estos casos. Luego, Vegeta le pregunta a Nappa si tenía aún las semillas de Saibaiman y éste le dice que si, que aún quedaban 6, y las planta en el suelo, para que los Guerreros Z luchen contra ellos. Ten Shinhan derrota primero a un Saibaiman, haciendo que Nappa se enoje, luego de eso, Krilin planea pelear pero Yamcha le dice que el luchará primero, la pelea da comienzo, y luego de un rato de pelea, Yamcha cree haber derrotado al monstruo, pero el Saibaiman se levanta y lo agarra y luego explota junto a este, muriendo ambos en el acto, esto hace que Nappa se enoje aún más, ya que no le gusta que haya un empate. Luego, Krilin enojado realiza una técnica poderosa la cual hace que todos los Saibaiman sean derrotados, a excepción de uno, que luego, sale del escondite e intenta atacar a Gohan, pero Piccolo derrota a uno de los Saibaiman, luego de esto, Nappa está dispuesto a (jugar) con los sobrevivientes y demuestra su gran poder, y en la batalla le corta un brazo a Ten Shinhan. Luego utiliza técnicas poderosas, pero los guerreros se salvan, hasta que Chaoz logra tomar a Nappa por la espalda, para luego inmolarse y estallar. Todos creen que Nappa ha muerto, pero se asustan mucho al ver que Nappa sigue vivo y ahora más enojado que nunca. Luego Ten Shinhan utilizaría todas sus fuerzas para vengar la muerte de su mejor amigo, pero Nappa sobrevive a el Kikoho y Ten Shinhan muere exhausto por haber utilizado sus últimas energías. Luego Piccolo, Krilin y Gohan planean un plan y lo llevan a cabo, pero Gohan se acobarda y no logran dañar tanto a Nappa. Luego de que Piccolo, Krilin y Gohan nombren tanto a Goku, Vegeta le dice a Nappa que esperarán tres horas a que Goku llegue, pero Nappa se enoja y trata de atacar a sus oponente, pero Vegeta le dice que está desobedeciendo una orden directa, haciendo que Nappa se arrepienta. En el anime, Nappa comienza a recorrer el planeta admitiendo que era uno de los lugares más hermosos que ha conocido durante sus conquistas y que lo venderán a un precio bastante alto una vez maten a sus habitantes. Luego de destruir varios porta-aviones del Ejército de la Tierra, Nappa nuevamente destruye otra ciudad por puro placer. Luego de las tres horas, Goku no aparece y Nappa se quita su armadura, luego la lucha se reanuda. Piccolo logra tomar de la cola a Nappa, pero este demuestra no tener la misma debilidad que Goku o Raditz, luego golpea a Piccolo con un codazo, dejándolo inconsciente. Luego Krilin decide lanzarle el Kienzan, Nappa dice que no necesitará esquivarlo, pero Vegeta le grita que no sea tonto y que se mueva, Nappa esquiva el ataque pero llega a cortarle la mejilla izquierda. Por esto Nappa se enoja y decide matar a Krilin, pero justo a tiempo Piccolo lo distrae con una onda de Ki. Nappa casi mata a Piccolo, pero decide intimidar a Gohan, pero este se enoja mucho y lo ataca con todas su fuerzas, sorprendiendo mucho a Nappa quien se enoja aún mucho más. Nappa decide acabar con Gohan, pero antes de que el ataque impacte con el pequeño saiyano, Piccolo se interpone en el trayecto del ataque, muriendo en el acto. Gohan ataca con un Masenko, pero Nappa lo desvía fácilmente. Nappa decide exterminar al niño saiyano pisándolo, pero es salvado por Goku. Luego Nappa subestima a Goku y lucha contra él. Pero es dominado por Goku, hasta que en un intento desesperado utiliza su técnica más fuerte, pero el saiyano criado en la Tierra lo esquiva. Nappa trata de atacar a Gohan y Krilin, pero Goku lo detiene con el Kaio-Ken, derrotando a Nappa. Nappa le pediría ayuda a Vegeta, entonces este extiende su mano y lo ayuda a levantarse, pero sorpresivamente lo lanza al aire diciendo que no le sirve un soldado que no sea capaz ni de levantarse, luego lo mata como castigo de su fracaso. Una vez en el Otro Mundo, Enma Daio lo envía al Infierno.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "667afa56f45fc2c137a595ba",
        "name": "Piccolo",
        "genre": "Asexuado",
        "race": "Namekiano",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Piccolo.png",
        "planet": "Nameck",
        "description": "Piccolo (ピッコロ Pikkoro¿?) o Piccolo Jr. (ピッコロ・ジュニア Pikkoro Junia¿?), también conocido bajo el seudónimo de Ma Junior (マジュニア Ma Junia¿?), es uno de los personajes principales que aparece en el manga y anime de Dragon Ball y sus correspondientes secuelas. Es un namekiano que surgió tras ser creado en los últimos momentos de vida de su padre, siendo su actual reencarnación. Aunque en un principio fue el archienemigo de Son Goku, con el paso del tiempo fue haciéndose menos malvado hasta finalmente convertirse en un ser bondadoso y miembro de los Guerreros Z. A través del tiempo, también comenzó a tomarle cariño a su discípulo Son Gohan, a quien veía como una especie de vástago y formando un lazo de amistad con este. Su nombre Piccolo (ピッコロ, Pikkoro) viene del instrumento Flauta Piccolo que es «Flauta Pequeña» en italiano.[1] Dentro de la serie misma, se dice que Piccolo significa 'de otro mundo' o 'abierto' en el idioma de los namekianos. Piccolo, además de ser una representación de una babosa verde de Mozambique, está inspirado en un héroe de Akira Toriyama el cual combatía en sus pesadillas, curiosamente con el monstruo que inspiró a la creación de Freeza y de su raza. La característica más notable en Piccolo es su tono de piel, que es de color verde. Tiene unas orejas muy grandes y unas antenas en lo alto de su cabeza. En los brazos y piernas lleva unas especies de círculos de color rosa (amarillo en el manga y en el largometraje de Dragon Ball Super: Superhéroe), cuyo contorno es de color rojo. De pequeño usaba una túnica morada con mangas largas de color orquídea y el kanji de 'Demonio' de su padre en la túnica. Al crecer, lleva un dogi de color morado, cinturón de color azul (rojo en el manga y algunas películas) además de unos zapatos marrones. También usa capa blanca y un turbante color nieve con un tope púrpura que llevan peso extra encima, emulando la camiseta y aditamentos de Kami que utilizaba Goku. Se suele quitar la capa y el turbante cuando va a pelear en serio ademas en el episodio 125 de Dragon Ball Z se le ha visto usar una ropa de civil: una camisa manga larga morada y una amarilla sobre ésta con pantalones grises y una gorra azul, blanca y roja. En la película Dragon Ball Super: Superhéroe se le ve vestir el uniforme de los soldados del Ejército del Listón Rojo, el que usa para infiltrarse, el cuál consta de un casco blanco con la marca del Listón Rojo, una camisa pegada a la piel de color fucsia, un chaleco antibalas con un 94 en el pecho, pantalones grises holgados y guantes y botas azules. Piccolo mide de 2,26 m de estatura y que pesa 116 kg. Piccolo fue originalmente un villano, al igual que su padre. Durante el Arco de la 23.ª Edición del Torneo Mundial de las Artes Marciales, él casi no muestra misericordia a sus oponentes, como cuando rompe todos los miembros de Goku mientras se reía con sadismo, creyendo que era necesario después de lo que Goku había hecho a su padre. A pesar de esto, él poseía un sentido del bien, salvando una vez a una madre y a su hijo de los escombros durante una tormenta. Más tarde, cuando él y Son Goku van a la batalla Raditz, Piccolo empezó a mostrar más honor durante la batalla, incluso conmemorando a Goku en su noble sacrificio y durante la batalla contra Nappa, elogió la valentía y las tácticas de los otros Guerreros Z. A pesar de su cambio gradual hacia una actitud heroica, Piccolo todavía puede ser grosero y confrontacional hacia las personas que estime tontas, inferiores o innecesariamente violentas, además es muy directo y honesto al dar sus opiniones sobre una situación o un individuo, aunque se pueden considerar muy despectivo. En el doblaje latinoamericano, se suele utilizar la palabra sabandija para denotar ésto.Después de entrenar y hacerse amigo y mentor de Gohan, su personalidad rápidamente cambia a medida que el saiyano híbrido toma su tiempo para hablar con él y tener conversaciones normales. Durante la batalla con Nappa, Piccolo va tan lejos como para sacrificar su vida para salvar a Gohan, indicando cómo su amistad lo había cambiado para siempre. Piccolo ha declarado que Gohan fue la primera persona en no verlo como un monstruo y estaba orgulloso de llamarlo su amigo. Durante la Arco de los Androides y Cell sigue teniendo una personalidad algo arrogante, al punto de decir que solo está utilizando a los Guerreros Z para así algún día conquistar el mundo (lo cual Krilin despreocupadamente sabía que eran puras habladurías). Después de fusionarse con Kami se vuelve más bondadoso, demostrando sufrimiento cada vez que matan a mucha gente, como fue el caso con Cell y posteriormente con Boo Gordo, incluso hasta siente culpa cuando le dice a Super-Boo que aun le quedan humanos por matar (para darles más tiempo de entrenar a Goten y Trunks). Piccolo demuestra ser analítico y estratégico en la batalla. Aprende rápido de sus errores y utiliza bien todos los recursos a su disposición, lo cual compensa su falta de transformaciones como tienen los saiyanos o la Raza de Freeza. Tras su fusión con Kami, se vuelve mucho más sabio al adquirir todos sus conocimientos a tal punto que aprende los puntos débiles de Goku y de los Guerreros Z, tal como se lo manifiesta a Goku cuando le menciona que de joven él no podía soportar mucho tiempo en el Salón del Tiempo. No obstante, mantiene aún su actitud de lobo solitario similar al Androide 17, y solo se abre con muy pocos personajes como lo son Gohan, Dende e incluso cuando ayuda a criar a la bebé Pan. Se ha demostrado que es muy observador, cuando observa los puntos débiles de los pasos de la fusión de Trunks y Goten.",
        "biography": "Cuando el saiyan Raditz (hermano de Son Goku) llega a la Tierra, empieza a buscar al guerrero más fuerte del planeta. En eso encuentra a Piccolo con quien tiene un breve contacto. El namekiano fue incapaz de hacerle daño alguno, sin embargo, Raditz se marcha antes de acabar con él al encontrar una señal de un individuo con un poder algo mayor. El namekiano seguiría a Raditz hasta Kame House, observando y oyendo el encuentro del saiyan con su hermano. Piccolo se uniría a Goku para hacer frente a Raditz, quien se había llevado a Gohan consigo. Ambos lo siguieron y comenzaron el combate con él, pero fueron superados en fuerza, por lo que Goku decide distraerlo para que Piccolo lo pueda atacar con su nueva técnica llamada Makankosappo. Goku sostiene a su hermano de la cola de tal forma que Piccolo lo atraviese con su nueva técnica. Pero Raditz lo engaña para que lo suelte, logrando esquivar la técnica. Todo parecía perdido hasta que un Gohan furioso, por lo que Raditz le hacía a su padre, lo ataca con todas sus fuerzas, haciéndole un gran daño, hecho que sorprendió a todos. Goku aprovechó el momento y agarró a su hermano por la espalda, quien no pudo liberarse debido al daño que había recibido, entonces Piccolo lanzaría otro Makankosappo el cual dio en el blanco, atravesando a ambos hermanos. Piccolo se acercaría a un agonizante Raditz para decirle que Goku reviviría gracias a las Esferas del Dragón. Dicha información sería recopilada por el rastreador de Raditz dando cuenta de ello a Vegeta y Nappa, por lo que el saiyan le afirmó a Piccolo que sus amigos se dirigirían a la Tierra. Goku mostraría señales de vida, a pesar de tener el pecho perforado, preguntándole cuando llegarían, su hermano respondería que dentro de un año, burlándose de Piccolo debido al tiempo que le quedaba de vida provocando la ira de éste quien lo remataría. Kame-Sen'nin y los demás llegarían al campo de batalla observando que el único en pie era Piccolo. El namekiano les explicaría lo acontecido. Tras esto, Piccolo se llevaría a Gohan ante la mirada atónita de Krilin, Bulma y Kame-Sen'nin. Piccolo iría a una región parecida a un oasis, una región rodeada por un desierto, donde arrojaría a Gohan a un pequeño lago para que despertara. Al hacerlo, el pequeño híbrido comenzó a llorar, a lo que un Ma Junia molesto respondió con una amenaza. Piccolo le explicaría a Gohan la situación, Goku y él habían podido acabar con el saiyan que lo raptó, Goku había muerto en el combate y unos sujetos aún más fuertes que Raditz llegarían a la Tierra en un año, se requeriría de toda la ayuda necesaria. Piccolo le explicaría a Gohan que este contenía un poder oculto impresionante, el pequeño se mostró escéptico respecto a esto, por lo que el namekiano se dispuso a hacerle una demostración, tomándolo por la cabeza y arrojándolo hacia una montaña, momento en el que Gohan despierta brevemente su poder destruyendo la montaña y dejando impresionado a Piccolo y a él mismo, en ese momento Piccolo medita y se daría cuenta de que podría estar entrenando a un futuro oponente peligroso. Piccolo le dice que él mismo lo entrenaría para que aprendiera a usar ese poder, a lo que un asustado Gohan se niega en un principio, afirmando su intención de ser un gran investigador, Ma Junia le respondería que lo podría ser, pero sólo después de derrotar a los saiyan. De nueva cuenta Gohan se negaría afirmando que le gustaría que lo entrenara su propio padre, Piccolo le respondería de nueva cuenta afirmando que Goku es muy fuerte pero uno sirve para ser maestro, pues este era muy blando, bastando con ver lo consentido que estaba su hijo. Un resignado Gohan le pregunta que es lo que tenía que hacer primero para entrenar, a lo que Piccolo responde (en el doblaje latino): Lo primero, es que no debes hacer nada, sólo sobrevivir, la intención de Piccolo fue dejar a Gohan sólo durante seis meses para que aprendiera a valerse por si mismo y así se volviera fuerte de espíritu, fuerte en mente y no sólo en cuerpo. A la inmediatez, Gohan se asusta afirmando que moriría, a lo que Piccolo solo responde con la frase: Si quieres odiarme debes empezar por odiar tu destino, así como lo hago yo , alejándose de la zona ante un desesperado Gohan. Así que en un principio deja al niño por su cuenta pero vigilándolo de cerca por si acaso, a la vez que entrenaba para la llegada de los saiyan. Tuvo que intervenir en dos ocasiones cuando Gohan se transformó en Ozaru al ver la luna llena, Piccolo se daría cuenta del peligro que representaba la luna así que decidió destruirla. Después de seis meses Piccolo entrena con él para que aprenda a pelear. Conforme pasa el tiempo, comienza a tenerle aprecio al chico. Los saiyan llegarían antes de tiempo, Piccolo se percataría de ello puesto que notó que Goku sería revivido antes de lo planeado. Vegeta y Nappa aterrizaron en la capital del Este, siendo destruida por el segundo. Se dispondrían después a localizar a los sujetos con el ki más elevado, notando la presencia de varios ki poderosos, siendo los más fuertes los de Piccolo y Gohan, dirigiéndose hacia su posición. Krilin se encontraría cerca del lugar reuniéndose con ellos antes que los demás, Vegeta y Nappa llegarían enseguida, sacando a seis Saibaimen. Los guerreros Z restantes aparecerían, para enfrentarse a los enemigos. Uno fue derrotado por Tenshinhan para luego ser asesinado por Vegeta, otro se suicidó junto a Yamcha, tres más fueron asesinados por Krilin, quedando solo uno, este iba a atacar a Gohan, pero el namekiano lo mató con un Cañón de Aliento Explosivo. Luego Nappa lucharía contra los Guerreros Z. Nappa atacaría primero a Ten Shin Han cercenándole un brazo de un golpe, dispuesto a atacarlo nuevamente se ve interrumpido por la inmolación de Chaoz. No obstante, la explosión de Chaoz no le ocasionó daño alguno. Tras un segundo intento de Nappa por acabar con Tenshinhan, Piccolo y Krilin lo atacarían mientras este tenía la guardia baja, logrando asestarle en dos ocasiones, dirigiéndolo hacía una asustado Gohan quien retrocedió en vez de rematarlo. Ante esto Piccolo y Krilin continuarían el ataque con un Kamehameha y un Makosen, respectivamente, Nappa esquivaría ambas técnicas solo para recibir un Kikoho de Ten Shin Han, siendo el guerrero capaz de destruir parte de su armadura, pero no de acabar con él, muriendo tras ello, dado que utilizó toda la energía que le restaba.  Posteriormente, Vegeta notaría la fe que mostraban los guerreros en la llegada de Goku, por lo que les brindaría tres horas para esperar al saiyan criado en la tierra. En este intervalo de tiempo, un enfurecido Piccolo muestra su reproche hacia a Gohan por haber actuado cobardemente durante el enfrentamiento contra Nappa, a la vez que meditaba sobre el poder de Vegeta, puesto que el namekiano notó la obediencia de Nappa para con éste. Tras haber pasado las tres horas, los tres guerreros restantes se disponían a pelear de nueva cuenta, un desesperanzado Krilin recobraría el aliento tras oir el plan de Piccolo. El plan consistía en que el terrícola distrajera al saiyan para que así el namekiano pudiera tomar su cola y el pequeño saiyan mestizo lo atacara con toda su fuerza. Piccolo alentaría también a Gohan diciéndole que él algún día podría superar los poderes de su maestro. Sin más, comenzó el ataque. Krilin se abalanzaría contra Nappa usando una ráfaga de ki antes de llegar a él para elevarse, tornándose la mirada del saiyan hacía arriba, fue la oportunidad perfecta para que Piccolo tomara la cola de Nappa, en ese momento Gohan comienza a avanzar contra Nappa, pero el saiyan le daría un codazo al namekiano en la frente dejándole inconsciente durante un breve momento. Recobraría la conciencia en el momento justo, pues cuando Nappa se disponía a rematar a Krilin, con quien había tenido un breve enfrentamiento durante el tiempo en que Piccolo estuvo inconsciente, con un Bombardero DX, el namekiano lo atacó por la espalda con una ráfaga de ki soltando la frase: No se metan... No se metan con la Tierra.  Después de esto, Piccolo siente el nuevo poder de pelea de Goku asombrándose y llamando la atención del príncipe saiyan Vegeta, quien tomando el rastreador que había dejado en el suelo, rastreó el ki de Goku notando que su poder básico de pelea era de 5,000, considerando el peligro de que uniera sus fuerzas con los guerreros restantes le ordenó a Nappa que acabara con ellos si mediaciones. Gohan consideró que si Piccolo moría no podrían usar las esferas del Dragón para revivir a los que murieron en manos de los saiyan, por lo que le dijo a su maestro que huyera mientras él peleaba contra Nappa, Piccolo se negó afirmando que él no sería capaz de pelear contra el saiyan. Nappa se abalanzaría contra Gohan siendo repelido por una patada de este último, impresionando a su maestro y provocando la ira del saiyan, quién reincorporándose se dispuso a lanzarle su técnica Bombardero DX. Gohan permanecería inmóvil ante la técnica, siendo salvado por Piccolo quién se interpuso recibiendo el impacto por completo. Piccolo cae al suelo ante Gohan diciéndole que huyera, mientras el híbrido la preguntaba por que lo había salvado. Un agonizante Piccolo le decía a Gohan que el había sido el único que no lo vio como a un monstruo y que le había tomado cierto aprecio, para después desvanecerse y morir.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "667afa5df45fc2c137a595bb",
        "name": "PuiPui",
        "genre": "Masculino",
        "race": "Zuníes",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Pui_Pui.png",
        "planet": "Zun",
        "description": "Pui-Pui (プイプイ PuiPui¿?) es un guerrero del Planeta Zun que sigue las órdenes de Babidi. Pui-Pui tiene la apariencia física de un extraterrestre xenomorfo, su armadura biológica se parece a la de Freezer en su tercera forma, tiene un traje azul oscuro, botas y guantes iguales que a las de Vegeta, en su espalda tiene 2 cuernos de color blanco que son del mismo color de su armadura, su rostro parece de color salmón oscuro o morado oscuro, tiene ojos completamente verdes sin pupilas y sus labios tienen un borde amarillo.",
        "biography": "Pui-Pui aparece por primera vez junto a Babidi recibiendo la visita de Spopovich y Yamu. El brujo hace que la cabeza de Spopovich explote, dando como resultado la huida de Yamu. Bajo las órdenes de Babidi, Pui-Pui utiliza su Cañón de Ki y destruye a Yamu. Más tarde aparece en la Nave de Babidi como el jefe del primer nivel, donde debe enfrentarse a Vegeta. Al ser superado fácilmente por el Saiyan, Babidi teletransporta a ambos al Planeta Zun, lugar donde cree obtener la ventaja al tener la gravedad aumentada 10 veces. No obstante, Vegeta vuelve a derrotarlo con mucha facilidad en su estado base, para luego desintegrarlo.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "667afa66f45fc2c137a595bc",
        "name": "Rey Cold",
        "genre": "Masculino",
        "race": "Mutante de la raza de Freeza",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Rey_Cold_Dragon_Ball_Super_Broly_artwork.png",
        "planet": "Desconocido",
        "description": "Cold (コルド Korudo¿?) es un extraterrestre proveniente de la misma raza de la de su hijo Freeza. Él es el padre de Freeza y Coola; y abuelo de Kuriza (en Neko Majin Z), y además es en secreto el líder del Imperio Intergaláctico del Universo 7 junto a sus hijos. Al igual que el nombre de su hijo menor, el suyo hace alusión a las bajas temperaturas. Su nombre en japonés proviene directamente de una deformación del vocablo anglosajón cold (コールド Kōrudo¿?), cuyo significado en español es frío. Cold tiene un gran parecido a Freeza en su segunda forma, solo que sus cuernos están segmentados y son mas grandes, la piel es morada (como la de Coola pero más clara), su altura es mayor y su esfera es de color verde oscuro. Lleva una armadura del ejército de su hijo de color negro y una gran capa. Según lo dicho por Coola, su padre era el motivo por el que no mataba a Freeza por lo que muestra preocupación por lo que suceda con sus hijos, como cuando se le vio buscando a Freeza tras la explosión del Planeta Namek y se enfadó cuando un soldado dijo que tal vez había muerto. Ha demostrado ser muy frío y cruel en varias ocasiones como cuando no le importó romper la ventana de su nave y que sus subordinados saliesen volando. Estuvo presente y observó cuando reconstruían a Freeza asustando a varios soldados; también intentó adoptar al asesino de su hijo menor, Trunks y le ofreció todo lo que quisiese para que se uniera a su familia y a su organización (posiblemente para que no lo matase y así poder matarlo el cuando dejase de estar transformado). Tras la negación de Trunks de ser parte de su familia demostró ser un tramposo y quiso atacarle con su espada pensando que el poder de Trunks provenía de su arma, tras fallar adquirió una actitud cobarde y le suplicó por su vida diciéndole que le daría todos sus planetas si le ayudaba, aunque el joven Saiyan no le hizo caso pues sabía que si lo dejaba ir destruiría la Tierra estando en órbita por lo que puso fin a su vida con una onda de ki.",
        "biography": "Tras la derrota de Freeza, Cold se acerca con su nave a donde estaba los retos del planeta Namek buscando a su hijo y se enfada diciendo que era imposible que su hijo fuese derrotado, ya que eran los mas poderosos del universo, cuando un subordinado cree que no hay esperanza de encontrarle vivo, rompe un cristal de la nave y uno de sus subordinados es llevado por un fuerte viento ante su fría mirada, luego se entera de que su hijo está vivo y envía a buscarlo. Posteriormente supervisa como sus subordinados curan a Freeza y se alegra al ver que han logrado hacer volver a Freeza transformado en medio robot y este le dice que debe ir a la Tierra y vengarse de Goku poniéndolo el apodo de El Super Saiyan. Tras curar y aceptar la petición de su hijo Freeza, Cold marcha junto este a la Tierra y adelantan la nave de Goku. Una vez en la Tierra, Freeza ordena matar a los humanos para desmoralizar a Goku, pero justo aparece Trunks. Cold dice que solo un miembro de su raza puede ser el más fuerte el universo y promete ayudar a Freeza a asesinar a Goku si hace falta. Cuando Trunks mata a Freeza, Cold demostrando su frialdad, intenta unirlo a su familia, ya que Trunks era el nuevo número uno del universo, pero Trunks se niega. Cold como última alternativa le pide a Trunks que le deje su espada ya que pensaba que así conseguiría ganar a Trunks, pero es derrotado por el Super Saiyan. En el manga, lo aniquila al instante, pero en el anime hay una escena lastimosa en la cual suplica por su vida.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      },
      {
        "id": "667afa71f45fc2c137a595bd",
        "name": "Son Gohan",
        "genre": "Masculino",
        "race": "Mestizo (saiyan y Humano)",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Son_Gohan.png",
        "planet": "Tierra",
        "description": "Son Gohan (孫そん悟ご飯はん Son Gohan¿?), Son Gohanda[29] en su tiempo en España, o simplemente Gohan en Hispanoamérica, es uno de los personajes principales de los arcos argumentales de Dragon Ball Z, Dragon Ball Super y Dragon Ball GT. Es un mestizo entre saiyano y humano terrícola. Es el primer hijo de Son Goku y Chi-Chi, hermano mayor de Son Goten, esposo de Videl y padre de Pan. Son Gohan (孫そん悟ご飯はん Son Gohan¿?), Son Gohanda[29] en su tiempo en España, o simplemente Gohan en Hispanoamérica, es uno de los personajes principales de los arcos argumentales de Dragon Ball Z, Dragon Ball Super y Dragon Ball GT. Es un mestizo entre saiyano y humano terrícola. Es el primer hijo de Son Goku y Chi-Chi, hermano mayor de Son Goten, esposo de Videl y padre de Pan. La apariencia de Gohan cambia drásticamente a través de los acontecimientos de Dragon Ball Z, debido al hecho de que la historia comienza con él siendo un niño, y termina como un hombre casado, y con una familia propia. Pero el aspecto básico de Gohan prácticamente se mantiene igual durante el transcurso de la serie. Gohan tiene el cabello y ojos de color negro los cuales como a todos los saiyanos de la obra que alcanzaron el estado de Supersaiyano, cambian su coloración y su peinado se altera según su nivel de transformación. Posee los rasgos faciales de su padre, y su tono de piel es más similar al de su madre. También su musculatura es bastante desarrollada para su edad. Como adulto, mide 1,76 m de estatura y pesa 61 kg. En los principios de Dragon Ball Z, Gohan tenía el cabello largo por atrás, y usaba un sombrero rojo que tenía la esfera del dragón de cuatro estrellas, junto con una túnica amarilla con el kanji Son (孫) estampada por enfrente, un vestido de una sola pieza de color verde cuyas mangas son de color blanco, y zapatos idénticos a los de su padre. Luego, durante su entrenamiento con Piccolo, Gohan usaba un traje parecido al de Goku, con la diferencia de que tiene el kanji Ma (魔; 'demonio', insignia de Piccolo) en lugar del símbolo de la tortuga y una espada, hasta que finalmente fue cambiado por un traje similar al de Piccolo. En el Arco de Namek y Freeza, Gohan tenía el cabello más corto cuya base tiene la forma de un hongo, hasta llegar a su nuca que es más corto, con el flequillo dividido en dos de manera diagonal siendo el lado izquierdo de su cabello más abundante que su lado derecho y llevaba el mismo traje inicial que Vegeta (traje azul con botas y armadura de una sola pieza). En el inicio del Arco de los Androides y Cell, durante la llegada de Freeza y el Rey Cold, su cabello vuelve a ser largo y viste la misma Armadura de combate que llevaba en Namek, y posteriormente el atuendo que vistió en la segunda parte del Arco de los Saiyanos. Al entrenar en la Sala del Alma y el Tiempo junto con su padre, sus rasgos faciales toman un tono más adolescente y su estatura aumenta notablemente, recorta su cabello de forma similar al de Goku, y al concluir su entrenamiento, utiliza un traje como el de Piccolo con la diferencia de que usa una faja y muñequeras de color azul marino, y una capa de tela blanca con hombreras puntiagudas más ampliadas. En los días de descanso previos a los Juegos de Cell, vistió un conjunto tradicional de kung-fu, consistiendo de una camisa blanca, pantalones violeta oscuros y zapatos negros. En el Arco del Monstruo Boo, adquiere unos rasgos de adulto joven y una estatura idéntica a la de su padre, Gohan llevaba el cabello un poco más corto y erizado cayéndole un mechón en su frente. Al principio viste un uniforme escolar mientras asiste a la Preparatoria Estrella Naranja. Durante el entrenamiento para volar con Goten y Videl, usa un dogi violeta similar al de Piccolo (excepto de mayor tamaño). En la edición 25º del Torneo de las artes marciales, se presenta como su alter ego: el Gran Saiyaman (グレートサイヤマン Gurēto Saiyaman¿?, Great Saiyaman). Por las normas utiliza un pañuelo blanco en la cabeza y unas gafas oscuras. Tras viajar al Planeta Sagrado, viste unas ropas Kaio-shin obsequiadas por Kibito. Tras concluir el ritual con Gosen Zosama y regresar a la Tierra, usa una réplica exacta del gi naranja de Goku en ese entonces. En el final de Dragon Ball Z, su cabello es completamente erizado hacia arriba, similar al de Yamcha durante el Arco de Cell y usa unas gafas transparentes. En Dragon Ball Z: La batalla de los dioses, mientras asiste con su familia al cumpleaños de Bulma, usa un chaleco azul con camisa, pantalones marrones y zapatos negros. Durante la pelea de los Guerreros Z contra Beerus, lleva debajo de su ropa el antiguo Gi naranja sin kanji de su padre. En Dragon Ball Z: La resurrección de 'F', tras haberse retirado por completo de las artes marciales y descuidarse en sus entrenamientos, perdió gran parte de su musculatura, volviéndose bastante delgado, también su cabello se ha aplanado en comparación a como era en la Arco del Monstruo Boo. Lleva una camiseta de cuello gris con pantalones rojos y gafas transparentes. En la llegada de Freeza a la Tierra, viste un conjunto chándal verde, ya que no encontraba su Gi en casa.",
        "biography": "Piccolo siente el poder de Gohan y se lo lleva para entrenarlo dejándolo solo en la naturaleza para que aprenda a sobrevivir frente a dinosaurios durante 6 meses. Pese a todo, Piccolo lo vigila muy de cerca. Dos veces Gohan al mirar la luna llena se transformó en Ōzaru y Piccolo tuvo que cortarle la cola. Hubo una vez en que Gohan tuvo oportunidad de escaparse y apareció en una pequeña aldea donde lo encontraron niños huérfanos que incluso el defendió de los hombres que se los querían llevar a la casa hogar incluyéndolo, pero gracias a la ayuda de su amigo Figuero el escapa y se dirige a casa, pero antes de irse a su casa reacciona y decide entrenar para derrotar a los saiyanos. El resto del año Piccolo le enseña al pequeño cómo luchar sin apiadarse de él. Sin embargo, la naturaleza amable de Gohan hace que Piccolo le tome mucho cariño. Este guerrero namekiano que fue en su día enemigo de Goku, se convierte en un buen amigo y un estricto maestro del pequeño Gohan. El futuro guerrero admira a su maestro namekiano e incluso empieza a vestirse del mismo modo que este. Su duró entrenamiento fue seis meses prácticamente abandonado a su suerte en un lugar algo desértico y luego cuando dejo de ser un niño llorón, entrenó muy duramente con su maestro Piccolo. Cuando llega el momento de los Guerreros Z para enfrentarse a los dos saiyanos, Vegeta y Nappa, Gohan alcanza a el poder de 981 e intenta luchar con valentía pero, debido a su corta edad, se asusta, sin embargo en el último segundo, Gohan se arma de valor y consigue darle una potente patada a Nappa que lo deja empotrado en una roca. Cuando Nappa, furioso, lanza un rayo de energía letal a Gohan, Piccolo se lanza delante de Gohan para protegerle, muriendo en el acto. Ante la muerte de su mejor amigo y mentor, lanza a Nappa un Masenko con un poder de 2.800 que le podía haber destrozado si no se hubiese protegido, después de eso aparece Goku para ayudarlo a el y a Krilin, los únicos sobrevivientes, gracias a Goku. Más adelante después de que Vegeta se transformara en un Ōzaru e hiriera a Goku gravemente, y luego de que el malvado saiyano volviera a su forma normal, Gohan es el que se ocupa de mantenerlo a raya. Cuando todo parece perdido, Vegeta tenía la ventaja (a pesar de estar seriamente herido por la Genki-dama) y, tras hacer explotar su Ki, a Gohan le crece la cola se transforma posteriormente en Ōzaru con un poder de 9.180 a pesar de no tener uso de razón como Vegeta le da una buena paliza, pero Vegeta logra cortarle la cola bajando el poder, sin embargo lo derrota tumbándose encima de él. Después que terminara la batalla, mientras estaba en el hospital junto a su padre y a Krilin (que eran quienes estaban más heridos) fue donde Goku se sintió muy orgulloso de su hijo cuando le planta cara a su madre, quien le había dicho que él no le debía nada a Piccolo, y el contesto que sí, ya que había sido su maestro y le debía su vida, queriendo así ir al Planeta Namek para revivirlo. Piccolo siente el poder de Gohan y se lo lleva para entrenarlo dejándolo solo en la naturaleza para que aprenda a sobrevivir frente a dinosaurios durante 6 meses. Pese a todo, Piccolo lo vigila muy de cerca. Dos veces Gohan al mirar la luna llena se transformó en Ōzaru y Piccolo tuvo que cortarle la cola. Hubo una vez en que Gohan tuvo oportunidad de escaparse y apareció en una pequeña aldea donde lo encontraron niños huérfanos que incluso el defendió de los hombres que se los querían llevar a la casa hogar incluyéndolo, pero gracias a la ayuda de su amigo Figuero el escapa y se dirige a casa, pero antes de irse a su casa reacciona y decide entrenar para derrotar a los saiyanos. El resto del año Piccolo le enseña al pequeño cómo luchar sin apiadarse de él. Sin embargo, la naturaleza amable de Gohan hace que Piccolo le tome mucho cariño. Este guerrero namekiano que fue en su día enemigo de Goku, se convierte en un buen amigo y un estricto maestro del pequeño Gohan. El futuro guerrero admira a su maestro namekiano e incluso empieza a vestirse del mismo modo que este. Su duró entrenamiento fue seis meses prácticamente abandonado a su suerte en un lugar algo desértico y luego cuando dejo de ser un niño llorón, entrenó muy duramente con su maestro Piccolo. Cuando llega el momento de los Guerreros Z para enfrentarse a los dos saiyanos, Vegeta y Nappa, Gohan alcanza a el poder de 981 e intenta luchar con valentía pero, debido a su corta edad, se asusta, sin embargo en el último segundo, Gohan se arma de valor y consigue darle una potente patada a Nappa que lo deja empotrado en una roca. Cuando Nappa, furioso, lanza un rayo de energía letal a Gohan, Piccolo se lanza delante de Gohan para protegerle, muriendo en el acto. Ante la muerte de su mejor amigo y mentor, lanza a Nappa un Masenko con un poder de 2.800 que le podía haber destrozado si no se hubiese protegido, después de eso aparece Goku para ayudarlo a el y a Krilin, los únicos sobrevivientes, gracias a Goku. Más adelante después de que Vegeta se transformara en un Ōzaru e hiriera a Goku gravemente, y luego de que el malvado saiyano volviera a su forma normal, Gohan es el que se ocupa de mantenerlo a raya. Cuando todo parece perdido, Vegeta tenía la ventaja (a pesar de estar seriamente herido por la Genki-dama) y, tras hacer explotar su Ki, a Gohan le crece la cola se transforma posteriormente en Ōzaru con un poder de 9.180 a pesar de no tener uso de razón como Vegeta le da una buena paliza, pero Vegeta logra cortarle la cola bajando el poder, sin embargo lo derrota tumbándose encima de él. Después que terminara la batalla, mientras estaba en el hospital junto a su padre y a Krilin (que eran quienes estaban más heridos) fue donde Goku se sintió muy orgulloso de su hijo cuando le planta cara a su madre, quien le había dicho que él no le debía nada a Piccolo, y el contesto que sí, ya que había sido su maestro y le debía su vida, queriendo así ir al Planeta Namek para revivirlo. Antes de llegar al Planeta Namek pasaron algunas dificultades como encontrar a un grupo de niños que vivían en una nave espacial oculta debido a que su planeta fue destruido por Freeza y sus padres habían muerto y pensaban que eran intrusos, después su nave cae en un planeta extraño y dos alienigenas los engañan y les hacen creer por medio de una ilusión que están en el Planeta Namek. Al momento de llegar a Namek, Gohan después de curarse y entrenar tiene un poder base de 1.500 (cuerpo a cuerpo), dos soldados de Freeza destruyen su nave, pero eran muy débiles y el junto a Krilin (ambos sin utilizar todo su poder) los derrotaron de un solo golpe, pero descubrieron que aparte de Vegeta había alguien superior a él, llamado Freeza con otros dos guerreros también muy poderosos: Zarbon y Dodoria. Gohan y Krilin sin emitir energía iban de un lado a otro hasta que se acercaron a una aldea que estaba siendo atacada por Freeza y sus soldados, donde Gohan después de ver como mataban a todos los namekianos, incluso a uno de los dos niños que habían, su rabia se liberó y atacó a Dodoria pegándole una patada por la espalda, Dodoria justo cuando iba a atacar a Gohan, Krilin lo vuelve a atacar por la espalda y se van con Dende. Freeza le ordena a Dodoria que los valla a buscar, al cabo de unos minutos, Dodoria los termina encontrando a Gohan y a Krilin, ellos no pudieron combatir a Dodoria porque este tenía un poder de 22.000 pero consiguieron huir de él ya que Krilin le usó un Taiyoken y gracias a esto salvaron al niño namekiano llamado Dende. Durante el viaje a Namek el Saichōrō despertó parte de su poder oculto llegando a 14.000, y junto a Krilin e incluso Vegeta fueron por las Esferas del Dragón Namekianas, pero en ese momento aparecen las Fuerzas Especiales Ginyu que les quitan las Esferas del Dragón al llegar. Empieza la pelea, Gohan y Krilin se tienen que enfrentar a Ghurd el más débil de las Fuerzas Especiales. Al principio demostró ser muy débil en comparación con Gohan y Krilin (quienes tienen un poder superior a 10.000 dicho por sus compañeros) pero utilizó su técnica de inmovilización con la que estuvo a punto de vencer a ambos por atacarle de frente, pero Vegeta de repente lo decapitó. Después empezaría la verdadera pelea contra Reacoom ya que era mucho más fuerte con el poder de 45.000 y lo demostró dándole una paliza a Vegeta. Decidido a matar a Vegeta, Krilin le ataca de improviso y Gohan coge a Vegeta para que no le llegue el ataque, Krilin es derrotado de una sola patada, sin embargo Gohan siguió peleando contra Reacoom, quien era infinitamente superior a él y lo desnuca dejándolo prácticamente muerto, pero llega Son Goku y le da a los tres Semillas del ermitaño, Gohan alcanza un poder de 31.000 al ser curado. También tuvo que pelear junto a Krilin contra Ginyu en el cuerpo de Goku quien tenia 23.000 unidades, al principio parecían dominarlo, pero su poder comenzó a aumentar y la pelea se empezó a complicar, pero al final es derrotado por Vegeta y vuelto a su cuerpo. Durante su batalla con Freeza en su segunda transformación quedó muy herido, pero fue curado por Dende aumentando su poder a 200.000 pero no era suficiente para acabar a Freeza. Gohan estaba apunto de atacar a Freeza cuando en ese momento aparece Piccolo y viendo el poder de Piccolo pensó que Freeza estaba acabado en su transformación y cuando Piccolo estaba perdiendo contra Freeza en su tercera transformación le lanzó un ataque que casi acaba con Freeza. Después de eso salva a Piccolo de el ataque de Freeza. Freeza se transforma y acaba con Vegeta solo usando un porcentaje de su poder. Luego es Goku el único capaz de hacerle frente a Freeza (ya que Vegeta había muerto), pero Freeza demostró ser muy superior a Goku utilizando el 50% de su poder con el poder de 60.000.000. Piccolo le pide a Gohan y Krilin que le den su energía para atacar a Freeza por la espalda para que Goku pueda utilizar la Genkidama. Freeza sale rápidamente del agua enfurecido y Gohan y Krilin le atacan (también de improviso) para distraer a Freeza quien recibe la Genki-dama, pero sobrevive. Al final Son Goku con el estado Supersaiyano, inducido tras ver como Freeza mataba a su amigo Krilin, le dijo que abandonase el planeta.",
        "transformations": [
          {
            "id": 0,
            "image": "/transformations/Gohan_Super_Saiyano.png",
            "description": "Gohan fue el último saiyan al que realmente le costó mucho esfuerzo lograr esta transformación y lo consiguió tras un intenso entrenamiento con su padre en la Cámara de Tiempo Hiperbólica donde un día real se convierte en un año dentro de esta estancia. Es por ello por lo que en tan corto periodo de tiempo en el mundo exterior y ante la amenaza de Cell, Gohan fue capaz de alcanzar el Super Saiyan en un arrebato de ira cuando estaba a punto de ser alcanzado por un kamehameha de Goku que podría haber matado a su propio hijo."
          },
          {
            "id": 1,
            "image": "/transformations/Gohan_Super_Saiyano2.png",
            "description": "Goku durante toda la saga de Cell presume del poder de Gohan y que éste se desataría si saca toda la ira que posee en su interior, pero, Gohan que no tiene ese espíritu de lucha que caracteriza a los saiyan es reacio a combatir y por ende a desatar todo su poder. Cell, consciente de ello, y que además posee células saiyan quiere enfrentarse a su rival con todo su poder al máximo, es por ello que usa todo tipo de artimañas para lograr enfurecer a Gohan. Los Cell Jr. Atacan a los amigos de Gohan dejándolos cerca de la muerte lo que provoca que Gohan quede exhausto, y lo que termina por provocar el estallido final y alcanzar el Super Saiyan 2 es la muerte de su amigo el Androide Nº16 con la cabeza aplastada de forma despiadada por Cell. Gohan sentía mucha empatía por esta creación del Doctor Gero, ya que compartía muchos de lo valores que predicaba, como la de combatir solo por aquello que desea proteger y su amor por la naturaleza. Son Gohan obstenta dos récords al lograr el Super Saiyan 2, y es que, se convierte en el primer saiyan en alanzar este estado y a su vez también en el más joven que lo consigue"
          },
          {
            "id": 2,
            "image": "/transformations/Gohan_Super_Saiyano3.png",
            "description": "En Dragon Ball Heroes nos presentan un futuro alternativo en el que Gohan siguió entrenando con Piccolo tras los acontecimientos de Cell en lugar de haberse dedicado a sus estudios y seguir con una vida pacífica. Es por eso que en esta transformación Gohan tiene la indumentaria característica de Piccolo."
          },
          {
            "id": 3,
            "image": "/transformations/Gohan_Super_Saiyano4.png",
            "description": "Cómo casi todos los saiyan que aparecen en Dragon Ball Heroes, Gohan también es capaz de alcanzar el Super Saiyan 4. Con esta transformación Son Gohan también puede realizar nuevos ataques y técnicas. El Super Saiyan 4 es una de las transformaciones más populares en territorio japonés, es por ello que no dudan en usarlo en numerosas ocasiones a través de los spin-offs de la serie, tanto en videojuegos como en mangas y en animes."
          }
        ]
      },
      {
        "id": "667afa7df45fc2c137a595be",
        "name": "Trunks",
        "genre": "Masculino",
        "race": "Mestizo (Saiyano y humano)",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Trunks.png",
        "planet": "Tierra",
        "description": "Trunks nace en noviembre del año 766 como hijo de Vegeta y Bulma, lo que lo convierte en un mestizo entre Saiyan y terrícola. Es considerado como un hijo ilegítimo debido a que fue concebido como resultado de una breve aventura entre sus padres. En su infancia, fue muy querido por su madre, pero parecía que su padre tenía pocas o ninguna emoción paterna hacia el niño debido a que Vegeta nunca quería tener hijos y veía a los mestizos como una desgracia. Sin embargo, después del final de los Juegos de Cell, la relación entre sus padres mejoró y se casaron, y comenzaron a criar a Trunks como familia. Durante la infancia de Trunks, su madre y su familia lo prodigaron, pero Vegeta demostró ser más estricto en lo que respecta al entrenamiento y comportamiento de Trunks. Trunks vino a idolatrar a su padre y desarrollaron una buena relación, a pesar de las frecuentes ausencias de Vegeta en su familia y la falta de voluntad de este para hacer ciertas actividades familiares.",
        "biography": "Tres años trascurren desde que Trunks del Futuro Alternativo le advirtió a Son Goku sobre los Androides y el Trunks del presente nace producto de la relación entre la terrícola Bulma y el príncipe saiyan Vegeta. El día de la llegada de los androides, Bulma trae consigo al bebé Trunks para presentárselo a los Guerreros Z. Krilin y Gohan asumen que Yamcha debe ser el padre, pero se sorprenden cuando Goku los corrige diciendo que Vegeta es el verdadero padre. Bulma pregunta cómo es que Goku lo sabía porque quería darles la sorpresa a todos y Goku le miente diciendo que lo supuso porque Trunks se parece a Vegeta. Mientras los Guerreros Z se enfrentan al Androide Número 19 y al Androide Número (quien este último es en realidad el Dr. Gero), Bulma decide ir al campo de batalla para ver a los androides, pero también para que Vegeta vea a Trunks, y obliga a Yajirobe a acompañarla. Durante el combate contra el Dr. Gero, Trunks y su madre corren peligro cuando el científico malvado destruye el vehículo en el que viajaban pero son salvados por el Trunks del futuro, quien intervino cuando Vegeta no quiso ayudarlos. Antes de irse a perseguir al Dr. Gero, Piccolo, revela la identidad del joven misterioso como la contraparte del futuro de su hijo a Vegeta y luego también a Bulma, quien se sintió aliviada al saber que Trunks no crecería para parecerse a su padre. Mientras los demás van tras el androide que se había dado a la fuga, Gohan se queda atrás para llevar a Trunks, Bulma y Yajirobe a la Corporación Cápsula por su propia seguridad. Un par de días después, el bebé Trunks va con su madre a entregarle el control remoto a Krilin y luego se dirigen a la Atalaya de Kami mientras Vegeta y Trunks del Futuro Alternativo pelean contra Cell. Después de que Son Gohan derrotó a Cell, Trunks ha aprendiendo a caminar y Vegeta comienza a desempeñar un papel más activo en la crianza de Trunks, habiendo llegado a aceptarlo como su hijo después de haber experimentado su trágica pérdida cuando Cell mató a Trunks del Futuro Alternativo en los Juegos de Cell.",
        "transformations": [
          {
            "id": 0,
            "image": "https://apidragonball.vercel.app/static/images/sagaz/Trunks_Super_Saiyan.png",
            "description": "En el segundo episodio en que apareció, Trunks se transformó sin mucha dificultad en Super Saiyajin y así demostró ser superior a Mecha Freezer y su padre, el Rey Cooler, quienes fueron despedazados en segundos."
          },
          {
            "id": 1,
            "image": "https://apidragonball.vercel.app/static/images/sagaz/Trunks_Super_Saiyan2",
            "description": "Esta forma la alcanzó exclusivamente en Dragon Ball Super, luego de que regresara a la línea del tiempo canon, en donde pelea contra Goku en su forma de Super Saiyajin 3. En el anime pierde de manera contundente, pero en el manga ocurre algo muy distinto. "
          },
          {
            "id": 2,
            "image": "https://apidragonball.vercel.app/static/images/sagaz/Trunks_Super_Saiyan2_Superior.png",
            "description": "En el manga de Dragon Ball Super Trunks se transforma en Super Saiyajin 2, pero al darse cuenta que el SSJ3 es superior, decide usar toda su fuerza. Ahí incrementa sus poderes al grado de que Vegeta asegura que son similares a los de Kakarotto."
          },
          {
            "id": 3,
            "image": "https://apidragonball.vercel.app/static/images/sagaz/Trunks_Super_Saiyan3.png",
            "description": "Esta transformación sólo apareció en el anime spin off promocional Dragon Ball Heroes, en donde todos los saiyajin alcanzan niveles de poder muy elevados, con el objetivo de lanzar cartas que incrementen los decks."
          },
          {
            "id": 4,
            "image": "https://apidragonball.vercel.app/static/images/sagaz/Trunks_Super_Saiyan_dios.png",
            "description": "En el anime promocional que estrena un episodio mensual, Super Dragon Ball Heroes, el héroe del tiempo puede liberar el poder de los dioses. Su cabello largo se torna completamente rojo, al igual que sus pupilas."
          }
        ]
      },
      {
        "id": "667afa84f45fc2c137a595bf",
        "name": "Videl",
        "genre": "Femenino",
        "race": "Humana",
        "image": "https://apidragonball.vercel.app/static/images/sagaz/Videl.png",
        "planet": "Tierra",
        "description": "Anteriormente a Dragon Ball Z, Videl participa en la categoría infantil del 24º Torneo de Artes Marciales; donde queda campeona a la edad de 7 años. Preparatoria Estrella Naranja Videl aparece por primera vez en el Episodio 200 del Anime de Dragon Ball Z y en el episodio 421 del Tomo 36 del Manga. Su primera aparición es cuando Gohan se transforma en Super Saiyajin para detener a unos delincuentes en Ciudad Satán y luego lo encuentra des-transformado cerca del lugar de los hechos, empezando a sospechar que Gohan es el Guerrero Dorado.",
        "biography": "En una clase, la Policía llama a Videl para que la ayude a combatir el crimen. Gohan, pensando que puede estar en peligro, se disfraza del Gran Saiyaman para ayudarla, aunque Videl podía sola contra los delincuentes. El Gran Saiyaman la salva de un hombre armado, y luego ve las poses que el héroe hace y les parece ridículas. Luego el Gran Saiyaman comete el gran error de llamarla Videl, por lo que Videl confirma sus sospechas y descubre que Gohan es en realidad el Gran Saiyaman. También descubre que Gohan puede volar, y luego dice que no es un truco. Inmediatamente después de haberlo desenmascarado, Videl lo chantajea pidiéndole que le enseñe a volar y que participe en el Torneo de Artes Marciales Nº25, ya que si no lo hace les dirá a todos su identidad secreta. Gohan no tiene más remedio que aceptar la propuesta de Videl. Al día siguiente al acuerdo, la misma Videl va a la casa de Gohan a tomar sus clases de vuelo, pero primero debe aprender lo que es la energía. Gohan se sorprende de lo rápido que Videl aprende como controlar su energía, y dice que se nota que Videl ha entrenado Artes Marciales. También logra levitar un poco, pero pese a las palabras de Gohan, Videl decide volver mañana. Gohan le aconseja que se corte el cabello, ya que es más cómodo para pelear. Al día siguiente, una nueva Videl llega a la residencia de Gohan con el cabello corto. Esta aparece mostrándole a Gohan que ya puede levitar mucho más que el día anterior. Videl dice que vendrá todos los días hasta que pueda volar como Goten, ya que este volaba mucho más rápido que ella. También le pide a Gohan que mantenga esto en secreto, ya que quiere darle una sorpresa a su padre. Durante este período de entrenamiento, ambos comienzan a enamorarse, aunque siempre es ligeramente negado por los dos. Luego de 10 días, Videl ya aprendió a volar rápidamente, permitiendo así que Gohan pueda entrenar con Goten. También se le muestra entrenando en su casa días antes del Gran Torneo. Mientras Mr. Satán habla con la prensa, Videl se siente incómoda y quiere irse, y cuando un periodista trata de hablarle, Videl le dice que lo deje en paz. Ella luego se encuentra con Gohan, y va a la fila para golpear la Máquina para golpes. Ella se queda sorprendida de la fuerza de los Guerreros Z, y se sorprende más cuando Vegeta rompe la Máquina. Ella observa los combates de Goten y Trunks y se queda muy sorprendida por la fuerza que han adquirido. También observa el combate final y se sorprende cuando utilizan Técnicas de Ki, y aún más cuando se transforman en Super Saiyajin. También se sorprende de la facilidad con la que Trunks venció a Mr. Satán. En el sorteo, saca el número 5, luego de que Spopovich saque el número 6. En el combate, Videl es mucha más fuerte que Spopovich, pero este lograba recuperarse de cada golpe. Es entonces cuando Videl comienza a cansarse, pero aún así le ataca con el Ataque de Videl. Videl se sorprende de la resistencia y se cansa aún más con el ataque anterior. Ahora, una Videl cansada recibe una paliza de su adversario, que la golpea e intenta sacarla del Tatami; pero Videl logra volar antes de tocar el suelo y continúan su combate. A pesar de que Gohan está feliz con las grandes técnicas de Videl, Goku menciona que hubiera sido mejor si no hubiera volado. Con sus últimos esfuerzos, Videl logra desnucar a su contrincante, pero se queda sorprendida cuando su propio rival se acomoda el cuello. Spopovich contraataca y la cara de Videl queda llena de sangre, así que vuela para evitar ser alcanzada por su oponente. Todos se sorprenden cuando descubren que Spopovich también puede volar y aún más cuando daña a Videl con un Kiai. Aunque Videl no tiene forma de ganar el combate, no quiere rendirse, por lo que recibe una brutal paliza de Spopovitch. Es entonces cuando Gohan empieza a enojarse y se transforma en un Super Saiyajin. Videl comienza a ser golpeada de una forma cada vez más brutal, hasta que Yamu aparece y le dice que deje de jugar con ella y que acabe el combate. Spopovitch razona y agarra de una pierna a Videl y la lanza fuera del Ring. Gohan se calma y vuelve a su estado normal, y se apresura para ir a socorrer a Videl. Goku utiliza el Shunkan Ido para ir con Karin y traer unas Semillas del Ermitaño, mientras Mr. Satán se entera de que su hija fue brutalmente derrotada. En el hospital, Videl le dice a Gohan que derrote a Spopovich, y este se lo promete y se despide; mientras Mr. Satán desaprueba la relación que están teniendo Gohan y Videl. Momentos después, Gohan vuelve a reaparecer con las Semillas del Ermitaño, y a pesar de las advertencias de los médicos y su propio padre, Videl confía en Gohan y come la Semilla. Luego de recuperarse, observa como Gohan se transforma en Super Saiyajin 2, y luego descubre (junto con Eliza y Shapner) que el era el Guerrero Dorado. Más tarde observa como Yamu y Spopovich le roban la energía y escapan con ella. Videl intenta socorrer a Gohan, quien se encontraba inconsciente, mientras Goku y los demás se iban junto a Kaio Shin.",
        "transformations": [
          {
            "Sin": "Transformaciones"
          }
        ]
      }
    ];

  }

  showDescription(character: any) {
    alert(character.description);
  }
}
