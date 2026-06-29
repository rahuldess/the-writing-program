// data.jsx — content for The Complete Writer Program
// Colors cycle across green / amber / terracotta families for visual rhythm.

const LEVELS = [
  { id: "l1", num: "Level 1", focus: "Creative Expression",  family: "green" },
  { id: "l2", num: "Level 2", focus: "Purposeful Writing",   family: "amber" },
  { id: "l3", num: "Level 3", focus: "Advanced Writing",     family: "terra" },
];

const WRITING_TYPES = [
  {
    id: "descriptive",
    level: "l1",
    title: "Descriptive Writing",
    glyph: "lines",
    family: "green",
    blurb: "Painting pictures with words.",
    desc: "Students learn how to describe people, places, objects, and events using interesting vocabulary, sensory details, and clear organization to help readers create a picture in their mind.",
    project: { title: "Descriptive Snapshot", detail: "Students create a descriptive piece about a favourite place, person, object, or memory, accompanied by an illustration." },
  },
  {
    id: "narrative",
    level: "l1",
    title: "Narrative Writing",
    glyph: "star",
    family: "green",
    blurb: "Inventing characters and worlds.",
    desc: "Learn to write engaging stories and personal experiences with strong characters, interesting settings, dialogue, and a clear story structure.",
    project: { title: "My Story", detail: "Students write, edit, illustrate, and publish their own short story." },
  },
  {
    id: "letter",
    level: "l2",
    title: "Letter Writing",
    glyph: "envelope",
    family: "amber",
    blurb: "Writing with a reader in mind.",
    desc: "Students learn how to write letters for different audiences and purposes using the correct format, appropriate tone, and clear communication. Covers both friendly and formal letters.",
    project: { title: "A Letter to My Future Self", detail: "Students write and decorate a meaningful letter — to their future self or someone who inspires them — that can be kept as a special memory." },
  },
  {
    id: "informative",
    level: "l2",
    title: "Informative Writing",
    glyph: "book",
    family: "amber",
    blurb: "Explaining the world clearly.",
    desc: "Students learn how to explain topics clearly using facts, examples, research, and well-organized paragraphs to teach or inform the reader.",
    project: { title: "My Mini Research Project", detail: "Students research a topic of interest (e.g., an animal, country, sport, or invention) and create an informative sheet with facts, headings, and illustrations." },
  },
  {
    id: "persuasive",
    level: "l3",
    title: "Persuasive Writing",
    glyph: "spark",
    family: "terra",
    blurb: "Making a case that convinces.",
    desc: "Students learn how to express their opinions, support them with strong reasons and evidence, and persuade readers through clear and logical arguments.",
    project: { title: "Persuasive Campaign Project", detail: "Students create a persuasive piece — a travel brochure, advertisement, speech, or poster — encouraging others to visit a place, try a product, or support a cause." },
  },
  {
    id: "poetry",
    level: "l3",
    title: "Poetry Writing",
    glyph: "quote",
    family: "terra",
    blurb: "Playing with rhythm and imagery.",
    desc: "Students explore a variety of poetry forms while using rhythm, imagery, figurative language, and creative expression to communicate ideas and emotions.",
    project: { title: "My Poetry Collection", detail: "Students compile their favourite poems into a beautifully illustrated poetry anthology to share with family and friends." },
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

Object.assign(window, { LEVELS, WRITING_TYPES, PROGRESSION, LEVEL1 });
