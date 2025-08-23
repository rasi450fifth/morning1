export interface FrenchNoun {
  french: string;
  english: string;
  example: string;
}

export interface FrenchVerb {
  verb: string;
  conjugations: {
    je: string;
    tu: string;
    il: string;
    nous: string;
    vous: string;
    ils: string;
  };
}

export interface GrammarLesson {
  title: string;
  explanation: string;
  example: string;
}

export interface HistoryEvent {
  year: string;
  description: string;
}

export interface HistoricalFigure {
  name: string;
  dates: string;
  biography: string;
  notable: string;
}

export interface ScienceFact {
  title: string;
  explanation: string;
  field: string;
}

export interface MathConcept {
  title: string;
  explanation: string;
  formula?: string;
}

export interface NeuroFact {
  title: string;
  explanation: string;
  funFact: string;
}

export interface Artwork {
  title: string;
  artist: string;
  description: string;
  location: string;
  imageUrl: string;
}

export interface Etymology {
  word: string;
  pronunciation: string;
  origin: string;
  meaning: string;
}

export interface Literature {
  title: string;
  author: string;
  opening: string;
}

export interface Puzzle {
  question: string;
  solution: string;
}

export interface Philosophy {
  title: string;
  question: string;
  explores: string;
}

export interface Fallacy {
  name: string;
  example: string;
  explanation: string;
}

export interface CognitiveBias {
  name: string;
  description: string;
  watchFor: string;
}

export interface Innovation {
  challenge: string;
  solution: string;
}

export interface Design {
  example: string;
  principle: string;
  details: string;
}

export interface Invention {
  item: string;
  story: string;
  lesson: string;
}

export interface Cultural {
  problem: string;
  solutions: Array<{
    country: string;
    approach: string;
    color: string;
  }>;
}

export interface Consequences {
  case: string;
  story: string;
  lesson: string;
}

export interface AltHistory {
  scenario: string;
  speculation: string;
  impact: string;
}

export interface Joke {
  setup: string;
  punchline: string;
}

const getDayOfYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
};

// Content rotates based on day of year to ensure variety
const getRotatingIndex = (arrayLength: number) => {
  return getDayOfYear() % arrayLength;
};

export const frenchNouns: FrenchNoun[] = [
  {
    french: "la bibliothèque",
    english: "the library",
    example: "Je vais à la bibliothèque chaque mardi."
  },
  {
    french: "le parapluie",
    english: "the umbrella", 
    example: "N'oublie pas ton parapluie!"
  },
  {
    french: "la cuisinière",
    english: "the cook/stove",
    example: "Ma grand-mère est une excellente cuisinière."
  },
  {
    french: "l'ordinateur",
    english: "the computer",
    example: "Mon ordinateur est très rapide."
  },
  {
    french: "la pharmacie",
    english: "the pharmacy",
    example: "La pharmacie ferme à dix-huit heures."
  }
];

export const frenchVerbs: FrenchVerb[] = [
  {
    verb: "prendre (to take)",
    conjugations: {
      je: "prends",
      tu: "prends", 
      il: "prend",
      nous: "prenons",
      vous: "prenez",
      ils: "prennent"
    }
  },
  {
    verb: "faire (to do/make)",
    conjugations: {
      je: "fais",
      tu: "fais",
      il: "fait", 
      nous: "faisons",
      vous: "faites",
      ils: "font"
    }
  },
  {
    verb: "venir (to come)",
    conjugations: {
      je: "viens",
      tu: "viens",
      il: "vient",
      nous: "venons", 
      vous: "venez",
      ils: "viennent"
    }
  }
];

export const grammarLessons: GrammarLesson[] = [
  {
    title: "Definite Articles",
    explanation: "French has four definite articles: le (masculine singular), la (feminine singular), l' (before vowels), and les (plural). Unlike English, French articles agree with the gender and number of the noun.",
    example: "le chat (the cat, masc.) vs. la maison (the house, fem.)"
  },
  {
    title: "Adjective Agreement", 
    explanation: "French adjectives must agree in gender and number with the nouns they modify. Most feminine adjectives add -e, and plurals add -s.",
    example: "un homme grand → une femme grande → des hommes grands"
  },
  {
    title: "Subjunctive Mood",
    explanation: "The subjunctive expresses doubt, emotion, or subjectivity. It's often triggered by expressions like 'il faut que' (it's necessary that) or 'je doute que' (I doubt that).",
    example: "Il faut que tu viennes. (It's necessary that you come.)"
  }
];

export const historyEvents: HistoryEvent[] = [
  {
    year: "1793",
    description: "King Louis XVI of France is executed during the French Revolution, marking a pivotal moment in European history."
  },
  {
    year: "1861", 
    description: "Jefferson Davis resigns from the U.S. Senate as Mississippi secedes from the Union, escalating tensions before the Civil War."
  },
  {
    year: "1976",
    description: "The first commercial Concorde supersonic passenger flight takes off, revolutionizing air travel with unprecedented speed."
  },
  {
    year: "1519",
    description: "Spanish conquistador Hernán Cortés lands on the coast of Mexico, beginning the conquest of the Aztec Empire."
  },
  {
    year: "1887",
    description: "The Michelson-Morley experiment fails to detect the luminiferous ether, paving the way for Einstein's theory of relativity."
  }
];

export const historicalFigures: HistoricalFigure[] = [
  {
    name: "Marie Curie",
    dates: "1867-1934",
    biography: "Polish-French physicist and chemist who conducted pioneering research on radioactivity. She was the first woman to win a Nobel Prize, the first person to win Nobel Prizes in two different scientific fields (Physics and Chemistry), and the first female professor at the University of Paris. Her discoveries laid the foundation for modern atomic physics and medical treatments using radiation.",
    notable: "First woman to win Nobel Prize (1903)"
  },
  {
    name: "Ibn Khaldun",
    dates: "1332-1406", 
    biography: "North African historiographer who developed one of the earliest non-religious philosophies of history. His work 'Muqaddimah' introduced concepts that would later become fundamental to sociology, economics, and historiography. He analyzed social cohesion, economic factors in political change, and the cyclical nature of civilizations centuries before European scholars.",
    notable: "Father of sociology and historiography"
  },
  {
    name: "Frederick Douglass",
    dates: "1818-1895",
    biography: "American social reformer, abolitionist, orator, writer, and statesman. Born into slavery, he escaped and became a leading voice in the anti-slavery movement. His autobiographies are considered some of the most influential narratives of American slavery. He also championed women's suffrage and civil rights.",
    notable: "Most photographed American of the 19th century"
  }
];

export const scienceFacts: ScienceFact[] = [
  {
    title: "Quantum Entanglement",
    explanation: "When two particles become entangled, measuring one instantly affects the other, regardless of the distance between them. Einstein called this 'spooky action at a distance.' This phenomenon is now being used to develop quantum computers and secure communication systems.",
    field: "Quantum Physics"
  },
  {
    title: "Mycorrhizal Networks",
    explanation: "Underground fungal networks connect forest trees, allowing them to share nutrients, water, and information. These 'wood wide webs' can span entire forests and help trees coordinate responses to threats and environmental changes.",
    field: "Forest Ecology"
  },
  {
    title: "Tardigrade Resilience", 
    explanation: "These microscopic animals can survive extreme conditions including space vacuum, radiation 1000x lethal to humans, and temperatures from near absolute zero to 300°F. They achieve this by entering cryptobiosis, essentially pausing all biological processes.",
    field: "Biology"
  }
];

export const mathConcepts: MathConcept[] = [
  {
    title: "The Fibonacci Spiral",
    explanation: "The Fibonacci sequence (0, 1, 1, 2, 3, 5, 8, 13...) appears everywhere in nature: flower petals, pinecones, shells, and hurricanes. When you draw squares with sides equal to Fibonacci numbers and connect them with curves, you get the golden spiral.",
    formula: "φ = (1 + √5) / 2 ≈ 1.618"
  },
  {
    title: "Euler's Identity",
    explanation: "Often called the most beautiful equation in mathematics, it elegantly connects five fundamental mathematical constants: e, i, π, 1, and 0. It demonstrates the deep relationship between exponential and trigonometric functions.",
    formula: "e^(iπ) + 1 = 0"
  },
  {
    title: "The Monty Hall Problem",
    explanation: "A probability puzzle where you're more likely to win by switching doors (2/3 chance) than sticking with your first choice (1/3 chance). This counterintuitive result stumped even professional mathematicians initially.",
    formula: "P(win by switching) = 2/3"
  }
];

export const neuroFacts: NeuroFact[] = [
  {
    title: "Neuroplasticity", 
    explanation: "Your brain can rewire itself throughout your life. Learning new skills literally changes your brain's structure by forming new neural connections. This is why practicing habits for 21-66 days can make them automatic—you're physically reshaping your neural pathways.",
    funFact: "Adult brains generate ~1,400 new neurons daily"
  },
  {
    title: "Mirror Neurons",
    explanation: "These specialized cells fire both when you perform an action and when you observe someone else performing the same action. They're crucial for empathy, learning by imitation, and understanding others' intentions.",
    funFact: "They help explain why yawning is contagious"
  },
  {
    title: "Sleep Consolidation",
    explanation: "During sleep, your brain literally washes itself with cerebrospinal fluid, clearing out metabolic waste including amyloid-beta plaques associated with Alzheimer's. Sleep also consolidates memories by strengthening important neural connections.",
    funFact: "You forget 2/3 of dreams within 5 minutes of waking"
  }
];

// Get rotating content based on day of year
export const getTodaysFrenchNouns = (): FrenchNoun[] => {
  const startIndex = getRotatingIndex(frenchNouns.length);
  return [
    frenchNouns[startIndex],
    frenchNouns[(startIndex + 1) % frenchNouns.length],
    frenchNouns[(startIndex + 2) % frenchNouns.length]
  ];
};

export const getTodaysFrenchVerb = (): FrenchVerb => {
  return frenchVerbs[getRotatingIndex(frenchVerbs.length)];
};

export const getTodaysGrammarLesson = (): GrammarLesson => {
  return grammarLessons[getRotatingIndex(grammarLessons.length)];
};

export const getTodaysHistoryEvents = (): HistoryEvent[] => {
  const startIndex = getRotatingIndex(historyEvents.length);
  return [
    historyEvents[startIndex],
    historyEvents[(startIndex + 1) % historyEvents.length],
    historyEvents[(startIndex + 2) % historyEvents.length]
  ];
};

export const getTodaysHistoricalFigure = (): HistoricalFigure => {
  return historicalFigures[getRotatingIndex(historicalFigures.length)];
};

export const getTodaysScienceFact = (): ScienceFact => {
  return scienceFacts[getRotatingIndex(scienceFacts.length)];
};

export const getTodaysMathConcept = (): MathConcept => {
  return mathConcepts[getRotatingIndex(mathConcepts.length)];
};

export const getTodaysNeuroFact = (): NeuroFact => {
  return neuroFacts[getRotatingIndex(neuroFacts.length)];
};

export const artworks: Artwork[] = [
  {
    title: "The School of Athens",
    artist: "Raphael, 1509-1511",
    description: "This Renaissance fresco represents philosophy and is considered one of the greatest paintings in Western art. Located in the Vatican's Apostolic Palace, it depicts classical philosophers including Plato and Aristotle in an idealized ancient setting. The perfect perspective and architectural grandeur exemplify High Renaissance ideals of harmony, proportion, and the synthesis of Christian and classical traditions.",
    location: "Vatican Museums, Rome",
    imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "The Starry Night", 
    artist: "Vincent van Gogh, 1889",
    description: "This post-impressionist masterpiece depicts a swirling night sky over a village. Van Gogh painted it while in an asylum, and it represents his unique vision of movement and energy in nature. The painting's dynamic brushstrokes and vivid colors revolutionized how artists could express emotion through technique.",
    location: "Museum of Modern Art, New York",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  }
];

export const etymologies: Etymology[] = [
  {
    word: "Serendipity",
    pronunciation: "/ˌser.ənˈdɪp.ə.t̬i/",
    origin: "Coined in 1754 by Horace Walpole from the Persian fairy tale 'The Three Princes of Serendip,' whose heroes 'were always making discoveries, by accidents and sagacity, of things which they were not in quest of.' Serendip was the ancient name for Sri Lanka.",
    meaning: "Pleasant surprise or fortunate discovery"
  },
  {
    word: "Quarantine",
    pronunciation: "/ˈkwɔr.ən.tiːn/",
    origin: "From Italian 'quaranta giorni' meaning 'forty days' - the period ships were required to wait before entering port during plague outbreaks in 14th-century Venice. The number forty has biblical significance and was considered sufficient time for diseases to manifest.",
    meaning: "Isolation to prevent disease spread"
  }
];

export const literature: Literature[] = [
  {
    title: "Pride and Prejudice",
    author: "Jane Austen, 1813",
    opening: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters."
  },
  {
    title: "1984",
    author: "George Orwell, 1949", 
    opening: "It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him."
  }
];

export const puzzles: Puzzle[] = [
  {
    question: "Three switches control three light bulbs in another room. You can flip the switches as many times as you want, but you can only go into the room with the bulbs once. How do you determine which switch controls which bulb?",
    solution: "Turn on the first switch for a few minutes, then turn it off. Turn on the second switch and leave it on. When you enter the room: the lit bulb = switch 2, the warm unlit bulb = switch 1, the cool unlit bulb = switch 3."
  },
  {
    question: "A man lives on the 20th floor of an apartment building. Every morning he takes the elevator down to the ground floor. When he comes home, he takes the elevator to the 10th floor and walks the rest of the way... except on rainy days, when he takes the elevator all the way to the 20th floor. Why?",
    solution: "The man is too short to reach the button for the 20th floor. On rainy days, he has an umbrella which he can use to press the higher button."
  }
];

export const philosophies: Philosophy[] = [
  {
    title: "Ship of Theseus",
    question: "If you gradually replace every part of a ship with new parts, is it still the same ship? What if you then rebuild a new ship from all the original parts—which one is the 'real' Ship of Theseus?",
    explores: "Identity, continuity, and change"
  },
  {
    title: "The Trolley Problem",
    question: "A runaway trolley is heading toward five people. You can pull a lever to divert it to a side track, where it will kill one person instead. Do you pull the lever? What if you had to push someone off a bridge to stop the trolley?",
    explores: "Utilitarianism vs. deontological ethics"
  }
];

export const fallacies: Fallacy[] = [
  {
    name: "Survivorship Bias",
    example: "All the successful entrepreneurs I know dropped out of college, so dropping out leads to success.",
    explanation: "We only see the successful dropouts, not the millions who dropped out and failed. This bias appears in business advice, historical accounts, and product reviews."
  },
  {
    name: "Ad Hominem",
    example: "Don't listen to her opinion on climate change—she's not even a scientist.",
    explanation: "Attacking the person making an argument rather than addressing the argument itself. Even non-experts can present valid evidence or logical reasoning."
  }
];

export const cognitiveBiases: CognitiveBias[] = [
  {
    name: "Anchoring Effect", 
    description: "We rely too heavily on the first piece of information encountered. In negotiations, whoever states the first number 'anchors' the entire discussion around that range.",
    watchFor: "First impressions, initial prices, opening offers in negotiations"
  },
  {
    name: "Confirmation Bias",
    description: "We seek information that confirms our existing beliefs and ignore contradictory evidence. Social media algorithms exploit this by showing us content that reinforces our views.",
    watchFor: "Cherry-picking sources, dismissing opposing viewpoints, echo chambers"
  }
];

export const innovations: Innovation[] = [
  {
    challenge: "How would you design a bridge that can expand and contract with temperature changes without losing structural integrity?",
    solution: "Use expansion joints—gaps filled with flexible materials that allow movement. Modern bridges use bearings that slide or rock, allowing the structure to 'breathe' safely."
  },
  {
    challenge: "How can you deliver medicine to specific cells in the body without affecting healthy cells?",
    solution: "Nanotechnology allows for targeted drug delivery using microscopic carriers that recognize specific cell markers, like a molecular postal system with precise addresses."
  }
];

export const designs: Design[] = [
  {
    example: "Swiss Army Knife",
    principle: "Functional elegance",
    details: "Perfect example of maximum utility in minimal space. Every tool serves multiple purposes, the design is immediately intuitive, and quality materials ensure reliability. Form follows function while maintaining aesthetic appeal."
  },
  {
    example: "iPhone Interface",
    principle: "Intuitive interaction",
    details: "Revolutionary touch interface that mimics physical interactions—pinch to zoom, swipe to scroll, tap to select. The design philosophy of 'it just works' eliminated the need for instruction manuals."
  }
];

export const inventions: Invention[] = [
  {
    item: "Post-it Notes",
    story: "Spencer Silver accidentally created a weak adhesive while trying to make super-strong glue. Years later, colleague Art Fry needed bookmarks that wouldn't fall out of his hymnal. The 'failed' adhesive became perfect for removable, repositionable notes.",
    lesson: "Accidents + need recognition = innovation"
  },
  {
    item: "Microwave Oven",
    story: "Percy Spencer was working on radar technology when he noticed a chocolate bar in his pocket had melted. Instead of dismissing it, he experimented with other foods and discovered microwave cooking.",
    lesson: "Curiosity about unexpected results leads to breakthroughs"
  }
];

export const culturalProblems: Cultural[] = [
  {
    problem: "Urban Transportation",
    solutions: [
      {
        country: "Netherlands",
        approach: "Extensive bike infrastructure and bike-train integration",
        color: "soft-purple"
      },
      {
        country: "Japan", 
        approach: "Precise timing systems and passenger etiquette",
        color: "coral-pink"
      },
      {
        country: "Singapore",
        approach: "Dynamic pricing to reduce congestion",
        color: "sage-green"
      }
    ]
  }
];

export const consequences: Consequences[] = [
  {
    case: "Cobra Effect",
    story: "British colonial India offered bounties for dead cobras to reduce snake population. People started breeding cobras for the bounty money. When the program ended, breeders released their snakes, making the problem worse than before.",
    lesson: "Incentives can backfire spectacularly"
  },
  {
    case: "Streisand Effect",
    story: "Barbra Streisand sued to suppress photos of her home, which led to far more people seeing the photos than if she had done nothing. Attempts to hide information often amplify its spread.",
    lesson: "Suppression can amplify awareness"
  }
];

export const altHistories: AltHistory[] = [
  {
    scenario: "...the Library of Alexandria never burned?",
    speculation: "We might have experienced the Scientific Revolution 1000+ years earlier. Ancient Greek and Roman scientific knowledge, combined with preserved works from around the world, could have accelerated human progress dramatically. Renaissance thinking might have emerged in the 8th century instead of the 15th.",
    impact: "Technology, medicine, exploration"
  },
  {
    scenario: "...the printing press was invented in China first reached Europe?",
    speculation: "If Gutenberg hadn't independently invented the printing press, the Protestant Reformation might never have happened. The spread of ideas would have remained controlled by those who could afford hand-copied manuscripts, potentially delaying the Enlightenment by centuries.",
    impact: "Religion, education, scientific progress"
  }
];

export const jokes: Joke[] = [
  {
    setup: "Why don't scientists trust atoms?",
    punchline: "Because they make up everything!"
  },
  {
    setup: "What do you call a fake noodle?",
    punchline: "An impasta!"
  },
  {
    setup: "Why did the math book look so sad?",
    punchline: "Because it was full of problems!"
  },
  {
    setup: "What's the best thing about Switzerland?",
    punchline: "I don't know, but the flag is a big plus!"
  }
];

export const getTodaysArtwork = (): Artwork => {
  return artworks[getRotatingIndex(artworks.length)];
};

export const getTodaysEtymology = (): Etymology => {
  return etymologies[getRotatingIndex(etymologies.length)];
};

export const getTodaysLiterature = (): Literature => {
  return literature[getRotatingIndex(literature.length)];
};

export const getTodaysPuzzle = (): Puzzle => {
  return puzzles[getRotatingIndex(puzzles.length)];
};

export const getTodaysPhilosophy = (): Philosophy => {
  return philosophies[getRotatingIndex(philosophies.length)];
};

export const getTodaysFallacy = (): Fallacy => {
  return fallacies[getRotatingIndex(fallacies.length)];
};

export const getTodaysCognitiveBias = (): CognitiveBias => {
  return cognitiveBiases[getRotatingIndex(cognitiveBiases.length)];
};

export const getTodaysInnovation = (): Innovation => {
  return innovations[getRotatingIndex(innovations.length)];
};

export const getTodaysDesign = (): Design => {
  return designs[getRotatingIndex(designs.length)];
};

export const getTodaysInvention = (): Invention => {
  return inventions[getRotatingIndex(inventions.length)];
};

export const getTodaysCultural = (): Cultural => {
  return culturalProblems[getRotatingIndex(culturalProblems.length)];
};

export const getTodaysConsequences = (): Consequences => {
  return consequences[getRotatingIndex(consequences.length)];
};

export const getTodaysAltHistory = (): AltHistory => {
  return altHistories[getRotatingIndex(altHistories.length)];
};

export const getTodaysJoke = (): Joke => {
  return jokes[getRotatingIndex(jokes.length)];
};
