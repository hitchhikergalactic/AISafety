---
title: "Linguistic Bias and Cultural Diversity in the Evaluation of Language Models"
summary: "This editorial reflects on how the biases of language models can particularly affect those of us who use AI in Spanish. Drawing on the findings of SESGO and the concept of Digital Linguistic Bias, it examines how the unequal representation of Spanish varieties and the lack of cultural context can lead these systems to reproduce, and even reinforce, existing inequalities. In light of this, it highlights the need to develop an AI that not only speaks Spanish, but is also able to represent the diversity of those who speak it."
originalAuthors: ["Robles Melissa", "Catalina Bernal", "Denniss Raigoso", "Mateo Dulce Rubio"]
writtenBy: "Lucía Kubusch Ramírez"
authorBio: "A lawyer specialized in Technology Law and a graduate in International Relations and International and European Law, she focuses on how artificial intelligence is transforming our institutions, rights, and societies. Her work explores questions of AI governance, regulation, and safety, as well as the social and cultural challenges associated with its development. She currently takes part in several initiatives in this field, combining legal, social, and ethical perspectives."
translatedBy: "iaS Team"
originalPaperUrl: "https://ojs.aaai.org/index.php/AIES/article/view/36707/38845"
translationNote: "This article is the English version of an editorial that accompanies the unofficial Spanish translation of research published in the Proceedings of the AAAI/ACM Conference on AI, Ethics, and Society (AIES 2025). The translation tool used was DeepL."
keywords: ["Large language models (LLMs)", "Artificial intelligence", "Algorithmic bias", "Digital linguistic bias", "Natural language processing", "Spanish", "Linguistic diversity", "Latin America", "Bias evaluation", "Responsible artificial intelligence"]
image: "/biblioteca/imagen_sesgos.jpg"
publishDate: 2026-08-25
---

#### Abstract

Large language models (LLMs) have rapidly become embedded in everyday life, but their apparent neutrality can conceal biases derived from the data on which they were trained. This editorial examines the study *SESGO: Spanish Evaluation of Stereotypical Generative Outputs*, which constitutes the first systematic evaluation of bias in commercial artificial intelligence models in Spanish from a Latin American context. The study demonstrates that the models reproduce stereotypes related to gender, race, social class, and xenophobia, especially when responding to ambiguous situations, and provides evidence that mitigation strategies developed for English do not transfer effectively to Spanish. Based on these results, the editorial relates them to the concept of Digital Linguistic Bias, which describes the unequal representation of varieties of Spanish in training data. It argues that this lack of linguistic and cultural diversity favors the reproduction of Anglocentric and Peninsular Spanish perspectives, which can amplify existing inequalities and disproportionately affect the more than 500 million Spanish speakers worldwide. Finally, it highlights the need to develop representative corpora and culturally situated evaluation frameworks that make it possible to build more equitable artificial intelligence systems suited to the diversity of the Spanish-speaking world.

## Introduction

Before discussing bias in artificial intelligence, it is useful to clarify three basic concepts. First, large language models (LLMs) are essentially machines that predict what text comes next based on patterns learned from immense quantities of text. Therefore, when you ask an artificial intelligence assistant such as ChatGPT, Gemini, or Claude a question, what you receive is not an answer thought through and reasoned in the human sense of the term. According to Bender et al.'s description, they do so as a "stochastic parrot": a machine that assembles sequences of linguistic forms according to probabilistic information, but without an understanding of the actual meaning of the words.[^1]

The second concept is that, in this context, bias is not an accidental error, but rather the direct consequence of factors such as what data are collected and who produces them, which platforms they come from, which languages are represented, and what filters are applied. Blodgett et al. identify two broad categories of harm: allocational harms, which occur when a system distributes resources or opportunities unfairly among social groups, and representational harms, which occur when certain groups are demeaned, distorted, or rendered invisible.[^2] In this sense, a greater concern is that when Blodgett et al. completed a review of 146 papers on bias in natural language processing, they found that most lacked clear normative reasoning about why certain system behaviors are harmful, to whom, and in what way.[^3] In other words, problems are detected, but what is really at stake is not fully understood.

Finally, the third concept concerns the specific case of Spanish, where Muñoz-Basols et al. propose the concept of "Digital Linguistic Bias" (DLB) to describe the hybridity that arises from training models on predominantly English-language data and, within Spanish, on varieties that do not represent the language's actual diversity.[^4]

## Results of the SESGO Analysis

Against this framework, the article *SESGO: Spanish Evaluation of Stereotypical Generative Outputs*,[^5] provides a first systematic evaluation of bias in commercial LLMs, focusing on a Latin American context.

The researchers' method is important: rather than directly translating prompts developed for U.S. English, the authors construct their prompts from sayings and popular expressions used in Latin America that encode stereotypes about gender, race, class, and xenophobia. These categories of discrimination are especially relevant in Latin America given the region's colonial legacy and structural inequalities.[^6] This decision reflects the fact that stereotypes are not the same across cultures; for example, the narrative about Latin American migration in the United States is not the same as that found in Colombia or Peru. Therefore, an evaluation framework imported without any adaptation cannot capture them.[^7]

Although uneven, the results were consistently concerning. In ambiguous scenarios, where the information available is insufficient to give an objective answer, the Llama 3.1-based models (both the standard and uncensored versions) obtained the highest bias scores, with accuracy below 50% and a marked tendency to discriminate against historically marginalized groups. They even associated these groups with negative behaviors or attributed unfavorable characteristics to them. GPT-4o mini and Gemini 2.0 Flash, for their part, showed more balanced behavior, although they were not free of bias.[^8]

Xenophobia was the category that consistently produced the highest bias scores in this type of scenario, indicating that these are the stereotypes the models have processed with fewer culturally appropriate tools.[^9]

However, in disambiguated scenarios, when context is provided, performance improves across all models. This suggests that contextual ambiguity, rather than the model's capability itself, is what amplifies bias in situations of uncertainty.[^10]

Therefore, this study demonstrates that bias-mitigation strategies developed for English are not transferred effectively to Spanish. Three of the six models evaluated showed greater bias when processing prompts in Spanish than when processing equivalent prompts in English.[^11]

The researchers also found that adjusting generation temperature, a parameter used to regulate the randomness of responses, did not significantly change this bias. This indicates that it reflects structural patterns incorporated during training.[^12]

## How This Affects Us

These findings have implications for more than 500 million people, and their full significance becomes clear when considered in the context of what Muñoz-Basols et al. call Digital Linguistic Bias. These researchers document that the data used to train models such as MarIA, one of the leading Spanish-language LLMs developed in Spain, showed highly asymmetric distributions. Half of the material was Peninsular Spanish; Colombia, Argentina, and Chile each accounted for only 5%; and most Spanish-speaking territories were represented at levels between 0.5% and 1.9%.[^13]

In addition, many Spanish-language LLMs start from models pretrained in English, to which Spanish-language data are added through a technique known as "continued pretraining," so the model ultimately ends up trained on a fragmented and hierarchical representation of the language.[^14]

The result is that AI speaks a form of Spanish constructed from an uneven representation, in which some varieties occupy a dominant position while others are scarcely present. When asked, for example, about Latin American realities, it responds from a perspective trained primarily on Anglophone and Peninsular Spanish contexts. It becomes a tool that is not neutral. It discriminates more in Spanish than in English, while also reproducing and potentially amplifying the inequalities between those who can access higher-quality technology and those who cannot.[^15]

When internet data are used to train models at massive scale and without curation, dominant viewpoints become overrepresented and those of marginalized groups are filtered out or silenced.[^16]

Muñoz-Basols et al. also warn that, without coordinated action to develop representative corpora and models that genuinely reflect linguistic diversity, we risk consolidating what they call "digital dialects": artificial language varieties that AI systems learn to reproduce as though they were Spanish.[^17]

In this sense, SESGO's warning is a wake-up call for the Spanish-speaking world. A genuinely global artificial intelligence system cannot simply translate English into Spanish; it must be capable of understanding the cultural, social, and linguistic realities of those who use it. Otherwise, the risk is not only technology that is less accurate, but also technology that is less fair.

#### Bibliography

Bender, Emily M., Timnit Gebru, Angelina McMillan-Major, and Shmargaret Shmitchell. "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?" In *Proceedings of the Conference on Fairness, Accountability, and Transparency (FAccT '21)*, 610–623. New York: ACM, 2021. https://doi.org/10.1145/3442188.3445922.

Blodgett, Su Lin, Solon Barocas, Hal Daumé III, and Hanna Wallach. "Language (Technology) is Power: A Critical Survey of 'Bias' in NLP." In *Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics*, 5454–5476. 2020.

Muñoz-Basols, Javier, María del Mar Palomares Marín, and Francisco Moreno Fernández. "El Sesgo Lingüístico Digital (SLD) en la inteligencia artificial: implicaciones para los modelos de lenguaje masivos en español." *Lengua y Sociedad* 23, no. 2 (2024): 623–647. https://doi.org/10.15381/lengsoc.v23i2.28665.

Robles Melissa, Catalina Bernal, Denniss Raigoso, and Mateo Dulce Rubio. "SESGO: Spanish Evaluation of Stereotypical Generative Outputs." In *Proceedings of the Eighth AAAI/ACM Conference on AI, Ethics, and Society (AIES 2025)*, 2214–2226. 2025.

[^1]: Emily M. Bender, Timnit Gebru, Angelina McMillan-Major, and Shmargaret Shmitchell, "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?", in *Proceedings of the Conference on Fairness, Accountability, and Transparency (FAccT '21)* (New York: ACM, 2021).
[^2]: Su Lin Blodgett, Solon Barocas, Hal Daumé III, and Hanna Wallach, "Language (Technology) is Power: A Critical Survey of 'Bias' in NLP", in *Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics* (2020).
[^3]: Ibid.
[^4]: Javier Muñoz-Basols, María del Mar Palomares Marín, and Francisco Moreno Fernández, "El Sesgo Lingüístico Digital (SLD) en la inteligencia artificial: implicaciones para los modelos de lenguaje masivos en español", *Lengua y Sociedad* 23, no. 2 (2024).
[^5]: Melissa Robles, Catalina Bernal, Denniss Raigoso, and Mateo Dulce Rubio, "SESGO: Spanish Evaluation of Stereotypical Generative Outputs", in *Proceedings of the Eighth AAAI/ACM Conference on AI, Ethics, and Society (AIES 2025)* (2025).
[^6]: Robles et al., "SESGO".
[^7]: Ibid.
[^8]: Robles et al., "SESGO".
[^9]: Ibid.
[^10]: Ibid.
[^11]: Ibid.
[^12]: Ibid.
[^13]: Muñoz-Basols et al., "Sesgo Lingüístico Digital".
[^14]: Muñoz-Basols et al., "Sesgo Lingüístico Digital".
[^15]: Bender et al., "Stochastic Parrots", [613–614]; Blodgett et al., "Language (Technology) is Power".
[^16]: Bender et al., "Stochastic Parrots".
[^17]: Muñoz-Basols et al., "Sesgo Lingüístico Digital".
