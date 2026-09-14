const ERAS = [
  { id: "foundations", label: "Foundations", short: "Foundations", range: "c. 350 BCE–1899", start: -400, end: 1899 },
  { id: "formal", label: "Formal computation", short: "Formal computation", range: "1900–1955", start: 1900, end: 1955 },
  { id: "birth", label: "Birth of AI", short: "Birth of AI", range: "1956–1969", start: 1956, end: 1969 },
  { id: "symbolic", label: "Systems & winters", short: "Systems + winters", range: "1970–1992", start: 1970, end: 1992 },
  { id: "statistical", label: "Statistical learning", short: "Statistical ML", range: "1993–2011", start: 1993, end: 2011 },
  { id: "deep", label: "Deep learning takeoff", short: "Deep learning", range: "2012–2017", start: 2012, end: 2017 },
  { id: "foundation", label: "Foundation models", short: "Foundation models", range: "2018–2021", start: 2018, end: 2021 },
  { id: "boom", label: "Generative AI boom", short: "Generative boom", range: "2022–2025", start: 2022, end: 2025 }
];

const THEME_COLORS = {
  "Logic & computation": "#d9ff43",
  "Neural networks": "#61e6dc",
  "Statistical learning": "#9f8cff",
  "Language": "#ff704d",
  "Vision": "#f2c94c",
  "Robotics & games": "#6ca9ff",
  "Generative AI": "#ff8fbd",
  "Infrastructure & scale": "#a3a89c",
  "Governance & society": "#b67d53"
};

// This is the canonical dataset used by every view and export in the site.
const EVENTS = [
  {
    id: "aristotle-syllogisms", year: -350, displayYear: "c. 350 BCE", era: "foundations", theme: "Logic & computation",
    title: "Aristotle formalizes syllogistic logic",
    summary: "Aristotle describes valid patterns of deduction in which conclusions follow from stated premises.",
    significance: "It establishes the durable idea that reasoning can be represented by explicit rules—a premise underneath symbolic AI and automated theorem proving.",
    source: "Stanford Encyclopedia of Philosophy · Aristotle’s Logic", sourceUrl: "https://plato.stanford.edu/entries/aristotle-logic/"
  },
  {
    id: "llull-ars-magna", year: 1305, displayYear: "c. 1305", era: "foundations", theme: "Logic & computation",
    title: "Ramon Llull proposes combinatorial reasoning",
    summary: "Llull’s Ars Magna uses rotating symbolic figures to combine concepts and mechanically generate propositions.",
    significance: "The method was not computation in the modern sense, but it anticipated the ambition to make reasoning systematic and mechanically executable.",
    source: "Stanford Encyclopedia of Philosophy · Ramon Llull", sourceUrl: "https://plato.stanford.edu/entries/llull/"
  },
  {
    id: "hobbes-reckoning", year: 1655, displayYear: "1655", era: "foundations", theme: "Logic & computation",
    title: "Thomas Hobbes describes reasoning as reckoning",
    summary: "In De Corpore, Hobbes treats reasoning as operations of addition and subtraction over names and propositions.",
    significance: "This is an unusually early statement of the computational view of thought: reasoning as a process that can, in principle, be formalized.",
    source: "Project Gutenberg · The English Works of Thomas Hobbes", sourceUrl: "https://www.gutenberg.org/ebooks/73906"
  },
  {
    id: "leibniz-universal-language", year: 1666, displayYear: "1666", era: "foundations", theme: "Logic & computation",
    title: "Leibniz imagines a calculus of reasoning",
    summary: "Leibniz proposes a universal symbolic language and a calculus through which disputes could be settled by calculation.",
    significance: "His vision foreshadows formal logic, knowledge representation, and the idea of automated reasoning over symbolic expressions.",
    source: "Stanford Encyclopedia of Philosophy · Leibniz’s Logic", sourceUrl: "https://plato.stanford.edu/entries/leibniz-logic-influence/"
  },
  {
    id: "boole-laws-thought", year: 1854, displayYear: "1854", era: "foundations", theme: "Logic & computation",
    title: "George Boole turns logic into algebra",
    summary: "The Laws of Thought represents logical operations with algebraic symbols and rules.",
    significance: "Boolean algebra made logic calculable and later became fundamental to digital circuits, programming, and symbolic reasoning systems.",
    source: "Project Gutenberg · An Investigation of the Laws of Thought", sourceUrl: "https://www.gutenberg.org/ebooks/15114"
  },
  {
    id: "frege-begriffsschrift", year: 1879, displayYear: "1879", era: "foundations", theme: "Logic & computation",
    title: "Gottlob Frege builds modern predicate logic",
    summary: "Begriffsschrift introduces a formal language capable of expressing quantified statements and relations.",
    significance: "Predicate logic greatly expands what can be represented beyond Aristotelian syllogisms and becomes central to computer science and knowledge-based AI.",
    source: "Stanford Encyclopedia of Philosophy · Frege’s Logic", sourceUrl: "https://plato.stanford.edu/entries/frege/"
  },
  {
    id: "markov-chains", year: 1906, displayYear: "1906", era: "formal", theme: "Statistical learning",
    title: "Andrey Markov introduces dependent probability chains",
    summary: "Markov studies sequences whose next state depends on the present state rather than the full past.",
    significance: "Markov models become a foundation for speech recognition, language modeling, control, bioinformatics, and modern probabilistic sequence methods.",
    source: "Encyclopedia of Mathematics · Markov chain", sourceUrl: "https://encyclopediaofmath.org/wiki/Markov_chain"
  },
  {
    id: "godel-incompleteness", year: 1931, displayYear: "1931", era: "formal", theme: "Logic & computation",
    title: "Gödel identifies limits of formal systems",
    summary: "The incompleteness theorems show that sufficiently expressive, consistent formal systems contain truths they cannot prove internally.",
    significance: "They reveal deep limits to mechanical proof and shape later thinking about computation, formal verification, and artificial reasoning.",
    source: "Stanford Encyclopedia of Philosophy · Gödel’s Incompleteness Theorems", sourceUrl: "https://plato.stanford.edu/entries/goedel-incompleteness/"
  },
  {
    id: "turing-computation", year: 1936, displayYear: "1936", era: "formal", theme: "Logic & computation",
    title: "Alan Turing defines general computation",
    summary: "Turing describes an abstract machine that manipulates symbols according to rules and formalizes what it means to compute.",
    significance: "The universal Turing machine provides the conceptual basis for programmable computers—and for software capable of implementing AI methods.",
    source: "Proceedings of the London Mathematical Society · On Computable Numbers", sourceUrl: "https://doi.org/10.1112/plms/s2-42.1.230"
  },
  {
    id: "mcculloch-pitts", year: 1943, displayYear: "1943", era: "formal", theme: "Neural networks",
    title: "McCulloch and Pitts model an artificial neuron",
    summary: "They show how simplified binary neurons can implement logical functions when connected into networks.",
    significance: "The paper links brain-inspired models with formal computation and launches the mathematical lineage of neural networks.",
    source: "Bulletin of Mathematical Biophysics · A Logical Calculus", sourceUrl: "https://doi.org/10.1007/BF02478259"
  },
  {
    id: "von-neumann-architecture", year: 1945, displayYear: "1945", era: "formal", theme: "Infrastructure & scale",
    title: "The stored-program computer is articulated",
    summary: "The EDVAC report describes a computer whose instructions and data share memory.",
    significance: "Stored programs make general-purpose, revisable software practical, creating the machine substrate on which most AI research develops.",
    source: "Institute for Advanced Study · First Draft of a Report on the EDVAC", sourceUrl: "https://library.ias.edu/files/pdfs/ecp/firstdraft.pdf"
  },
  {
    id: "wiener-cybernetics", year: 1948, displayYear: "1948", era: "formal", theme: "Robotics & games",
    title: "Norbert Wiener frames cybernetics",
    summary: "Cybernetics studies control and communication through feedback in animals and machines.",
    significance: "Feedback becomes a unifying idea for adaptive systems, robotics, control theory, and models that act within an environment.",
    source: "MIT Press · Cybernetics", sourceUrl: "https://mitpress.mit.edu/9780262730099/cybernetics/"
  },
  {
    id: "shannon-information", year: 1948, displayYear: "1948", era: "formal", theme: "Infrastructure & scale",
    title: "Claude Shannon quantifies information",
    summary: "Shannon defines information, entropy, and channel capacity in a mathematical theory of communication.",
    significance: "Information theory underpins data compression and communication while supplying concepts later used throughout machine learning.",
    source: "Bell System Technical Journal · A Mathematical Theory of Communication", sourceUrl: "https://doi.org/10.1002/j.1538-7305.1948.tb01338.x"
  },
  {
    id: "hebb-learning", year: 1949, displayYear: "1949", era: "formal", theme: "Neural networks",
    title: "Donald Hebb proposes activity-dependent learning",
    summary: "Hebb argues that connections strengthen when neurons repeatedly participate in the same activity.",
    significance: "The idea supplies an influential biological principle for how neural systems might learn from local experience.",
    source: "Internet Archive · The Organization of Behavior", sourceUrl: "https://archive.org/details/organizationofbe00hebb"
  },
  {
    id: "turing-test", year: 1950, displayYear: "1950", era: "formal", theme: "Governance & society",
    title: "Turing proposes the imitation game",
    summary: "Instead of defining intelligence, Turing asks whether a machine’s conversation can be distinguished from a human’s.",
    significance: "The paper turns machine intelligence into an operational question and anticipates arguments about learning machines, language, and evaluation.",
    source: "Mind · Computing Machinery and Intelligence", sourceUrl: "https://doi.org/10.1093/mind/LIX.236.433"
  },
  {
    id: "snarc", year: 1951, displayYear: "1951", era: "formal", theme: "Neural networks",
    title: "SNARC demonstrates a learning neural machine",
    summary: "Marvin Minsky and Dean Edmonds build a hardware network that simulates rats learning paths through a maze.",
    significance: "SNARC is an early working example of reinforcement-like learning implemented in a stochastic neural machine.",
    source: "MIT CSAIL · Marvin Minsky biography", sourceUrl: "https://www.csail.mit.edu/person/marvin-minsky"
  },
  {
    id: "dartmouth", year: 1956, displayYear: "1956", era: "birth", theme: "Governance & society",
    title: "The Dartmouth project names artificial intelligence",
    summary: "McCarthy, Minsky, Rochester, and Shannon propose a summer study of machines using language, abstractions, and self-improvement.",
    significance: "The proposal gives the field its lasting name and a research identity organized around making aspects of intelligence computational.",
    source: "Dartmouth · Artificial Intelligence Coined at Dartmouth", sourceUrl: "https://home.dartmouth.edu/about/artificial-intelligence-ai-coined-dartmouth"
  },
  {
    id: "logic-theorist", year: 1956, displayYear: "1956", era: "birth", theme: "Logic & computation",
    title: "Logic Theorist proves mathematical theorems",
    summary: "Newell, Simon, and Shaw create a program that searches for proofs in symbolic logic.",
    significance: "Often called the first AI program, it demonstrates that heuristic search can reproduce a form of human problem-solving.",
    source: "RAND · The Logic Theory Machine", sourceUrl: "https://www.rand.org/pubs/papers/P868.html"
  },
  {
    id: "perceptron", year: 1957, displayYear: "1957", era: "birth", theme: "Neural networks",
    title: "Frank Rosenblatt builds the perceptron",
    summary: "The perceptron learns a linear decision boundary by adjusting weights from examples.",
    significance: "It is one of the first trainable neural classifiers and establishes the basic recipe of weighted inputs, prediction, error, and update.",
    source: "Cornell Aeronautical Laboratory · The Perceptron", sourceUrl: "https://apps.dtic.mil/sti/pdfs/AD0256582.pdf"
  },
  {
    id: "lisp", year: 1958, displayYear: "1958", era: "birth", theme: "Language",
    title: "John McCarthy introduces Lisp",
    summary: "Lisp represents programs and data with the same symbolic list structures and supports recursion and dynamic computation.",
    significance: "Its flexibility makes Lisp the dominant language of academic AI for decades and enables rapid work on symbolic reasoning.",
    source: "Communications of the ACM · Recursive Functions of Symbolic Expressions", sourceUrl: "https://doi.org/10.1145/367177.367199"
  },
  {
    id: "samuel-machine-learning", year: 1959, displayYear: "1959", era: "birth", theme: "Robotics & games",
    title: "Arthur Samuel popularizes “machine learning”",
    summary: "Samuel’s checkers program improves through experience and searches game positions with learned evaluations.",
    significance: "It demonstrates that useful behavior can be learned rather than completely hand-coded, and gives that approach a durable name.",
    source: "IBM Journal · Some Studies in Machine Learning Using the Game of Checkers", sourceUrl: "https://doi.org/10.1147/rd.33.0210"
  },
  {
    id: "adaline", year: 1960, displayYear: "1960", era: "birth", theme: "Neural networks",
    title: "ADALINE learns with the delta rule",
    summary: "Widrow and Hoff develop an adaptive linear neuron trained by minimizing prediction error.",
    significance: "Its least-mean-squares learning rule becomes a basic method in adaptive signal processing and a precursor to gradient-based neural training.",
    source: "Stanford · Adaptive Switching Circuits", sourceUrl: "https://isl.stanford.edu/~widrow/papers/c1960adaptiveswitching.pdf"
  },
  {
    id: "unimate", year: 1961, displayYear: "1961", era: "birth", theme: "Robotics & games",
    title: "Unimate enters the factory",
    summary: "General Motors installs the first industrial robot to perform repetitive, hazardous material handling.",
    significance: "It moves programmable machine action from laboratory ideas into industrial production and inaugurates commercial robotics.",
    source: "International Federation of Robotics · The history of industrial robots", sourceUrl: "https://ifr.org/robot-history"
  },
  {
    id: "dendral", year: 1965, displayYear: "1965", era: "birth", theme: "Logic & computation",
    title: "DENDRAL applies expert knowledge to science",
    summary: "The system infers plausible molecular structures from mass-spectrometry data using encoded chemical knowledge.",
    significance: "It shows that narrow systems with deep domain knowledge can solve serious scientific problems, launching the expert-systems tradition.",
    source: "Stanford · DENDRAL", sourceUrl: "https://exhibits.stanford.edu/feigenbaum/catalog/nz422hf0293"
  },
  {
    id: "eliza", year: 1966, displayYear: "1966", era: "birth", theme: "Language",
    title: "ELIZA simulates conversation",
    summary: "Joseph Weizenbaum’s program uses pattern matching and scripted transformations to imitate a psychotherapist.",
    significance: "Its simple mechanism still produces strong human projection, exposing both the appeal and the interpretive danger of conversational machines.",
    source: "Communications of the ACM · ELIZA", sourceUrl: "https://doi.org/10.1145/365153.365168"
  },
  {
    id: "nearest-neighbor", year: 1967, displayYear: "1967", era: "birth", theme: "Statistical learning",
    title: "Nearest-neighbor classification is analyzed",
    summary: "Cover and Hart establish theoretical properties of classifying a new point by the labels of nearby examples.",
    significance: "The work formalizes a simple, enduring idea: useful predictions can come directly from similarity to stored examples.",
    source: "IEEE Transactions on Information Theory · Nearest Neighbor Pattern Classification", sourceUrl: "https://doi.org/10.1109/TIT.1967.1053964"
  },
  {
    id: "shakey", year: 1969, displayYear: "1966–72", era: "birth", theme: "Robotics & games",
    title: "Shakey integrates perception, planning, and action",
    summary: "SRI’s mobile robot navigates rooms, perceives simple objects, and plans multi-step actions from goals.",
    significance: "Shakey is the first general-purpose mobile robot to combine major AI subsystems in one embodied agent.",
    source: "SRI International · Shakey the Robot", sourceUrl: "https://www.sri.com/hoi/shakey-the-robot/"
  },
  {
    id: "perceptrons-book", year: 1969, displayYear: "1969", era: "birth", theme: "Neural networks",
    title: "Perceptrons exposes limits of shallow networks",
    summary: "Minsky and Papert rigorously analyze what single-layer perceptrons can and cannot represent.",
    significance: "The critique is mathematically valuable, but—alongside funding and hardware limits—helps cool enthusiasm for neural-network research.",
    source: "MIT Press · Perceptrons", sourceUrl: "https://mitpress.mit.edu/9780262631112/perceptrons/"
  },
  {
    id: "prolog", year: 1972, displayYear: "1972", era: "symbolic", theme: "Language",
    title: "Prolog makes logic executable",
    summary: "Colmerauer and Roussel develop a programming language in which programs are facts, rules, and queries.",
    significance: "Prolog becomes a major vehicle for symbolic AI, expert systems, natural-language processing, and computational logic.",
    source: "Association for Logic Programming · The Birth of Prolog", sourceUrl: "https://www.cs.cmu.edu/afs/cs/project/ai-repository/ai/lang/prolog/doc/history/birthpl.pdf"
  },
  {
    id: "mycin", year: 1972, displayYear: "1972–76", era: "symbolic", theme: "Logic & computation",
    title: "MYCIN gives rule-based medical advice",
    summary: "The Stanford system uses hundreds of rules and certainty factors to recommend antibiotics for bacterial infections.",
    significance: "MYCIN shows both the impressive specialist performance and the deployment, liability, and maintenance difficulties of expert systems.",
    source: "Stanford · MYCIN experiments", sourceUrl: "https://exhibits.stanford.edu/feigenbaum/catalog/hh848gb7264"
  },
  {
    id: "lighthill-report", year: 1973, displayYear: "1973", era: "symbolic", theme: "Governance & society",
    title: "The Lighthill report challenges AI progress",
    summary: "A UK government review criticizes AI’s practical results and difficulty scaling beyond toy problems.",
    significance: "Funding contractions in the UK and US help produce the first AI winter, showing how expectations and institutions shape research trajectories.",
    source: "UK Parliament · Artificial Intelligence report", sourceUrl: "https://api.parliament.uk/historic-hansard/lords/1973/dec/19/artificial-intelligence"
  },
  {
    id: "werbos-backprop", year: 1974, displayYear: "1974", era: "symbolic", theme: "Neural networks",
    title: "Paul Werbos describes backpropagation for neural nets",
    summary: "Werbos’s dissertation proposes efficiently propagating errors backward through layered systems to compute gradients.",
    significance: "It establishes the key training mechanism that later makes multilayer neural networks practical, though broad adoption takes another decade.",
    source: "Harvard DASH · Beyond Regression", sourceUrl: "https://dash.harvard.edu/handle/1/39006405"
  },
  {
    id: "stanford-cart", year: 1979, displayYear: "1979", era: "symbolic", theme: "Robotics & games",
    title: "The Stanford Cart navigates autonomously",
    summary: "A vision-guided cart crosses a room of obstacles using images from multiple viewpoints.",
    significance: "The experiment is an early milestone in autonomous navigation and computer vision under real-world uncertainty.",
    source: "Stanford AI Lab · The Stanford Cart", sourceUrl: "https://web.stanford.edu/~learnest/cart.htm"
  },
  {
    id: "xcon", year: 1980, displayYear: "1980", era: "symbolic", theme: "Logic & computation",
    title: "XCON brings expert systems into business",
    summary: "Digital Equipment Corporation deploys a rule-based system to configure complex computer orders.",
    significance: "XCON’s commercial savings trigger an expert-systems boom and demonstrate that narrow encoded expertise can create business value.",
    source: "AAAI · R1: An Expert in the Computer Systems Domain", sourceUrl: "https://ojs.aaai.org/aimagazine/index.php/aimagazine/article/view/99"
  },
  {
    id: "hopfield-networks", year: 1982, displayYear: "1982", era: "symbolic", theme: "Neural networks",
    title: "Hopfield networks revive neural computation",
    summary: "John Hopfield describes recurrent networks whose dynamics settle into stored patterns like an associative memory.",
    significance: "The energy-based formulation reconnects neural networks with physics and helps renew scientific interest in connectionist models.",
    source: "PNAS · Neural networks and physical systems", sourceUrl: "https://doi.org/10.1073/pnas.79.8.2554"
  },
  {
    id: "backprop-1986", year: 1986, displayYear: "1986", era: "symbolic", theme: "Neural networks",
    title: "Backpropagation makes multilayer learning work",
    summary: "Rumelhart, Hinton, and Williams demonstrate that gradient-based error propagation can learn useful internal representations.",
    significance: "The paper turns an existing mathematical idea into a convincing, reusable method and becomes foundational to modern deep learning.",
    source: "Nature · Learning representations by back-propagating errors", sourceUrl: "https://doi.org/10.1038/323533a0"
  },
  {
    id: "second-ai-winter", year: 1987, displayYear: "1987–93", era: "symbolic", theme: "Governance & society",
    title: "The expert-systems market collapses",
    summary: "Costly maintenance, brittle rules, and cheaper general-purpose hardware undermine specialized Lisp machines and commercial expectations.",
    significance: "The second AI winter reinforces a recurring pattern: inflated promises outrun dependable systems, funding retreats, and quieter research continues.",
    source: "AI Magazine · AI: The Tumultuous History", sourceUrl: "https://ojs.aaai.org/aimagazine/index.php/aimagazine/article/view/1842"
  },
  {
    id: "bayesian-networks", year: 1988, displayYear: "1988", era: "symbolic", theme: "Statistical learning",
    title: "Judea Pearl systematizes Bayesian networks",
    summary: "Pearl develops graphical models that encode conditional dependencies and support efficient probabilistic inference.",
    significance: "Bayesian networks provide a principled way to reason under uncertainty and influence diagnosis, prediction, and causal analysis.",
    source: "Morgan Kaufmann · Probabilistic Reasoning in Intelligent Systems", sourceUrl: "https://www.sciencedirect.com/book/9781558604797/probabilistic-reasoning-in-intelligent-systems"
  },
  {
    id: "lenet-early", year: 1989, displayYear: "1989", era: "symbolic", theme: "Vision",
    title: "Backpropagation reads handwritten digits",
    summary: "LeCun and colleagues train a convolutional network end to end to recognize handwritten ZIP-code digits.",
    significance: "The work proves that learned local features and shared weights can solve a practical vision task, defining the modern CNN lineage.",
    source: "Neural Computation · Backpropagation Applied to Handwritten Zip Code Recognition", sourceUrl: "https://doi.org/10.1162/neco.1989.1.4.541"
  },
  {
    id: "q-learning", year: 1989, displayYear: "1989", era: "symbolic", theme: "Robotics & games",
    title: "Q-learning enables model-free control",
    summary: "Christopher Watkins develops a method for learning the value of actions without a model of the environment.",
    significance: "Q-learning becomes a foundational reinforcement-learning algorithm and later combines with deep networks in agents such as DQN.",
    source: "University of Cambridge · Learning from Delayed Rewards", sourceUrl: "http://www.cs.rhul.ac.uk/~chrisw/new_thesis.pdf"
  },
  {
    id: "support-vector-machines", year: 1995, displayYear: "1995", era: "statistical", theme: "Statistical learning",
    title: "Support-vector machines find robust boundaries",
    summary: "Cortes and Vapnik introduce maximum-margin classification with kernels for nonlinear decision surfaces.",
    significance: "SVMs become a dominant machine-learning method before deep learning, combining strong theory with good performance on limited data.",
    source: "Machine Learning · Support-vector networks", sourceUrl: "https://doi.org/10.1007/BF00994018"
  },
  {
    id: "lstm", year: 1997, displayYear: "1997", era: "statistical", theme: "Neural networks",
    title: "LSTM learns long-range dependencies",
    summary: "Hochreiter and Schmidhuber introduce gated recurrent memory cells that preserve information across long sequences.",
    significance: "LSTM overcomes key training problems in recurrent networks and later drives major gains in speech, translation, and sequence modeling.",
    source: "Neural Computation · Long Short-Term Memory", sourceUrl: "https://doi.org/10.1162/neco.1997.9.8.1735"
  },
  {
    id: "deep-blue", year: 1997, displayYear: "1997", era: "statistical", theme: "Robotics & games",
    title: "Deep Blue defeats the world chess champion",
    summary: "IBM’s specialized system beats Garry Kasparov in a six-game match using massive search and expert-designed evaluation.",
    significance: "The match is a public landmark for machine competence while illustrating that superhuman performance can be narrow and engineered.",
    source: "IBM · Deep Blue", sourceUrl: "https://www.ibm.com/history/deep-blue"
  },
  {
    id: "lenet-5", year: 1998, displayYear: "1998", era: "statistical", theme: "Vision",
    title: "LeNet-5 industrializes convolutional vision",
    summary: "A complete convolutional architecture recognizes handwritten and machine-printed characters in document-processing systems.",
    significance: "LeNet-5 establishes durable CNN building blocks—convolution, subsampling, and end-to-end gradient training—years before the deep-learning boom.",
    source: "Proceedings of the IEEE · Gradient-Based Learning Applied to Document Recognition", sourceUrl: "https://doi.org/10.1109/5.726791"
  },
  {
    id: "random-forests", year: 2001, displayYear: "2001", era: "statistical", theme: "Statistical learning",
    title: "Random forests make ensembles practical",
    summary: "Leo Breiman combines many randomized decision trees into a stable, accurate predictor.",
    significance: "The method shows the power of aggregating diverse weakly correlated models and remains a strong baseline for tabular data.",
    source: "Machine Learning · Random Forests", sourceUrl: "https://doi.org/10.1023/A:1010933404324"
  },
  {
    id: "mapreduce", year: 2004, displayYear: "2004", era: "statistical", theme: "Infrastructure & scale",
    title: "MapReduce simplifies learning at web scale",
    summary: "Google describes a programming model for distributing large computations across clusters of commodity machines.",
    significance: "MapReduce and its ecosystem make massive dataset processing accessible, helping shift machine learning toward data- and compute-intensive practice.",
    source: "Google Research · MapReduce", sourceUrl: "https://research.google/pubs/mapreduce-simplified-data-processing-on-large-clusters/"
  },
  {
    id: "deep-belief-nets", year: 2006, displayYear: "2006", era: "statistical", theme: "Neural networks",
    title: "Deep belief nets renew deep learning",
    summary: "Hinton, Osindero, and Teh present a layer-wise method for training deep generative neural networks.",
    significance: "The result helps overcome pessimism about deep-network optimization and catalyzes the research community that soon transforms AI.",
    source: "Neural Computation · A Fast Learning Algorithm for Deep Belief Nets", sourceUrl: "https://doi.org/10.1162/neco.2006.18.7.1527"
  },
  {
    id: "cuda", year: 2007, displayYear: "2007", era: "statistical", theme: "Infrastructure & scale",
    title: "CUDA opens GPUs to general computation",
    summary: "NVIDIA releases a programming platform that lets researchers use massively parallel graphics processors for non-graphics workloads.",
    significance: "Accessible GPU computing becomes essential infrastructure for training ever-larger neural networks at practical speed.",
    source: "NVIDIA · CUDA history", sourceUrl: "https://developer.nvidia.com/cuda-zone"
  },
  {
    id: "imagenet", year: 2009, displayYear: "2009", era: "statistical", theme: "Vision",
    title: "ImageNet supplies data at unprecedented scale",
    summary: "A curated dataset organizes millions of labeled images across thousands of object categories.",
    significance: "ImageNet creates a shared benchmark where data, compute, and algorithms can compound—and makes the 2012 deep-learning breakthrough measurable.",
    source: "CVPR · ImageNet: A Large-Scale Hierarchical Image Database", sourceUrl: "https://doi.org/10.1109/CVPR.2009.5206848"
  },
  {
    id: "ibm-watson", year: 2011, displayYear: "2011", era: "statistical", theme: "Language",
    title: "IBM Watson wins Jeopardy!",
    summary: "Watson combines information retrieval, NLP, evidence scoring, and ensemble methods to answer open-domain questions.",
    significance: "The public demonstration shows the practical strength of large engineered pipelines for language tasks before end-to-end foundation models.",
    source: "IBM · Watson on Jeopardy!", sourceUrl: "https://www.ibm.com/history/watson-jeopardy"
  },
  {
    id: "alexnet", year: 2012, displayYear: "2012", era: "deep", theme: "Vision",
    title: "AlexNet ignites the deep-learning takeoff",
    summary: "A GPU-trained convolutional network dramatically reduces ImageNet classification error.",
    significance: "The result proves that deep nets, large datasets, and GPU compute can beat established vision methods by a decisive margin.",
    source: "NeurIPS · ImageNet Classification with Deep Convolutional Neural Networks", sourceUrl: "https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks"
  },
  {
    id: "word2vec", year: 2013, displayYear: "2013", era: "deep", theme: "Language",
    title: "word2vec maps meaning into geometry",
    summary: "Efficient neural objectives learn dense word vectors from the contexts in which words appear.",
    significance: "Embeddings make semantic relationships computable and become a standard representational layer across language systems.",
    source: "Google Research · Efficient Estimation of Word Representations", sourceUrl: "https://research.google/pubs/efficient-estimation-of-word-representations-in-vector-space/"
  },
  {
    id: "seq2seq", year: 2014, displayYear: "2014", era: "deep", theme: "Language",
    title: "Sequence-to-sequence learning transforms language",
    summary: "An encoder neural network compresses an input sequence and a decoder generates a corresponding output sequence.",
    significance: "Seq2seq provides a general end-to-end architecture for translation and other structured language tasks, setting the stage for attention and transformers.",
    source: "NeurIPS · Sequence to Sequence Learning with Neural Networks", sourceUrl: "https://papers.nips.cc/paper/5346-sequence-to-sequence-learning-with-neural-networks"
  },
  {
    id: "attention-nmt", year: 2014, displayYear: "2014", era: "deep", theme: "Language",
    title: "Neural attention learns where to look",
    summary: "Bahdanau, Cho, and Bengio let a translation model dynamically weight relevant source words while generating each output word.",
    significance: "Attention removes a fixed-vector bottleneck and introduces the core operation that transformers later make central.",
    source: "arXiv · Neural Machine Translation by Jointly Learning to Align and Translate", sourceUrl: "https://arxiv.org/abs/1409.0473"
  },
  {
    id: "gans", year: 2014, displayYear: "2014", era: "deep", theme: "Generative AI",
    title: "GANs learn through an adversarial game",
    summary: "A generator learns to create samples while a discriminator learns to distinguish generated data from real data.",
    significance: "Generative adversarial networks produce a leap in synthetic imagery and reshape how researchers think about generative modeling.",
    source: "NeurIPS · Generative Adversarial Nets", sourceUrl: "https://papers.nips.cc/paper/5423-generative-adversarial-nets"
  },
  {
    id: "dqn", year: 2015, displayYear: "2015", era: "deep", theme: "Robotics & games",
    title: "Deep reinforcement learning masters Atari",
    summary: "DeepMind combines Q-learning with convolutional networks to learn many games directly from pixels and scores.",
    significance: "DQN unifies perception and control in one learned system and launches a wave of deep reinforcement-learning research.",
    source: "Nature · Human-level control through deep reinforcement learning", sourceUrl: "https://doi.org/10.1038/nature14236"
  },
  {
    id: "resnet", year: 2015, displayYear: "2015", era: "deep", theme: "Vision",
    title: "Residual connections enable much deeper networks",
    summary: "ResNet learns residual functions through shortcut connections that make very deep networks easier to optimize.",
    significance: "Residual connections become a standard architectural pattern far beyond vision and support the scaling of modern neural systems.",
    source: "CVPR · Deep Residual Learning for Image Recognition", sourceUrl: "https://doi.org/10.1109/CVPR.2016.90"
  },
  {
    id: "alphago", year: 2016, displayYear: "2016", era: "deep", theme: "Robotics & games",
    title: "AlphaGo defeats Lee Sedol",
    summary: "Policy and value networks combine with tree search to defeat one of the world’s strongest Go players.",
    significance: "The achievement demonstrates how learned representations, reinforcement learning, and deliberate search can solve a problem long considered out of reach.",
    source: "Nature · Mastering the game of Go with deep neural networks and tree search", sourceUrl: "https://doi.org/10.1038/nature16961"
  },
  {
    id: "transformer", year: 2017, displayYear: "2017", era: "deep", theme: "Language",
    title: "The transformer replaces recurrence with attention",
    summary: "The architecture processes relationships among all tokens in parallel using self-attention.",
    significance: "Transformers train efficiently at scale, model long-range context, and become the dominant architecture behind large language and multimodal models.",
    source: "NeurIPS · Attention Is All You Need", sourceUrl: "https://papers.nips.cc/paper/7181-attention-is-all-you-need"
  },
  {
    id: "gpt", year: 2018, displayYear: "2018", era: "foundation", theme: "Language",
    title: "GPT establishes generative pretraining",
    summary: "A transformer language model is pretrained on unlabeled text and then fine-tuned for multiple language tasks.",
    significance: "GPT helps establish the foundation-model recipe: broad self-supervised pretraining followed by adaptation to downstream work.",
    source: "OpenAI · Improving Language Understanding by Generative Pre-Training", sourceUrl: "https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf"
  },
  {
    id: "bert", year: 2018, displayYear: "2018", era: "foundation", theme: "Language",
    title: "BERT popularizes bidirectional pretraining",
    summary: "BERT predicts masked tokens using context from both directions and then fine-tunes effectively across language tasks.",
    significance: "It produces a rapid step change on NLP benchmarks and makes pretrained transformer representations the default approach.",
    source: "Google Research · BERT", sourceUrl: "https://research.google/pubs/bert-pre-training-of-deep-bidirectional-transformers-for-language-understanding/"
  },
  {
    id: "gpt-2", year: 2019, displayYear: "2019", era: "foundation", theme: "Generative AI",
    title: "GPT-2 demonstrates coherent open-ended generation",
    summary: "A 1.5-billion-parameter transformer generates extended text and performs tasks from prompts without task-specific training.",
    significance: "Its surprising fluency makes general-purpose text generation—and the governance of model release—a public issue.",
    source: "OpenAI · Better Language Models and Their Implications", sourceUrl: "https://openai.com/index/better-language-models/"
  },
  {
    id: "scaling-laws", year: 2020, displayYear: "2020", era: "foundation", theme: "Infrastructure & scale",
    title: "Neural scaling laws quantify predictable improvement",
    summary: "Language-model loss follows smooth power laws as model size, dataset size, and compute increase.",
    significance: "The finding turns scale into an engineering strategy: performance gains can be forecast and pursued with coordinated data, compute, and model growth.",
    source: "OpenAI · Scaling Laws for Neural Language Models", sourceUrl: "https://arxiv.org/abs/2001.08361"
  },
  {
    id: "gpt-3", year: 2020, displayYear: "2020", era: "foundation", theme: "Language",
    title: "GPT-3 makes prompting a programming interface",
    summary: "A 175-billion-parameter model performs many tasks from instructions and examples supplied in its context.",
    significance: "Few-shot prompting reveals broad, emergent capabilities and shifts adaptation from changing weights toward communicating intent in natural language.",
    source: "NeurIPS · Language Models are Few-Shot Learners", sourceUrl: "https://papers.nips.cc/paper/2020/hash/1457c0d6bfcb4967418bfb8ac142f64a-Abstract.html"
  },
  {
    id: "rag", year: 2020, displayYear: "2020", era: "foundation", theme: "Language",
    title: "Retrieval-augmented generation connects models to evidence",
    summary: "RAG combines a neural retriever over documents with a sequence generator conditioned on retrieved passages.",
    significance: "It establishes a practical pattern for grounding model output in updateable external knowledge rather than weights alone.",
    source: "NeurIPS · Retrieval-Augmented Generation", sourceUrl: "https://papers.nips.cc/paper/2020/hash/6b493230205f780e1bc26945df7481e5-Abstract.html"
  },
  {
    id: "ddpm", year: 2020, displayYear: "2020", era: "foundation", theme: "Generative AI",
    title: "Diffusion models generate high-quality images",
    summary: "Denoising diffusion models learn to reverse a gradual noising process and synthesize coherent samples.",
    significance: "This training framework becomes the basis of the text-to-image systems that soon make generative visual AI widely accessible.",
    source: "NeurIPS · Denoising Diffusion Probabilistic Models", sourceUrl: "https://papers.nips.cc/paper/2020/hash/4c5bcfec8584af0d967f1ab10179ca4b-Abstract.html"
  },
  {
    id: "alphafold2", year: 2020, displayYear: "2020", era: "foundation", theme: "Governance & society",
    title: "AlphaFold2 transforms protein-structure prediction",
    summary: "DeepMind’s system predicts many protein structures from amino-acid sequences with near-experimental accuracy.",
    significance: "It demonstrates that modern AI can accelerate fundamental science, not just perception, games, or content generation.",
    source: "Nature · Highly accurate protein structure prediction with AlphaFold", sourceUrl: "https://doi.org/10.1038/s41586-021-03819-2"
  },
  {
    id: "clip", year: 2021, displayYear: "2021", era: "foundation", theme: "Vision",
    title: "CLIP aligns images and natural language",
    summary: "CLIP learns visual concepts from hundreds of millions of image–text pairs and transfers to new classification tasks from text prompts.",
    significance: "It provides a general visual-language representation and becomes a key component in later multimodal and text-to-image systems.",
    source: "OpenAI · CLIP", sourceUrl: "https://openai.com/index/clip/"
  },
  {
    id: "dall-e", year: 2021, displayYear: "2021", era: "foundation", theme: "Generative AI",
    title: "DALL·E turns text into novel images",
    summary: "A transformer generates images from written descriptions, including imaginative combinations not present as literal examples.",
    significance: "The system makes natural language a direct interface for visual creation and previews the coming consumer generative-AI wave.",
    source: "OpenAI · DALL·E", sourceUrl: "https://openai.com/index/dall-e/"
  },
  {
    id: "foundation-models", year: 2021, displayYear: "2021", era: "foundation", theme: "Governance & society",
    title: "“Foundation model” names a new paradigm",
    summary: "Stanford researchers describe large models trained broadly and adapted to many downstream applications.",
    significance: "The term focuses attention on both leverage and systemic risk: one upstream model can shape many products, institutions, and users.",
    source: "Stanford CRFM · On the Opportunities and Risks of Foundation Models", sourceUrl: "https://arxiv.org/abs/2108.07258"
  },
  {
    id: "chinchilla", year: 2022, displayYear: "2022", era: "boom", theme: "Infrastructure & scale",
    title: "Chinchilla revises compute-optimal scaling",
    summary: "DeepMind finds that many large language models are undertrained and that model size and training tokens should scale together.",
    significance: "The work redirects the field toward better data–model balance, making capable models smaller and more compute-efficient at inference time.",
    source: "NeurIPS · Training Compute-Optimal Large Language Models", sourceUrl: "https://papers.nips.cc/paper_files/paper/2022/hash/c1e2faff6f588870935f114ebe04a3e5-Abstract-Conference.html"
  },
  {
    id: "instructgpt", year: 2022, displayYear: "2022", era: "boom", theme: "Governance & society",
    title: "InstructGPT aligns outputs with human preferences",
    summary: "Supervised demonstrations and reinforcement learning from human feedback make language-model responses more helpful and instruction-following.",
    significance: "RLHF bridges raw next-token prediction and usable assistants, while making the definition and governance of human preferences central.",
    source: "NeurIPS · Training language models to follow instructions with human feedback", sourceUrl: "https://papers.nips.cc/paper_files/paper/2022/hash/b1efde53be364a73914f58805a001731-Abstract-Conference.html"
  },
  {
    id: "latent-diffusion", year: 2022, displayYear: "2022", era: "boom", theme: "Generative AI",
    title: "Latent diffusion makes image generation accessible",
    summary: "Diffusion runs in a compressed latent space, reducing compute while retaining high-resolution image quality and text control.",
    significance: "The approach powers Stable Diffusion and rapidly expands public experimentation, open tooling, and debate over creative labor and training data.",
    source: "CVPR · High-Resolution Image Synthesis with Latent Diffusion Models", sourceUrl: "https://doi.org/10.1109/CVPR52688.2022.01042"
  },
  {
    id: "react", year: 2022, displayYear: "2022", era: "boom", theme: "Robotics & games",
    title: "ReAct combines reasoning with tool use",
    summary: "Language models interleave written reasoning traces with actions that query external environments and evidence.",
    significance: "ReAct becomes a conceptual template for agents that do more than answer: they plan, call tools, observe results, and continue.",
    source: "ICLR · ReAct: Synergizing Reasoning and Acting", sourceUrl: "https://openreview.net/forum?id=WE_vluYUL-X"
  },
  {
    id: "chatgpt", year: 2022, displayYear: "2022", era: "boom", theme: "Generative AI",
    title: "ChatGPT brings conversational AI to the mass public",
    summary: "A dialogue-oriented interface makes instruction-following language models immediately usable for writing, coding, learning, and analysis.",
    significance: "Rapid global adoption turns foundation models from a specialist technology into a general cultural and economic force.",
    source: "OpenAI · Introducing ChatGPT", sourceUrl: "https://openai.com/index/chatgpt/"
  },
  {
    id: "gpt-4", year: 2023, displayYear: "2023", era: "boom", theme: "Language",
    title: "GPT-4 advances general-purpose multimodal capability",
    summary: "The model accepts text and images and improves reliability across professional and academic benchmarks.",
    significance: "GPT-4 strengthens the case that a single pretrained system can perform a remarkably broad range of cognitive tasks through one interface.",
    source: "OpenAI · GPT-4 Technical Report", sourceUrl: "https://arxiv.org/abs/2303.08774"
  },
  {
    id: "llama", year: 2023, displayYear: "2023", era: "boom", theme: "Infrastructure & scale",
    title: "LLaMA accelerates the open-model ecosystem",
    summary: "Meta releases model weights for a family of efficient language models aimed at research access.",
    significance: "LLaMA and its successors catalyze fine-tuning, quantization, local inference, and a broad ecosystem outside closed model APIs.",
    source: "Meta AI · LLaMA", sourceUrl: "https://arxiv.org/abs/2302.13971"
  },
  {
    id: "dpo", year: 2023, displayYear: "2023", era: "boom", theme: "Statistical learning",
    title: "Direct Preference Optimization simplifies alignment",
    summary: "DPO trains a policy directly on preference comparisons without a separate reward model or reinforcement-learning loop.",
    significance: "It makes preference tuning more stable and accessible, becoming a widely used alternative to conventional RLHF pipelines.",
    source: "NeurIPS · Direct Preference Optimization", sourceUrl: "https://papers.nips.cc/paper_files/paper/2023/hash/a85b405ed65c6477a4fe8302b5e06ce7-Abstract-Conference.html"
  },
  {
    id: "gemini", year: 2023, displayYear: "2023", era: "boom", theme: "Generative AI",
    title: "Gemini is trained natively across modalities",
    summary: "Google DeepMind introduces a model family designed to reason across text, images, audio, and video.",
    significance: "Native multimodality signals a shift from separate perception systems toward unified models that operate across many forms of information.",
    source: "Google DeepMind · Gemini", sourceUrl: "https://deepmind.google/models/gemini/"
  },
  {
    id: "eu-ai-act", year: 2024, displayYear: "2024", era: "boom", theme: "Governance & society",
    title: "The EU AI Act becomes law",
    summary: "The European Union adopts a binding, risk-based legal framework for AI systems and general-purpose AI models.",
    significance: "It is the first comprehensive AI law across a major market, turning safety, transparency, and accountability into enforceable obligations.",
    source: "European Commission · AI Act", sourceUrl: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
  },
  {
    id: "gpt-4o", year: 2024, displayYear: "2024", era: "boom", theme: "Generative AI",
    title: "GPT-4o enables real-time multimodal interaction",
    summary: "A single model processes and generates combinations of text, vision, and audio with low-latency voice interaction.",
    significance: "It moves AI interfaces toward fluid, situated conversation in which speech, images, and text are part of the same exchange.",
    source: "OpenAI · Hello GPT-4o", sourceUrl: "https://openai.com/index/hello-gpt-4o/"
  },
  {
    id: "o1", year: 2024, displayYear: "2024", era: "boom", theme: "Logic & computation",
    title: "o1 scales computation at reasoning time",
    summary: "OpenAI introduces models trained to spend more computation before answering difficult math, science, and coding questions.",
    significance: "The result makes inference-time reasoning a second major scaling axis alongside model size and training compute.",
    source: "OpenAI · Learning to reason with LLMs", sourceUrl: "https://openai.com/index/learning-to-reason-with-llms/"
  },
  {
    id: "mcp", year: 2024, displayYear: "2024", era: "boom", theme: "Infrastructure & scale",
    title: "Model Context Protocol standardizes tool connections",
    summary: "MCP defines an open protocol through which AI applications can connect to data sources, tools, and reusable prompts.",
    significance: "It addresses a growing infrastructure problem: letting agents operate across external systems through a shared interface rather than bespoke integrations.",
    source: "Anthropic · Introducing the Model Context Protocol", sourceUrl: "https://www.anthropic.com/news/model-context-protocol"
  },
  {
    id: "deepseek-r1", year: 2025, displayYear: "2025", era: "boom", theme: "Logic & computation",
    title: "DeepSeek-R1 broadens access to reasoning models",
    summary: "DeepSeek releases model weights and a technical report for reasoning models trained with large-scale reinforcement learning.",
    significance: "R1 demonstrates competitive reasoning with disclosed methods and open weights, intensifying research into efficiency, distillation, and accessible reasoning systems.",
    source: "Nature · DeepSeek-R1 incentivizes reasoning in LLMs through reinforcement learning", sourceUrl: "https://doi.org/10.1038/s41586-025-09422-z"
  }
].sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));

const state = { search: "", era: "all", theme: "all", view: "timeline", dialogIndex: -1 };

const els = {
  tabs: [...document.querySelectorAll(".view-tab")],
  views: [...document.querySelectorAll(".view")],
  search: document.querySelector("#search-input"),
  era: document.querySelector("#era-filter"),
  theme: document.querySelector("#theme-filter"),
  reset: document.querySelector("#reset-filters"),
  resultCount: document.querySelector("#result-count"),
  activeRange: document.querySelector("#active-range"),
  timeline: document.querySelector("#timeline-list"),
  empty: document.querySelector("#empty-state"),
  chart: document.querySelector("#density-chart"),
  legend: document.querySelector("#chart-legend"),
  rows: document.querySelector("#data-rows"),
  dialog: document.querySelector("#event-dialog"),
  dialogClose: document.querySelector("#dialog-close"),
  dialogYear: document.querySelector("#dialog-year"),
  dialogTheme: document.querySelector("#dialog-theme"),
  dialogTitle: document.querySelector("#dialog-title"),
  dialogSummary: document.querySelector("#dialog-summary"),
  dialogSignificance: document.querySelector("#dialog-significance"),
  dialogSource: document.querySelector("#dialog-source"),
  dialogPrev: document.querySelector("#dialog-prev"),
  dialogNext: document.querySelector("#dialog-next")
};

function formatYear(year) {
  return year < 0 ? `${Math.abs(year)} BCE` : String(year);
}

function filteredEvents() {
  const needle = state.search.trim().toLowerCase();
  return EVENTS.filter(event => {
    const haystack = `${event.title} ${event.summary} ${event.significance} ${event.theme} ${event.source}`.toLowerCase();
    return (state.era === "all" || event.era === state.era)
      && (state.theme === "all" || event.theme === state.theme)
      && (!needle || haystack.includes(needle));
  });
}

function populateFilters() {
  ERAS.forEach(era => els.era.add(new Option(`${era.label} · ${era.range}`, era.id)));
  Object.keys(THEME_COLORS).forEach(theme => els.theme.add(new Option(theme, theme)));
}

function renderStats() {
  document.querySelector("#stat-events").textContent = EVENTS.length;
  document.querySelector("#stat-years").textContent = `${Math.abs(EVENTS[0].year) + EVENTS.at(-1).year}+`;
  document.querySelector("#stat-themes").textContent = Object.keys(THEME_COLORS).length;
}

function renderTimeline(events) {
  els.timeline.textContent = "";
  els.empty.hidden = events.length !== 0;

  ERAS.forEach(era => {
    const eraEvents = events.filter(event => event.era === era.id);
    if (!eraEvents.length) return;

    const group = document.createElement("div");
    group.className = "timeline-era";
    group.innerHTML = `<div class="era-marker"><strong>${era.label}</strong><span>${era.range}</span></div><div class="era-events"></div>`;
    const list = group.querySelector(".era-events");

    eraEvents.forEach(event => {
      const button = document.createElement("button");
      button.className = "event-card";
      button.type = "button";
      button.dataset.eventId = event.id;
      button.setAttribute("aria-label", `${event.displayYear}: ${event.title}. Open details.`);
      button.innerHTML = `
        <span class="event-year">${event.displayYear}</span>
        <span class="event-title">${event.title}</span>
        <span class="event-summary">${event.summary}</span>
        <span class="theme-tag">${event.theme}</span>`;
      list.append(button);
    });
    els.timeline.append(group);
  });
}

function renderChart(events) {
  const svg = els.chart;
  const width = 980;
  const height = 500;
  const margin = { top: 40, right: 20, bottom: 110, left: 46 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const counts = ERAS.map(era => ({
    ...era,
    events: events.filter(event => event.era === era.id)
  }));
  const max = Math.max(1, ...counts.map(item => item.events.length));
  const yMax = Math.max(5, Math.ceil(max / 5) * 5);
  const slot = chartWidth / ERAS.length;
  const barWidth = Math.min(72, slot * .64);

  svg.querySelectorAll("g.chart-content").forEach(node => node.remove());
  const root = document.createElementNS("http://www.w3.org/2000/svg", "g");
  root.setAttribute("class", "chart-content");

  for (let tick = 0; tick <= yMax; tick += Math.max(1, yMax / 5)) {
    const y = margin.top + chartHeight - (tick / yMax) * chartHeight;
    const line = document.createElementNS(svg.namespaceURI, "line");
    line.setAttribute("x1", margin.left);
    line.setAttribute("x2", width - margin.right);
    line.setAttribute("y1", y);
    line.setAttribute("y2", y);
    line.setAttribute("class", "chart-grid");
    root.append(line);
    const label = document.createElementNS(svg.namespaceURI, "text");
    label.setAttribute("x", margin.left - 10);
    label.setAttribute("y", y + 4);
    label.setAttribute("text-anchor", "end");
    label.setAttribute("class", "chart-axis-label");
    label.textContent = Math.round(tick);
    root.append(label);
  }

  counts.forEach((bucket, index) => {
    const x = margin.left + index * slot + (slot - barWidth) / 2;
    let currentY = margin.top + chartHeight;
    const group = document.createElementNS(svg.namespaceURI, "g");
    group.setAttribute("role", "button");
    group.setAttribute("tabindex", "0");
    group.setAttribute("aria-label", `${bucket.label}, ${bucket.range}: ${bucket.events.length} selected milestones. Filter to this era.`);
    group.dataset.era = bucket.id;

    Object.keys(THEME_COLORS).forEach(theme => {
      const count = bucket.events.filter(event => event.theme === theme).length;
      if (!count) return;
      const segmentHeight = (count / yMax) * chartHeight;
      currentY -= segmentHeight;
      const rect = document.createElementNS(svg.namespaceURI, "rect");
      rect.setAttribute("x", x);
      rect.setAttribute("y", currentY);
      rect.setAttribute("width", barWidth);
      rect.setAttribute("height", Math.max(1, segmentHeight));
      rect.setAttribute("fill", THEME_COLORS[theme]);
      rect.setAttribute("stroke", "#11140f");
      rect.setAttribute("stroke-width", ".8");
      const title = document.createElementNS(svg.namespaceURI, "title");
      title.textContent = `${theme}: ${count}`;
      rect.append(title);
      group.append(rect);
    });

    if (!bucket.events.length) {
      const emptyLine = document.createElementNS(svg.namespaceURI, "line");
      emptyLine.setAttribute("x1", x);
      emptyLine.setAttribute("x2", x + barWidth);
      emptyLine.setAttribute("y1", margin.top + chartHeight);
      emptyLine.setAttribute("y2", margin.top + chartHeight);
      emptyLine.setAttribute("stroke", "#11140f");
      group.append(emptyLine);
    }

    const value = document.createElementNS(svg.namespaceURI, "text");
    value.setAttribute("x", x + barWidth / 2);
    value.setAttribute("y", Math.max(24, currentY - 10));
    value.setAttribute("text-anchor", "middle");
    value.setAttribute("class", "chart-value");
    value.textContent = bucket.events.length;
    group.append(value);

    const label = document.createElementNS(svg.namespaceURI, "text");
    label.setAttribute("x", x + barWidth / 2);
    label.setAttribute("y", height - 73);
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("class", "chart-label");
    const words = bucket.short.split(" ");
    const splitAt = words.length > 1 ? Math.ceil(words.length / 2) : 1;
    const first = document.createElementNS(svg.namespaceURI, "tspan");
    first.setAttribute("x", x + barWidth / 2);
    first.textContent = words.slice(0, splitAt).join(" ");
    label.append(first);
    if (words.length > splitAt) {
      const second = document.createElementNS(svg.namespaceURI, "tspan");
      second.setAttribute("x", x + barWidth / 2);
      second.setAttribute("dy", 13);
      second.textContent = words.slice(splitAt).join(" ");
      label.append(second);
    }
    group.append(label);

    const range = document.createElementNS(svg.namespaceURI, "text");
    range.setAttribute("x", x + barWidth / 2);
    range.setAttribute("y", height - 35);
    range.setAttribute("text-anchor", "middle");
    range.setAttribute("class", "chart-sublabel");
    range.textContent = bucket.range;
    group.append(range);
    root.append(group);
  });

  svg.append(root);
  els.legend.innerHTML = Object.entries(THEME_COLORS)
    .map(([theme, color]) => `<span class="legend-item" style="--legend-color:${color}"><i></i>${theme}</span>`)
    .join("");
}

function renderData(events) {
  els.rows.textContent = "";
  const fragment = document.createDocumentFragment();
  events.forEach(event => {
    const era = ERAS.find(item => item.id === event.era);
    const row = document.createElement("tr");
    row.innerHTML = `<td>${event.displayYear}</td><td><strong>${event.title}</strong><br>${event.summary}</td><td>${event.theme}</td><td>${era.label}</td><td><a href="${event.sourceUrl}" target="_blank" rel="noreferrer">${event.source} ↗</a></td>`;
    fragment.append(row);
  });
  els.rows.append(fragment);
}

function render() {
  const events = filteredEvents();
  renderTimeline(events);
  renderChart(events);
  renderData(events);
  els.resultCount.textContent = `${events.length} milestone${events.length === 1 ? "" : "s"}`;
  if (events.length) {
    els.activeRange.textContent = `${formatYear(events[0].year)}—${formatYear(events.at(-1).year)}`;
  } else {
    els.activeRange.textContent = "No matching range";
  }
}

function setView(view) {
  state.view = view;
  els.tabs.forEach(tab => {
    const active = tab.dataset.view === view;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  els.views.forEach(panel => {
    const active = panel.id === `view-${view}`;
    panel.classList.toggle("is-active", active);
    panel.hidden = !active;
  });
}

function resetFilters() {
  state.search = "";
  state.era = "all";
  state.theme = "all";
  els.search.value = "";
  els.era.value = "all";
  els.theme.value = "all";
  render();
}

function openEvent(id) {
  const events = filteredEvents();
  const index = events.findIndex(event => event.id === id);
  if (index < 0) return;
  state.dialogIndex = index;
  const event = events[index];
  els.dialogYear.textContent = event.displayYear;
  els.dialogTheme.textContent = event.theme;
  els.dialogTitle.textContent = event.title;
  els.dialogSummary.textContent = event.summary;
  els.dialogSignificance.textContent = event.significance;
  els.dialogSource.href = event.sourceUrl;
  els.dialogSource.textContent = `${event.source} ↗`;
  els.dialogPrev.disabled = index === 0;
  els.dialogNext.disabled = index === events.length - 1;
  if (!els.dialog.open) els.dialog.showModal();
}

function navigateDialog(delta) {
  const events = filteredEvents();
  const next = state.dialogIndex + delta;
  if (next >= 0 && next < events.length) openEvent(events[next].id);
}

function exportRows() {
  return filteredEvents().map(event => ({
    year: event.year,
    display_year: event.displayYear,
    title: event.title,
    summary: event.summary,
    significance: event.significance,
    theme: event.theme,
    era: ERAS.find(item => item.id === event.era).label,
    source: event.source,
    source_url: event.sourceUrl
  }));
}

function downloadFile(name, type, content) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = name;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

els.tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => setView(tab.dataset.view));
  tab.addEventListener("keydown", event => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    const delta = event.key === "ArrowRight" ? 1 : -1;
    const next = (index + delta + els.tabs.length) % els.tabs.length;
    els.tabs[next].focus();
    setView(els.tabs[next].dataset.view);
  });
});
els.search.addEventListener("input", event => { state.search = event.target.value; render(); });
els.era.addEventListener("change", event => { state.era = event.target.value; render(); });
els.theme.addEventListener("change", event => { state.theme = event.target.value; render(); });
els.reset.addEventListener("click", resetFilters);
document.querySelector("[data-reset]").addEventListener("click", resetFilters);
els.timeline.addEventListener("click", event => {
  const card = event.target.closest("[data-event-id]");
  if (card) openEvent(card.dataset.eventId);
});
els.chart.addEventListener("click", event => {
  const group = event.target.closest("[data-era]");
  if (!group) return;
  state.era = group.dataset.era;
  els.era.value = state.era;
  setView("timeline");
  render();
});
els.chart.addEventListener("keydown", event => {
  if (!["Enter", " "].includes(event.key)) return;
  const group = event.target.closest("[data-era]");
  if (!group) return;
  event.preventDefault();
  group.dispatchEvent(new MouseEvent("click", { bubbles: true }));
});
els.dialogClose.addEventListener("click", () => els.dialog.close());
els.dialog.addEventListener("click", event => {
  const bounds = els.dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) els.dialog.close();
});
els.dialogPrev.addEventListener("click", () => navigateDialog(-1));
els.dialogNext.addEventListener("click", () => navigateDialog(1));
document.querySelector("#copy-json").addEventListener("click", async event => {
  const text = JSON.stringify(exportRows(), null, 2);
  try {
    await navigator.clipboard.writeText(text);
    const old = event.currentTarget.textContent;
    event.currentTarget.textContent = "Copied";
    setTimeout(() => { event.currentTarget.textContent = old; }, 1400);
  } catch {
    downloadFile("ai-history-events.json", "application/json", text);
  }
});
document.querySelector("#download-json").addEventListener("click", () => {
  downloadFile("ai-history-events.json", "application/json", JSON.stringify(exportRows(), null, 2));
});
document.querySelector("#download-csv").addEventListener("click", () => {
  const rows = exportRows();
  const headers = Object.keys(rows[0] || {});
  const csv = [headers.join(","), ...rows.map(row => headers.map(header => csvEscape(row[header])).join(","))].join("\n");
  downloadFile("ai-history-events.csv", "text/csv;charset=utf-8", csv);
});

populateFilters();
renderStats();
render();
