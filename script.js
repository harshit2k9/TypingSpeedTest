function data() {
  return {
    interval: null,
    questions: [
      "What if a writer or novelist decided to write a 300-page book with no breaks in the text for new ideas, new chapters, or even character dialogue? It would be so overwhelming that the reader would probably take one look and close the book forever. When writing is divided up into manageable parts that are cohesive, it's much easier for the reader to take in and process. A paragraph is a distinct segment of writing, often includes more than one sentence, and is separated from other paragraphs and text by a space. Paragraphs break up text into manageable chunks that are easily read and visually make it more appealing and less daunting. The word paragraph comes from the Latin word paragraphos, which is roughly translated to mean a short-stroke marking a break in sense. The term graph is Latin for writing. There is often some confusion about what the difference is between a paragraph and an essay. The best way to understand the difference is to think of the essay as a bigger version of a paragraph. A paragraph is made up of a topic sentence, supporting sentences, and a concluding sentence. An essay has all the same parts; only instead of sentences, an essay is made up of paragraphs.",
      "It is important to note that a paragraph does not have a minimum or maximum number of sentences that it must have to fit the definition of a paragraph. Some writers will opt to use very short paragraphs, while others will include dozens of sentences in their paragraphs. It is also important to know that most writers separate lines of dialogue into paragraphs, so if a character only speaks a single line, it will be its own paragraph. Keeping that in mind, there is a general agreement on the format of a standard paragraph, which especially applies to informational and argumentative or persuasive writing. A paragraph should be divided into three distinct sections that each serve a purpose to the paragraph as a whole.",
      "Girl education is an issue that needs our consideration. It is probably the most severe issue globally. Everybody realizes that education is the essential need of us all. Girls likewise need the education to run their life smoothly. We, as a whole need to comprehend our commitment to this issue and co-work. Most importantly, we must be delicate to the future of ladies in our family. We should move in the direction of giving all the essential and propelled education to the little girls in our family. Likewise, we should not force them to marry, and they finish their education. Numerous individuals can’t educate their girls because of the absence of sufficient money. The amount of such people is the most in India. It’s anything but a complex issue. We can expel it by giving fundamental education either at a low or free from cost. It will help girls in having essential education and will make them qualified to continue in this cruel world.",
      "Education is important for both men and women as both have an essential role in the development of a healthy and smart society. Education is a necessary way for delivering a brilliant future and at the same time performs the most significant part in the growth and improvement of the nation. The citizens of the nation are responsible for the greater future and progress of the nation. Extremely educated citizens form the foundation of a developed nation. Hence, decent education builds a brilliant tomorrow for both the individual and the nation. It is only educated directors who make the country and bring it to the top of prosperity and growth. Education makes everyone brilliant and as excellent as possible."
    ],
    question: "",
    solution: "",
    time: 0,
    words: 0,
    wpm: 0,
    characters: 0,
    cpm: 0,
    testStarted: false,
    
    startTest() {
      if (this.interval) {
        clearInterval(this.interval);
      }

      let random = Math.floor(Math.random() * this.questions.length);
      this.question = this.questions[random];
      this.solution = "";
      this.time = 0;
      this.words = 0;
      this.wpm = 0;
      this.cpm = 0;
      this.testStarted = true;

      const textarea = document.getElementById("solution_textarea");
      textarea.readOnly = false;
      textarea.value = "";
      textarea.focus();

      this.interval = setInterval(() => {
        this.time++;
        this.calculateMetrics();
      }, 1000);
    },

    calculateMetrics() {
      if (this.time === 0) return;
      
      // Strict matching check: Count how many characters match the prompt prefix
      let matchedLength = 0;
      for (let i = 0; i < this.solution.length; i++) {
        if (this.solution[i] === this.question[i]) {
          matchedLength++;
        } else {
          // Stop counting correctly matched metrics if there is a mismatch
          break; 
        }
      }

      const matchedString = this.solution.substring(0, matchedLength);
      const wordCount = matchedString.trim() === "" ? 0 : matchedString.trim().split(/\s+/).length;

      this.words = wordCount;
      this.characters = matchedLength;
      this.wpm = Math.round((wordCount / this.time) * 60);
      this.cpm = Math.round((matchedLength / this.time) * 60);
    },

    checkFinished() {
      this.calculateMetrics();

      // Ensure every single word/character matches precisely before completing the test
      if (this.question === this.solution) {
        document.getElementById("solution_textarea").readOnly = true;
        clearInterval(this.interval);
        this.testStarted = false;
      }
    }
  };
}
