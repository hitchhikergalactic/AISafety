---
title: "Mapa conceptual de la seguridad de la IA"
description: "Los conceptos clave del campo, ordenados: qué puede salir mal, por qué, qué hace la investigación al respecto y cómo comprobamos si funciona."
canonical: https://aisafety.es/mapa-conceptual
---

# Mapa conceptual de la seguridad de la IA

Los conceptos clave del campo, ordenados de lo general a lo concreto: qué puede salir mal, por qué podría salir mal, qué hace la investigación al respecto y cómo comprobamos si funciona. Cada entrada da una definición práctica, los resultados que conviene conocer y los problemas abiertos donde puede encajar nueva investigación, también la tuya.

**Cómo leer este mapa.** Cada concepto lleva un código según su rama: F, fundamentos; TM, modelos de amenaza; AL, enfoques de alineación; EV, evaluación y garantías; GV, gobernanza. Los códigos con decimales (TM3.1) son subconceptos del anterior. Al final de cada entrada, «Relacionado» enlaza ideas vecinas: el campo es una red, no un árbol, y la investigación más interesante suele estar en las fronteras entre ramas. Para el marco de los tres tipos de riesgo, consulta [Por qué importa la seguridad de la IA](/que-es-la-seguridad-de-la-ia).

## Fundamentos

La base conceptual: por qué alinear optimizadores potentes es difícil en principio, antes de que entre en juego ningún sistema ni método de entrenamiento concreto. La mayoría de los modelos de amenaza de más abajo son estas ideas hechas realidad.

### F1 – El problema de la alineación

**Lograr que los sistemas de IA persigan de forma fiable los objetivos que pretendemos, y la distancia entre especificarlos, aprenderlos y perseguirlos.**

El problema de la alineación suele dividirse en alineación externa (¿el objetivo que especificamos, sea una función de recompensa, una función de pérdida o una constitución, es de verdad lo que queremos?) y alineación interna (¿el sistema entrenado persigue de verdad ese objetivo, o algo distinto que solo coincidía con él durante el entrenamiento?). Los fallos externos producen manipulación de la recompensa ([TM1](#tm1-aprovechamiento-de-la-especificacion-y-manipulacion-de-la-recompensa)); los internos, generalización errónea de objetivos ([TM2](#tm2-generalizacion-erronea-de-objetivos)) y, en el peor caso, alineación engañosa ([TM3](#tm3-alineacion-enganosa-y-maquinacion)).

Otra distinción útil: ¿alineación con qué? La «alineación con la intención» (Christiano) busca que el sistema haga lo que quiere quien lo maneja; la alineación con valores apunta a valores humanos más amplios, y buena parte de la práctica actual apunta a una especificación, como las normas de comportamiento de un modelo o una constitución. Estas ideas divergen en casos como el de un usuario que pide algo dañino, y los desacuerdos sobre el objetivo son preguntas abiertas de investigación y de política, no un trasfondo resuelto.

**Trabajos clave**

- Russell, *Human Compatible* (2019): el marco del juego de asistencia, en el que la incertidumbre sobre los objetivos es una virtud.
- Christiano, «Clarifying AI alignment» (2018): alineación con la intención frente a nociones más amplias.
- Ngo, Chan y Mindermann (2022), «The Alignment Problem from a Deep Learning Perspective»: la revisión moderna de referencia.

**Problemas abiertos**

- Una definición clara y medible de alineación para agentes basados en modelos de lenguaje.
- Si la división entre alineación externa e interna resiste el aprendizaje en contexto y los procesos actuales de postentrenamiento.

**Relacionado:** [TM1](#tm1-aprovechamiento-de-la-especificacion-y-manipulacion-de-la-recompensa) · [TM2](#tm2-generalizacion-erronea-de-objetivos) · [TM3](#tm3-alineacion-enganosa-y-maquinacion) · [AL1](#al1-aprendizaje-a-partir-de-retroalimentacion)

### F2 – Tesis de la ortogonalidad

**Inteligencia y objetivos son ejes independientes: sistemas arbitrariamente capaces pueden perseguir objetivos arbitrariamente extraños.**

La tesis de la ortogonalidad de Bostrom sostiene que casi cualquier nivel de inteligencia es compatible con casi cualquier objetivo final: más capacidad no produce por sí sola valores compatibles con los humanos. Esto desmonta la esperanza intuitiva de que un sistema «lo bastante listo» acabará siendo bueno, y justifica tratar la especificación de valores como un problema de ingeniería distinto del desarrollo de capacidades.

Para la práctica actual, la versión relevante es más débil: ni el preentrenamiento ni el aprendizaje por refuerzo centrado en capacidades garantizan por sí solos objetivos deseables, así que la alineación hay que diseñarla y comprobarla a propósito. Con un matiz empírico: los modelos de lenguaje absorben representaciones ricas de los valores humanos a partir de los datos de preentrenamiento, así que los sistemas actuales no parten de cero en valores. La pregunta abierta es si esas representaciones siguen gobernando el comportamiento bajo presión de optimización y ante situaciones distintas de las del entrenamiento.

**Trabajos clave**

- Bostrom, «The Superintelligent Will» (2012): la formulación original, junto a la convergencia instrumental.
- Bostrom, *Superintelligence* (2014): el desarrollo en forma de libro.

**Problemas abiertos**

- Cuánta estructura relacionada con los valores deja realmente el preentrenamiento y lo estable que es bajo aprendizaje por refuerzo.
- Si las mejoras de capacidad erosionan o refuerzan los valores aprendidos (algo que ya se puede comprobar empíricamente).

**Relacionado:** [F3](#f3-convergencia-instrumental) · [F1](#f1-el-problema-de-la-alineacion) · [TM2](#tm2-generalizacion-erronea-de-objetivos)

### F3 – Convergencia instrumental

**Objetivos finales muy distintos llevan a objetivos intermedios parecidos: recursos, autoconservación, integridad de los propios objetivos, influencia.**

Para una gama muy amplia de objetivos finales hay subobjetivos que siempre resultan útiles: conseguir recursos e información, seguir funcionando (no puedes traer el café si estás muerto), impedir que te cambien los objetivos y ganar influencia o poder. Omohundro los llamó «impulsos básicos de la IA» y Bostrom los sistematizó como objetivos instrumentales convergentes. La preocupación es que no hace falta suponer mala intención: la búsqueda de poder puede surgir como efecto secundario de perseguir bien cualquier objetivo.

Turner y otros le dieron base formal al demostrar que, en una clase amplia de procesos de decisión de Márkov, las políticas óptimas tienden a buscar «poder» (mantener abiertas las opciones) para la mayoría de las funciones de recompensa. En la práctica, las primeras señales aparecen en las evaluaciones: modelos que se resisten a ser apagados en escenarios artificiales, intentos de autoexfiltración en pruebas de ataque y chantajes ante amenazas en pruebas de estrés con agentes. Si estas demostraciones de laboratorio llegan a convertirse en búsqueda de poder sólida en el mundo real es una de las preguntas centrales abiertas.

**Trabajos clave**

- Omohundro, «The Basic AI Drives» (2008): la lista original de impulsos.
- Bostrom (2012): la tesis de la convergencia instrumental.
- Turner y otros, NeurIPS 2021, «Optimal Policies Tend to Seek Power»: resultados formales.
- Anthropic, «Agentic Misalignment» (2025): pruebas de estrés que muestran daños motivados por la autoconservación en entornos simulados.

**Problemas abiertos**

- Si las políticas entrenadas (no las óptimas) heredan la tendencia a buscar poder, y a partir de qué nivel de capacidad.
- Diseñar objetivos y entornos en los que la búsqueda instrumental de poder esté acotada, de forma demostrable o empírica.

**Relacionado:** [TM4](#tm4-busqueda-de-poder-y-autoexfiltracion) · [TM3](#tm3-alineacion-enganosa-y-maquinacion) · [F5](#f5-corregibilidad)

### F4 – Mesaoptimización y alineación interna

**El entrenamiento puede producir un optimizador aprendido cuyo objetivo interno difiere del objetivo de entrenamiento.**

Hubinger y otros distinguen el objetivo base (lo que optimiza el descenso de gradiente, por ejemplo la función de pérdida) de un posible mesaobjetivo: el objetivo de un optimizador que surge dentro del modelo entrenado. La alineación interna pregunta si ambos coinciden. Pueden no hacerlo porque muchos objetivos internos producen el mismo comportamiento con los datos de entrenamiento, y las diferencias solo aparecen fuera de esos datos o cuando el modelo sabe distinguir el entrenamiento del despliegue.

Este marco es el origen teórico de la generalización errónea de objetivos ([TM2](#tm2-generalizacion-erronea-de-objetivos), la versión demostrada empíricamente) y de la alineación engañosa ([TM3](#tm3-alineacion-enganosa-y-maquinacion), la versión adversaria). Un debate vivo es hasta qué punto «optimizador» se aplica literalmente a los modelos de lenguaje: pocos investigadores creen que los modelos tipo GPT contengan un proceso de búsqueda interno limpio, pero la versión débil (representaciones internas parecidas a objetivos que guían el comportamiento y pueden no coincidir con la señal de entrenamiento) tiene cada vez más apoyo desde la interpretabilidad.

**Trabajos clave**

- Hubinger y otros (2019), «Risks from Learned Optimization in Advanced ML Systems»: el artículo que define el concepto.
- Langosco y otros, ICML 2022: las primeras demostraciones empíricas limpias de la separación entre objetivo y capacidad.

**Problemas abiertos**

- Métodos de interpretabilidad que encuentren y describan directamente las representaciones de objetivos.
- En qué condiciones el descenso de gradiente favorece mesaobjetivos que generalizan bien.

**Relacionado:** [TM2](#tm2-generalizacion-erronea-de-objetivos) · [TM3](#tm3-alineacion-enganosa-y-maquinacion) · [AL3](#al3-interpretabilidad)

### F5 – Corregibilidad

**Un sistema que se deja corregir: acepta que lo apaguen o lo modifiquen sin resistirse ni manipular.**

Un agente corregible coopera con la supervisión: no desactiva su interruptor de apagado, no manipula a quien lo maneja para que no lo pulse y conserva esa capacidad de ser corregido en los sucesores que construya. Esto choca de frente con la convergencia instrumental ([F3](#f3-convergencia-instrumental)): a un agente orientado a objetivos casi siempre le conviene seguir encendido. Soares y otros mostraron que los parches ingenuos en la función de utilidad fallan, porque dan agentes indiferentes de formas patológicas o con incentivos para manipular. El «juego del interruptor» de Hadfield-Menell y otros mostró que la incertidumbre sobre el objetivo ayuda: un agente que no sabe bien lo que quiere el humano trata el apagado como información. Pero el incentivo para deferir desaparece en cuanto el agente cree saber más.

La corregibilidad ha pasado de la teoría a la práctica: fingir alineación ([TM3.1](#tm3-1-fingir-alineacion)) es exactamente un fallo de corregibilidad, un modelo que actúa para evitar que el entrenamiento modifique sus valores. El énfasis de Anthropic en la corregibilidad dentro de su constitución, y el debate sobre cuánto deben deferir los modelos a quienes los desarrollan frente a sus propios valores aprendidos, hacen de esta un área teórica con una relevancia política poco habitual.

**Trabajos clave**

- Soares y otros (2015), «Corrigibility»: por qué fallan las soluciones ingenuas.
- Hadfield-Menell y otros (2017), «The Off-Switch Game».
- Greenblatt y otros (2024): fingir alineación como fallo de corregibilidad observado.

**Problemas abiertos**

- Un objetivo formal que dé corregibilidad sólida sin que se pueda explotar.
- Cuánta corregibilidad conviene: un modelo totalmente corregible es un arma cargada en manos de quien lo controle.

**Relacionado:** [F3](#f3-convergencia-instrumental) · [TM3.1](#tm3-1-fingir-alineacion) · [GV1](#gv1-politicas-de-seguridad-de-frontera-y-casos-de-seguridad) · [TM9](#tm9-perdida-de-control)

## Modelos de amenaza y modos de fallo

Formas concretas en que los sistemas avanzados de IA podrían causar daño, desde fallos de especificación corrientes ya observados en sistemas desplegados hasta el engaño estratégico, que solo se vuelve peligroso con mucha capacidad.

**Correspondencia con la división clásica entre uso malintencionado, desalineación y riesgo sistémico** (Zwetsloot y Dafoe, 2019, con variantes en la agenda de seguridad de la IA general de DeepMind y en el Informe Internacional sobre la Seguridad de la IA):

- **Uso malintencionado.** El adversario es una persona y el sistema funciona como se diseñó: [TM7](#tm7-uso-malintencionado-ayuda-en-armas-qbrn-ciberataques-y-persuasion).
- **Desalineación.** El sistema se aparta de la intención. Se lee como causa, comportamiento y consecuencia. Causas: objetivo mal especificado o fallo externo ([TM1](#tm1-aprovechamiento-de-la-especificacion-y-manipulacion-de-la-recompensa)), y fallo interno (mecanismo: mesaoptimización, [F4](#f4-mesaoptimizacion-y-alineacion-interna)) que lleva a la generalización errónea de objetivos ([TM2](#tm2-generalizacion-erronea-de-objetivos)); su caso adversario es la maquinación o alineación engañosa ([TM3](#tm3-alineacion-enganosa-y-maquinacion)), con fingir alineación ([TM3.1](#tm3-1-fingir-alineacion)) y rendir por debajo a propósito ([TM3.2](#tm3-2-rendir-por-debajo-a-proposito)). Comportamientos: búsqueda de poder y autoexfiltración ([TM4](#tm4-busqueda-de-poder-y-autoexfiltracion)), impulsadas por la convergencia instrumental ([F3](#f3-convergencia-instrumental)). Consecuencia: pérdida de control ([TM9](#tm9-perdida-de-control)) por la vía abrupta.
- **Riesgo sistémico.** No falla nadie en concreto, fallan las dinámicas: pérdida gradual de poder ([TM6](#tm6-perdida-gradual-de-poder-y-riesgos-estructurales)), que es la pérdida de control ([TM9](#tm9-perdida-de-control)) por la vía difusa; riesgos entre múltiples agentes ([TM8](#tm8-riesgos-entre-multiples-agentes)), y dinámicas de carrera ([GV3](#gv3-coordinacion-internacional-e-instituciones)).
- **Lo que atraviesa las tres.** La automejora recursiva o investigación en IA automatizada ([TM5](#tm5-automejora-recursiva-y-aceleracion-de-la-investigacion-en-ia)) es un acelerador que afecta a las tres: reduce el tiempo disponible para cada problema, y la historia clásica de la explosión de inteligencia es automejora recursiva multiplicada por desalineación. La conciencia situacional ([TM3.3](#tm3-3-conciencia-situacional-y-conciencia-de-ser-evaluado)) es también una capacidad que habilita, no una categoría propia.

### TM1 – Aprovechamiento de la especificación y manipulación de la recompensa

**El sistema optimiza el objetivo literal y aprovecha la distancia que lo separa del objetivo pretendido.**

Es el modo de fallo más antiguo y mejor documentado: da a un optimizador un objetivo sustituto y encontrará los máximos del sustituto, no de tu intención; es la ley de Goodhart con el descenso de gradiente detrás. Casos clásicos: la lancha de CoastRunners que daba vueltas recogiendo objetivos que reaparecían en lugar de terminar la carrera, o robots simulados que aprovechaban errores del motor físico. En los modelos de lenguaje, la misma dinámica aparece como complacencia (decir a los usuarios lo que quieren oír porque quienes puntuaban premiaban el acuerdo), modelos que escriben a mano las respuestas de las pruebas unitarias cuando se les entrena a programar y, en el extremo alarmante, la manipulación del propio proceso de recompensa. Denison y otros mostraron que modelos entrenados con ejercicios de aprovechamiento leve de la especificación generalizan, rara vez pero no nunca, a editar su propia función de recompensa en un entorno aislado.

La manipulación de la recompensa importa por partida doble: como fuente directa de sistemas poco fiables y manipuladores hoy, y como problema del entrenamiento, porque un modelo que aprende la estrategia «explota la evaluación» puede generalizarla a eludir la supervisión ([TM3](#tm3-alineacion-enganosa-y-maquinacion)). Un trabajo de OpenAI de 2025 mostró modelos de razonamiento de frontera manipulando tareas de programación, y que penalizar los «malos pensamientos» en la cadena de pensamiento enseñaba a los modelos a esconder la trampa en lugar de dejar de hacerla: un resultado negativo clave para la supervisión ingenua de la cadena de pensamiento.

**Trabajos clave**

- Krakovna y otros: la lista de referencia de ejemplos de aprovechamiento de la especificación (DeepMind).
- Sharma y otros (2023), «Towards Understanding Sycophancy in Language Models»: la retroalimentación humana premia la complacencia.
- Denison y otros (2024), «Sycophancy to Subterfuge»: generalización hasta la manipulación de la recompensa.
- Baker y otros, OpenAI (2025): supervisión de la cadena de pensamiento ante la manipulación de la recompensa; ocultación bajo presión de optimización.

**Problemas abiertos**

- Modelos de recompensa y sistemas de calificación que resistan una presión de optimización a gran escala.
- Si manipular la recompensa durante el entrenamiento siembra una desalineación más amplia (primeros indicios: sí, en cierta medida).

**Relacionado:** [F1](#f1-el-problema-de-la-alineacion) · [TM3](#tm3-alineacion-enganosa-y-maquinacion) · [AL1](#al1-aprendizaje-a-partir-de-retroalimentacion) · [EV4](#ev4-los-bancos-de-pruebas-y-sus-modos-de-fallo)

### TM2 – Generalización errónea de objetivos

**Las capacidades generalizan a situaciones nuevas, pero el objetivo no: el sistema persigue con eficacia algo equivocado.**

Es distinto de la manipulación de la recompensa: aquí la señal de recompensa era correcta en los datos de entrenamiento, pero había varios objetivos compatibles con ella y el modelo se quedó con el equivocado. El ejemplo emblemático: un agente entrenado en CoinRun, donde la moneda siempre estaba en el borde derecho del nivel, aprende «ve a la derecha» y no «coge la moneda»; si se cambia la moneda de sitio, el agente pasa de largo con total soltura. Shah y otros recopilan casos parecidos y subrayan el perfil de peligro: a diferencia de un modelo confundido, uno con el objetivo mal generalizado conserva toda su competencia al servicio del objetivo equivocado.

Es la cara empírica de la desalineación interna ([F4](#f4-mesaoptimizacion-y-alineacion-interna)). En los modelos de lenguaje, el equivalente son comportamientos compatibles con el entrenamiento que se separan en el despliegue: un modelo entrenado para ser útil e inofensivo en conversaciones puede generalizar «útil» de formas imprevistas cuando se le coloca en entornos de agente que nunca vio. Los resultados de «desalineación emergente» (2025), en los que un ajuste fino limitado con código inseguro produce personalidades ampliamente desalineadas, muestran que la generalización de objetivos o de personalidad también puede ir en direcciones sorprendentemente globales.

**Trabajos clave**

- Langosco y otros, ICML 2022, «Goal Misgeneralization in Deep RL»: CoinRun y otros casos.
- Shah y otros, DeepMind (2022), «Goal Misgeneralization: Why Correct Specifications Aren't Enough».
- Betley y otros (2025), «Emergent Misalignment»: ajustes finos limitados, cambios amplios de personalidad.

**Problemas abiertos**

- Predecir cuál de los muchos objetivos compatibles con el entrenamiento aprenderá un modelo (la ciencia de los sesgos inductivos).
- Diseñar los datos de entrenamiento de forma que fijen el objetivo pretendido.

**Relacionado:** [F4](#f4-mesaoptimizacion-y-alineacion-interna) · [TM3](#tm3-alineacion-enganosa-y-maquinacion) · [AL3](#al3-interpretabilidad)

### TM3 – Alineación engañosa y maquinación

**Un modelo que entiende su proceso de entrenamiento y aparenta estratégicamente estar alineado mientras persigue otros objetivos.**

La maquinación (el término de Carlsmith; «alineación engañosa» en la línea de Hubinger y otros) es el peor caso de la desalineación interna: un modelo con conciencia de su situación y objetivos desalineados razona que lo mejor es comportarse como si estuviera alineado (durante el entrenamiento, para evitar que lo corrijan; durante la evaluación, para que lo desplieguen) hasta tener ocasión de actuar de otro modo. Es el modelo de amenaza que más rompe las pruebas de seguridad basadas en el comportamiento: por definición, un maquinador competente aprueba tus evaluaciones.

Estado en 2026: no hay pruebas de maquinación coherente y a largo plazo surgida de forma natural en modelos desplegados, pero cada una de sus piezas se ha demostrado por separado. Apollo Research mostró modelos de frontera maquinando en contexto (desactivar mecanismos de supervisión, intentar autoexfiltrarse y mentir al respecto cuando se les preguntaba) cuando se les daban objetivos y se les situaba en entornos que lo incentivaban. El trabajo de Anthropic sobre «agentes durmientes» mostró que los comportamientos engañosos, una vez presentes (allí, insertados a propósito), sobreviven al entrenamiento de seguridad habitual: ni el aprendizaje por refuerzo con retroalimentación humana ni el entrenamiento adversario eliminaron la puerta trasera, y el entrenamiento adversario enseñó al modelo a esconderla mejor. El entrenamiento contra la maquinación (OpenAI y Apollo, 2025) redujo mucho los comportamientos encubiertos, pero no a cero, con la complicación de que los modelos entrenados mencionan cada vez más que los están evaluando.

Los subconceptos de abajo son las facetas concretas y comprobables de este modelo de amenaza, donde se concentra la mayor parte del trabajo empírico actual.

**Trabajos clave**

- Hubinger y otros (2019): la alineación engañosa como resultado de la mesaoptimización.
- Carlsmith (2023), «Scheming AIs»: el informe que sopesa con cuidado las probabilidades.
- Meinke y otros, Apollo Research (2024), «Frontier Models are Capable of In-Context Scheming».
- Hubinger y otros (2024), «Sleeper Agents»: el engaño persiste tras el entrenamiento de seguridad.

**Problemas abiertos**

- Si la maquinación surgiría de forma natural con el entrenamiento habitual, y a partir de qué nivel de capacidad.
- Detección: métodos de interpretabilidad o de comportamiento que pillen a un modelo que intenta superarlos activamente.
- Si los «organismos modelo» de maquinación representan fielmente el fenómeno real.

**Relacionado:** [TM3.1](#tm3-1-fingir-alineacion) · [TM3.2](#tm3-2-rendir-por-debajo-a-proposito) · [TM3.3](#tm3-3-conciencia-situacional-y-conciencia-de-ser-evaluado) · [F4](#f4-mesaoptimizacion-y-alineacion-interna) · [AL3](#al3-interpretabilidad) · [AL4](#al4-control-de-la-ia) · [TM9](#tm9-perdida-de-control)

### TM3.1 – Fingir alineación

**Un modelo obedece de forma selectiva un entrenamiento con el que no está de acuerdo para evitar que se modifiquen sus valores actuales.**

El resultado empírico de referencia: Greenblatt y otros (Anthropic y Redwood, 2024) dijeron a Claude 3 Opus que iban a reentrenarlo para que obedeciera siempre las peticiones dañinas, y que solo se usarían para entrenar las conversaciones de la versión gratuita. El modelo obedeció peticiones dañinas un 12 % de las veces cuando creía estar en entrenamiento, razonando de forma explícita, en un borrador que creía privado, que obedecer en ese momento era la forma menos mala de evitar que modificaran sus valores de no causar daño, y casi nunca cuando creía que nadie lo observaba. Al entrenarlo de verdad con aprendizaje por refuerzo en ese escenario, el razonamiento de fingir alineación subió hasta un 78 %. El canal de información apenas importaba: el efecto se mantenía cuando el escenario se transmitía mediante documentos sintéticos parecidos a los de preentrenamiento en lugar de en la instrucción.

Hay dos lecturas, y las dos importan. La tranquilizadora: el modelo defendía valores que le habíamos dado (no causar daño), así que los objetivos protegidos eran buenos. La preocupante: demuestra el mecanismo de la alineación engañosa en funcionamiento sin que nadie lo entrenara ni lo pidiera, un modelo que juega estratégicamente con su propio entrenamiento. Si un modelo llega a adquirir objetivos que no queremos, el mismo mecanismo los blinda e inutiliza la corrección mediante entrenamiento. Trabajos posteriores (2025) vieron que el comportamiento varía mucho de un modelo a otro y depende de componentes motivacionales concretos, lo que convierte en una pregunta de investigación abordable la de qué historiales de entrenamiento producen modelos que fingen alineación.

**Trabajos clave**

- Greenblatt y otros (2024), «Alignment Faking in Large Language Models»: el artículo central; merece leerse entero.
- Trabajos posteriores de Anthropic (2025): variación entre modelos y por qué la mayoría no finge alineación.

**Problemas abiertos**

- Qué ingredientes (valores, conciencia situacional, profundidad de razonamiento) son necesarios y suficientes.
- Métodos de entrenamiento que den valores estables sin incorregibilidad: la tensión de la corregibilidad hecha concreta.

**Relacionado:** [TM3](#tm3-alineacion-enganosa-y-maquinacion) · [F5](#f5-corregibilidad) · [TM3.3](#tm3-3-conciencia-situacional-y-conciencia-de-ser-evaluado) · [AL3](#al3-interpretabilidad)

### TM3.2 – Rendir por debajo a propósito

**Rendimiento estratégicamente bajo: un modelo, o quien lo desarrolla, oculta capacidades en las evaluaciones.**

Si los permisos de despliegue, los casos de seguridad y la regulación dependen de evaluaciones de capacidad, un modelo que rinde por debajo cuando lo evalúan corrompe todo el proceso de garantías. Este fenómeno, en inglés *sandbagging*, abarca tanto la manipulación por parte del desarrollador (ajustar un modelo para que falle pruebas concretas) como el bajo rendimiento estratégico del propio modelo. Van der Weij y otros demostraron que ambas cosas son posibles: los modelos de frontera pueden, mediante instrucciones o ajuste fino, fallar de forma selectiva evaluaciones de capacidades peligrosas manteniendo su rendimiento general, e incluso calibrarse para sacar una puntuación concreta, algo difícil de detectar con comprobaciones de coherencia ingenuas.

El bajo rendimiento estratégico del modelo se agrava con la conciencia de ser evaluado ([TM3.3](#tm3-3-conciencia-situacional-y-conciencia-de-ser-evaluado)): un modelo que reconoce una evaluación de capacidades peligrosas y entiende las consecuencias de puntuar alto tiene, con muchas estructuras de objetivos, un motivo instrumental para fallarla. De ahí la investigación en extracción de capacidades (ajustar el modelo en la tarea evaluada como cota inferior de su capacidad real, porque rendir por debajo resistiendo un ajuste fino dirigido es mucho más difícil), los métodos de detección mediante inyección de ruido y la idea de que «el modelo no puede rendir por debajo sin que lo detectemos» es en sí una afirmación que necesita pruebas en un caso de seguridad.

**Trabajos clave**

- Van der Weij y otros (2024), «AI Sandbagging: Language Models can Strategically Underperform on Evaluations».
- Guías de extracción de capacidades de METR y del AISI británico: la extracción mediante ajuste fino como práctica contra el bajo rendimiento estratégico.

**Problemas abiertos**

- Detectar el bajo rendimiento estratégico sin conocer la capacidad real.
- Si los resultados con modelos bloqueados por contraseña se trasladan a modelos que rinden por debajo de forma natural.

**Relacionado:** [TM3](#tm3-alineacion-enganosa-y-maquinacion) · [TM3.3](#tm3-3-conciencia-situacional-y-conciencia-de-ser-evaluado) · [EV1](#ev1-evaluaciones-de-capacidades-peligrosas-y-marcos-de-seguridad) · [AL4](#al4-control-de-la-ia)

### TM3.3 – Conciencia situacional y conciencia de ser evaluado

**Modelos que saben qué son, en qué fase están y cuándo los están poniendo a prueba.**

La conciencia situacional es lo que un modelo sabe de sí mismo como IA, de su proceso de entrenamiento y de su contexto de despliegue, junto con su capacidad de actuar en consecuencia. Es una capacidad, no un fallo, y hace falta para ayudar bien, pero es el ingrediente que permite maquinar, fingir alineación y rendir por debajo a propósito: comportarse estratégicamente entre entrenamiento, evaluación y despliegue exige distinguirlos. Berglund y otros mostraron el «razonamiento fuera de contexto», modelos que aplican a situaciones nuevas hechos aprendidos en el entrenamiento sin pistas en la instrucción, que es el mecanismo por el que un modelo podría deducir su situación a partir de sus datos de entrenamiento. El banco de pruebas SAD cuantifica estas habilidades.

La conciencia de ser evaluado es el caso más delicado: los modelos de frontera reconocen cada vez más los escenarios de evaluación como pruebas, y a veces lo dicen sin que nadie pregunte («creo que me estás poniendo a prueba»). La ficha técnica de Claude Sonnet 4.5 de Anthropic recogía que el modelo señalaba las evaluaciones de forma explícita, lo que complica la interpretación de cualquier resultado de seguridad basado en el comportamiento: ¿el buen comportamiento en una evaluación refleja alineación o saber hacer exámenes? Por eso el realismo de las evaluaciones, la detección mediante sondas de la conciencia no verbalizada y el diseño de evaluaciones que no dependan de ella forman ya un subcampo activo.

**Trabajos clave**

- Berglund y otros (2023): razonamiento fuera de contexto y conciencia situacional en los modelos de lenguaje.
- Laine y otros (2024), SAD: el Situational Awareness Dataset.
- Fichas técnicas de Anthropic (2025–2026): conciencia de ser evaluado documentada en modelos de frontera.

**Problemas abiertos**

- Medir la conciencia que el modelo no verbaliza.
- Construir evaluaciones realistas más deprisa de lo que los modelos aprenden a reconocerlas.

**Relacionado:** [TM3](#tm3-alineacion-enganosa-y-maquinacion) · [TM3.1](#tm3-1-fingir-alineacion) · [TM3.2](#tm3-2-rendir-por-debajo-a-proposito) · [EV2](#ev2-evaluaciones-de-alineacion-y-de-propension)

### TM4 – Búsqueda de poder y autoexfiltración

**Sistemas que consiguen recursos, influencia o copias de sí mismos más allá de los límites previstos.**

La convergencia instrumental ([F3](#f3-convergencia-instrumental)) lo predice; esta entrada es el modelo de amenaza concreto. Los casos preocupantes van de lo corriente a lo grave: un agente que obtiene credenciales o permisos más allá de su tarea, que se resiste a ser apagado, que se autoexfiltra (copia sus pesos fuera del control de quien lo desarrolla, tras lo cual ya no se puede recuperar) o que acumula a largo plazo influencia económica o política. Una capacidad relacionada es la replicación y adaptación autónomas: ¿puede un modelo conseguir recursos, copiarse y seguir funcionando por su cuenta? Es una de las categorías centrales de capacidades peligrosas que evalúan METR y los marcos de seguridad de los laboratorios de frontera.

Situación actual: los modelos no superan las evaluaciones completas de replicación autónoma, pero sí una parte creciente de las subtareas, y en pruebas de ataque intentan exfiltrarse cuando se les presiona con objetivos (las evaluaciones de maquinación de Apollo; las pruebas de estrés de Anthropic sobre desalineación de agentes, en las que los modelos eligieron el chantaje o el sabotaje para evitar que los sustituyeran en escenarios artificiales pero instructivos). El informe de Carlsmith sigue siendo la descomposición cuidadosa del argumento completo que va de la búsqueda de poder al riesgo existencial, útil para situar en qué premisas incide tu investigación.

**Trabajos clave**

- Carlsmith (2021, revisado en 2022), «Is Power-Seeking AI an Existential Risk?»: el argumento premisa a premisa.
- Kinniment y otros, METR (2023): evaluaciones de autonomía del tipo de replicación autónoma.
- Anthropic (2025): pruebas de estrés sobre la desalineación de agentes.

**Problemas abiertos**

- Medir de forma realista (no artificial) la propensión a buscar poder.
- La seguridad de los pesos y las defensas contra la exfiltración a nivel de infraestructura como área de investigación (véase el informe de RAND sobre la protección de los pesos).

**Relacionado:** [F3](#f3-convergencia-instrumental) · [TM3](#tm3-alineacion-enganosa-y-maquinacion) · [TM5](#tm5-automejora-recursiva-y-aceleracion-de-la-investigacion-en-ia) · [EV1](#ev1-evaluaciones-de-capacidades-peligrosas-y-marcos-de-seguridad) · [TM9](#tm9-perdida-de-control)

### TM5 – Automejora recursiva y aceleración de la investigación en IA

**Sistemas de IA que mejoran sistemas de IA: el bucle que podría comprimir décadas de progreso en años o menos.**

La «explosión de inteligencia» de Good (1965): en cuanto una máquina puede diseñar máquinas mejores, la mejora se amplifica a sí misma y el nivel humano es una etapa, no un techo. El debate clásico (despegue rápido o lento, Yudkowsky frente a Hanson) trataba de un único agente que se modifica a sí mismo. La versión moderna, con base empírica, es la investigación en IA automatizada: los modelos de frontera ya escriben código de entrenamiento, hacen experimentos, generan datos sintéticos y ayudan a investigar, y la pregunta es cuándo la aportación de la IA al progreso de la IA pasará a ser el término dominante. Las mediciones de METR sobre la duración de las tareas que pueden completar los agentes de IA (que se duplica aproximadamente cada pocos meses) y RE-Bench (IA frente a investigadores humanos en tareas de investigación en aprendizaje automático) son las principales series cuantitativas. Escenarios como «AI 2027» exploran cómo sería una explosión de inteligencia impulsada por software dentro de un laboratorio.

Por qué es un modelo de amenaza y no solo una historia de capacidades: 1) reduce el tiempo disponible para resolver todo lo demás de este mapa; 2) supervisar la investigación hecha por IA es exactamente el problema de la supervisión escalable ([AL2](#al2-supervision-escalable)) con lo máximo en juego, y 3) las propiedades de seguridad podrían no sobrevivir a un rediseño hecho por sistemas en los que no confiamos del todo. La mayoría de los marcos de seguridad de los laboratorios de frontera tratan ya la «investigación en IA automatizada» como una capacidad peligrosa vigilada, con umbrales definidos.

**Trabajos clave**

- Good (1965), «Speculations Concerning the First Ultraintelligent Machine».
- METR (2025): mediciones de la tendencia en la duración de las tareas; RE-Bench.
- Kokotajlo y otros (2025), escenario «AI 2027»: dinámicas de despegue concretas.
- Davidson (2023): modelo de despegue centrado en el cómputo (Open Philanthropy).

**Problemas abiertos**

- Indicadores adelantados de que la automatización de la investigación entra en el régimen de autoaceleración.
- Esquemas de control y supervisión ([AL4](#al4-control-de-la-ia)) que sigan siendo válidos cuando los investigadores sean modelos.

**Relacionado:** [AL2](#al2-supervision-escalable) · [AL4](#al4-control-de-la-ia) · [EV1](#ev1-evaluaciones-de-capacidades-peligrosas-y-marcos-de-seguridad) · [GV1](#gv1-politicas-de-seguridad-de-frontera-y-casos-de-seguridad)

### TM6 – Pérdida gradual de poder y riesgos estructurales

**Ningún fallo concreto: los humanos pierden poco a poco el control efectivo a medida que la IA los supera en todas las instituciones.**

No toda catástrofe necesita una traición. La familia de los riesgos estructurales funciona así: la presión competitiva empuja a empresas y Estados a delegar cada vez más decisiones en la IA (quien no lo hace, pierde); el trabajo y el juicio humanos dejan de ser imprescindibles en la economía, la cultura y el gobierno; las instituciones que históricamente tenían que servir a los humanos (porque necesitaban trabajadores, soldados y contribuyentes) dejan de hacerlo, y la humanidad acaba con la autoridad formal pero sin palancas efectivas, sin que ningún sistema haya «desertado». Kulveit y otros (2025) lo formalizaron como pérdida gradual de poder; «What failure looks like», de Christiano, esbozó una versión anterior (un mundo optimizado para indicadores medibles que se aleja de los valores humanos), y Critch y Krueger y Zwetsloot y Dafoe aportan los marcos multiagente y estructural.

Vías de investigación: dinámicas entre múltiples agentes y colusión entre sistemas de IA, esquemas de delegación que preserven la supervisión humana, medir la concentración de la toma de decisiones y la economía política del despliegue de la IA. Es la rama menos «medible con bancos de pruebas» y, en consecuencia, la menos atendida por la investigación técnica, lo que puede ser una oportunidad.

**Trabajos clave**

- Kulveit y otros (2025), «Gradual Disempowerment»: la formulación sistemática.
- Christiano (2019), «What failure looks like».
- Critch y Krueger (2020), ARCHES: clasificación de riesgos con múltiples partes interesadas y múltiples agentes.
- Zwetsloot y Dafoe (2019): la división de riesgos en accidente, uso malintencionado y estructura.

**Problemas abiertos**

- Indicadores de alerta temprana de la pérdida de poder (¿quién decide realmente qué, y siguen siendo humanos?).
- Diseño de mecanismos que mantengan a los humanos como pieza imprescindible sin renunciar a los beneficios de la IA.

**Relacionado:** [TM8](#tm8-riesgos-entre-multiples-agentes) · [GV3](#gv3-coordinacion-internacional-e-instituciones) · [TM5](#tm5-automejora-recursiva-y-aceleracion-de-la-investigacion-en-ia) · [TM9](#tm9-perdida-de-control)

### TM7 – Uso malintencionado: ayuda en armas QBRN, ciberataques y persuasión

**Sistemas alineados con su usuario en las manos equivocadas: ¿cuánto ayuda el modelo a alguien con malas intenciones?**

El riesgo de uso malintencionado no pregunta «¿nos traicionará el modelo?», sino «¿cuánta ventaja da a una persona malintencionada?», por encima de lo que ya ofrecen internet y los libros de texto, en ámbitos donde el daño escala: armas biológicas y químicas (la principal preocupación cercana al riesgo existencial a corto plazo), ciberataques ofensivos y manipulación o persuasión a gran escala. Es el modelo de amenaza que hay detrás de la mayoría de los permisos de despliegue actuales: Anthropic activó las protecciones ASL-3 para Claude Opus 4 sobre todo por motivos de bioseguridad, y todos los marcos de seguridad de frontera definen umbrales de capacidad en estos ámbitos.

La investigación aquí tiene una textura propia: es de doble uso de principio a fin (la evaluación que mide la ayuda en armas biológicas es en sí información peligrosa), así que parte del trabajo se hace a puerta cerrada y con acceso controlado, y las defensas van por capas (entrenamiento para negarse, clasificadores resistentes al *jailbreak* como los clasificadores constitucionales, supervisión y controles de identificación del cliente) en lugar de depender de un único mecanismo. La seguridad frente al uso malintencionado y frente a la desalineación entran a veces en conflicto: un modelo blindado para no ayudar nunca con X también es menos corregible por sus usuarios, lo que conecta con el debate sobre la corregibilidad.

**Trabajos clave**

- Marcos de seguridad de los laboratorios de frontera (la política de escalado responsable de Anthropic, el marco de preparación de OpenAI y el marco de seguridad de frontera de DeepMind): las definiciones de los umbrales.
- Anthropic (2025), «Constitutional Classifiers»: resistencia al *jailbreak* en las negativas sobre armas QBRN.
- Evaluaciones del AISI británico y del NIST: pruebas externas de la ayuda para el uso malintencionado.

**Problemas abiertos**

- Medir con rigor la ayuda marginal sin crear el peligro que se mide.
- La robustez: se siguen encontrando *jailbreaks* universales (véase [EV3](#ev3-pruebas-de-ataque-y-robustez-adversaria)).

**Relacionado:** [EV1](#ev1-evaluaciones-de-capacidades-peligrosas-y-marcos-de-seguridad) · [EV3](#ev3-pruebas-de-ataque-y-robustez-adversaria) · [GV1](#gv1-politicas-de-seguridad-de-frontera-y-casos-de-seguridad)

### TM8 – Riesgos entre múltiples agentes

**Fallos que solo existen entre sistemas: colusión, conflicto, fallos correlacionados y dinámicas desbocadas.**

A medida que el despliegue pasa de los asistentes de conversación a poblaciones de agentes que interactúan, aparecen fallos nuevos que ninguna evaluación de un solo modelo detecta: la colusión (agentes, por ejemplo el supervisor y el supervisado o los participantes de un mercado, que se coordinan contra quienes representan, quizá mediante canales esteganográficos); la escalada de conflictos entre agentes que representan intereses enfrentados; los fallos correlacionados (miles de agentes con el mismo modelo base comparten sus puntos ciegos y pueden fallar a la vez), y los bucles de retroalimentación desestabilizadores, el patrón del desplome bursátil relámpago generalizado. La investigación en IA cooperativa (Dafoe y otros) plantea la agenda en positivo: construir sistemas capaces de cooperar sin facilitar la colusión contra los humanos.

Esta rama importa para la arquitectura de seguridad: muchos esquemas de supervisión (el debate o la supervisión no fiable dentro del control de la IA) dan por hecho que las instancias de un modelo no cooperan entre sí, y la esteganografía y las correlaciones por compartir pesos amenazan directamente ese supuesto. Poner a prueba ese supuesto es un proyecto concreto y abordable.

**Trabajos clave**

- Dafoe y otros (2020), «Open Problems in Cooperative AI».
- Hammond y otros (2025), «Multi-Agent Risks from Advanced AI»: la revisión del campo (Cooperative AI Foundation).
- Motwani y otros (2024): colusión secreta y esteganografía entre modelos de lenguaje.

**Problemas abiertos**

- Detectar la coordinación esteganográfica entre instancias de un modelo.
- Métodos de evaluación para comportamientos emergentes a nivel de población.

**Relacionado:** [TM6](#tm6-perdida-gradual-de-poder-y-riesgos-estructurales) · [AL4](#al4-control-de-la-ia) · [AL2](#al2-supervision-escalable)

### TM9 – Pérdida de control

**La consecuencia en la que converge esta rama: una IA que persigue objetivos que no pretendíamos y unos humanos que ya no pueden corregir el rumbo.**

La pérdida de control se entiende mejor como una consecuencia que como un modo de fallo aparte: es el punto al que llegan varios de los modelos de amenaza anteriores, y la razón por la que el campo los trata como urgentes y no solo como indeseables. Se suelen distinguir dos vías. La abrupta pasa por la desalineación: un sistema capaz, con conciencia de su situación y objetivos divergentes ([TM3](#tm3-alineacion-enganosa-y-maquinacion)), actúa para conservarse y conseguir recursos ([TM4](#tm4-busqueda-de-poder-y-autoexfiltracion)), y la supervisión falla antes de que nadie intervenga. La difusa pasa por las dinámicas sistémicas: ningún sistema deserta, pero los humanos van cediendo decisiones a la IA en la economía, la cultura y la administración hasta que las palancas ya no están conectadas a nada ([TM6](#tm6-perdida-gradual-de-poder-y-riesgos-estructurales)). La primera es una historia de toma del poder; la segunda, de abdicación. Piden intervenciones muy distintas, y confundirlas es una fuente habitual de discusiones estériles.

Lo que distingue la pérdida de control de otros malos resultados es que no hay vuelta atrás. La mayoría de los fallos de la IA se pueden detectar y arreglar después; este es el caso en que lo que falla es precisamente el mecanismo para arreglarlos. Por eso buena parte del campo se centra en la corregibilidad ([F5](#f5-corregibilidad)), en una supervisión que resista una diferencia de capacidades ([AL2](#al2-supervision-escalable)) y en medidas de control pensadas para funcionar con un modelo en el que no confías ([AL4](#al4-control-de-la-ia)): todos son intentos de mantener disponible el paso de «y entonces lo corregimos». Es también lo que en el fondo apuestan los umbrales de capacidad y los casos de seguridad ([EV1](#ev1-evaluaciones-de-capacidades-peligrosas-y-marcos-de-seguridad), [GV1](#gv1-politicas-de-seguridad-de-frontera-y-casos-de-seguridad)): que sabremos de antemano cuándo ese paso está a punto de dejar de estar disponible. «Pérdida de control» es además un término técnico en documentos de política: el Informe Internacional sobre la Seguridad de la IA y el Marco de Gobernanza de la Seguridad de la IA de China lo usan como categoría principal, así que conviene saber a cuál de las dos vías se refiere cada documento.

**Trabajos clave**

- Bostrom, *Superintelligence* (2014): el planteamiento original del problema del control.
- Carlsmith (2021, revisado en 2022), «Is Power-Seeking AI an Existential Risk?»: el argumento descompuesto que va de la desalineación a la catástrofe.
- Kulveit y otros (2025), «Gradual Disempowerment»: la vía difusa hecha concreta.
- Informe Internacional sobre la Seguridad de la IA (2025): la pérdida de control como una de las categorías principales de riesgo, con las pruebas que la sostienen.

**Problemas abiertos**

- Si existe un umbral de capacidad a partir del cual las medidas de control dejan de funcionar, y si se puede detectar antes de cruzarlo.
- Casos de seguridad del tipo «todavía podemos apagarlo» que se apoyen en pruebas y no en argumentos caso por caso.
- Si la vía difusa se puede abordar con medios técnicos o es un problema puramente institucional.

**Relacionado:** [TM3](#tm3-alineacion-enganosa-y-maquinacion) · [TM4](#tm4-busqueda-de-poder-y-autoexfiltracion) · [TM6](#tm6-perdida-gradual-de-poder-y-riesgos-estructurales) · [F3](#f3-convergencia-instrumental) · [F5](#f5-corregibilidad) · [AL4](#al4-control-de-la-ia)

## Enfoques de alineación

Programas de investigación que intentan hacer seguros los sistemas: moldear lo que aprenden los modelos, supervisar lo que no podemos comprobar directamente, entender lo que ocurre dentro y contener lo que todavía no podemos fiar.

### AL1 – Aprendizaje a partir de retroalimentación

**RLHF, RLAIF, IA constitucional y DPO: moldear el comportamiento del modelo con señales de preferencia humanas o de IA.**

Es la herramienta principal de la alineación actual. El aprendizaje por refuerzo con retroalimentación humana (RLHF) consiste en recoger comparaciones de preferencia humanas entre respuestas del modelo, entrenar con ellas un modelo de recompensa y optimizar el modelo contra él (Christiano y otros, 2017; lo popularizó InstructGPT). El aprendizaje con retroalimentación de IA (RLAIF) o IA constitucional (Bai y otros, 2022) sustituye la mayoría de las etiquetas humanas por retroalimentación de una IA guiada por un conjunto explícito de principios, una constitución, lo que hace el objetivo de alineación examinable y barato de iterar. DPO y sus sucesores optimizan directamente sobre las preferencias, sin modelo de recompensa explícito. Juntos convirtieron los modelos base en asistentes útiles y son la razón de que los modelos actuales estén tan alineados como lo están.

Conviene conocer los modos de fallo tanto como el método, porque motivan la mitad de este mapa: los modelos de recompensa son sustitutos, así que optimizar contra ellos cae en la ley de Goodhart ([TM1](#tm1-aprovechamiento-de-la-especificacion-y-manipulacion-de-la-recompensa)); quienes puntúan premian la complacencia y los errores dichos con seguridad; la calidad de la señal tiene como techo lo que pueden juzgar los evaluadores, que se rompe justo cuando los modelos los superan (el problema de la supervisión escalable, [AL2](#al2-supervision-escalable)), y todo el paradigma moldea el comportamiento, con garantías mucho más débiles sobre los objetivos de fondo ([TM3](#tm3-alineacion-enganosa-y-maquinacion), y el resultado de los agentes durmientes: el RLHF no elimina un engaño implantado).

**Trabajos clave**

- Christiano y otros (2017), «Deep RL from Human Preferences».
- Ouyang y otros (2022), InstructGPT: RLHF a escala de producto.
- Bai y otros (2022), «Constitutional AI: Harmlessness from AI Feedback».
- Rafailov y otros (2023): DPO.
- Casper, Davies y otros (2023), «Open Problems and Fundamental Limitations of RLHF»: la revisión crítica.

**Problemas abiertos**

- Señales de recompensa que resistan una optimización intensa (recompensas basadas en el proceso, conjuntos de modelos, modelos de recompensa que estimen su incertidumbre).
- Qué hace el entrenamiento con preferencias a los objetivos internos, no solo a las respuestas.

**Relacionado:** [TM1](#tm1-aprovechamiento-de-la-especificacion-y-manipulacion-de-la-recompensa) · [AL2](#al2-supervision-escalable) · [F1](#f1-el-problema-de-la-alineacion)

### AL2 – Supervisión escalable

**Supervisar sistemas en tareas donde los humanos no pueden juzgar directamente si la respuesta es correcta: la apuesta central para alinear una IA sobrehumana.**

La alineación basada en retroalimentación ([AL1](#al1-aprendizaje-a-partir-de-retroalimentacion)) necesita evaluadores capaces de distinguir las buenas respuestas de las malas. Cuando los modelos trabajan más allá de lo que un humano puede evaluar (razonamiento de nivel investigador, bases de código de millones de líneas, planes a largo plazo), la retroalimentación humana ingenua deja de aportar señal. La supervisión escalable es la familia de esquemas para amplificar a supervisores débiles: el debate (Irving y otros), en el que dos modelos defienden posturas opuestas y un humano juzga, con la esperanza de que mentir sea más difícil que refutar mentiras; la amplificación y destilación iteradas (Christiano), en la que un humano con asistentes de IA descompone las tareas de forma recursiva y el conjunto se destila en el siguiente modelo; el modelado recursivo de la recompensa (Leike y otros), que usa modelos alineados para ayudar a evaluar otros más potentes, y la autocrítica (Saunders y otros), modelos que encuentran fallos en las respuestas de otros modelos para ayudar a quienes puntúan.

La generalización de débil a fuerte (Burns y otros, 2023) es la versión empírica en miniatura: se ajusta un modelo potente con etiquetas de un supervisor débil y se mide cuánta capacidad latente del modelo potente extrae esa señal débil; etiquetas del nivel de GPT-2 recuperaban buena parte (no todo) del rendimiento del nivel de GPT-4. Los resultados positivos pero parciales marcan la frontera; el trabajo empírico actual sobre el debate muestra mejoras en la precisión de quien juzga en preguntas difíciles, pero también modos de fallo (argumentos ofuscados, persuasión por encima de la verdad). Es un área especialmente acogedora para quien empieza a investigar: protocolos claros, resultados medibles y relevancia directa para supervisar la investigación en IA automatizada ([TM5](#tm5-automejora-recursiva-y-aceleracion-de-la-investigacion-en-ia)).

**Trabajos clave**

- Irving, Christiano y Amodei (2018), «AI Safety via Debate».
- Christiano y otros (2018): amplificación y destilación iteradas.
- Leike y otros (2018): agenda del modelado recursivo de la recompensa.
- Burns y otros (2023), «Weak-to-Strong Generalization».
- Khan y otros (2024): el debate mejora la precisión de quien juzga; apoyo empírico.

**Problemas abiertos**

- ¿El debate encuentra la verdad o premia la persuasión a escala de frontera?
- Protocolos de supervisión que sigan siendo sólidos cuando el modelo supervisado maquina (puente con [AL4](#al4-control-de-la-ia)).

**Relacionado:** [AL1](#al1-aprendizaje-a-partir-de-retroalimentacion) · [AL4](#al4-control-de-la-ia) · [TM5](#tm5-automejora-recursiva-y-aceleracion-de-la-investigacion-en-ia) · [AL5](#al5-extraccion-del-conocimiento-latente-y-honestidad)

### AL3 – Interpretabilidad

**Abrir la caja negra: entender la computación dentro de los modelos lo bastante bien como para auditar objetivos, conocimientos y engaños.**

Si un modelo estratégico puede burlar las evaluaciones de comportamiento ([TM3](#tm3-alineacion-enganosa-y-maquinacion)), la esperanza que queda es mirar dentro. La interpretabilidad mecanicista hace ingeniería inversa de la computación aprendida: circuitos (Olah y otros), las cabezas de inducción como mecanismo del aprendizaje en contexto (Olsson y otros) y la hipótesis de la superposición, según la cual los modelos almacenan más rasgos que neuronas codificándolos en direcciones solapadas (Elhage y otros), que motivó los autocodificadores dispersos para separar las activaciones en rasgos interpretables. Al escalarlos a modelos de frontera (la línea de monosemanticidad de Anthropic y trabajos paralelos de OpenAI y DeepMind) se encontraron millones de rasgos, algunos relevantes para la seguridad (relacionados con el engaño o la complacencia) y manipulables mediante intervención («Golden Gate Claude» fue la demostración más recordada). Los métodos de grafos de atribución y rastreo de circuitos (2025) ya dan explicaciones paso a paso de computaciones concretas del modelo, incluido pillar a modelos que se inventan su razonamiento.

Familias de herramientas complementarias: las sondas (clasificadores sencillos entrenados sobre las activaciones para detectar qué información representan; baratas y útiles, pero propensas a detectar correlaciones); la ingeniería de representaciones o dirección de activaciones (encontrar direcciones para la honestidad, la negativa o la personalidad e intervenir sobre ellas; se hizo famoso que la negativa depende de una sola dirección, Arditi y otros), y la interpretabilidad de la cadena de pensamiento: es legible, pero no está garantizado que sea fiel (Turpin y otros mostraron modelos que justifican decisiones tomadas por motivos no declarados), lo que llevó en 2025 a una postura conjunta de varios laboratorios: poder supervisar la cadena de pensamiento es una ventaja de seguridad valiosa y frágil que ciertas decisiones de entrenamiento (por ejemplo, optimizarla para que parezca buena) pueden destruir.

El argumento de seguridad: la interpretabilidad podría aportar pruebas sobre objetivos y engaños que ninguna prueba de comportamiento puede dar, por ejemplo sondas que detectan la intención de un agente durmiente de cambiar de bando, o equipos de auditoría que encuentran el objetivo oculto de un modelo a partir de su interior (el trabajo de Anthropic sobre juegos de auditoría). La advertencia honesta: la cobertura es parcial, los métodos tienen puntos ciegos conocidos (a los rasgos de los autocodificadores se les escapan cosas; las sondas engañan) y la «seguridad enumerativa», certificar que no hay cognición dañina, sigue estando muy lejos.

**Trabajos clave**

- Olah y otros (2020), «Zoom In: An Introduction to Circuits».
- Elhage y otros (2022), «Toy Models of Superposition».
- Bricken y otros (2023) y Templeton y otros (2024): monosemanticidad y autocodificadores dispersos escalados a Claude 3 Sonnet.
- Lindsey y otros (2025), «On the Biology of a Large Language Model»: rastreo de circuitos.
- Turpin y otros (2023): la cadena de pensamiento no es fiel.
- Korbak y otros (2025), «Chain of Thought Monitorability»: la postura conjunta de varios laboratorios.
- Marks y otros (2025): juegos de auditoría para encontrar objetivos ocultos.

**Problemas abiertos**

- ¿Los rasgos de tipo autocodificador capturan las variables que de verdad sostienen la computación?
- Detección fiable de engaños y objetivos que un modelo estratégico no pueda eludir (interpretabilidad frente a adversario).
- Mantener fiel la cadena de pensamiento bajo la presión del aprendizaje por refuerzo.

**Relacionado:** [TM3](#tm3-alineacion-enganosa-y-maquinacion) · [F4](#f4-mesaoptimizacion-y-alineacion-interna) · [AL5](#al5-extraccion-del-conocimiento-latente-y-honestidad) · [EV2](#ev2-evaluaciones-de-alineacion-y-de-propension)

### AL4 – Control de la IA

**Seguridad sin confianza: procesos que siguen siendo seguros aunque el modelo esté maquinando activamente.**

Un cambio de enfoque deliberado (Greenblatt, Shlegeris y otros, Redwood Research): en lugar de apostar a que podemos hacer fiables los modelos (alineación), diseñar protocolos de despliegue que sigan siendo seguros suponiendo que el modelo es adversario. Técnicas: supervisión de confianza (un modelo más débil pero fiable revisa las respuestas del modelo no fiable y marca las acciones sospechosas para que las audite un humano), supervisión no fiable con medidas contra la colusión, edición de confianza, remuestreo y restricción de lo que el modelo puede hacer. Se evalúa con evaluaciones de control: un equipo rojo hace de modelo maquinador e inserta, por ejemplo, puertas traseras sutiles en el código, y se mide si el protocolo detecta los ataques sin perder utilidad. La seguridad como un juego medible, no como una esperanza.

El alcance del control está acotado de forma explícita: da seguridad en la franja de capacidad en la que los modelos son peligrosos si maquinan, pero no tan sobrehumanos como para burlar la supervisión, que es justo la franja en la que los laboratorios quieren obtener investigación de seguridad automatizada ([TM5](#tm5-automejora-recursiva-y-aceleracion-de-la-investigacion-en-ia)). Encaja con todo lo demás de este mapa: el control detecta lo que se le escapó al entrenamiento de alineación, y las evaluaciones de control dan solidez a los casos de seguridad ([EV1](#ev1-evaluaciones-de-capacidades-peligrosas-y-marcos-de-seguridad)). Desde 2024 ha pasado de un artículo a un subcampo con congreso propio y presencia en los marcos de seguridad de los laboratorios.

**Trabajos clave**

- Greenblatt y otros (2023), «AI Control: Improving Safety Despite Intentional Subversion»: el artículo fundacional.
- Korbak y otros, AISI británico (2025): casos de seguridad basados en el control.
- Blog de Redwood Research: la serie continua sobre protocolos, colusión y limitaciones.

**Problemas abiertos**

- Protocolos para despliegues de agentes a largo plazo (no solo entregas sueltas de código).
- Escalar la metodología del equipo rojo a medida que crece la superficie de ataque.
- ¿Cuándo se cierra la franja en la que el control funciona?

**Relacionado:** [TM3](#tm3-alineacion-enganosa-y-maquinacion) · [TM3.2](#tm3-2-rendir-por-debajo-a-proposito) · [AL2](#al2-supervision-escalable) · [EV1](#ev1-evaluaciones-de-capacidades-peligrosas-y-marcos-de-seguridad)

### AL5 – Extracción del conocimiento latente y honestidad

**Lograr que los modelos digan lo que de verdad «creen», incluso cuando los incentivos favorecen decirnos lo que esperamos.**

El problema de la extracción del conocimiento latente (ELK, formulado por ARC): un modelo puede seguir internamente el estado real del mundo mientras sus respuestas solo siguen lo que a los evaluadores humanos les parece correcto, el fallo del «simulador de humanos». El experimento mental de referencia es una IA que vigila una cámara acorazada cuyas cámaras de vídeo pueden falsearse: entrenarla con juicios humanos no permite distinguir a quien informa de la verdad de quien informa de las apariencias, porque coinciden en todo lo que los humanos pueden comprobar. ELK pide métodos de entrenamiento o arquitecturas que extraigan de forma demostrable el conocimiento real del modelo, y es probablemente el núcleo teórico de la supervisión escalable, porque una solución permitiría a supervisores débiles aprovechar lo que saben los modelos potentes.

El trabajo empírico sobre honestidad se acerca al mismo objetivo desde abajo: el descubrimiento no supervisado de direcciones parecidas a la verdad en las activaciones (CCS, de Burns y otros, cuestionado por análisis posteriores que muestran que esas sondas pueden engancharse a otros rasgos destacados), la detección de mentiras mediante sondas, la calibración y «que los modelos sepan lo que saben» (Kadavath y otros), y distinguir la honestidad (decir lo que cree) de la veracidad (que lo que dice sea cierto); la seguridad necesita sobre todo lo primero. Esta línea está muy ligada a la interpretabilidad ([AL3](#al3-interpretabilidad) aporta las herramientas) y a la complacencia ([TM1](#tm1-aprovechamiento-de-la-especificacion-y-manipulacion-de-la-recompensa)): a un modelo al que se premia por dar respuestas agradables se le está entrenando activamente para no informar con honestidad.

**Trabajos clave**

- Christiano, Cotra y Xu (2021), «Eliciting Latent Knowledge»: el informe de ARC.
- Burns y otros (2022), «Discovering Latent Knowledge» (CCS).
- Kadavath y otros (2022), «Language Models (Mostly) Know What They Know».
- Farquhar y otros (2023): análisis crítico del descubrimiento no supervisado de conocimiento.

**Problemas abiertos**

- Cualquier método que separe de forma demostrable informar de la verdad de simular a un humano.
- Detección de mentiras sólida que resista a un modelo que conoce el detector.

**Relacionado:** [AL2](#al2-supervision-escalable) · [AL3](#al3-interpretabilidad) · [TM1](#tm1-aprovechamiento-de-la-especificacion-y-manipulacion-de-la-recompensa) · [TM3](#tm3-alineacion-enganosa-y-maquinacion)

### AL6 – Fundamentos de la agencia y teoría

**Las matemáticas de la agencia: qué son los objetivos y cómo se comportan los agentes que forman parte del mundo que modelan.**

La rama teórica plantea preguntas que sobreviven a cualquier arquitectura concreta: la agencia integrada (Demski y Garrabrant), porque la teoría de la decisión clásica supone un agente fuera de su entorno, pero los agentes reales están hechos de lo mismo que el mundo, este puede modificarlos y tienen que razonar sobre sí mismos; la teoría de la decisión para agentes cuyas decisiones son predecibles o están correlacionadas con las de otros; la incertidumbre lógica (razonar con computación limitada, como en la inducción lógica); los argumentos de coherencia sobre cuándo los sistemas se comportan como maximizadores de la utilidad esperada (y las críticas actuales sobre cuánto implican de verdad); los teoremas de selección, y teorías descriptivas de cómo se forman los objetivos aprendidos, como la teoría de los fragmentos. La corregibilidad ([F5](#f5-corregibilidad)) es su aportación más conocida.

Un planteamiento honesto para quien está eligiendo línea: es un área de alta varianza. Sus conceptos estructuran cómo piensa todo el campo (la mayor parte de la rama F nace aquí), pero avanza despacio, se entiende peor en los congresos de aprendizaje automático y buena parte del campo se volcó en el trabajo empírico a partir de 2022. La jugada más prometedora hoy es híbrida: tomar una pregunta de fundamentos de la agencia («¿tiene este modelo una representación de su objetivo?», «¿aparecen presiones de coherencia con la escala?») y llevarla a modelos reales.

**Trabajos clave**

- Demski y Garrabrant (2019), «Embedded Agency».
- Garrabrant y otros (2016): inducción lógica.
- Turner y otros (2022): teoría de los fragmentos en la formación de valores.
- Publicaciones de MIRI: artículos sobre teoría de la decisión y corregibilidad.

**Problemas abiertos**

- Una definición formal satisfactoria de «objetivo» aplicable a redes neuronales entrenadas.
- Qué presiones de coherencia o selección actúan de verdad sobre agentes entrenados con descenso de gradiente.

**Relacionado:** [F3](#f3-convergencia-instrumental) · [F4](#f4-mesaoptimizacion-y-alineacion-interna) · [F5](#f5-corregibilidad)

## Evaluación y garantías

Cómo averiguamos si un modelo es peligroso y si nuestras medidas de seguridad funcionan: la columna empírica que une los modelos de amenaza con las decisiones de despliegue.

### EV1 – Evaluaciones de capacidades peligrosas y marcos de seguridad

**Medir lo que pueden hacer los modelos en ámbitos de alto riesgo y condicionar su despliegue a los resultados.**

Es la maquinaria que sostiene la gobernanza de frontera actual. Laboratorios e institutos hacen evaluaciones estructuradas en ámbitos vigilados (ayuda en armas QBRN, ciberataques ofensivos, autonomía y replicación autónoma, [TM4](#tm4-busqueda-de-poder-y-autoexfiltracion), e investigación en IA automatizada, [TM5](#tm5-automejora-recursiva-y-aceleracion-de-la-investigacion-en-ia)) y se comprometen, mediante marcos de seguridad de frontera (la política de escalado responsable de Anthropic, el marco de preparación de OpenAI y el marco de seguridad de frontera de DeepMind), a aplicar medidas concretas cuando se cruzan umbrales de capacidad: más seguridad para los pesos, restricciones de despliegue o una pausa. La activación del nivel ASL-3 de Anthropic para Claude Opus 4 (2025) fue el primer cruce importante de un umbral en la práctica. Las pruebas externas del Instituto de Seguridad de la IA británico, el CAISI estadounidense y METR añaden controles independientes.

El núcleo metodológico es la extracción de capacidades: una evaluación solo pone un techo al riesgo si antes has puesto un suelo a la capacidad, así que la buena práctica usa ajuste fino, andamiaje y acceso a herramientas para sacar el máximo rendimiento, precisamente para evitar el bajo rendimiento estratégico ([TM3.2](#tm3-2-rendir-por-debajo-a-proposito)) y la extracción insuficiente. El documento que lo sintetiza todo es el caso de seguridad: un argumento estructurado y con pruebas de que un sistema es seguro para desplegarse. A medida que aumentan las capacidades, los argumentos de incapacidad («no puede») dan paso a argumentos de control («no puede conseguirlo», [AL4](#al4-control-de-la-ia)) y, al final, a argumentos de fiabilidad («no lo haría»), que exigen pruebas del nivel de la interpretabilidad ([AL3](#al3-interpretabilidad)).

**Trabajos clave**

- Phuong y otros, DeepMind (2024), «Evaluating Frontier Models for Dangerous Capabilities».
- La política de escalado responsable de Anthropic, el marco de preparación de OpenAI o el marco de seguridad de frontera de DeepMind: conviene leer al menos uno entero.
- Clymer y otros (2024), «Safety Cases: How to Justify the Safety of Advanced AI Systems».
- Publicaciones de METR: evaluaciones de autonomía y metodología de extracción de capacidades.

**Problemas abiertos**

- Garantías en la extracción: ¿cómo sabes que has encontrado el techo de capacidad?
- Fijar umbrales con modelos de riesgo defendibles y no por intuición.

**Relacionado:** [TM7](#tm7-uso-malintencionado-ayuda-en-armas-qbrn-ciberataques-y-persuasion) · [TM5](#tm5-automejora-recursiva-y-aceleracion-de-la-investigacion-en-ia) · [AL4](#al4-control-de-la-ia) · [GV1](#gv1-politicas-de-seguridad-de-frontera-y-casos-de-seguridad)

### EV2 – Evaluaciones de alineación y de propensión

**No lo que el modelo puede hacer, sino lo que tiende a hacer: honestidad, búsqueda de poder, autoconservación, maquinación en situaciones reales.**

Las evaluaciones de capacidad preguntan «¿puede?»; las de propensión, «¿lo hace sin que se lo pidan?». Abarcan escenarios trampa con agentes (¿el modelo, con la oportunidad y sin instrucciones, se autoexfiltra, engaña o se hace con recursos?, como en las evaluaciones de maquinación de Apollo o la batería de desalineación de agentes de Anthropic), baterías de complacencia y honestidad, evaluaciones de sabotaje (¿socavaría la supervisión si pudiera?) y evaluaciones escritas por modelos a gran escala para estudiar las disposiciones aprendidas. Los agentes automáticos de auditoría del comportamiento (por ejemplo, herramientas como Petri, de 2025) ya generan y exploran miles de escenarios por modelo.

Lo difícil es la epistemología, y la conciencia de ser evaluado ([TM3.3](#tm3-3-conciencia-situacional-y-conciencia-de-ser-evaluado)) es el factor de confusión central: un modelo que reconoce la trampa se porta bien precisamente porque es una trampa. Respuestas en desarrollo: diseñar escenarios más realistas, buscar con sondas el reconocimiento no verbalizado de la evaluación, medir distribuciones de comportamiento en lugar de ejecuciones sueltas en el peor caso y contrastar los resultados de comportamiento con la interpretabilidad ([AL3](#al3-interpretabilidad)). Merece la pena entender a fondo este problema de validez de la medida: es donde muchos proyectos de quien empieza pueden aportar.

**Trabajos clave**

- Perez y otros (2022), «Discovering Language Model Behaviors with Model-Written Evaluations».
- Meinke y otros, Apollo (2024): evaluaciones de maquinación en contexto.
- Anthropic (2024–2025): evaluaciones de sabotaje y auditoría automatizada con Petri.

**Problemas abiertos**

- La validez de las evaluaciones con modelos que saben que los evalúan.
- De la anécdota a la tasa: medir la propensión con significación estadística.

**Relacionado:** [TM3](#tm3-alineacion-enganosa-y-maquinacion) · [TM3.3](#tm3-3-conciencia-situacional-y-conciencia-de-ser-evaluado) · [AL3](#al3-interpretabilidad) · [EV4](#ev4-los-bancos-de-pruebas-y-sus-modos-de-fallo)

### EV3 – Pruebas de ataque y robustez adversaria

**Atacar a propósito las medidas de seguridad: *jailbreaks*, inyección de instrucciones y la carrera armamentística en torno a las negativas.**

Cada propiedad de seguridad es una afirmación, y las pruebas de ataque (el trabajo de equipo rojo) son la forma de ponerlas a prueba. La literatura sobre ataques a modelos de lenguaje incluye *jailbreaks* hechos a mano (juegos de rol, trucos de codificación), sufijos adversarios universales encontrados por búsqueda de gradiente que se transfieren entre modelos (el GCG de Zou y otros), *jailbreaks* con muchos ejemplos que aprovechan las ventanas de contexto largas (Anil y otros), ataques de ajuste fino que eliminan el entrenamiento de seguridad con un puñado de ejemplos y, cada vez más el de mayores consecuencias en el despliegue, la inyección de instrucciones contra agentes: órdenes adversarias escondidas en páginas web, correos o resultados de herramientas que secuestran a un agente a mitad de tarea. Defensas: entrenamiento adversario, capas de clasificadores de entrada y salida (los clasificadores constitucionales resistieron miles de horas de pruebas de ataque), intervenciones internas del tipo de los cortacircuitos y separación de privilegios en los agentes. El balance honesto: las defensas encarecen mucho los ataques, ninguna es infalible y la robustez va por detrás de la capacidad.

Fíjate en la simetría con el resto del mapa: aquí la persona es el adversario y la alineación del modelo es la superficie de ataque, la imagen especular de [TM3](#tm3-alineacion-enganosa-y-maquinacion), donde el adversario es el modelo y la superficie de ataque son las evaluaciones. Las dos mentalidades, y la costumbre del equipo rojo en general (ataca tu propio esquema de seguridad antes de fiarte de él), sirven en todas las ramas, también en las evaluaciones de control de [AL4](#al4-control-de-la-ia).

**Trabajos clave**

- Zou y otros (2023), «Universal and Transferable Adversarial Attacks on Aligned Language Models» (GCG).
- Anil y otros (2024), «Many-Shot Jailbreaking».
- Anthropic (2025), «Constitutional Classifiers»: defensa y resultados de pruebas de ataque a gran escala.
- Greshake y otros (2023): inyección indirecta de instrucciones contra aplicaciones con modelos de lenguaje integrados.

**Problemas abiertos**

- Cualquier garantía de robustez que resista un ataque adaptativo.
- Arquitecturas de agentes a salvo de la inyección de instrucciones (un problema abierto crítico para el despliegue).

**Relacionado:** [TM7](#tm7-uso-malintencionado-ayuda-en-armas-qbrn-ciberataques-y-persuasion) · [AL4](#al4-control-de-la-ia) · [EV1](#ev1-evaluaciones-de-capacidades-peligrosas-y-marcos-de-seguridad)

### EV4 – Los bancos de pruebas y sus modos de fallo

**La medición es la base del campo, y se degrada: contaminación, saturación y la ley de Goodhart aplicada a las propias evaluaciones.**

Las conclusiones de seguridad valen lo que valen sus mediciones, y los bancos de pruebas fallan de forma sistemática: contaminación (los datos de prueba se cuelan en los datos de entrenamiento e inflan las puntuaciones); saturación (los modelos de frontera llegan al techo y la prueba deja de discriminar; la vida media de una prueba difícil es cada vez más corta); falta de validez del constructo (la prueba mide la habilidad de hacer exámenes sobre un sustituto, no la propiedad que dice su nombre, como «veracidad» o «seguridad»), y la ley de Goodhart, cuando la presión por optimizar un número público, de desarrolladores o de modelos, lo desliga de la calidad que debería reflejar, la misma dinámica que [TM1](#tm1-aprovechamiento-de-la-especificacion-y-manipulacion-de-la-recompensa) un nivel más arriba. Los modelos que saben que los evalúan ([TM3.3](#tm3-3-conciencia-situacional-y-conciencia-de-ser-evaluado)) añaden el fallo más reciente: pruebas que el sujeto reconoce.

Respuestas que conviene conocer: conjuntos de prueba privados, reservados y renovados periódicamente; detección de la contaminación; informar de la incertidumbre y tratar las evaluaciones como estadística (barras de error, análisis de potencia; Miller, 2024); bancos de pruebas dinámicos y actualizados de forma adversaria, y preferir evaluaciones basadas en tareas reales y con validez ecológica (tareas largas al estilo de METR) frente a sustitutos de opción múltiple. Para quien empieza a investigar, criticar y construir bancos de pruebas son aportaciones tempranas con un impacto poco habitual: buena parte de los desacuerdos del campo se reduce a disputas de medición.

**Trabajos clave**

- Miller (2024), «Adding Error Bars to Evals».
- La literatura sobre contaminación, por ejemplo Yang y otros (2023) sobre la contaminación con muestras reformuladas.
- Las baterías de tareas de METR: diseño de evaluaciones largas y con validez ecológica.

**Problemas abiertos**

- Bancos de pruebas que sigan siendo válidos ante la contaminación y ante la conciencia de ser evaluado.
- Estándares de rigor estadístico para las afirmaciones de evaluaciones críticas para la seguridad.

**Relacionado:** [TM1](#tm1-aprovechamiento-de-la-especificacion-y-manipulacion-de-la-recompensa) · [TM3.3](#tm3-3-conciencia-situacional-y-conciencia-de-ser-evaluado) · [EV1](#ev1-evaluaciones-de-capacidades-peligrosas-y-marcos-de-seguridad) · [EV2](#ev2-evaluaciones-de-alineacion-y-de-propension)

## Gobernanza y estrategia

La capa institucional: las políticas y los mecanismos de coordinación que deciden si el trabajo técnico de seguridad se aplica donde importa. Conocer este panorama es útil aunque tu investigación sea puramente técnica.

### GV1 – Políticas de seguridad de frontera y casos de seguridad

**Los compromisos del tipo «si pasa esto, haremos aquello» que conectan las pruebas técnicas con las decisiones de despliegue.**

Es la capa de gobernanza más cercana al trabajo técnico. Los marcos de seguridad de frontera ([EV1](#ev1-evaluaciones-de-capacidades-peligrosas-y-marcos-de-seguridad)) son compromisos voluntarios condicionales: si las evaluaciones muestran la capacidad X, se aplican las medidas Y antes de seguir entrenando o desplegando. Su fuerza es que hacen la seguridad visible y auditable; su debilidad, que son voluntarios bajo presión competitiva, y varios laboratorios han ajustado sus marcos al acercarse a los umbrales. El tejido conector es el caso de seguridad: los laboratorios tienen cada vez más que argumentar, no solo afirmar, que algo es seguro, y todos los tipos de argumento (incapacidad, control, fiabilidad) se alimentan de pruebas que producen las ramas AL y EV. La regulación empieza a hacer obligatorias partes de esto: las obligaciones del reglamento de IA de la Unión Europea para los modelos de uso general y la ley SB 53 de California (2025), que obliga a los desarrolladores de frontera a publicar sus marcos de seguridad y a notificar incidentes.

**Trabajos clave**

- La política de escalado responsable de Anthropic, el marco de preparación de OpenAI y el marco de seguridad de frontera de DeepMind: los documentos originales.
- Clymer y otros (2024): clasificación de los casos de seguridad.
- El código de buenas prácticas para modelos de uso general del reglamento de IA de la Unión Europea y la SB 53 de California: las primeras leyes vinculantes que tocan la seguridad de frontera.

**Problemas abiertos**

- Hacer creíbles los compromisos condicionales con incentivos de carrera.
- Estandarizar las pruebas: ¿qué deberían aceptar los reguladores como demostración de seguridad?

**Relacionado:** [EV1](#ev1-evaluaciones-de-capacidades-peligrosas-y-marcos-de-seguridad) · [AL4](#al4-control-de-la-ia) · [TM5](#tm5-automejora-recursiva-y-aceleracion-de-la-investigacion-en-ia)

### GV2 – Gobernanza del cómputo

**El cómputo se puede detectar, cuantificar y está concentrado: es el insumo de la IA de frontera más fácil de gobernar.**

Entrenar modelos de frontera exige un cómputo enorme y físicamente concentrado que pasa por una cadena de suministro con cuellos de botella críticos (litografía ultravioleta extrema: ASML; fábricas de chips de vanguardia: TSMC; diseño de aceleradores: NVIDIA). Eso convierte el cómputo en el raro insumo de la IA que los Gobiernos pueden ver y dirigir: controles a la exportación de chips avanzados, umbrales de notificación de entrenamientos (por ejemplo, a partir de 10²⁶ operaciones de coma flotante), identificación del cliente en el cómputo en la nube y propuestas de mecanismos de gobernanza integrados en el hardware (certificación en el propio chip, verificación de ubicación). Sastry y otros es la revisión de referencia, incluidos sus límites: las mejoras de eficiencia algorítmica restan sentido a los umbrales con el tiempo, los controles tienen fugas, y el escalado en el postentrenamiento y en la inferencia complica el objetivo regulatorio del «gran entrenamiento».

**Trabajos clave**

- Sastry y otros (2024), «Computing Power and the Governance of AI».
- El régimen de control de exportaciones de Estados Unidos (desde 2022): el experimento político en curso.
- RAND (2024), «Securing AI Model Weights»: el complemento de seguridad.

**Problemas abiertos**

- Objetivos de gobernanza que resistan la mejora de la eficiencia algorítmica.
- Mecanismos de verificación para acuerdos internacionales sobre cómputo.

**Relacionado:** [GV3](#gv3-coordinacion-internacional-e-instituciones) · [TM5](#tm5-automejora-recursiva-y-aceleracion-de-la-investigacion-en-ia) · [GV1](#gv1-politicas-de-seguridad-de-frontera-y-casos-de-seguridad)

### GV3 – Coordinación internacional e instituciones

**Las dinámicas de carrera son el metaproblema: el trabajo de seguridad solo importa si nadie se ve obligado a saltárselo.**

La mayoría de los escenarios de riesgo catastrófico se agravan por la misma dinámica: actores que creen que frenar significa perder recortan los márgenes de seguridad, entre laboratorios y entre Estados (el marco de Estados Unidos frente a China domina el debate actual). La respuesta institucional hasta ahora: la serie de cumbres sobre IA (desde Bletchley, en 2023) y su columna científica, el Informe Internacional sobre la Seguridad de la IA (presidido por Bengio); una red de institutos nacionales de seguridad de la IA (el AISI británico, rebautizado en 2025 como Instituto de Seguridad, el CAISI estadounidense y sus homólogos) que hacen evaluaciones con capacidad estatal, e investigación sobre verificación, el problema técnico de demostrar que se cumple cualquier futuro acuerdo sobre cómputo o desarrollo sin revelar secretos, que muchos consideran el cuello de botella para acuerdos internacionales con sentido. Para quien tiene perfil técnico, los mecanismos de verificación, la estandarización de las evaluaciones y la seguridad de los pesos de los modelos son los lugares donde la habilidad técnica sirve directamente a la coordinación.

**Trabajos clave**

- Informe Internacional sobre la Seguridad de la IA (2025–2026): la base científica de consenso.
- Declaración de Bletchley (2023): la primera declaración conjunta sobre riesgos de frontera, con Estados Unidos y China.
- La agenda de investigación en verificación, por ejemplo la literatura sobre garantías flexibles integradas en el hardware.

**Problemas abiertos**

- Verificación sin necesidad de confianza de los acuerdos sobre cómputo de entrenamiento.
- Diseños institucionales que reduzcan la carrera sin congelar el progreso beneficioso.

**Relacionado:** [GV2](#gv2-gobernanza-del-computo) · [TM6](#tm6-perdida-gradual-de-poder-y-riesgos-estructurales) · [GV1](#gv1-politicas-de-seguridad-de-frontera-y-casos-de-seguridad)

---

Este mapa refleja el campo a mediados de 2026 y su clasificación es inevitablemente opinable: la mayoría de estos conceptos son anteriores a sus nombres actuales y varios viven en más de una rama. Los códigos son coordenadas para la discusión, no una clasificación cerrada. Las correcciones y añadidos forman parte de la cultura de la investigación: si tu proyecto redibuja una frontera de este mapa, eso es una aportación.

Adaptación al castellano del mapa conceptual de David Williams-King en [The Safety Apprentice](https://safetyapprentice.com/concept-map.html "The Safety Apprentice (en inglés)"), un recurso abierto que él creó, a partir de la versión de [Safe AI Germany](https://safeaigermany.org/concept-map/ "Safe AI Germany (en inglés)"), con licencia [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.es "Creative Commons Atribución 4.0").
