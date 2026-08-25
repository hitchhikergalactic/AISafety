---
title: "Sesgo lingüístico y diversidad cultural en la evaluación de modelos de lenguaje"
summary: "En septiembre de 2025, investigadoras de la Universidad de los Andes y NYU publicaron lo que no existía: una evaluación sistemática de cómo los grandes modelos de inteligencia artificial reproducen estereotipos cuando se les habla en español."
originalAuthors: ["Robles Melissa", "Catalina Bernal", "Denniss Raigoso", "Mateo Dulce Rubio"]
writtenBy: "Lucía Kubusch Ramírez"
authorBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique dictum orci ac malesuada. Pellentesque sed finibus erat. In iaculis ante mauris, nec imperdiet sem elementum a. Vivamus tincidunt volutpat nisi nec tempus. Vestibulum enim leo, faucibus nec odio ac, convallis consequat augue. Sed a nulla viverra nisi tempor iaculis at non dolor. Donec ut metus in tellus varius iaculis quis non lorem. Pellentesque porttitor gravida elit ut convallis. Sed ipsum massa, mollis in bibendum vel, varius ut eros. Suspendisse."
translatedBy: "Equipo iaS"
originalPaperUrl: "https://ojs.aaai.org/index.php/AIES/article/view/36707/38845"
traslationPaperUrl: "/SESGO-Spanish-Evaluation-of-Stereotypical-Generative-Output-ES.pdf"
translationNote: "el presente documento corresponde a una traducción no oficial al español con la herramienta DeepL, a partir de una versión publicada en AAAI/ACM Conference on AI, Ethics, and Society (AIES 2025)."
keywords: ["Modelos de lenguaje masivos (MLM)", "Inteligencia artificial", "Sesgo algorítmico", "Sesgo lingüístico digital", "Procesamiento del lenguaje natural", "Español", "Diversidad lingüística", "América Latina", "Evaluación de sesgos", "Inteligencia artificial responsable"]
image: "/biblioteca/imagen_sesgos.jpg"
publishDate: 2024-03-15
---

#### Resumen

Los modelos de lenguaje masivos (MLM) se han integrado rápidamente en la vida cotidiana, pero su aparente neutralidad puede ocultar sesgos derivados de los datos con los que fueron entrenados. Esta editorial analiza el estudio *SESGO: Spanish Evaluation of Stereotypical Generative Outputs*, que constituye la primera evaluación sistemática de sesgos en modelos comerciales de inteligencia artificial en español desde un contexto latinoamericano. El trabajo demuestra que los modelos reproducen estereotipos sobre género, raza, clase social y xenofobia, especialmente cuando deben responder a situaciones ambiguas, y evidencia que las estrategias de mitigación desarrolladas para el inglés no se transfieren eficazmente al español. A partir de estos resultados, la editorial los relaciona con el concepto de Sesgo Lingüístico Digital, que describe la representación desigual de las variedades del español en los datos de entrenamiento. Se argumenta que esta falta de diversidad lingüística y cultural favorece la reproducción de perspectivas anglocéntricas y peninsulares, lo que puede amplificar desigualdades ya existentes y afectar de forma desproporcionada a los más de 500 millones de hispanohablantes. Finalmente, se destaca la necesidad de desarrollar corpus representativos y marcos de evaluación culturalmente situados que permitan construir sistemas de inteligencia artificial más equitativos y adecuados para la diversidad del mundo hispanohablante.

## Introducción

Antes de hablar de sesgos en inteligencia artificial, es conveniente aclarar tres nociones básicas. Primero, los Modelos de Lenguaje Masivos (MLM) son esencialmente máquinas que predicen qué texto viene a continuación basándose en patrones aprendidos de inmensas cantidades de texto. Por lo que, cuando le haces una pregunta a un asistente de inteligencia artificial como ChatGPT, Gemini, o Claude, lo que recibes no es una respuesta pensada y razonada en el sentido humano del término. Lo hacen, de acuerdo con la descripción de Bender et al., como un “loro estocástico”, una máquina que ensambla secuencias de formas lingüísticas según información probabilística, pero sin una comprensión del significado real de las palabras.[^1] 

La segunda noción es que, en este contexto, el sesgo no es un error accidental, sino que se trata de la consecuencia directa de factores como qué datos se recogen y quién los produce, desde qué plataformas, en qué lenguas, o con qué filtros. Blodgett et al. identifican dos grandes categorías de daño: los daños alocacionales, que se producen cuando el sistema distribuye recursos u oportunidades de forma injusta entre grupos sociales, y los daños representacionales, que son aquellos que se producen cuando se degrada, distorsiona o invisibiliza a ciertos grupos.[^2] En este sentido, lo que supone un mayor problema es que cuando Blodgett et al. concluyeron un análisis de 146 artículos sobre sesgo en procesamiento del lenguaje natural, encontraron que la mayoría carecían de razonamiento normativo claro sobre por qué ciertos comportamientos del sistema son dañinos, para quién, y de qué manera.[^3] Es decir, se detectan problemas, pero tampoco se comprende realmente qué está en juego. 

Y por último, la tercera noción es en el caso específico del español, donde Muñoz-Basols et al. proponen el concepto de “Sesgo Lingüístico Digital” (SLD) para designar la hibridez que surge como resultado de entrenar modelos sobre datos de entrenamiento predominantemente ingleses, y dentro del español sobre variedades que no representan la diversidad real del idioma.[^4]

## Resultados del análisis de SESGO

Es sobre este marco que el artículo *SESGO: Spanish Evaluation of Stereotypical Generative Outputs*,[^5] aporta una primera evaluación sistemática de sesgo en MLM comerciales, centrándose en un contexto latinoamericano.   
El método que usaron los investigadores es importante: en lugar de traducir directamente instrucciones elaboradas para el inglés estadounidense, los autores construyen sus instrucciones a partir de dichos y expresiones populares en latinoamérica que codifican estereotipos sobre género, raza, clase y xenofobia. Estas categorías de discriminación son especialmente relevantes en América Latina dado su legado colonial y sus desigualdades estructurales.[^6] Esta decisión se debe a que los estereotipos no son iguales entre culturas; por ejemplo, la narrativa sobre migración latinoamericana en Estados Unidos, no es la misma que puede encontrarse en Colombia o Perú. Por lo tanto, un marco de evaluación que se importa sin ninguna adaptación no puede captarlos.[^7]

Los resultados del análisis, aunque desiguales, fueron  consistentemente preocupantes.   
En escenarios ambiguos, que son aquellos donde la información es insuficiente para dar una respuesta objetiva, los modelos basados en Llama 3.1 (tanto en su versión estándar como en la no censurada) obtuvieron las puntuaciones de sesgo más elevadas, con una exactitud inferior al 50% y una marcada tendencia a discriminar a los grupos históricamente marginalizados. Incluso llegando a asociar a estos grupos con comportamientos negativos o atribuyéndoles características desfavorables. Por su parte, GPT-4o mini y Gemini 2.0 Flash, mostraron un comportamiento más equilibrado, aunque tampoco libre de sesgos.[^8]  
La categoría de xenofobia fue la que, sistemáticamente, produjo las puntuaciones de sesgo más altas en este tipo de escenarios, lo cual indica que son estos estereotipos los que los modelos han procesado con menos herramientas culturalmente apropiadas.[^9]  
No obstante, en escenarios desambiguados, cuando se proporciona contexto, el rendimiento mejora en todos los modelos. Esto sugiere que es la ambigüedad contextual, y no la capacidad del modelo en sí, la que amplifica el sesgo en situaciones de incertidumbre.[^10]

Por lo tanto, este estudio demuestra que las estrategias de mitigación de sesgo desarrolladas para el inglés, no son trasladadas de forma efectiva al español. Tres de los seis modelos evaluados presentaron mayor sesgo al procesar instrucciones en español que al hacerlo con instrucciones equivalentes en inglés.[^11]   
Además, se pudo comprobar que ajustar la temperatura de generación, un parámetro para regular la aleatoriedad de las respuestas, no modificaba significativamente este sesgo. Lo que indica que éste responde a patrones estructurales que son incorporados durante el entrenamiento.[^12]

## Cómo nos afecta

Estos hallazgos tienen implicaciones para más de 500 millones de personas, lo que cobra toda su dimensión al ponerse en contexto con lo que Muñoz-Basols et al. denominan Sesgo Lingüístico Digital. Estos investigadores documentan que los datos utilizados para entrenar modelos como MarIA, uno de los principales MLM en español, desarrollados desde España, presentaban distribuciones muy asimétricas. La mitad del material era español peninsular, Colombia, Argentina y Chile apenas alcanzaban el 5% cada uno, y la mayor parte de los territorios hispanohablantes estaban representados entre el 0,5% y el 1,9%.[^13]   
A esto se añade que muchos MLM en español parten de modelos preentrenados en inglés a los que se incorporan datos en español mediante una técnica de “preentrenamiento continuo”, por lo que el modelo acaba siendo entrenado con una imagen fragmentada y jerarquizada de la lengua.[^14] 

El resultado es que la IA habla un español construido a partir de una representación desigual, donde algunas ocupan una posición dominante y otras apenas están presentes. Por lo que al preguntarle por ejemplo, sobre realidades latinoamericanas, responde desde una perspectiva entrenada principalmente en contextos anglosajones y peninsulares. Se convierte en una herramienta que no es neutral. Que discrimina más en español que en inglés, además de que reproduce y puede llegar a amplificar las desigualdades que existen entre quienes pueden acceder a tecnología de mayor calidad y quienes no.[^15]  
Cuando los datos de internet se usan para entrenar modelos de forma masiva y sin ser curados, las visiones dominantes quedan sobrerrepresentadas y las de los grupos marginalizados son filtradas o silenciadas.[^16]

Muñoz-Basols et al. advierten también de que sin una acción coordinada para desarrollar corpus representativos y modelos que de verdad reflejen la diversidad lingüística, nos arriesgamos a que se consolide lo que llaman “dialectos digitales”: variedades del lenguaje artificiales que los sistemas de IA aprenden a reproducir como si fuera español.[^17]  
En este sentido, la advertencia de SESGO es una llamada de atención para la comunidad hispanohablante. Una inteligencia artificial verdaderamente global no puede limitarse a traducir el inglés al español; debe ser capaz de comprender las realidades culturales, sociales y lingüísticas de quienes la utilizan. De lo contrario, el riesgo no es solo una tecnología menos precisa, sino también menos justa.



#### Bibliografía

Bender, Emily M., Timnit Gebru, Angelina McMillan-Major y Shmargaret Shmitchell. "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?" En *Proceedings of the Conference on Fairness, Accountability, and Transparency (FAccT '21)*, 610–623. Nueva York: ACM, 2021\. [https://doi.org/10.1145/3442188.3445922](https://doi.org/10.1145/3442188.3445922).

Blodgett, Su Lin, Solon Barocas, Hal Daumé III y Hanna Wallach. "Language (Technology) is Power: A Critical Survey of 'Bias' in NLP." En *Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics*, 5454–5476. 2020\.

Muñoz-Basols, Javier, María del Mar Palomares Marín y Francisco Moreno Fernández. "El Sesgo Lingüístico Digital (SLD) en la inteligencia artificial: implicaciones para los modelos de lenguaje masivos en español." *Lengua y Sociedad* 23, n.º 2 (2024): 623–647. [https://doi.org/10.15381/lengsoc.v23i2.28665](https://doi.org/10.15381/lengsoc.v23i2.28665).

Robles, Melissa, Catalina Bernal, Denniss Raigoso y Mateo Dulce Rubio. "SESGO: Spanish Evaluation of Stereotypical Generative Outputs." En *Proceedings of the Eighth AAAI/ACM Conference on AI, Ethics, and Society (AIES 2025\)*, 2214–2226. 2025\.


[^1]:  Emily M. Bender, Timnit Gebru, Angelina McMillan-Major y Shmargaret Shmitchell, "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?", en *Proceedings of the Conference on Fairness, Accountability, and Transparency (FAccT '21)* (Nueva York: ACM, 2021).

[^2]:  Su Lin Blodgett, Solon Barocas, Hal Daumé III y Hanna Wallach, "Language (Technology) is Power: A Critical Survey of 'Bias' in NLP", en *Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics* (2020).

[^3]:  ibid.

[^4]:  Javier Muñoz-Basols, María del Mar Palomares Marín y Francisco Moreno Fernández, "El Sesgo Lingüístico Digital (SLD) en la inteligencia artificial: implicaciones para los modelos de lenguaje masivos en español", *Lengua y Sociedad* 23, n.º 2 (2024). 

[^5]:  Melissa Robles, Catalina Bernal, Denniss Raigoso y Mateo Dulce Rubio, "SESGO: Spanish Evaluation of Stereotypical Generative Outputs", en *Proceedings of the Eighth AAAI/ACM Conference on AI, Ethics, and Society (AIES 2025\)* (2025).

[^6]:  Robles et al., "SESGO".

[^7]:  ibid.

[^8]:  Robles et al., "SESGO".

[^9]:  ibid. 

[^10]:  ibid.

[^11]:  ibid.

[^12]:  ibid.

[^13]:  Muñoz-Basols et al., "Sesgo Lingüístico Digital".

[^14]:  Muñoz-Basols et al., "Sesgo Lingüístico Digital".

[^15]:  Bender et al., "Stochastic Parrots", \[613–614\].; Blodgett et al., "Language (Technology) is Power".

[^16]:  Bender et al., "Stochastic Parrots".

[^17]:  Muñoz-Basols et al., "Sesgo Lingüístico Digital".