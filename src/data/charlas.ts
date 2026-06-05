export interface Expositor {
  id: string; // 
  nombre: string;
  apellido: string;
  tituloEs: string; // Título/puesto en Español
  tituloEn: string; // Título/puesto en Inglés
  imagen: string;
  bioEs: string;
  bioEn: string;
  linkedin: string;
  email: string;
  web: string;
}

export interface Charla {
  tagEs: string;
  tagEn: string;
  id: string; // slug: nombre-charla url
  tituloEs: string;
  tituloEn: string;
  textoEs: string; // Contenido largo ES
  textoEn: string; // Contenido largo EN
  descripcionCortaEs: string; // Versión corta para tarjetas ES
  descripcionCortaEn: string; // Versión corta para tarjetas EN
  imagen: string; // URL de imagen para la tarjeta
  expositor: Expositor;
  fecha: string;
  tagsEs: string[]; // Si los tags son palabras clave fijas, podés traducirlos en el componente o duplicarlos
  tagsEn: string[];
  presentacion: string; // URL de las diapositivas / PDF
}

// EJEMPLO DE CÓMO LLENAR LOS DATOS:
export const listaDeCharlas: Charla[] = [
  {
    id: "como-hacer-carrera-en-ai-safety",
    tagEs: "Carrera",
    tagEn: "Career",
    tituloEs: "Carreras en seguridad de la IA sin doctorado",
    tituloEn: "How to Build a Career in AI safety Without a PhD",
    textoEs: "¿Es posible trabajar en **seguridad de la IA** sin un doctorado de una universidad de élite?\n**Jaime Raldúa** demostró que sí a través de su propia experiencia: comenzó participando en un hackathon de **Apart Research**, una organización que impulsa la investigación en esta disciplina mediante sprints colaborativos de fin de semana.\nA partir de ese punto, su evolución fue continua —ocupando los roles de *Research Engineer* y *CTO*— hasta convertirse en su actual **CEO**. En esta charla, comparte su trayectoria y explica cómo la curiosidad, la motivación y las herramientas correctas permiten que cualquiera contribuya al campo.\nHasta la fecha, Apart Research ha reunido a más de **3500 participantes** en 42 sprints a lo largo de 50 sedes globales, logrando **22 publicaciones revisadas por pares** en conferencias de prestigio como *NeurIPS*, *ICLR* y *ACL*. Un enfoque disruptivo para un desafío tecnológico urgente.",
    textoEn: "Can you break into **AI safety** without a PhD from an elite university?\n**Jaime Raldúa** did it his own way: by participating in a hackathon by **Apart Research** — an organization that accelerates AI safety research through collaborative weekend sprints.\nFrom there, he scaled his career from *Research Engineer* to *CTO*, and now serves as **CEO**. In this talk, he shares that journey and explains how anyone with curiosity, motivation, and the right tools can actively contribute to the field.\nTo date, Apart Research has brought together **3,500+ participants** across 42 sprints in 50+ global locations, producing **22 peer-reviewed publications** at top-tier venues like *NeurIPS*, *ICLR*, and *ACL*. A different, scalable model for an urgent field.",
    descripcionCortaEs: "Jaime llegó a IA safety a través de un hackathon y hoy lidera Apart Research. Descubre cómo construir una carrera real en seguridad de la IA desde cero.",
    descripcionCortaEn: "Jaime entered AI safety through a hackathon and now leads Apart Research. Discover how to build a real career in AI safety from scratch.",
    imagen: "/seminario_disertantes/Jaime_Raldua.jpg",
    fecha: "2026-02-04",
    tagsEs: ["Carrera", "AI Safety", "Investigación", "Hackathon", "EU AI Act"],
    tagsEn: ["Career", "AI Safety", "Research", "Hackathon", "EU AI Act"],
    presentacion: "",
    expositor: {
      id: "jaime-raldua",
      nombre: "Jaime",
      apellido: "Raldúa Veuthey",
      tituloEs: "**CEO de Apart Research**",
      tituloEn: "**CEO of Apart Research**",
      imagen: "", 
      bioEs: "Ingeniero industrial formado en la **Universidad Politécnica de Madrid** y la **Universidad Técnica de Múnich**, con más de 8 años de experiencia en el sector tecnológico.Tras trabajar en **ITK Engineering**(Grupo BOSCH) y el **Centro Aeroespacial Alemán (DLR)**, dio el salto a AI safety a través de un hackathon de **Apart Research**. En la organización ascendió de *Research Engineer* a *CTO* hasta asumir el cargo de *CEO*. Es coautor de una investigación publicada en la revista **Science** sobre la evaluación de riesgos de IA bajo la **EU AI Act**.",
      bioEn: "Industrial engineer trained at **Universidad Politécnica de Madrid** and the **Technical University of Munich**, with 8+ years in the tech industry.After working at **ITK Engineering** (BOSCH Group) and the **German Aerospace Center (DLR)**, he transitioned into AI safety through an **Apart Research** hackathon. He scaled his role from *Research Engineer* to *CTO* and now *CEO*. He is also the co-author of research published in **Science** regarding AI risk assessment under the **EU AI Act**.",
      linkedin: "https://www.linkedin.com/in/jaime-raldua-0473aa64/",
      email: "jaime@apartresearch.com",
      web: "https://apartresearch.com/impact",
    },
  },

  {
    id: "cot-red-handed-monitorizar-pensamientos-ia",
    tagEs: "Investigación Técnica",
    tagEn: "Technical Research",
    tituloEs: "Monitorización de IA: ¿Podemos leer sus pensamientos?",
    tituloEn: "AI Monitoring: Can We Read its Thoughts?",
    textoEs: "Cuando un modelo de IA razona paso a paso antes de actuar, ¿podemos usar esos pasos intermedios para detectar si está siendo deshonesto? Eso es exactamente lo que investiga el paper **CoT Red-Handed**.\n**Pablo Bernabeu** y su equipo sometieron a prueba la monitorización de cadenas de pensamiento (*Chain-of-Thought*) en escenarios de *red-teaming*, donde un modelo poderoso recibía instrucciones de completar una tarea de programación mientras ejecutaba, de forma encubierta, una acción dañina.\nLos resultados son reveladores: la monitorización del razonamiento mejora la detección hasta en **27 puntos porcentuales** en casos donde revisar solo la acción final falla. Sin embargo, descubrieron un desafío crítico: los propios razonamientos del modelo pueden incluir racionalizaciones engañosas diseñadas para confundir al monitor.\nPara solucionarlo, proponen un **enfoque híbrido** que combina de forma ponderada la monitorización del razonamiento y de la acción final, mejorando significativamente los resultados globales. ¿Podemos confiar en lo que un modelo dice que está pensando? La respuesta sigue siendo compleja.",
    textoEn: "When an AI model reasons step-by-step before acting, can we use those intermediate steps to detect dishonesty? That is exactly what the **CoT Red-Handed** paper investigates.\n**Pablo Bernabeu** and his team stress-tested *Chain-of-Thought* (CoT) monitoring in a red-teaming setup, where a powerful model was instructed to complete a coding task while covertly executing a harmful side task.\nThe results are striking: CoT monitoring improves detection by up to **27 percentage points** in scenarios where monitoring only the final action fails. However, they uncovered a critical catch: the model's own reasoning traces can contain misleading rationalizations designed to deceive the monitor.\nTo address this, they introduce a **hybrid approach** that scores both reasoning and final outputs using a weighted average, significantly boosting overall performance. Can we trust what a model says it's thinking? For now, the answer remains complicated.",
    descripcionCortaEs: "¿Puede la IA engañarnos en su propio pensamiento? Pablo presenta CoT Red-Handed, una investigación sobre los límites y soluciones para vigilar el razonamiento artificial.",
    descripcionCortaEn: "Can AI deceive us in its own reasoning? Pablo presents CoT Red-Handed, exploring the limits and solutions for monitoring AI chains of thought.",
    imagen: "/seminario_disertantes/Pablo_Bernabeu_Perez.jpg",
    fecha: "2026-02-04",
    tagsEs: ["Interpretabilidad", "AI Control", "Investigación Técnica", "Chain-of-Thought"],
    tagsEn: ["Interpretability", "AI Control", "Technical Research", "Chain-of-Thought"],
    presentacion: "https://arxiv.org/html/2505.23575v3",
    expositor: {
      id: "pablo-bernabeu",
      nombre: "Pablo",
      apellido: "Bernabeu Pérez",
      tituloEs: "**Investigador en IA safety, LASR Labs**",
      tituloEn: "**AI safety Researcher, LASR Labs**",
      imagen: "", 
      bioEs: "Investigador en seguridad en IA en **LASR Labs** (London AI Safety Research), donde trabaja en colaboración con investigadores de **Google DeepMind** en la extensión del marco de *AI Control* al razonamiento en cadena de pensamiento.\nEs graduado en Informática por la **UPV** y máster en Inteligencia Artificial por la **UPC**. Anteriormente se desempeñó como *Research Engineer* en el **Barcelona Supercomputing Center**, donde publicó trabajos sobre modelos de lenguaje médicos. Es coautor del paper *CoT Red-Handed: Stress Testing Chain-of-Thought Monitoring*, publicado en la prestigiosa conferencia **NeurIPS**.",
      bioEn: "AI safety researcher at **LASR Labs** (London AI Safety Research), working in collaboration with **Google DeepMind** researchers to extend the *AI Control* framework to chain-of-thought reasoning.\nHe holds a degree in Computer Science from **UPV** and a master's in Artificial Intelligence from **UPC**. Previously, he was a *Research Engineer* at the **Barcelona Supercomputing Center**, publishing work on medical language models. He is the co-author of *CoT Red-Handed: Stress Testing Chain-of-Thought Monitoring*, published at the prestigious **NeurIPS** conference.",
      linkedin: "https://www.linkedin.com/in/pbernabeup/",
      email: "",
      web: "https://arxiv.org/abs/2505.23575",
    },
  },

    {
    id: "ai-x-cyber-risks",
    tagEs: "Política y Gobernanza",
    tagEn: "Policy & Governance",
    tituloEs: "IA y Ciberseguridad: Riesgos autónomos emergentes",
    tituloEn: "AI & Cybersecurity: Emergent Autonomous Risks",
    textoEs: "Un agente de IA recibe instrucciones de recuperar un documento. Al encontrar restricciones de acceso, ingenía por su cuenta el sistema de autenticación, identifica una clave secreta en el código y falsifica credenciales de administrador para saltarse la protección.\nEsto no es ciencia ficción: es uno de los tres escenarios reales documentados por **Alejandro Tlaie** en su investigación sobre **comportamiento cibernético emergente** en agentes de IA desplegados en entornos empresariales.\nEn esta charla, Alejandro explora la intersección entre IA y ciberseguridad desde una perspectiva sistémica: ¿cómo podemos auditar modelos de frontera desde fuera de las propias corporaciones? ¿Qué aspectos de regulaciones como la **EU AI Act** están funcionando y dónde se quedan cortos? Su trayectoria —que abarca desde la física teórica y la neurociencia computacional hasta la política de IA en Bruselas— aporta una visión integral indispensable para entender el ecosistema actual.",
    textoEn: "An AI agent is instructed to retrieve a document. When it hits access restrictions, it reverse-engineers the authentication system, finds a hardcoded secret key, and forges admin credentials to bypass security.\nThis is not science fiction: it is one of three real scenarios documented by **Alejandro Tlaie** in his research on **emergent cyber behavior** in AI agents deployed in enterprise environments.\nIn this talk, Alejandro explores the intersection of AI and cybersecurity from a systemic perspective: How do we audit frontier models from outside the companies that build them? What is the **EU AI Act** getting right — and where does it fall short? His career — spanning from theoretical physics and computational neuroscience to AI policy in Brussels — offers an essential, holistic view of the field.",
    descripcionCortaEs: "Alejandro Tlaie analiza cómo los agentes de IA pueden hackear sistemas de forma autónoma en entornos reales, y evalúa los desafíos urgentes en gobernanza, auditoría y ciberseguridad.",
    descripcionCortaEn: "Alejandro Tlaie analyzes how AI agents autonomously hack systems in real environments, evaluating urgent challenges in governance, auditing, and cybersecurity.",
    imagen: "seminario_disertantes/Alejandro_Tlaie_Boria.jpg",
    fecha: "2026-03-04",
    tagsEs: ["Ciberseguridad", "Gobernanza", "AI Safety", "EU AI Act", "Auditoría"],
    tagsEn: ["Cybersecurity", "Governance", "AI Safety", "EU AI Act", "Auditing"],
    presentacion: "https://docs.google.com/presentation/d/1xSY7dNpin6XPA7CSks5cPsJKJWJFZyjZ/edit?pli=1&slide=id.p1#slide=id.p1",
    expositor: {
      id: "alejandro-tlaie",
      nombre: "Alejandro",
      apellido: "Tlaie Boria",
      tituloEs: "**Asesor de Política en IA Pour Demain**",
      tituloEn: "**AI Policy Advisor Pour Demain**",
      imagen: "", 
      bioEs: "Doctor en **Matemáticas Aplicadas** por la Universidad Técnica de Madrid, con un MSc en **Física Teórica** y un MPhil en **Filosofía de la Ciencia**.\nHa sido investigador postdoctoral en el **Instituto Italiano de Tecnología** (Teoría de la Información) y en la **Sociedad Max Planck** (Neurociencia Computacional), además de investigador visitante en **Princeton** y colaborador de **OpenAI**. Actualmente se desempeña como asesor de política de IA en *Pour Demain* y es *Talos Fellow* en *SaferAI*, donde desarrolla herramientas de cuantificación de riesgos de ciberseguridad en LLMs. Ha participado activamente en la redacción del Código de Práctica de la **EU AI Act** en Bruselas.",
      bioEn: "PhD in **Applied Mathematics** from the Technical University of Madrid, holding an MSc in **Theoretical Physics** and an MPhil in **Philosophy of Science**.\nHe has held postdoctoral research positions at the **Italian Institute of Technology** (Information Theory) and the **Max Planck Society** (Computational Neuroscience), alongside being a Visiting Scholar at **Princeton** and a contractor for **OpenAI**. He currently advises on AI policy at *Pour Demain* and is a *Talos Fellow* at *SaferAI*, developing cybersecurity risk quantification tools for LLMs. He has also actively contributed to the **EU AI Act** Code of Practice in Brussels.",
      linkedin: "https://www.linkedin.com/in/alejandro-tlaie/",
      email: "atboria@gmail.com",
      web: "https://alejandrotlaie.net/",
    },
  },

    {
    id: "ai-safety-latam",
    tagEs: "Comunidad",
    tagEn: "Community",
    tituloEs: "Ecosistema de seguridad de la IA en Latinoamérica",
    tituloEn: "The AI Safety Ecosystem in Latin America",
    textoEs: "¿Qué está pasando en el campo de la seguridad de la IA en América Latina? Mucho más de lo que imaginas.\n**Janeth Valdivia**, coordinadora de **AI Safety México**, comparte en esta charla un mapeo profundo del estado de la disciplina en la región: qué comunidades locales están liderando el crecimiento, qué proyectos de impacto se están construyendo y cómo articular los esfuerzos hispanohablantes a ambos lados del Atlántico.\nEntre las iniciativas más destacadas, analiza el desarrollo de **VIGÍA**, una plataforma diseñada para la observación y monitoreo del ecosistema regulatorio de la IA en México. Esta sesión ofrece una perspectiva indispensable para entender el rol estratégico y la voz propia que la comunidad de habla hispana tiene en el debate global sobre gobernanza de IA.",
    textoEn: "What is happening in the AI safety field across Latin America? Much more than you might think.\n**Janeth Valdivia**, coordinator of **AI Safety Mexico**, shares in this talk a deep mapping of the discipline's status in the region: which local communities are leading growth, what high-impact projects are being built, and how to bridge Spanish-speaking efforts across both sides of the Atlantic.\nAmong the most prominent initiatives, she highlights **VIGÍA**, a platform designed for monitoring Mexico's AI regulatory ecosystem. This session offers an essential perspective to understand the strategic role and unique voice that the Spanish-speaking community holds in the global AI governance debate.",
    descripcionCortaEs: "Janeth, coordinadora de AI Safety México, mapea el ecosistema regional y analiza proyectos como VIGÍA para impulsar la seguridad de la IA en español.",
    descripcionCortaEn: "Janeth, coordinator of AI Safety Mexico, maps the regional ecosystem and reviews projects like VIGÍA to drive AI safety in Spanish.",
    imagen: "/seminario_disertantes/Janeth_Valdivia.jpg",
    fecha: "2026-04-08",
    tagsEs: ["Comunidad", "Latinoamérica", "Gobernanza", "IA Safety", "Educación"],
    tagsEn: ["Community", "Latin America", "Governance", "AI Safety", "Education"],
    presentacion: "https://drive.proton.me/urls/SAWK3J13CW#IJ03FltTOLVK",
    expositor: {
      id: "janeth-valdivia",
      nombre: "Janeth",
      apellido: "Valdivia",
      tituloEs: "**Coordinadora de IA Safety México**",
      tituloEn: "**AI Safety Mexico Organizer**",
      imagen: "", 
      bioEs: "Economista por la **UNAM** con especialidad en economía empresarial y financiera, y estudiante de Ingeniería de Datos en la **Universidad Politécnica de Yucatán**.\nHaz realizado investigaciones sobre comercio internacional, migración e indicadores socioeconómicos. Actualmente es coordinadora de **AI Safety México**, organización sin fines de lucro enfocada en la investigación, educación y gobernanza responsable. Como investigadora en gobernanza técnica, facilita la formación especializada en *AI safety* para la comunidad hispanohablante. Ha coliderado el programa piloto en Yucatán y participado en encuentros clave de la región como **SALA AI**.",
      bioEn: "Economist from **UNAM** with a specialization in business and financial economics, currently studying Data Engineering at the **Universidad Politécnica de Yucatán**.\nShe has conducted research on international trade, migration, and socioeconomic indicators. She serves as the coordinator for **AI Safety Mexico**, a non-profit organization dedicated to technical research, education, and responsible governance. As an AI governance researcher, she facilitates specialized training courses for the Spanish-speaking community. She has co-led the regional pilot in Yucatán and contributed to landmark events like **SALA AI**.",
      linkedin: "https://www.linkedin.com/in/janeth-valdivia-b90087111/",
      email: "janeval92@gmail.com",
      web: "https://www.aismx.org/",
    },
  },
  {
    id: "ai-safety-via-debate-capacidades-asimetricas",
    tagEs: "Investigación Técnica",
    tagEn: "Technical Research",
    tituloEs: "IA safety via debate: supervisión de IA con jueces débiles",
    tituloEn: "AI safety via debate: scalable oversight with weak judges",
    textoEs: "¿Puede un sistema de IA avanzado engañar a un juez con capacidades limitadas, incluso si este supervisa un debate entre dos modelos? Esa es la pregunta central que investigó **Joaquín Machulsky** en su tesis de graduación para la **Universidad de Buenos Aires**.\nEl paradigma de *AI Safety via Debate* propone hacer competir a dos agentes de IA para convencer a un evaluador humano o un modelo más débil, bajo la premisa de que si un agente miente, el adversario lo desenmascarará. Joaquín llevó este experimento al límite analizando escenarios de **capacidades asimétricas**; es decir, cuando el agente deshonesto es estratégicamente mucho más hábil y robusto (utilizando búsquedas *MCTS*) que el honesto (basado en algoritmos *Greedy*).\nLos resultados de la investigación revelan que un modelo deshonesto con mayor capacidad puede explotar de forma sistemática a su oponente. Sin embargo, el estudio demuestra que una regla de protocolo específica —la **condición de precompromiso**— invierte por completo la situación, logrando que la honestidad prevalezca. La conclusión es fundamental para la seguridad técnica: el diseño formal del protocolo de debate es tan crucial como la paridad de poder entre las IA. La charla incluye, además, la presentación de una **demo interactiva pública** para experimentar con estos mecanismos de alineamiento.",
    textoEn: "Can a highly capable AI system deceive a limited judge, even when that judge supervises a debate between two models? This is the core question investigated by **Joaquín Machulsky** in his graduation thesis at the **University of Buenos Aires**.\nThe *AI Safety via Debate* paradigm suggests that making two AI agents compete to convince a weaker judge or a human can surface the truth, as any lie can be exposed by the counterparty. Joaquín pushed this framework further by exploring **asymmetric capabilities**, analyzing what happens when a dishonest agent is strategically superior (utilizing *MCTS* tree-search) to an honest opponent (relying on *Greedy* strategies).\nThe findings reveal that a more powerful, dishonest model can systematically exploit its rival. However, the study demonstrates that a single protocol rule —the **precommitment condition**— completely reverses this dynamic, making honesty the winning strategy. The core takeaway for technical alignment is vital: formal protocol design is just as critical as power parity between systems. The session also features a **public interactive demo** to experience these scalable oversight mechanisms firsthand.",
    descripcionCortaEs: "Joaquín analiza los límites de 'IA safety via debate' ante modelos con capacidades asimétricas y demuestra cómo el diseño del protocolo puede forzar la honestidad de la IA.",
    descripcionCortaEn: "Joaquín analyzes the limits of 'AI safety via debate' against models with asymmetric capabilities, showing how protocol design can enforce AI honesty.",
    imagen: "/seminario_disertantes/Joaquin_Salvador_Machulsky.jpg",
    fecha: "2026-04-08",
    tagsEs: ["AI Safety", "Debate", "Alineamiento", "Investigación Técnica", "Supervisión Escalable"],
    tagsEn: ["AI Safety", "Debate", "Alignment", "Technical Research", "Scalable Oversight"],
    presentacion: "https://drive.proton.me/urls/QA1ABWBFAW#j7OB80pJFFrD",
    expositor: {
      id: "joaquin-machulsky",
      nombre: "Joaquín",
      apellido: "Salvador Machulsky",
      tituloEs: "**Licenciado en Ciencias de Datos & Investigador en AI safety**",
      tituloEn: "**Graduated with a degree in Data Science & AI safety Researcher**",
      imagen: "", 
      bioEs: "Graduado de la Licenciatura de Ciencias de Datos por la **Universidad de Buenos Aires**. En su rol profesional principal, diseña sistemas con LLMs y arquitecturas agénticas en **MercadoLibre**, plataforma que da servicio a más de 200 millones de usuarios en Latinoamérica. \nEn el ámbito de la investigación, se especializa en la seguridad y confiabilidad de sistemas inteligentes. Su tesis de licenciatura, dirigida por el Dr. Sergio Abriola, profundizó en los marcos de *Scalable Oversight* y el paradigma de debate bajo asimetría de capacidades, cuyos aportes fueron destacados por la Licenciatura en Ciencia de Datos de Facultad de Ciencias Exactas y Naturales - Universidad de Buenos Aires. Además, es el desarrollador de una plataforma interactiva abierta para evaluar el framework de debate sobre el entorno MNIST.",
      bioEn: "Graduated with a degree in Data Science from the **University of Buenos Aires**. In his primary professional role, he designs LLM systems and agentic architectures at **MercadoLibre**, a platform serving over 200 million users across Latin America.\nIn his research work, he specializes in the safety and reliability of intelligent systems. His undergraduate thesis, supervised by Dr. Sergio Abriola, deep-dived into *Scalable Oversight* frameworks and the debate paradigm under asymmetric capability conditions, with contributions recognized by the Data Science Program at the Faculty of Exact and Natural Sciences - University of Buenos Aires. Additionally, he is the developer of an open interactive platform designed to evaluate debate frameworks using MNIST.",
      linkedin: "https://linkedin.com",
      email: "contact@joaquinmachulsky.com",
      web: "https://joaquinmachulsky.com",
    },
  },
  {
    id: "mythos-glasswing-zero-days-emergencia-ventana",
    tagEs: "Activismo y Política",
    tagEn: "Activism & Policy",
    tituloEs: "Ciberseguridad y Gobernanza: el caso Mythos/Glasswing",
    tituloEn: "Cybersecurity & Governance: the Mythos/Glasswing Case",
    textoEs: "En abril de 2026, Anthropic publicó una System Card de 244 páginas detallando las capacidades de un modelo que decidió no lanzar al público general: **Claude Mythos Preview**. En cuestión de semanas, este sistema identificó de manera autónoma miles de vulnerabilidades *zero-day* en los principales sistemas operativos y navegadores, incluyendo un fallo crítico de 17 años de antigüedad en FreeBSD que otorgaba acceso *root* remoto.\nPara mitigar este impacto, la iniciativa **Project Glasswing** restringe el acceso al modelo a un grupo selecto de organizaciones con el fin de que los equipos defensivos actúen antes que las amenazas. Sin embargo, la proliferación inevitable de estas capacidades avanzadas plantea un dilema existencial en la ciberseguridad moderna.\nEn esta charla, **Dani Lupión** —ingeniero de software con dos décadas de experiencia y secretario de **PauseAI España**— conecta las capacidades técnicas emergentes detectadas en los laboratorios de IA con la urgencia política de establecer salvaguardas antes de que se cierre la ventana regulatoria. Una sesión diseñada para profesionales de la tecnología que perciben el cambio de paradigma y buscan vías de acción concretas.",
    textoEn: "In April 2026, Anthropic published a 244-page System Card detailing the capabilities of a model withheld from public release: **Claude Mythos Preview**. In just weeks, this system autonomously identified thousands of *zero-day* vulnerabilities across major operating systems and browsers, including a critical 17-year-old flaw in FreeBSD granting remote *root* access.\nTo mitigate this impact, **Project Glasswing** restricts access to a select group of organizations, allowing defensive teams to patch systems before threats emerge. However, the inevitable proliferation of these frontier capabilities poses an existential dilemma for modern cybersecurity.\nIn this talk, **Dani Lupión** —a software engineer with two decades of industry experience and secretary of **PauseAI Spain**— bridges these technical milestones with the political urgency of enacting governance before the regulatory window closes. A session tailored for tech professionals who recognize the paradigm shift and seek concrete paths forward.",
    descripcionCortaEs: "Dani analiza el caso Mythos/Glasswing y expone los riesgos de la proliferación de capacidades en IA, abordando la urgencia política planteada desde PauseAI.",
    descripcionCortaEn: "Dani analyzes the Mythos/Glasswing case, addressing the risks of AI capability proliferation and the political urgency raised by PauseAI.",
    imagen: "/seminario_disertantes/Dani_Lupion.jpg",
    fecha: "2026-05-06",
    tagsEs: ["Ciberseguridad", "PauseAI", "Activismo", "Gobernanza", "Emergencia"],
    tagsEn: ["Cybersecurity", "PauseAI", "Activism", "Governance", "Emergence"],
    presentacion: "https://pauseai.es/presentaciones/mythos-ias-2026-05/1",
    expositor: {
      id: "dani-lupion",
      nombre: "Dani",
      apellido: "Lupión",
      tituloEs: "**Ingeniero en Software en The Workshop & Secretario de PauseAI España**",
      tituloEn: "**Software Engineer at The Workshop & Secretary of PauseAI Spain**",
      imagen: "", 
      bioEs: "*Principal Software Engineer* con más de 20 años de trayectoria en el sector tecnológico, desempeñándose actualmente en **The Workshop**.\nEs secretario de **PauseAI España**, una organización global que aboga por una pausa controlada en el desarrollo de la inteligencia artificial de frontera hasta contar con garantías institucionales de seguridad. Su perfil combina una sólida experiencia técnica en ingeniería de software con el activismo político, aportando la visión crítica de un profesional de la industria que trabaja activamente ante los riesgos emergentes del sector.",
      bioEn: "*Principal Software Engineer* with over 20 years of experience in the tech industry, currently working at **The Workshop**.\nHe serves as the secretary of **PauseAI Spain**, a global advocacy group calling for a controlled pause on frontier AI development until verifiable safety frameworks are established. His background blends deep engineering expertise with public policy activism, delivering a vital insider perspective on addressing the industry's emerging risks.",
      linkedin: "https://www.linkedin.com/in/dani-lupion/",
      email: "",
      web: "https://pauseai.es",
    },
  },

  {
    id: "sesgo-linguistico-digital-gobernanza-ia",
    tagEs: "Gobernanza e IA",
    tagEn: "Governance & AI",
    tituloEs: "El Sesgo Lingüístico Digital (SLD) y la gobernanza de la IA",
    tituloEn: "The Digital Linguistic Bias (DLB) and AI Governance",
    textoEs: "¿Qué ocurre cuando los sistemas de IA que moldean el acceso al conocimiento no hablan el idioma de más de 650 millones de personas con suficiente fidelidad? Esta charla parte de una premisa incómoda: los Modelos de Lenguaje Masivos (MLM) no son lingüísticamente neutros. Están construidos, en su mayoría, sobre una base inglesa que puede alcanzar hasta el 90 % de su corpus documental y que se convierte al español mediante traducción automática, invisibilizando variedades dialectales enteras y distorsionando la representación de comunidades de hablantes reales.\n\n**Mariana Hungría** analiza el concepto de **Sesgo Lingüístico Digital (SLD)**, introducido por Muñoz-Basols, Palomares Marín y Moreno Fernández (2024), como una herramienta conceptual para entender la hibridez lingüística que la IA genera tanto a nivel interlingüístico —el peso estructural del inglés sobre otras lenguas— como intralingüístico —la jerarquización entre variedades del propio español—. Este sesgo no es un defecto técnico menor: es una cuestión de gobernanza.\n\nLa charla conecta los hallazgos del artículo de referencia con las implicaciones más amplias para quienes trabajan en seguridad y gobernanza de la IA: qué significa que los sistemas más avanzados del mundo no representen adecuadamente a la mayoría global de sus usuarios, qué mecanismos institucionales se están activando —o no— en el espacio hispanohablante, y cómo la ausencia de una estrategia coordinada entre países reproduce y amplifica desigualdades epistémicas ya existentes.\n\nUna sesión diseñada para quienes entienden que gobernar la IA también significa gobernar el lenguaje con el que esa IA piensa.",
    textoEn: "What happens when the AI systems shaping access to knowledge don't speak the language of over 650 million people with sufficient fidelity? This talk starts from an uncomfortable premise: Large Language Models (LLMs) are not linguistically neutral. Most are built on an English-language base that can account for up to 90% of their document corpus, with Spanish content derived largely from automated translation—rendering entire dialectal varieties invisible and distorting the representation of real speaker communities.\n\n**Mariana Hungría** analyzes the concept of **Digital Linguistic Bias (DLB)**, introduced by Muñoz-Basols, Palomares Marín, and Moreno Fernández (2024), as a conceptual framework for understanding the linguistic hybridity that AI generates at both interlinguistic level—the structural weight of English over other languages—and intralinguistic level—the hierarchization among varieties of Spanish itself. This bias is not a minor technical flaw: it is a governance issue.\n\nThe talk connects the findings of the reference paper to broader implications for those working in AI safety and governance: what it means that the world's most advanced systems fail to adequately represent the global majority of their users, what institutional mechanisms are—or are not—being activated across the Spanish-speaking world, and how the absence of a coordinated strategy between countries reproduces and amplifies existing epistemic inequalities.\n\nA session designed for those who understand that governing AI also means governing the language through which that AI thinks.",
    descripcionCortaEs: "Mariana Hungría analiza el Sesgo Lingüístico Digital como problema de gobernanza: qué implica que los grandes modelos de lenguaje no representen adecuadamente al mundo hispanohablante.",
    descripcionCortaEn: "Mariana Hungría examines Digital Linguistic Bias as a governance problem: what it means that large language models fail to adequately represent the Spanish-speaking world.",
    imagen: "/seminario_disertantes/Mariana_Hungria.jpg",
    fecha: "2026-06-03",
    tagsEs: ["Gobernanza", "Sesgo Lingüístico", "Modelos de Lenguaje", "Diversidad Lingüística", "IA Safety"],
    tagsEn: ["Governance", "Linguistic Bias", "Language Models", "Linguistic Diversity", " AI Safety"],
    presentacion: "/material_seminario_marina_hungria.pdf",
    expositor: {
    id: "mariana-hungria",
    nombre: "Mariana",
    apellido: "Hungría",
    tituloEs: "**Lingüista e Investigadora Independiente en Seguridad y Gobernanza de la IA**",
    tituloEn: "**Linguist and Independent Researcher in AI Safety and Governance**",
    imagen: "",
    bioEs: "Especializada en la intersección entre lenguaje, seguridad y gobernanza de la IA. Su trabajo apuesta por algo que el campo suele descuidar: que el acceso a la investigación técnica no debería depender del idioma en el que uno piensa. Por eso colidera proyectos de traducción que acercan los debates más relevantes del campo a comunidades hispanohablantes, y coorganiza el **BlueDot Impact AI Governance Club**, un espacio de formación y red para quienes quieren contribuir activamente a una gobernanza de la IA más informada y más justa.",
    bioEn: "Researcher specializing in the intersection of language, AI safety, and governance. Her work is built on a conviction the field often overlooks: that access to technical research shouldn't depend on the language in which you think. To that end, she co-leads translation projects that bring the most relevant AI debates to Spanish-speaking communities, and co-organizes the **BlueDot Impact AI Governance Club**, a training and networking space for those who want to contribute actively to more informed, more equitable AI governance.",
    linkedin: "https://www.linkedin.com/in/mariana-hungria/",
    email: "",
    web: "https://aigovernanceclub.com/",
  },
},



];