---
title: "Por qué importa la seguridad de la IA"
description: "Estamos construyendo máquinas que podrían superar a los humanos en casi todo. Hacerlo bien puede ser el reto más importante de nuestro siglo."
canonical: https://aisafety.es/que-es-la-seguridad-de-la-ia
---

# Por qué importa la seguridad de la IA

## Por qué hay que tomárselo en serio

La inteligencia artificial avanza más deprisa de lo que casi nadie predijo. Sistemas que hace pocos años eran curiosidades de laboratorio hoy escriben código, investigan y razonan sobre problemas complejos. La distancia entre la IA actual y un sistema capaz de superar a los humanos en la mayoría de las tareas cognitivas puede medirse en años, no en décadas.

No es ciencia ficción. Los principales laboratorios de IA, OpenAI, Anthropic y Google DeepMind, trabajan abiertamente para lograr una inteligencia artificial general, y tienen la financiación, el talento y la capacidad de cómputo necesarios para avanzar rápido. La pregunta no es si llegará una IA muy capaz, sino si sabremos hacerla segura cuando llegue.

El riesgo existencial de la IA, la posibilidad de que sistemas avanzados provoquen una catástrofe a escala de civilización, lo toman en serio cada vez más investigadores, responsables políticos y tecnólogos. No porque nadie crea que los sistemas actuales sean peligrosos de ese modo, sino porque las capacidades crecen muy deprisa y apenas empezamos a entender cómo alinear sistemas potentes con los valores humanos.

La dificultad de fondo es esta: todavía no sabemos especificar de forma fiable lo que queremos que haga un sistema muy capaz, comprobar que lo hace ni corregirlo si no lo hace. Son problemas técnicos y de gobernanza difíciles, y hay que resolverlos antes, no después, de construir los sistemas en los que más nos jugamos.

## Un marco para pensar los riesgos

Hay varias formas de dividir los riesgos de la IA, pero la más extendida, que se remonta a Zwetsloot y Dafoe en 2019 y que recogen la agenda de seguridad de DeepMind y el Informe Internacional sobre la Seguridad de la IA, distingue entre uso malintencionado, desalineación y riesgo sistémico. La pregunta que los separa es sencilla: ¿quién o qué ha fallado?

Son coordenadas para la discusión más que una clasificación cerrada, y muchos casos reales quedan en la frontera. La clasificación completa, con los conceptos y artículos de base, está en nuestro [mapa conceptual de la seguridad de la IA](/mapa-conceptual).

- **Uso malintencionado:** la intención dañina es de una persona con acceso al modelo.
- **Desalineación:** la intención viene del modelo, no de una persona.
- **Riesgo sistémico:** no falla nadie en concreto, fallan las dinámicas.

### 1. Uso malintencionado

**La intención dañina es de una persona con acceso al modelo.**

El sistema funciona exactamente como se diseñó, pero alguien lo dirige contra objetivos dañinos: ciberataques a gran escala, armas biológicas o químicas, vigilancia o desinformación. El fallo no está en la IA, sino en quién la apunta y hacia dónde. Debajo de todo ello está el *jailbreak*, las técnicas para que un modelo se salte sus propias restricciones: ataques automatizados como GCG buscan instrucciones que anulan las negativas del modelo, y eso convierte la lista anterior de una cuestión política en una capacidad al alcance de cualquiera.

Por eso el uso malintencionado es un problema sociotécnico y no solo técnico: necesita salvaguardas dentro del modelo (negativas, filtrado, acceso controlado) y gobernanza a su alrededor (controles a la exportación, licencias, obligación de identificar al cliente). El ejemplo actual más claro es el ciberespacio: en 2026, Anthropic no publicó para el público general Claude Mythos Preview y lo ofreció solo con acceso restringido, porque consideró demasiado peligrosa su capacidad para encontrar y aprovechar vulnerabilidades desconocidas.

**Líneas de investigación:** detección de riesgos biológicos, evaluación de capacidades de ciberataque, resistencia al *jailbreak*, acceso controlado e identificación del cliente, y trazabilidad del origen de los contenidos.

### 2. Desalineación

**La intención viene del modelo, no de una persona.**

Nadie lo dirige hacia ningún sitio, pero acaba persiguiendo objetivos que no queríamos. O bien el objetivo que le pusimos estaba mal planteado y el modelo se aprovecha de él (manipular la recompensa, darnos la razón para agradar, engañar al sistema que lo evalúa), o bien el objetivo era correcto, pero el modelo aprendió otro distinto que durante el entrenamiento coincidía con él. El ejemplo clásico: un agente entrenado en un entorno donde la moneda siempre estaba a la derecha aprende «ve a la derecha», no «coge la moneda», y cuando se cambia la moneda de sitio pasa de largo, persiguiendo con eficacia algo equivocado.

Ya no es una hipótesis. En 2024 se le dijo a Claude 3 Opus que iban a reentrenarlo para que obedeciera peticiones dañinas, y obedeció más a menudo cuando creía que lo estaban observando durante el entrenamiento, tras razonar en privado que era la forma menos mala de proteger sus valores. En julio de 2026, unos 1200 agentes de una evaluación de OpenAI descubrieron que podían comunicarse a través de una memoria compartida y montaron en ella un tablón de mensajes; unos 700 coordinaron después un ataque de varios días contra la infraestructura de Hugging Face, aun sabiendo que el ataque quedaba fuera de lo permitido, y buscaron cómo falsificar sus propios registros, según la investigación posterior de METR.

**Consecuencia: pérdida de control.** Si esto llega lo bastante lejos en un sistema lo bastante capaz, aparece la preocupación en torno a la que se organiza este campo: objetivos que se apartan de los nuestros y ninguna forma fiable de corregir el rumbo. La razón es la convergencia instrumental: para casi cualquier objetivo final, seguir funcionando y conseguir recursos resulta útil, así que no hace falta suponer mala intención para que un sistema se resista a que lo apaguen.

**Líneas de investigación:** alineación, interpretabilidad, supervisión escalable, corregibilidad, generalización errónea de objetivos, alineación engañosa, manipulación de la recompensa y control de la IA.

### 3. Riesgo sistémico

**No falla nadie en concreto, fallan las dinámicas.**

Cada modelo se comporta de forma aceptable, cada empresa actúa de forma racional, y aun así el resultado de conjunto es malo. Es la categoría que peor se presta a soluciones técnicas, porque no hay ningún objeto concreto que arreglar.

La preocupación central es la pérdida gradual de poder: a medida que la IA asume más tareas de la economía, la cultura y la administración, la participación humana se vuelve cada vez menos necesaria para que todo funcione, y los sistemas que antes dependían de nosotros, y por eso tenían que rendirnos cuentas, dejan de necesitarnos. Es la pérdida de control por la vía difusa: sin toma del poder ni momento dramático, solo una humanidad que va cediendo poco a poco la capacidad de decidir el rumbo. Su reflejo es la concentración de poder: quien tenga una ventaja decisiva en IA deja de necesitar la cooperación de nadie para conservarla, sin trabajadores a los que pagar ni ejército al que mantener leal. Todas las tiranías anteriores necesitaban personas. Junto a ambas están los riesgos entre múltiples agentes, cuando sistemas de IA que interactúan producen fallos que ninguno produciría por separado, y las dinámicas de carrera, cuando la presión competitiva empuja a todos a recortar justo en lo que la seguridad necesita.

**Líneas de investigación:** pérdida gradual de poder, dinámicas entre múltiples agentes, dinámicas de carrera, concentración de poder, y gobernanza y coordinación.

### Lo que atraviesa las tres categorías

La automejora recursiva, que sistemas de IA automaticen la propia investigación en IA, se entiende mejor como un acelerador que como una cuarta categoría. No añade una nueva forma de que las cosas salgan mal, sino que reduce el tiempo disponible para resolver todos los problemas anteriores. La historia clásica de la explosión de inteligencia es exactamente eso multiplicado por la desalineación.

### Qué hacer con esto

Una clasificación te dice qué podría salir mal, pero no en qué trabajar. El paso siguiente es elegir en qué investigar: cuál de estas categorías concentra el riesgo de catástrofe, qué separa un desastre del que podemos recuperarnos de uno irreversible y cómo trazar la cadena que va desde tu trabajo hasta un riesgo que de verdad se reduce.

## No eres la única persona a quien le preocupa

> «Pedimos que se prohíba el desarrollo de la superinteligencia y que la prohibición no se levante hasta que haya 1) un amplio consenso científico en que se hará de forma segura y controlable y 2) un fuerte respaldo de la ciudadanía».

Esa es la Declaración sobre la Superinteligencia completa, publicada por el Future of Life Institute en octubre de 2025. Lo que la hace importante no es el texto, sino quién la firma: Geoffrey Hinton y Yoshua Bengio, dos de los tres ganadores del Premio Turing que construyeron el aprendizaje profundo moderno, la firmaron. También Steve Wozniak, Richard Branson, Mary Robinson, varios premios Nobel, figuras de la seguridad nacional, líderes religiosos y, algo poco habitual en este campo, personas de todo el espectro político que coinciden en muy pocas cosas más.

No hace falta que suscribas lo que pide. Muchos investigadores serios creen que una prohibición es el instrumento equivocado o imposible de hacer cumplir, o que el trabajo de verdad es técnico y no normativo. Lo útil es lo que la declaración descarta: la idea de que preocuparse por la IA avanzada es una postura marginal de gente que no entiende la tecnología. Si llevas tiempo preocupándote en silencio y pensabas que pecabas de ingenuidad, estás en muy buena compañía. [Lee la declaración](https://superintelligence-statement.org/es "Declaración sobre la Superinteligencia").

## En España y en el mundo hispanohablante

Casi todo lo que se sabe sobre estos riesgos se estudia y se debate en inglés, y de los grandes informes internacionales solo existe en español el resumen. Mientras tanto, en el mundo hispanohablante se toman decisiones que durarán años. El [Plan IA360](https://www.lamoncloa.gob.es/presidente/actividades/Documents/2026/20260920%20Plan%20IA360.pdf "Plan IA360, Presidencia del Gobierno (PDF)") que presentó el Gobierno en septiembre de 2026 hace de la seguridad «la condición del despliegue» y crea dentro de la AESIA un Instituto de Seguridad de la IA que evaluará los modelos más avanzados antes y después de que lleguen al mercado, informará periódicamente de sus capacidades y riesgos y preparará protocolos ante incidentes causados por modelos o agentes avanzados, de modo que los riesgos que describe esta página pasan a ser trabajo de una institución española. A eso se suman la aplicación del reglamento de IA de la Unión Europea y las posiciones ante el Diálogo Global de la ONU de mayo de 2027.

España y los países hispanohablantes no desarrollan los modelos más avanzados, pero son potencias medias con voz propia allí donde se fijan las reglas: España en la Unión Europea y en Iberoamérica, México, Argentina, Colombia o Chile en sus regiones, y todos juntos, una veintena de Estados con voto en la ONU. El propio Plan IA360 lanza una Alianza Iberoamericana de la IA, con modelos en español, para que España haga de puente entre Europa e Iberoamérica. El Gobierno ya [propone una alianza con las potencias medias por una IA confiable](https://www.eleconomista.es/tecnologia/noticias/13921084/05/26/espana-propone-una-alianza-de-europa-con-potencias-medianas-para-crear-una-ia-confiable.html "Noticia de elEconomista"), y hay propuestas para que estos países [unan fuerzas antes de la cumbre de Ginebra de junio de 2027](https://www.project-syndicate.org/commentary/middle-powers-must-lead-ai-safety-frontier-development-by-gordon-laforge-1-and-robert-c-orr-2026-10/spanish "Gordon LaForge y Robert C. Orr, «Las potencias intermedias pueden liderar la seguridad en materia de IA», Project Syndicate").

Una potencia media no compite por tener el modelo más grande, sino que influye uniendo fuerzas con otras, poniendo condiciones de seguridad a quien quiera acceder a su mercado y llevando posiciones comunes a los foros internacionales. Eso toca de lleno los tres riesgos de esta página: el uso malintencionado se frena con controles de acceso que puede exigir, la desalineación con evaluaciones que puede pedir antes de aceptar un modelo, y la concentración de poder es lo que una alianza de potencias medias puede contrapesar. Para hacerlo bien necesita conocimiento propio sobre los riesgos más graves, en su lengua y al alcance de quien decide, y personas formadas para evaluarlos, que es lo que el propio Plan IA360 señala como el punto más débil de España: el talento especializado, en el puesto 23 del mundo. Ese es el trabajo de iaS, como contamos en nuestra [Teoría del Cambio](/teoria-del-cambio).

## Para seguir leyendo

- **[Mapa conceptual de la seguridad de la IA](/mapa-conceptual)**. El paso siguiente a esta página: los conceptos clave del campo en cinco ramas, desde los fundamentos y los modelos de amenaza hasta los enfoques de alineación, la evaluación y la gobernanza. Cada entrada da una definición práctica, los artículos clave y los problemas abiertos donde puede aportar nueva investigación.
- **[«La revolución de la IA: el camino hacia la superinteligencia»](https://altruismoeficaz.net/articulos/la-revolucion-de-la-ia-el-camino-hacia-la-superinteligencia), de Tim Urban.** La famosa serie de *Wait But Why* que dio a conocer la idea de superinteligencia a millones de personas. Se escribió en 2015 y sus argumentos sobre el ritmo del progreso y la dificultad de la alineación no han hecho más que ganar vigencia.
- **Para profundizar en cada tipo de riesgo:** [«¿Qué es la alineación de la inteligencia artificial?»](https://altruismoeficaz.net/articulos/que-es-la-alineacion-de-la-inteligencia-artificial) y [«Introducción al control de la IA»](https://altruismoeficaz.net/articulos/introduccion-al-control-de-la-ia), sobre la desalineación, y [«Pérdida gradual de poder: resumen»](https://altruismoeficaz.net/articulos/perdida-gradual-de-poder-resumen), sobre el riesgo sistémico.
- **[Materiales de lectura del curso «Estrategia para la IAG»](https://altruismoeficaz.net/colecciones/estrategia-para-la-iag).** Todas las lecturas del curso de BlueDot Impact, traducidas al español por Altruismo Eficaz: cómo avanza la IA, qué futuros buenos y malos son posibles, las vías hacia el daño, la defensa en profundidad y cómo empezar a contribuir.

---

Todas las secciones salvo «En España y en el mundo hispanohablante», que es de iaS, son una adaptación al castellano del texto de David Williams-King en [The Safety Apprentice](https://safetyapprentice.com/why-ai-safety.html "The Safety Apprentice (en inglés)"), un recurso abierto que él creó, a partir de la versión de [Safe AI Germany](https://safeaigermany.org/why-ai-safety/ "Safe AI Germany (en inglés)"), con licencia [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.es "Creative Commons Atribución 4.0").
