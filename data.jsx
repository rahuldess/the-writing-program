// data.jsx — content for The Complete Writer Program
// Colors cycle across green / amber / terracotta families for visual rhythm.

const WRITING_TYPES = [
  {
    id: "descriptive",
    title: "Descriptive Paragraphs",
    glyph: "lines",
    family: "green",
    blurb: "Painting pictures with words.",
    g34: "Describe people, places, objects, and events using sensory details, descriptive vocabulary, and clear organization.",
    g56: "Use vivid imagery, precise word choice, figurative language — similes, metaphors, personification — and varied sentence structures to create engaging descriptions.",
  },
  {
    id: "personal",
    title: "Personal Narratives",
    glyph: "heart",
    family: "terra",
    blurb: "Telling true stories from real life.",
    g34: "Write about real experiences from their own lives — sharing events, feelings, and personal connections in a logical sequence.",
    g56: "Develop voice, reflection, dialogue, and descriptive details to create more engaging and meaningful personal narratives.",
  },
  {
    id: "narrative",
    title: "Narrative & Story Writing",
    glyph: "star",
    family: "amber",
    blurb: "Inventing characters and worlds.",
    g34: "Create stories with characters, settings, and a clear beginning, middle, and end — learning about plot, conflict, and resolution.",
    g56: "Develop complex plots, character development, dialogue, descriptive settings, and techniques such as foreshadowing and suspense.",
  },
  {
    id: "letter",
    title: "Letter Writing",
    glyph: "envelope",
    family: "green",
    blurb: "Writing with a reader in mind.",
    g34: "Write letters for different purposes using appropriate greetings, closings, and basic audience awareness.",
    g56: "Adapt tone, voice, and language to suit different audiences and purposes, while organizing ideas clearly and effectively.",
  },
  {
    id: "informative",
    title: "Informative & Expository",
    glyph: "book",
    family: "terra",
    blurb: "Explaining the world clearly.",
    g34: "Explain topics using facts, examples, and clear organization — beginning to learn paragraph structure and topic sentences.",
    g56: "Conduct research, organize ideas into multi-paragraph pieces, use supporting evidence, and incorporate text features and domain-specific vocabulary.",
  },
  {
    id: "persuasive",
    title: "Persuasive Writing",
    glyph: "spark",
    family: "amber",
    blurb: "Making a case that convinces.",
    g34: "Express opinions and support them with reasons and examples.",
    g56: "Build strong arguments using evidence, persuasive techniques, counterarguments, and logical reasoning to support a position.",
  },
  {
    id: "poetry",
    title: "Poetry Writing",
    glyph: "quote",
    family: "green",
    blurb: "Playing with rhythm and imagery.",
    g34: "Explore rhythm, rhyme, imagery, and creative expression through a variety of poetry forms.",
    g56: "Experiment with figurative language, symbolism, mood, tone, poetic devices, and a wider range of poetic structures to communicate deeper meaning.",
  },
];

const PROGRESSION = {
  g34: {
    label: "Grades 3–4",
    tagline: "Building the foundation",
    items: [
      "Organize their ideas clearly",
      "Write complete paragraphs",
      "Add descriptive details",
      "Understand different writing forms",
      "Build confidence as writers",
    ],
  },
  g56: {
    label: "Grades 5–6",
    tagline: "Writing with craft",
    items: [
      "Write with greater depth and detail",
      "Use figurative language and literary devices",
      "Support ideas with evidence and examples",
      "Write for different audiences and purposes",
      "Revise and improve their writing independently",
    ],
  },
};

const LEVEL1 = {
  duration: "4 Weeks",
  format: "Face-to-Face",
  focus: "Paragraph Writing",
  intro: "An introductory program that helps students build a strong foundation in paragraph writing. Through interactive lessons, guided practice, and personalized feedback, students move from planning and drafting all the way to a polished, published piece.",
  prereqLine: "Master one strong paragraph, and every other kind of writing becomes possible.",
  prereq: "The paragraph is the building block of every kind of writing. Before a student can shape a story, argue a point, or craft a poem with confidence, they need to write one clear, well-organized paragraph. Level 1 is where that foundation is laid — the required first step that makes everything else in the program possible.",
  weeks: [
    { n: 1, phase: "Plan", title: "Ideas & Topic Sentences", desc: "Students learn to spark ideas and shape a clear topic sentence that sets up the whole paragraph.", family: "green" },
    { n: 2, phase: "Draft", title: "Supporting Details", desc: "Building the body — adding relevant details that organize and develop the main idea.", family: "amber" },
    { n: 3, phase: "Edit", title: "Revise & Improve", desc: "Reading with a critical eye, students edit their own work to make every sentence stronger.", family: "terra" },
    { n: 4, phase: "Publish", title: "Polished Final Piece", desc: "Writing an effective conclusion and producing a final, polished paragraph independently.", family: "green" },
  ],
  outcomes: [
    "Write a well-organized paragraph",
    "Develop clear topic sentences",
    "Add relevant supporting details",
    "Write effective conclusions",
    "Edit and improve their own writing",
    "Produce a final polished piece independently",
  ],
};

Object.assign(window, { WRITING_TYPES, PROGRESSION, LEVEL1 });
